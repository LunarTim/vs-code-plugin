import { describe, test, expect, beforeEach } from 'vitest';
import { Compiler } from '../compiler/Compiler';
import { DiagnosticSeverity } from '../compiler/types';

describe('Syntax Validation', () => {
    let compiler: Compiler;

    beforeEach(() => {
        compiler = new Compiler();
    });

    describe('Variable Declarations', () => {
        test('should parse valid variable declaration', () => {
            const input = `
                let x: number = 42;
                console.log(x);
            `;
            const result = compiler.compile(input);
            expect(result.diagnostics).toHaveLength(0);
        });

        test('should detect missing identifier', () => {
            const input = `
                let = 42;
            `;
            const result = compiler.compile(input);

            // We expect both a syntax error and a semantic warning
            expect(result.diagnostics).toHaveLength(1);
            expect(result.diagnostics).toContainEqual(
                expect.objectContaining({
                    message: 'Expected IDENTIFIER',
                    severity: DiagnosticSeverity.Error
                })
            );
        });

        test('should warn about missing type annotation', () => {
            const input = 'let x = 42;';
            const result = compiler.compile(input);

            expect(result.diagnostics).toHaveLength(1);
            expect(result.diagnostics[0]).toMatchObject({
                message: 'Variable \'x\' is declared but never used',
                severity: DiagnosticSeverity.Warning
            });
        });
    });

    describe('Type Checking', () => {
        test('should detect type mismatch in assignment', () => {
            const input = `
                let x: string = 42;
                console.log(x);
            `;
            const result = compiler.compile(input);

            expect(result.diagnostics).toHaveLength(1);
            expect(result.diagnostics[0]).toMatchObject({
                message: "Type 'number' is not assignable to type 'string'",
                severity: DiagnosticSeverity.Error
            });
        });

        test('should allow correct type assignment', () => {
            const input = `
                let x: number = 42;
                let y: string = "hello";
                let z: boolean = true;

                console.log(x);
                console.log(y);
                console.log(z);
            `;
            const result = compiler.compile(input);
            expect(result.diagnostics).toHaveLength(0);
        });
    });

    describe('Multiple Statements', () => {
        test('should handle multiple variable declarations', () => {
            const input = `
                let x: number = 42;
                let y: string = "hello";
                let z = true;

                console.log(x);
                console.log(y);
                console.log(z);
            `;
            const result = compiler.compile(input);

            expect(result.diagnostics).toHaveLength(0);
        });
    });

    describe('Edge Cases', () => {
        test('should handle empty input', () => {
            const input = '';
            const result = compiler.compile(input);
            expect(result.diagnostics).toHaveLength(0);
        });

        test('should handle whitespace and comments', () => {
            const input = `
                // This is a comment
                let x: number = 42; // End of line comment
                /* Multi-line
                   comment */
                let y: string = "hello";
                console.log(x);
                console.log(y);
            `;
            const result = compiler.compile(input);
            expect(result.diagnostics).toHaveLength(0);
        });

        test('should handle invalid tokens', () => {
            const input = 'let x: number = @42;';
            const result = compiler.compile(input);

            expect(result.diagnostics).toHaveLength(1);
            expect(result.diagnostics[0]).toMatchObject({
                message: 'Invalid character in input: @',
                severity: DiagnosticSeverity.Error
            });
        });
    });
}); 