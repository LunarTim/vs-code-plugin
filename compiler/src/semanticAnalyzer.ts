export interface SemanticError {
    message: string;
    line: number;
    character: number;
    length: number;
    severity: 'error' | 'warning';
}

interface Scope {
    variables: Map<string, { type: string; line: number; character: number; isConst: boolean }>;
    functions: Map<string, { params: { name: string; type: string }[]; returnType: string }>;
    parent?: Scope;
}

export function analyze(ast: any): SemanticError[] {
    const errors: SemanticError[] = [];
    let currentScope: Scope = { variables: new Map(), functions: new Map() };

    function enterScope() {
        currentScope = { variables: new Map(), functions: new Map(), parent: currentScope };
    }

    function exitScope() {
        if (currentScope.parent) {
            currentScope = currentScope.parent;
        }
    }

    function lookupVariable(name: string): { type: string; line: number; character: number; isConst: boolean } | undefined {
        let scope: Scope | undefined = currentScope;
        while (scope) {
            const variable = scope.variables.get(name);
            if (variable) return variable;
            scope = scope.parent;
        }
        return undefined;
    }

    function lookupFunction(name: string) {
        let scope: Scope | undefined = currentScope;
        while (scope) {
            const func = scope.functions.get(name);
            if (func) return func;
            scope = scope.parent;
        }
        return undefined;
    }

    function getExpressionType(node: any): string {
        if (!node) return 'void';

        switch (node.type) {
            case 'Literal':
                if (typeof node.value === 'number') return 'number';
                if (typeof node.value === 'string') return 'string';
                if (typeof node.value === 'boolean') return 'boolean';
                return 'any';
            case 'Identifier':
                const variable = lookupVariable(node.name);
                return variable?.type || 'any';
            case 'BinaryExpression':
                const leftType = getExpressionType(node.left);
                const rightType = getExpressionType(node.right);
                if (['*', '/', '+', '-', '%'].includes(node.operator)) {
                    if (leftType === 'number' && rightType === 'number') return 'number';
                }
                if (node.operator === '+' && (leftType === 'string' || rightType === 'string')) return 'string';
                if (['<', '>', '<=', '>=', '==', '!='].includes(node.operator)) return 'boolean';
                return 'any';
            case 'CallExpression':
                const func = lookupFunction(node.callee.name);
                return func?.returnType || 'any';
            default:
                return 'any';
        }
    }

    function checkNode(node: any) {
        if (!node) return;

        switch (node.type) {
            case 'Identifier': {
                if (!node.parent || !['VariableDeclaration', 'VariableAssignment'].includes(node.parent.type)) {
                    const variable = lookupVariable(node.name);
                    if (!variable) {
                        errors.push({
                            message: `Variable '${node.name}' is not defined`,
                            line: node.line,
                            character: node.character,
                            length: node.length || 1,
                            severity: 'error'
                        });
                    }
                }
                break;
            }
            case 'VariableDeclaration': {
                const identifier = node.children[0];
                const declaredType = node.varType?.name || 'any';
                const initialValue = node.initializer;

                if (lookupVariable(identifier.name)) {
                    errors.push({
                        message: `Variable '${identifier.name}' is already declared in this scope`,
                        line: identifier.line,
                        character: identifier.character,
                        length: identifier.length,
                        severity: 'error'
                    });
                }

                if (initialValue) {
                    const valueType = getExpressionType(initialValue);
                    if (declaredType !== 'any' && declaredType !== valueType) {
                        errors.push({
                            message: `Type '${valueType}' is not assignable to type '${declaredType}'`,
                            line: initialValue.line,
                            character: initialValue.character,
                            length: initialValue.length || 1,
                            severity: 'error'
                        });
                    }
                }

                currentScope.variables.set(identifier.name, {
                    type: declaredType,
                    line: identifier.line,
                    character: identifier.character,
                    isConst: node.kind === 'const'
                });
                break;
            }

            case 'VariableAssignment': {
                const variable = lookupVariable(node.identifier.name);
                if (!variable) {
                    errors.push({
                        message: `Variable '${node.identifier.name}' is not declared`,
                        line: node.line,
                        character: node.character,
                        length: node.identifier.name.length,
                        severity: 'error'
                    });
                } else if (variable.isConst) {
                    errors.push({
                        message: `Cannot assign to '${node.identifier.name}' because it is a constant`,
                        line: node.line,
                        character: node.character,
                        length: node.identifier.name.length,
                        severity: 'error'
                    });
                } else {
                    const valueType = getExpressionType(node.value);
                    if (variable.type !== 'any' && variable.type !== valueType) {
                        errors.push({
                            message: `Type '${valueType}' is not assignable to type '${variable.type}'`,
                            line: node.value.line,
                            character: node.value.character,
                            length: node.value.length || 1,
                            severity: 'error'
                        });
                    }
                }
                break;
            }

            case 'FunctionDeclaration': {
                const funcName = node.identifier.name;
                if (currentScope.functions.has(funcName)) {
                    errors.push({
                        message: `Function '${funcName}' is already declared`,
                        line: node.identifier.line,
                        character: node.identifier.character,
                        length: funcName.length,
                        severity: 'error'
                    });
                }

                currentScope.functions.set(funcName, {
                    params: node.parameters.map((p: any) => ({
                        name: p.identifier.name,
                        type: p.paramType?.name || 'any'
                    })),
                    returnType: node.returnType?.name || 'void'
                });

                enterScope();
                node.parameters.forEach((param: any) => {
                    currentScope.variables.set(param.identifier.name, {
                        type: param.paramType?.name || 'any',
                        line: param.identifier.line,
                        character: param.identifier.character,
                        isConst: false
                    });
                });

                if (node.body) {
                    checkNode(node.body);
                }

                exitScope();
                break;
            }

            case 'CallExpression': {
                const funcName = node.callee.name;
                const func = lookupFunction(funcName);

                if (!func) {
                    errors.push({
                        message: `Function '${funcName}' is not defined`,
                        line: node.line,
                        character: node.character,
                        length: funcName.length,
                        severity: 'error'
                    });
                } else {
                    // Check argument count
                    if (node.arguments.length !== func.params.length) {
                        errors.push({
                            message: `Expected ${func.params.length} arguments, but got ${node.arguments.length}`,
                            line: node.line,
                            character: node.character,
                            length: node.length || 1,
                            severity: 'error'
                        });
                    }

                    // Check argument types
                    node.arguments.forEach((arg: any, index: number) => {
                        if (index < func.params.length) {
                            const expectedType = func.params[index].type;
                            const actualType = getExpressionType(arg);
                            if (expectedType !== 'any' && expectedType !== actualType) {
                                errors.push({
                                    message: `Argument of type '${actualType}' is not assignable to parameter of type '${expectedType}'`,
                                    line: arg.line,
                                    character: arg.character,
                                    length: arg.length || 1,
                                    severity: 'error'
                                });
                            }
                        }
                    });
                }
                break;
            }

            case 'Block':
                enterScope();
                if (node.body) {
                    node.body.forEach((statement: any) => checkNode(statement));
                }
                exitScope();
                break;

            default:
                if (node.children) {
                    node.children.forEach((child: any) => checkNode(child));
                }
        }
    }

    checkNode(ast);
    return errors;
}