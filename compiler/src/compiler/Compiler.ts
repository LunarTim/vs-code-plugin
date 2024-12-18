import { CharStreams, CommonTokenStream, CharStream } from 'antlr4ts';
import { LuminaLexer } from '../grammar/generated/LuminaLexer';
import { LuminaParser } from '../grammar/generated/LuminaParser';
import { LexerErrorListener, ParserErrorListener } from './ErrorListener';
import { DiagnosticSeverity } from './types';
import { SemanticAnalyzer } from './SemanticAnalyzer';
import { DefaultErrorStrategy } from 'antlr4ts/DefaultErrorStrategy';

export interface Diagnostic {
    message: string;
    line: number;
    column: number;
    severity: DiagnosticSeverity;
}

export interface CompilerResult {
    diagnostics: Diagnostic[];
    symbols: Map<string, { kind: string; type?: string }>;
}

export class Compiler {
    private semanticAnalyzer: SemanticAnalyzer;
    private errorListener: ParserErrorListener;

    constructor() {
        this.semanticAnalyzer = new SemanticAnalyzer();
        this.errorListener = new ParserErrorListener();
    }

    compile(sourceCode: string): CompilerResult {
        try {
            if (!sourceCode.trim()) {
                return { diagnostics: [], symbols: new Map() };
            }

            const inputStream = CharStreams.fromString(sourceCode);
            const lexer = new LuminaLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new LuminaParser(tokenStream);

            // Set up error handling
            const lexerErrorListener = new LexerErrorListener();
            const parserErrorListener = new ParserErrorListener();
            
            // Remove default listeners and add our custom ones
            lexer.removeErrorListeners();
            parser.removeErrorListeners();
            
            lexer.addErrorListener(lexerErrorListener);
            parser.addErrorListener(parserErrorListener);

            // Parse the input
            parser.errorHandler = new DefaultErrorStrategy();
            let tree;
            try {
                tree = parser.program();
            } catch (parseError) {
                console.error('Parse error:', parseError);
                return {
                    diagnostics: [{
                        message: parseError instanceof Error ? parseError.message : 'Parse error occurred',
                        line: 1,
                        column: 0,
                        severity: DiagnosticSeverity.Error
                    }],
                    symbols: new Map()
                };
            }

            // Collect syntax errors
            const syntaxErrors = [
                ...lexerErrorListener.getErrors(),
                ...parserErrorListener.getErrors()
            ];

            if (syntaxErrors.length > 0) {
                return {
                    diagnostics: syntaxErrors,
                    symbols: new Map()
                };
            }

            // Perform semantic analysis if syntax is valid
            try {
                this.semanticAnalyzer.visit(tree);
            } catch (semanticError) {
                console.error('Semantic analysis error:', semanticError);
                return {
                    diagnostics: [{
                        message: semanticError instanceof Error ? semanticError.message : 'Semantic analysis error occurred',
                        line: 1,
                        column: 0,
                        severity: DiagnosticSeverity.Error
                    }],
                    symbols: new Map()
                };
            }

            // Get diagnostics and symbols
            const semanticDiagnostics = this.semanticAnalyzer.getDiagnostics();
            const symbols = this.semanticAnalyzer.getSymbols();

            return {
                diagnostics: [...syntaxErrors, ...semanticDiagnostics],
                symbols
            };
        } catch (error: unknown) {
            console.error('Compilation error:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred during compilation';
            return {
                diagnostics: [{
                    message: errorMessage,
                    line: 1,
                    column: 0,
                    severity: DiagnosticSeverity.Error
                }],
                symbols: new Map()
            };
        }
    }
} 