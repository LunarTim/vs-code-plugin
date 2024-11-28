import { describe, it, expect } from 'vitest';
import { CharStreams, CommonTokenStream } from 'antlr4';
import LuminaLexer from '../src/antlr/generated/LuminaLexer';
import LuminaParser from '../src/antlr/generated/LuminaParser';
import { LuminaVisitor } from '../src/LuminaVisitor';

function parse(input: string) {
    const chars = CharStreams.fromString(input);
    const lexer = new LuminaLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new LuminaParser(tokens);
    return parser.program();
}

describe('LuminaVisitor', () => {
    describe('Variable Declaration', () => {
        it('should create AST node for variable declaration', () => {
            const input = 'let x: number = 10;';
            const tree = parse(input);
            const visitor = new LuminaVisitor();
            const ast = visitor.visit(tree);

            expect(ast).toEqual({
                type: 'Program',
                body:[[ {
                    type: 'VariableDeclaration',
                    kind: 'let',
                    identifier: { type: 'Identifier', name: 'x' },
                    initializer: { type: 'Literal', value: '10' },
                    varType: {
                        name: "number",
                        type: "Type"
                    }
                }]]
            });
        });

        it('should handle const declarations', () => {
            const input = 'const x = 5;';
            const tree = parse(input);
            const visitor = new LuminaVisitor();
            const ast = visitor.visit(tree);

            expect(ast).toEqual({
                type: 'Program',
                body: [[{
                    type: 'VariableDeclaration',
                    kind: 'const',
                    identifier: { type: 'Identifier', name: 'x' },
                    initializer: { type: 'Literal', value: '5' },
                    varType: undefined,
                }]]
            });
        });

        it('should track variables in symbol table', () => {
            const input = 'let x = 10;';
            const tree = parse(input);
            const visitor = new LuminaVisitor();
            visitor.visit(tree);

            const symbolTable = visitor.getSymbolTable();
            expect(symbolTable).toHaveProperty('x');
            expect(symbolTable.x).toEqual({
                type: 'any',
                value: { type: 'Literal', value: '10' },
                isConstant: false
            });
        });

        it('should detect redeclaration errors', () => {
            const input = `
                let x = 10;
                let x = 20;
            `;
            const tree = parse(input);
            const visitor = new LuminaVisitor();
            visitor.visit(tree);

            const errors = visitor.getErrors();
            expect(errors).toContain("Variable 'x' is already declared");
        });
    });

    describe('Variable Assignment', () => {
        it('should handle variable assignment', () => {
            const input = `
                let x = 10;
                x = 20;
            `;
            const tree = parse(input);
            const visitor = new LuminaVisitor();
            const ast = visitor.visit(tree);

            expect(ast).toEqual({
                type: 'Program',
                body: [
                    [
                        {
                            type: 'VariableDeclaration',
                            kind: 'let',
                            identifier: { type: 'Identifier', name: 'x' },
                            initializer: { type: 'Literal', value: '10' },
                            "varType": undefined,
                        }
                    ],
                    [
                        {
                            type: 'VariableAssignment',
                            identifier: { type: 'Identifier', name: 'x' },
                            operator: { type: 'AssignmentOperator', operator: '=' },
                            value: { type: 'Literal', value: '20' }
                        }
                    ]
                ]
            });
        });

        it('should prevent reassignment of constants', () => {
            const input = `
                const x = 10;
                x = 20;
            `;
            const tree = parse(input);
            const visitor = new LuminaVisitor();
            visitor.visit(tree);

            const errors = visitor.getErrors();
            expect(errors).toContain("Cannot reassign constant 'x'");
        });
    });
}); 