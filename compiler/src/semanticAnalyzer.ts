export interface SemanticError {
    message: string;
    line: number;
    character: number;
    length: number;
    severity: 'error' | 'warning';
}

export function analyze(ast: any): SemanticError[] {
    const errors: SemanticError[] = [];

    const declaredVariables = new Map<string, { line: number, character: number }>();

    function checkNode(node: any) {
        if (!node) return;

        if (node.type === 'VariableDeclaration') {
            const identifier = node.children[0];
            if (identifier && identifier.type === 'Identifier') {
                if (declaredVariables.has(identifier.text)) {
                    const { line, character } = declaredVariables.get(identifier.text)!;
                    errors.push({
                        message: `Variable ${identifier.text} is already declared`,
                        line: identifier.line,
                        character: identifier.character,
                        length: identifier.length,
                        severity: 'error'
                    });
                } else {
                    declaredVariables.set(identifier.text, { line: identifier.line, character: identifier.character });
                }
            }
        } else if (node.type === 'Identifier') {
            if (!declaredVariables.has(node.text)) {
                errors.push({
                    message: `Variable ${node.text} is not defined`,
                    line: node.line,
                    character: node.character,
                    length: node.length,
                    severity: 'error'
                });
            }
        } else if (node.type === 'AssignmentExpression') {
            const type = node.children[0]?.text;
            const value = node.children[2]?.text;
            if (type === 'number' && isNaN(Number(value))) {
                errors.push({
                    message: `Type mismatch: expected number but got ${value}`,
                    line: node.line,
                    character: node.character,
                    length: node.length,
                    severity: 'error'
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