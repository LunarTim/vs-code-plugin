import { describe, it, expect } from 'vitest';
import { compile } from '../src/index';

describe('Compiler', () => {
    it('should generate AST for variable declaration', () => {
        const source = 'let x = 10;';
        const result = compile(source);

        expect(result.ast).toEqual({
            type: 'Program',
            body: [[{
                type: 'VariableDeclaration',
                kind: 'let',
                identifier: { type: 'Identifier', name: 'x' },
                initializer: { type: 'Literal', value: '10' },
                varType: undefined
            }]]
        });
    });

    it('should report errors for duplicate variables', () => {
        const source = `
            let x = 10;
            let x = 20;
        `;
        const result = compile(source);

        expect(result.diagnostics).toContainEqual({
            message: "Variable 'x' is already declared",
            severity: 'error'
        });
    });
});