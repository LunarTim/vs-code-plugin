import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { LuminaVisitor } from '../grammar/generated/LuminaVisitor';
import {
    ProgramContext,
    VariableDeclarationContext,
    TypeContext,
    ExpressionContext,
    LiteralContext,
    LiteralExprContext,
    BinaryExprContext,
    IdentifierExprContext,
    FunctionDeclarationContext,
    FunctionCallContext,
    FunctionCallExprContext,
    AssignmentStatementContext,
    IncrementStatementContext,
    ConsoleLogStatementContext,
    IfStatementContext,
    ReturnStatementContext
} from '../grammar/generated/LuminaParser';
import { Diagnostic } from './Compiler';
import { DiagnosticSeverity } from './types';

/**
 * Semantic analyzer
 * 
 * This class is responsible for semantic analysis of the source code
 */
export class SemanticAnalyzer extends AbstractParseTreeVisitor<void> implements LuminaVisitor<void> {
    private diagnostics: Diagnostic[] = [];
    private scopes: Array<Map<string, any>> = [new Map()];

    /**
     * Reset the semantic analyzer
     */
    reset(): void {
        this.diagnostics = [];
        this.scopes = [new Map()];
    }

    /**
     * Get the current scope
     * @returns The current scope
     */
    private get currentScope(): Map<string, any> {
        return this.scopes[this.scopes.length - 1];
    }

    /**
     * Push a new scope
     */
    private pushScope() {
        this.scopes.push(new Map());
    }

    /**
     * Pop the current scope
     */
    private popScope() {
        // Check for unused variables before popping
        this.checkUnusedIdentifiers(this.currentScope);
        this.scopes.pop();
    }

    /**
     * Check for unused identifiers
     * @param scope - The scope to check
     */
    private checkUnusedIdentifiers(scope: Map<string, any>) {
        scope.forEach((info, name) => {
            if (!info.used) {
                const message = `${info.kind} '${name}' is declared but never used`;
                this.addDiagnostic({
                    message,
                    line: info.line,
                    column: info.column,
                    severity: DiagnosticSeverity.Warning
                });
            }
        });
    }

    /**
     * Find a symbol in the current scope or any parent scope
     * @param name - The name of the symbol
     * @returns The symbol or undefined if not found
     */
    private findSymbol(name: string): {
        type: string;
        used: boolean;
        kind: string;
        isConst?: boolean;
        parameters?: Array<{ name: string; type: string }>;
    } | undefined {
        // Search from current scope up to global scope
        for (let i = this.scopes.length - 1; i >= 0; i--) {
            const symbol = this.scopes[i].get(name);
            if (symbol) {
                return symbol;
            }
        }
        return undefined;
    }

    /**
     * Visit the program
     * @param ctx - The context of the program
     */
    visitProgram(ctx: ProgramContext): void {
        try {
            this.scopes = [new Map()];
            this.diagnostics = [];
            console.log('Starting semantic analysis...');

            // Visit all statements
            ctx.statement().forEach(stmt => this.visit(stmt));

            // Check for unused variables in global scope
            this.checkUnusedIdentifiers(this.currentScope);

            console.log('Semantic analysis completed. Generated diagnostics:', this.diagnostics);
        } catch (error) {
            console.error('Error in visitProgram:', error);
        }
    }

    /**
     * Visit the variable declaration
     * @param ctx - The context of the variable declaration
     */
    visitVariableDeclaration(ctx: VariableDeclarationContext): void {
        try {
            const identifier = ctx.IDENTIFIER();
            const type = ctx.type();
            const expr = ctx.expression();
            const declarationType = ctx.children?.[0].text; // 'let', 'const', or 'var'

            console.log('Processing variable declaration:', {
                identifier: identifier?.text,
                declaredType: type?.text,
                expression: expr?.text,
                declarationType,
                line: ctx.start.line,
                column: ctx.start.charPositionInLine
            });

            if (identifier) {
                const name = identifier.text;
                const declaredType = type ? type.text : undefined;

                if (!declaredType) {
                    this.addDiagnostic({
                        message: `Variable '${name}' is missing type annotation`,
                        line: ctx.start.line,
                        column: identifier.symbol.charPositionInLine,
                        severity: DiagnosticSeverity.Warning
                    });
                }

                // Get the type of the initializer expression
                const inferredType = expr ? this.getExpressionType(expr) : undefined;
                console.log('Type checking:', {
                    name,
                    declaredType,
                    inferredType,
                    expr: expr?.text,
                    line: ctx.start.line,
                    column: expr?.start.charPositionInLine
                });

                if (expr && declaredType && inferredType && declaredType !== inferredType) {
                    const exprStartColumn = expr.start.charPositionInLine;
                    console.log(`Type mismatch: ${inferredType} is not assignable to ${declaredType} at column ${exprStartColumn}`);
                    this.addDiagnostic({
                        message: `Type '${inferredType}' is not assignable to type '${declaredType}'`,
                        line: ctx.start.line,
                        column: exprStartColumn,
                        severity: DiagnosticSeverity.Error
                    });
                }

                this.currentScope.set(name, {
                    type: declaredType || inferredType || 'any',
                    used: false,
                    kind: 'Variable',
                    line: identifier.symbol.line,
                    column: identifier.symbol.charPositionInLine,
                    isConst: declarationType === 'const'
                });

                console.log('Added to symbol table:', {
                    name,
                    symbol: this.currentScope.get(name)
                });
            }
        } catch (error) {
            console.error('Error in visitVariableDeclaration:', error);
        }
    }

