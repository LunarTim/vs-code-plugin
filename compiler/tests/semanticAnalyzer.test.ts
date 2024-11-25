import { describe, it, expect } from 'vitest';
import { analyze, SemanticError } from '../src/semanticAnalyzer';

describe('Semantic Analyzer', () => {
    it('should detect undeclared variables', () => {
        const ast = {
            type: 'Program',
            children: [
                {
                    type: 'VariableDeclaration',
                    children: [
                        { type: 'Identifier', text: 'x', line: 1, character: 0, length: 1 },
                        { type: 'Identifier', text: 'x', line: 1, character: 2, length: 1 }
                    ]
                }
            ]
        };
        const errors = analyze(ast);
        expect(errors).toEqual<SemanticError[]>([
            {
                message: 'Variable x is not defined',
                line: 1,
                character: 0,
                length: 1,
                severity: 'error'
            }
        ]);
    });

    it('should detect duplicate variable declarations', () => {
        const ast = {
            type: 'Program',
            children: [
                {
                    type: 'VariableDeclaration',
                    children: [
                        { type: 'Identifier', text: 'number', line: 1, character: 0, length: 6 },
                        { type: 'Identifier', text: 'x', line: 1, character: 7, length: 1 },
                        { type: 'Literal', text: '10', line: 1, character: 9, length: 2 }
                    ]
                },
                {
                    type: 'VariableDeclaration',
                    children: [
                        { type: 'Identifier', text: 'number', line: 2, character: 0, length: 6 },
                        { type: 'Identifier', text: 'x', line: 2, character: 7, length: 1 },
                        { type: 'Literal', text: '20', line: 2, character: 9, length: 2 }
                    ]
                }
            ]
        };
        const errors = analyze(ast);
        expect(errors).toEqual<SemanticError[]>([
            {
                message: 'Variable x is already defined',
                line: 2,
                character: 7,
                length: 1,
                severity: 'error'
            }
        ]);
    });

    it('should detect type mismatch in variable assignment', () => {
        const ast = {
            type: 'Program',
            children: [
                {
                    type: 'VariableDeclaration',
                    children: [
                        { type: 'Identifier', text: 'number', line: 1, character: 0, length: 6 },
                        { type: 'Identifier', text: 'x', line: 1, character: 7, length: 1 },
                        { type: 'Literal', text: 'abc', line: 1, character: 9, length: 3 }
                    ]
                }
            ]
        };
        const errors = analyze(ast);
        expect(errors).toEqual<SemanticError[]>([
            {
                message: 'Type mismatch. Expected number, got string',
                line: 1,
                character: 7,
                length: 1,
                severity: 'error'
            }
        ]);
    });

    it('should detect missing return statement in function', () => {
        const ast = {
            type: 'Program',
            children: [
                {
                    type: 'FunctionDeclaration',
                    children: [
                        { type: 'Identifier', text: 'number', line: 1, character: 0, length: 6 },
                        { type: 'Identifier', text: 'foo', line: 1, character: 7, length: 3 },
                        { type: 'ParameterList', children: [] },
                        { type: 'Block', children: [] }
                    ]
                }
            ]
        };
        const errors = analyze(ast);
        expect(errors).toEqual<SemanticError[]>([
            {
                message: 'Function foo is missing a return statement',
                line: 1,
                character: 7,
                length: 3,
                severity: 'warning'
            }
        ]);
    });

    it('should detect undeclared function', () => {
        const ast = {
            type: 'Program',
            children: [
                {
                    type: 'FunctionDeclaration',
                    children: [
                        { type: 'Identifier', text: 'number', line: 1, character: 0, length: 6 },
                        { type: 'Identifier', text: 'foo', line: 1, character: 7, length: 3 },
                        { type: 'ParameterList', children: [] },
                        { type: 'Block', children: [] }
                    ]
                },
                {
                    type: 'CallExpression',
                    children: [
                        { type: 'Identifier', text: 'bar', line: 2, character: 0, length: 3 }
                    ]
                }
            ]
        };
        const errors = analyze(ast);
        expect(errors).toEqual<SemanticError[]>([
            {
                message: 'Function bar is not defined',
                line: 2,
                character: 0,
                length: 3,
                severity: 'error'
            }
        ]);
    });
});