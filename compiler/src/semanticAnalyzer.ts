export interface SemanticError {
    message: string;
    line: number;
    character: number;
    length: number;
    severity: 'error' | 'warning';
}

export function analyze(ast: any): SemanticError[] {
    const errors: SemanticError[] = [];

    // Example: Check for undeclared variables
    function checkNode(node: any) {
        if (node.type === 'VariableDeclaration') {
            // Add logic to check variable declaration
            if (node.children[0].type === 'Identifier') {
                const identifier = node.children[0];
                if (identifier.text === node.children[1].text) {
                    errors.push({
                        message: 'Variable ' + identifier.text + ' is not defined',
                        line: identifier.line,
                        character: identifier.character,
                        length: identifier.length,
                        severity: 'error'
                    });
                }
            }

            // Check for duplicate variable declarations
            const variableName = node.children[1].text;
            const variableDeclarations = ast.children.filter((child: any) => child.type === 'VariableDeclaration');
            const duplicateVariables = variableDeclarations.filter((child: any) => child.children[1].text === variableName);
            if (duplicateVariables.length > 1) {
                errors.push({
                    message: 'Variable ' + variableName + ' is already defined',
                    line: node.children[1].line,
                    character: node.children[1].character,
                    length: node.children[1].length,
                    severity: 'error'
                });
            }

            // check for wrong type assignment
            const type = node.children[0].text;
            const value = node.children[2].text;
            if (type === 'number' && isNaN(Number(value))) {
                errors.push({
                    message: 'Type mismatch. Expected number, got ' + typeof value,
                    line: node.children[1].line,
                    character: node.children[1].character,
                    length: node.children[1].length,
                    severity: 'error'
                });
            }
        } else if (node.type === 'FunctionDeclaration') {
            // Add logic to check function declaration
            if (node.children[1].type === 'Identifier') {
                const identifier = node.children[1];
                if (identifier.text === node.children[1].text) {
                    errors.push({
                        message: 'Function ' + identifier.text + ' is not defined',
                        line: identifier.line,
                        character: identifier.character,
                        length: identifier.length,
                        severity: 'error'
                    });
                }
            }

            // Check for duplicate function declarations
            const functionName = node.children[1].text;
            const functionDeclarations = ast.children.filter((child: any) => child.type === 'FunctionDeclaration');
            const duplicateFunctions = functionDeclarations.filter((child: any) => child.children[1].text === functionName);
            if (duplicateFunctions.length > 1) {
                errors.push({
                    message: 'Function ' + functionName + ' is already defined',
                    line: node.children[1].line,
                    character: node.children[1].character,
                    length: node.children[1].length,
                    severity: 'error'
                });
            }

            // Check for missing return statement
            const returnStatements = node.children.filter((child: any) => child.type === 'ReturnStatement');
            if (returnStatements.length === 0) {
                errors.push({
                    message: 'Function ' + functionName + ' is missing a return statement',
                    line: node.children[1].line,
                    character: node.children[1].character,
                    length: node.children[1].length,
                    severity: 'warning'
                });
            }

            // Check for wrong return type
            const returnType = node.children[0].text;
            const returnValues = returnStatements.map((child: any) => child.children[0].text);
            const invalidReturnValues = returnValues.filter((value: string) => typeof value !== returnType);
            if (invalidReturnValues.length > 0) {
                errors.push({
                    message: 'Type mismatch. Expected ' + returnType + ', got ' + invalidReturnValues.join(', '),
                    line: node.children[1].line,
                    character: node.children[1].character,
                    length: node.children[1].length,
                    severity: 'error'
                });
            }

            // Check for missing parameters
            const parameters = node.children[2].children;
            const parameterNames = parameters.map((child: any) => child.children[1].text);
            const parameterValues = node.children[3].children;
            const missingParameters = parameterNames.filter((name: string) => !parameterValues.some((value: any) => value.text === name));
            if (missingParameters.length > 0) {
                errors.push({
                    message: 'Missing parameters: ' + missingParameters.join(', '),
                    line: node.children[1].line,
                    character: node.children[1].character,
                    length: node.children[1].length,
                    severity: 'warning'
                });
            }

            // Check for unused parameters
            const unusedParameters = parameterValues.filter((value: any) => !parameterNames.includes(value.text));
            if (unusedParameters.length > 0) {
                errors.push({
                    message: 'Unused parameters: ' + unusedParameters.map((value: any) => value.text).join(', '),
                    line: node.children[1].line,
                    character: node.children[1].character,
                    length: node.children[1].length,
                    severity: 'warning'
                });
            }

            // Check for wrong parameter types
            const parameterTypes = parameters.map((child: any) => child.children[0].text);
            const parameterValueTypes = parameterValues.map((child: any) => child.children[0].text);
            const invalidParameterTypes = parameterTypes.filter((type: string, index: number) => type !== parameterValueTypes[index]);
            if (invalidParameterTypes.length > 0) {
                errors.push({
                    message: 'Type mismatch. Expected ' + parameterTypes.join(', ') + ', got ' + parameterValueTypes.join(', '),
                    line: node.children[1].line,
                    character: node.children[1].character,
                    length: node.children[1].length,
                    severity: 'error'
                });
            }
        } else if (node.type === 'Identifier') {
            // Add logic to check identifier usage
            const identifier = node;
            const variableDeclarations = ast.children.filter((child: any) => child.type === 'VariableDeclaration');
            const variableNames = variableDeclarations.map((child: any) => child.children[1].text);
            if (!variableNames.includes(identifier.text)) {
                errors.push({
                    message: 'Variable ' + identifier.text + ' is not defined',
                    line: identifier.line,
                    character: identifier.character,
                    length: identifier.length,
                    severity: 'error'
                });
            }

            // Check for unused variables
            const variableUsages = ast.children.filter((child: any) => child.type === 'Identifier' && child.text === identifier.text);
            if (variableUsages.length === 1) {
                errors.push({
                    message: 'Variable ' + identifier.text + ' is declared but never used',
                    line: identifier.line,
                    character: identifier.character,
                    length: identifier.length,
                    severity: 'warning'
                });
            }

            // Check for variable reassignment
            const variableAssignments = ast.children.filter((child: any) => child.type === 'VariableAssignment' && child.children[0].text === identifier.text);
            if (variableAssignments.length > 1) {
                errors.push({
                    message: 'Variable ' + identifier.text + ' is reassigned',
                    line: identifier.line,
                    character: identifier.character,
                    length: identifier.length,
                    severity: 'warning'
                });
            }
        }

        // Recursively check child nodes
        if (node.children) {
            node.children.forEach((child: any) => checkNode(child));
        }
    }

    checkNode(ast);
    return errors;
}