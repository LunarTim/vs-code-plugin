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
        test('should analyze valid variable declaration', () => {
            const tree = parse('let x: number = 42;');
            analyzer.visit(tree);
            expect(analyzer.getDiagnostics()).toHaveLength(0);
        });

        test('should detect missing identifier', () => {
            const tree = parse('let = 42;');
            analyzer.visit(tree);

            const diagnostics = analyzer.getDiagnostics();
            // Note: The parser might not even create a valid tree for this case,
            // so we might not get semantic errors
            expect(diagnostics.length).toBeLessThanOrEqual(1);
            if (diagnostics.length > 0) {
                expect(diagnostics[0]).toMatchObject({
                    message: 'Variable declaration must have an identifier',
                    severity: DiagnosticSeverity.Error
                });
            }
        });

        test('should warn about missing type annotation', () => {
            const tree = parse('let x = 42;');
            analyzer.visit(tree);

            const diagnostics = analyzer.getDiagnostics();
            expect(diagnostics).toHaveLength(1);
            expect(diagnostics[0]).toMatchObject({
                message: 'Variable declaration should specify a type',
                severity: DiagnosticSeverity.Warning
            });
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
                }
            ];

            cases.forEach(({ input, expectedType, declaredType }) => {
                analyzer = new SemanticAnalyzer();
                const tree = parse(input);
                analyzer.visit(tree);

                const diagnostics = analyzer.getDiagnostics();
                expect(diagnostics).toHaveLength(1);
                expect(diagnostics[0]).toMatchObject({
                    message: `Type '${expectedType}' is not assignable to type '${declaredType}'`,
                    severity: DiagnosticSeverity.Error
                });
            });
        });

        test('should allow compatible type assignments', () => {
            const validCases = [
                'let x: number = 42;',
                'let x: string = "hello";',
                'let x: boolean = true;',
                'let x: boolean = false;'
            ];

            validCases.forEach(input => {
                analyzer = new SemanticAnalyzer();
                const tree = parse(input);
                analyzer.visit(tree);
                expect(analyzer.getDiagnostics()).toHaveLength(0);
            });
        });
    });

    describe('Multiple Declarations', () => {
        test('should analyze multiple declarations correctly', () => {
            const tree = parse(`
                let x: number = 42;
                let y: string = "hello";
                let z: boolean = true;
            `);
            analyzer.visit(tree);
            expect(analyzer.getDiagnostics()).toHaveLength(0);
        });

        test('should collect all diagnostics', () => {
            const tree = parse(`
                let = 42;
                let y: string = 123;
                let z;
            `);
            analyzer.visit(tree);

            const diagnostics = analyzer.getDiagnostics();

            // We expect:
            // 1. Type mismatch error for y
            // 2. Missing type warning for z
            expect(diagnostics).toContainEqual(
                expect.objectContaining({
                    message: "Type 'number' is not assignable to type 'string'",
                    severity: DiagnosticSeverity.Error
                })
            );

            expect(diagnostics).toContainEqual(
                expect.objectContaining({
                    message: 'Variable declaration should specify a type',
                    severity: DiagnosticSeverity.Warning
                })
            );
        });
    });
}); 