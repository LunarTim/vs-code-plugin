import { describe, test, expect, beforeEach } from 'vitest';
import { SemanticAnalyzer } from '../compiler/SemanticAnalyzer';
import { DiagnosticSeverity } from '../compiler/types';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { LuminaLexer } from '../grammar/generated/LuminaLexer';
import { LuminaParser } from '../grammar/generated/LuminaParser';

describe('Semantic Analyzer', () => {
    let analyzer: SemanticAnalyzer;

    beforeEach(() => {
        analyzer = new SemanticAnalyzer();
    });

    function parse(input: string) {
        const inputStream = CharStreams.fromString(input);
        const lexer = new LuminaLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new LuminaParser(tokenStream);
        return parser.program();
    }

    describe('Variable Declaration Analysis', () => {
        test('should analyze valid variable declarations', () => {
            const input = `
                let x: number = 42;
                const y: string = "hello";
                var z: boolean = true;
                console.log(x);
                console.log(y);
                console.log(z); 
            `;
            const tree = parse(input);
            analyzer.visit(tree);
            expect(analyzer.getDiagnostics()).toHaveLength(0);
        });

        test('should prevent const reassignment', () => {
            const input = `
                const x: number = 42;
                x = 10;
            `;
            const tree = parse(input);
            analyzer.visit(tree);

            const diagnostics = analyzer.getDiagnostics();
            expect(diagnostics).toHaveLength(2);
            expect(diagnostics[0]).toMatchObject({
                message: "Cannot assign to 'x' because it is a constant",
                severity: DiagnosticSeverity.Error
            });
            expect(diagnostics[1]).toMatchObject({
                message: "Variable 'x' is declared but never used",
                severity: DiagnosticSeverity.Warning
            });
        });

        test('should prevent const increment', () => {
            const input = `
                const x: number = 42;
                x++;
            `;
            const tree = parse(input);
            analyzer.visit(tree);

            const diagnostics = analyzer.getDiagnostics();
            expect(diagnostics).toHaveLength(2);
            expect(diagnostics[0]).toMatchObject({
                message: "Cannot increment 'x' because it is a constant",
                severity: DiagnosticSeverity.Error
            });
            expect(diagnostics[1]).toMatchObject({
                message: "Variable 'x' is declared but never used",
                severity: DiagnosticSeverity.Warning
            });
        });

        test('should allow var and let reassignment', () => {
            const validCases = [
                `
                let x: number = 42;
                x = 10;
                `,
                `
                var y: number = 42;
                y = 10;
                `
            ];

            validCases.forEach(input => {
                analyzer = new SemanticAnalyzer();
                const tree = parse(input);
                analyzer.visit(tree);
                expect(analyzer.getDiagnostics()).toHaveLength(0);
            });
        });

        test('should analyze valid variable declaration', () => {
            const input = `
                let x: number = 42;
                console.log(x);
            `;
            const tree = parse(input);
            analyzer.visit(tree);
            expect(analyzer.getDiagnostics()).toHaveLength(0);
        });

        test('should warn about missing type annotation', () => {
            const input = 'let x = 42;';
            const tree = parse(input);
            analyzer.visit(tree);

            const diagnostics = analyzer.getDiagnostics();
            expect(diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Variable 'x' is missing type annotation",
                    severity: DiagnosticSeverity.Warning
                })
            );
        });
    });

    describe('Type Compatibility', () => {
        test('should detect type mismatches', () => {
            const cases = [
                {
                    input: 'let x: string = 42;',
                    expectedType: 'number',
                    declaredType: 'string'
                },
                {
                    input: 'let x: number = "hello";',
                    expectedType: 'string',
                    declaredType: 'number'
                },
                {
                    input: 'let x: boolean = 42;',
                    expectedType: 'number',
                    declaredType: 'boolean'
                },
                {
                    input: 'var x: boolean = 42;',
                    expectedType: 'number',
                    declaredType: 'boolean'
                },
                {
                    input: 'const x: string = 42;',
                    expectedType: 'number',
                    declaredType: 'string'
                }
            ];

            cases.forEach(({ input, expectedType, declaredType }) => {
                analyzer = new SemanticAnalyzer();
                const tree = parse(input);
                analyzer.visit(tree);

                const diagnostics = analyzer.getDiagnostics();
                expect(diagnostics).toHaveLength(2);
                expect(diagnostics[0]).toMatchObject({
                    message: `Type '${expectedType}' is not assignable to type '${declaredType}'`,
                    severity: DiagnosticSeverity.Error
                });
                expect(diagnostics[1]).toMatchObject({
                    message: "Variable 'x' is declared but never used",
                    severity: DiagnosticSeverity.Warning
                });
            });
        });

        test('should allow compatible type assignments', () => {
            const validCases = `
                let x: number = 42;
                let x: string = "hello";
                let x: boolean = true;
                console.log(x);
            `;
            analyzer.visit(parse(validCases));
            expect(analyzer.getDiagnostics()).toHaveLength(0);

        });
    });

    describe('Multiple Declarations', () => {
        test('should analyze multiple declarations correctly', () => {
            const tree = parse(`
                let x: number = 42;
                let y: string = "hello";
                let z: boolean = true;
                console.log(x);
                console.log(y);
                console.log(z);
            `);
            analyzer.visit(tree);
            expect(analyzer.getDiagnostics()).toHaveLength(0);
        });

        test('should collect all diagnostics', () => {
            const tree = parse(`
                let y: string = 123;
                let z;
            `);
            analyzer.visit(tree);

            const diagnostics = analyzer.getDiagnostics();

            expect(diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Type 'number' is not assignable to type 'string'",
                    severity: DiagnosticSeverity.Error
                })
            );

            expect(diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Variable 'y' is declared but never used",
                    severity: DiagnosticSeverity.Warning
                })
            );

            expect(diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Variable 'z' is declared but never used",
                    severity: DiagnosticSeverity.Warning
                })
            );
        });
    });

    describe('Function Analysis', () => {
        test('should recognize function parameters in scope', () => {
            const input = `
                function test(param: number): void {
                    console.log(param);
                }
                test(1);
            `;
            const tree = parse(input);
            analyzer.visit(tree);

            expect(analyzer.getDiagnostics()).toHaveLength(0);
        });

        test('should detect unused parameters', () => {
            const input = `
                function test(param: number): void {
                    let x: number = 42;
                    console.log(x);
                }
            `;
            const tree = parse(input);
            analyzer.visit(tree);

            const diagnostics = analyzer.getDiagnostics();
            expect(diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Parameter 'param' is declared but never used",
                    severity: DiagnosticSeverity.Warning
                })
            );
        });

        test('should handle multiple parameters', () => {
            const input = `
                function test(a: number, b: string): void {
                    console.log(a);
                    console.log(b);
                }
                test(1, "hello");
            `;
            const tree = parse(input);
            analyzer.visit(tree);

            expect(analyzer.getDiagnostics()).toHaveLength(0);
        });

        test('should keep parameters scoped to function', () => {
            const input = `
                function test(param: number): void {
                    console.log(param);
                }
                let x = param; // Should error - param not in scope
            `;
            const tree = parse(input);
            analyzer.visit(tree);

            const diagnostics = analyzer.getDiagnostics();
            expect(diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Cannot find name 'param'",
                    severity: DiagnosticSeverity.Error
                })
            );
        });
    });
}); 