    /**
     * Visit the assignment statement
     * @param ctx - The context of the assignment statement
     */
    visitAssignmentStatement(ctx: AssignmentStatementContext): void {
        const identifier = ctx.IDENTIFIER();
        const expr = ctx.expression();
        const operator = ctx.children?.[1].text || '=';

        if (identifier) {
            const name = identifier.text;
            const symbol = this.findSymbol(name);

            if (!symbol) {
                this.addDiagnostic({
                    message: `Cannot find name '${name}'`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
                return;
            }

            if (symbol.isConst) {
                this.addDiagnostic({
                    message: `Cannot assign to '${name}' because it is a constant`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
                return;
            }

            if (expr) {
                const exprType = this.getExpressionType(expr);
                if (operator !== '=' && symbol.type !== 'number') {
                    this.addDiagnostic({
                        message: `Operator '${operator}' can only be applied to numeric types`,
                        line: ctx.start.line,
                        column: ctx.start.charPositionInLine,
                        severity: DiagnosticSeverity.Error
                    });
                } else if (exprType && symbol.type !== exprType) {
                    this.addDiagnostic({
                        message: `Type '${exprType}' is not assignable to type '${symbol.type}'`,
                        line: ctx.start.line,
                        column: expr.start.charPositionInLine,
                        severity: DiagnosticSeverity.Error
                    });
                }
            }

            symbol.used = true;
            this.currentScope.set(name, symbol);
        }
    }

    /**
     * Visit the increment statement
     * @param ctx - The context of the increment statement
     */
    visitIncrementStatement(ctx: IncrementStatementContext): void {
        const identifier = ctx.IDENTIFIER();
        if (identifier) {
            const name = identifier.text;
            const symbol = this.findSymbol(name);

            if (!symbol) {
                this.addDiagnostic({
                    message: `Cannot find name '${name}'`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
                return;
            }

            if (symbol.isConst) {
                this.addDiagnostic({
                    message: `Cannot increment '${name}' because it is a constant`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
                return;
            }

            if (symbol.type !== 'number') {
                this.addDiagnostic({
                    message: `The ${ctx.children?.[1].text} operator can only be applied to numeric types`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
                return;
            }

            symbol.used = true;
            this.currentScope.set(name, symbol);
        }
    }

    /**
     * Infer the type of an expression
     * @param expr - The expression to infer the type of
     * @returns The type of the expression or undefined if the expression is undefined
     */
    private inferType(expr: ExpressionContext | undefined): string | undefined {
        if (!expr) return undefined;
        return this.getExpressionType(expr);
    }

    /**
     * Get the type of an expression
     * @param ctx - The context of the expression
     * @returns The type of the expression or undefined if the expression is undefined
     */
    private getExpressionType(ctx: ExpressionContext): string | undefined {
        console.log('Getting expression type for:', {
            text: ctx.text,
            type: ctx.constructor.name,
            start: { line: ctx.start.line, column: ctx.start.charPositionInLine }
        });

        if (ctx instanceof LiteralExprContext) {
            const literal = ctx.literal();
            console.log('Literal Expression:', {
                text: ctx.text,
                literalType: literal.constructor.name,
                rawText: literal.text,
                start: { line: literal.start.line, column: literal.start.charPositionInLine }
            });

            if (literal.text.startsWith('"') || literal.text.startsWith("'")) {
                return 'string';
            }
            if (/^[0-9]+(\.[0-9]+)?$/.test(literal.text)) {
                return 'number';
            }
            if (literal.text === 'true' || literal.text === 'false') {
                return 'boolean';
            }
            if (/^["'][0-9]+(\.[0-9]+)?["']$/.test(literal.text)) {
                return 'string';
            }
        } else if (ctx instanceof IdentifierExprContext) {
            const identifier = ctx.IDENTIFIER();
            const name = identifier.text;
            const symbol = this.findSymbol(name);

            console.log('Identifier Expression:', {
                name,
                symbol,
                location: {
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine
                }
            });

            if (symbol) {
                // Mark the identifier as used
                for (let i = this.scopes.length - 1; i >= 0; i--) {
                    if (this.scopes[i].has(name)) {
                        const foundSymbol = this.scopes[i].get(name)!;
                        foundSymbol.used = true;
                        this.scopes[i].set(name, foundSymbol);
                        break;
                    }
                }
                return symbol.type;
            } else {
                this.addDiagnostic({
                    message: `Cannot find name '${name}'`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
            }
        } else if (ctx instanceof BinaryExprContext) {
            const leftType = this.getExpressionType(ctx.expression(0));
            const rightType = this.getExpressionType(ctx.expression(1));
            const op = ctx.children?.[1].text || '';

            console.log('Binary Expression:', {
                operator: op,
                leftType,
                rightType,
                location: {
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine
                }
            });

            // Mark identifiers in binary expressions as used
            if (ctx.expression(0) instanceof IdentifierExprContext) {
                const identExpr = ctx.expression(0) as IdentifierExprContext;
                const name = identExpr.IDENTIFIER().text;
                for (let i = this.scopes.length - 1; i >= 0; i--) {
                    if (this.scopes[i].has(name)) {
                        const symbol = this.scopes[i].get(name)!;
                        symbol.used = true;
                        this.scopes[i].set(name, symbol);
                        break;
                    }
                }
            }

            if (ctx.expression(1) instanceof IdentifierExprContext) {
                const identExpr = ctx.expression(1) as IdentifierExprContext;
                const name = identExpr.IDENTIFIER().text;
                for (let i = this.scopes.length - 1; i >= 0; i--) {
                    if (this.scopes[i].has(name)) {
                        const symbol = this.scopes[i].get(name)!;
                        symbol.used = true;
                        this.scopes[i].set(name, symbol);
                        break;
                    }
                }
            }

            if (leftType === 'number' && rightType === 'number') {
                return 'number';
            }

            if (op === '+' && leftType === 'string' && rightType === 'string') {
                return 'string';
            }

            if (['>', '<', '>=', '<=', '==', '!='].includes(op)) {
                return 'boolean';
            }

            this.addDiagnostic({
                message: `Operator '${op}' cannot be applied to types '${leftType}' and '${rightType}'`,
                line: ctx.start.line,
                column: ctx.start.charPositionInLine,
                severity: DiagnosticSeverity.Error
            });
        } else if (ctx instanceof FunctionCallExprContext) {
            const functionCall = ctx.functionCall();
            const identifier = functionCall.IDENTIFIER();
            const name = identifier.text;
            const symbol = this.findSymbol(name);

            if (symbol) {
                // Mark the function as used
                for (let i = this.scopes.length - 1; i >= 0; i--) {
                    if (this.scopes[i].has(name)) {
                        const funcSymbol = this.scopes[i].get(name)!;
                        funcSymbol.used = true;
                        this.scopes[i].set(name, funcSymbol);
                        break;
                    }
                }
                return symbol.type;
            }
        }
        return undefined;
    }

    /**
     * Get the diagnostics
     * @returns The diagnostics
     */
    getDiagnostics(): Diagnostic[] {
        return this.diagnostics;
    }

    /**
     * Add a diagnostic
     * @param diagnostic - The diagnostic to add
     */
    private addDiagnostic(diagnostic: Diagnostic): void {
        console.log('Adding diagnostic:', diagnostic);
        this.diagnostics.push(diagnostic);
    }

    /**
     * Default result
     * @returns The default result
     */
    protected defaultResult(): void {
        return;
    }

    /**
     * Visit the function declaration
     * @param ctx - The context of the function declaration
     */
    visitFunctionDeclaration(ctx: FunctionDeclarationContext): void {
        try {
            const identifier = ctx.IDENTIFIER();
            const returnType = ctx.type();
            const parameters = ctx.parameterList()?.parameter() || [];

            if (identifier) {
                const name = identifier.text;
                // Store function with complete type information
                const functionInfo = {
                    type: returnType ? returnType.text : 'void',
                    used: false,
                    kind: 'Function',
                    line: identifier.symbol.line,
                    column: identifier.symbol.charPositionInLine,
                    parameters: parameters.map(p => ({
                        name: p.IDENTIFIER()?.text || '',
                        type: p.type()?.text || ''
                    }))
                };

                console.log('Adding function to scope:', {
                    name,
                    functionInfo
                });

                this.currentScope.set(name, functionInfo);

                // Create new scope for function body
                this.pushScope();

                // Add parameters to function scope but don't mark them as used by default
                parameters.forEach(param => {
                    const paramId = param.IDENTIFIER();
                    const paramType = param.type();
                    if (paramId && paramType) {
                        this.currentScope.set(paramId.text, {
                            type: paramType.text,
                            used: false,
                            kind: 'Parameter',
                            line: paramId.symbol.line,
                            column: paramId.symbol.charPositionInLine
                        });
                    }
                });

                const block = ctx.block();
                if (block) {
                    this.visit(block);
                }

                this.popScope();
            }
        } catch (error) {
            console.error('Error in visitFunctionDeclaration:', error);
        }
    }

    /**
     * Visit the function call
     * @param ctx - The context of the function call
     */
    visitFunctionCall(ctx: FunctionCallContext): void {
        const identifier = ctx.IDENTIFIER();
        if (identifier) {
            const name = identifier.text;
            const symbol = this.findSymbol(name);

            if (!symbol) {
                this.addDiagnostic({
                    message: `Cannot find function '${name}'`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
                return;
            }

            if (symbol.kind !== 'Function') {
                this.addDiagnostic({
                    message: `'${name}' is not a function`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
                return;
            }

            // Check parameter count
            const providedArgs = ctx.argumentList()?.expression() || [];
            const expectedParams = symbol.parameters || [];
            if (providedArgs.length !== expectedParams.length) {
                const startColumn = ctx.start.charPositionInLine;
                // Calculate end position to include the entire function call
                const functionName = ctx.IDENTIFIER().text;
                const fullText = ctx.text;
                const endColumn = startColumn + fullText.length;

                this.addDiagnostic({
                    message: `Expected ${expectedParams.length} arguments, but got ${providedArgs.length}`,
                    line: ctx.start.line,
                    column: startColumn,
                    endColumn: endColumn,
                    severity: DiagnosticSeverity.Error
                });
                return;
            }

            // Mark the function as used
            for (let i = this.scopes.length - 1; i >= 0; i--) {
                if (this.scopes[i].has(name)) {
                    const funcSymbol = this.scopes[i].get(name)!;
                    funcSymbol.used = true;
                    this.scopes[i].set(name, funcSymbol);
                    break;
                }
            }
        }
    }

    /**
     * Visit the console log statement
     * @param ctx - The context of the console log statement
     */
    visitConsoleLogStatement(ctx: ConsoleLogStatementContext): void {
        try {
            const expr = ctx.expression();
            if (expr) {
                this.getExpressionType(expr);
            }
        } catch (error) {
            console.error('Error in visitConsoleLogStatement:', error);
        }
    }

    /**
     * Visit the if statement
     * @param ctx - The context of the if statement
     */
    visitIfStatement(ctx: IfStatementContext): void {
        try {
            const condition = ctx.expression();
            if (condition) {
                this.getExpressionType(condition);
            }

            const blocks = ctx.block();
            blocks.forEach(block => this.visit(block));
        } catch (error) {
            console.error('Error in visitIfStatement:', error);
        }
    }

    /**
     * Get all symbols
     * @returns The symbols
     */
    getAllSymbols(): Map<string, { kind: string; type?: string; parameters?: Array<{ name: string; type: string }> }> {
        const allSymbols = new Map<string, { kind: string; type?: string; parameters?: Array<{ name: string; type: string }> }>();

        // Start with global scope (index 0)
        this.scopes[0].forEach((info: any, name) => {
            // Handle nested value structure
            const symbolInfo = info.value || info;
            const symbol: { kind: string; type?: string; parameters?: Array<{ name: string; type: string }> } = {
                kind: symbolInfo.kind,
                type: symbolInfo.type
            };

            // Include parameters for functions
            if (symbolInfo.kind === 'Function' && symbolInfo.parameters) {
                symbol.parameters = symbolInfo.parameters;
            }

            allSymbols.set(name, symbol);
        });

        console.log('Global scope symbols:', allSymbols);
        return allSymbols;
    }

    /**
     * Visit the return statement
     * @param ctx - The context of the return statement
     */
    visitReturnStatement(ctx: ReturnStatementContext): void {
        const expr = ctx.expression();
        if (expr) {
            this.visit(expr);

            // Mark any variables in the return expression as active
            const vars = this.findVariablesInExpression(expr);
            vars.forEach(variable => {
                this.markVariableAsActive(variable);
            });
        }
    }

    /**
     * Find variables in an expression
     * @param ctx - The context of the expression
     * @returns The variables in the expression
     */
    private findVariablesInExpression(ctx: ExpressionContext): string[] {
        const variables: string[] = [];

        if (ctx instanceof IdentifierExprContext) {
            variables.push(ctx.IDENTIFIER().text);
        } else if (ctx instanceof BinaryExprContext) {
            variables.push(...this.findVariablesInExpression(ctx.expression(0)));
            variables.push(...this.findVariablesInExpression(ctx.expression(1)));
        }

        return variables;
    }

    /**
     * Mark a variable as active
     * @param variableName - The name of the variable
     */
    private markVariableAsActive(variableName: string): void {
        const variable = this.findSymbol(variableName);
        if (variable) {
            variable.used = true;
        }
    }
} 