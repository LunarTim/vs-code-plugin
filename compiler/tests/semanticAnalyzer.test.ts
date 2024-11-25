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
                        { type: 'Identifier', text: 'x', line: 1, character: 0, length: 1 }
                    ]
                },
                {
                    type: 'Identifier',
                    text: 'y',
                    line: 2,
                    character: 0,
                    length: 1
                }
            ]
        };
        const errors = analyze(ast);
        expect(errors).toEqual<SemanticError[]>([
            {
                message: 'Variable y is not defined',
                line: 2,
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
                        { type: 'Identifier', text: 'x', line: 1, character: 0, length: 1 }
                    ]
                },
                {
                    type: 'VariableDeclaration',
                    children: [
                        { type: 'Identifier', text: 'x', line: 2, character: 0, length: 1 }
                    ]
                }
            ]
        };
        const errors = analyze(ast);
        expect(errors).toEqual<SemanticError[]>([
            {
                message: 'Variable x is already declared',
                line: 2,
                character: 0,
                length: 1,
                severity: 'error'
            }
        ]);
    });
});