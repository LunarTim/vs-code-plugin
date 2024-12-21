import { describe, test, expect, beforeEach } from 'vitest';
import { Compiler } from '../compiler/Compiler';
import { DiagnosticSeverity, CompletionItemKind } from '../compiler/types';

describe('End-to-end Tests', () => {
    let compiler: Compiler;

    beforeEach(() => {
        compiler = new Compiler();
    });

    describe('Semantic Analysis E2E', () => {
        test('should detect all semantic issues in a complex program', () => {
            const input = `
                let x = 42; 
                const y: string = 123;
                let z: number;  
                
                function test(a: number): string {
                    return 42;  
                }
                
                x = "hello";  
                y = "world";  
                unknown = 5;  
            `;

            const result = compiler.compile(input);

            expect(result.diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Variable 'x' is missing type annotation",
                    severity: DiagnosticSeverity.Warning
                })
            );
            expect(result.diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Type 'number' is not assignable to type 'string'",
                    severity: DiagnosticSeverity.Error
                })
            );
            expect(result.diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Type 'string' is not assignable to type 'number'",
                    severity: DiagnosticSeverity.Error
                })
            );
            expect(result.diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Cannot assign to 'y' because it is a constant",
                    severity: DiagnosticSeverity.Error
                })
            );
            expect(result.diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Cannot find name 'unknown'",
                    severity: DiagnosticSeverity.Error
                })
            );
            expect(result.diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Variable 'y' is declared but never used",
                    severity: DiagnosticSeverity.Warning
                })
            );
            expect(result.diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Variable 'z' is declared but never used",
                    severity: DiagnosticSeverity.Warning
                })
            );
            
        });
    });

    describe('Code Completion E2E', () => {
        test('should provide correct completion items in various contexts', () => {
            const input = `
                let x: number = 42;
                let str: string = "hello";
                
                function test(param: number): void {
                    console.log(param);
                }
                
                x.
            `;

            const result = compiler.getCompletionItems(input, {
                line: 8,
                character: 18 
            });

            expect(result).toContainEqual(
                expect.objectContaining({
                    label: 'toString',
                    kind: CompletionItemKind.Method
                })
            );

            // Test keyword completion
            const keywordResult = compiler.getCompletionItems(input, {
                line: 9,
                character: 0
            });

            expect(keywordResult).toContainEqual(
                expect.objectContaining({
                    label: 'function',
                    kind: CompletionItemKind.Keyword
                })
            );
        });

        test('should provide context-aware completions', () => {
            const input = `
                let num: number = 42;
                let str: string = "hello";
                
                console.
            `;

            const result = compiler.getCompletionItems(input, {
                line: 4,
                character: 24 
            });

            expect(result).toContainEqual(
                expect.objectContaining({
                    label: 'log',
                    kind: CompletionItemKind.Method
                })
            );
        });

        test('should provide comprehensive completions', () => {
            const input = `
                function test(): void {
                    
                }
            `;

            const result = compiler.getCompletionItems(input, {
                line: 2,
                character: 16
            });

            // Test for basic language constructs
            expect(result).toContainEqual(
                expect.objectContaining({
                    label: 'let',
                    kind: CompletionItemKind.Keyword
                })
            );

            // Test for built-in types
            expect(result).toContainEqual(
                expect.objectContaining({
                    label: 'number',
                    kind: CompletionItemKind.TypeParameter
                })
            );

            // Test for snippets
            expect(result).toContainEqual(
                expect.objectContaining({
                    label: 'log',
                    kind: CompletionItemKind.Snippet,
                    detail: 'Console log statement'
                })
            );

            // Test for built-in methods
            expect(result).toContainEqual(
                expect.objectContaining({
                    label: 'log',
                    kind: CompletionItemKind.Method,
                    detail: '(): void'
                })
            );
        });
    });
}); 