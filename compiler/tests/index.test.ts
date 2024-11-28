import { describe, it, expect } from 'vitest';
import { compile } from '../src/index';

describe('compile function', () => {
    it('should return diagnostics and completions for valid source code', () => {
        const source = `
            let x = 10;
            function add(a, b) {
                return a + b;
            }
            let result = add(x, 5);
        `;
        const result = compile(source);
        expect(result).toHaveProperty('diagnostics');
        expect(result).toHaveProperty('completions');
        console.log('Result:', JSON.stringify(result, null, 2));
    });

    it('should return diagnostics for invalid source code', () => {
        const source = `
            let x = 10
            function add(a, b) {
                return a + b
            }
            let result = add(x, 5
        `;
        const result = compile(source);
        expect(result.diagnostics).not.toHaveLength(0);
        console.log('Result:', JSON.stringify(result, null, 2));

    });

    it('should return empty completions for empty source code', () => {
        const source = '';
        const result = compile(source);
        expect(result.completions).toHaveLength(0);
        console.log('Result:', JSON.stringify(result, null, 2));
    });

    it('should handle source code with syntax errors', () => {
        const source = `
            let x = 10;
            function add(a, b) {
                return a + b
            let result = add(x, 5
        `;
        const result = compile(source);
        expect(result.diagnostics).not.toHaveLength(0);
        console.log('Result:', JSON.stringify(result, null, 2));
    });
});