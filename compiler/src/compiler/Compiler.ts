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
            
            lexer.removeErrorListeners();
            parser.removeErrorListeners();
            
            lexer.addErrorListener(lexerErrorListener);
            parser.addErrorListener(parserErrorListener);

            // Parse the input
            parser.removeErrorListeners(); // Remove default error listeners
            parser.errorHandler = new DefaultErrorStrategy(); // Use default strategy for error handling
            const tree = parser.program();

            // If parsing fails due to incomplete input, return empty result
            if (!tree) {
                return { diagnostics: [], symbols: new Map() };
            }

            // Perform semantic analysis
            this.semanticAnalyzer.visit(tree);

            // Collect diagnostics
            const diagnostics = [
                ...lexerErrorListener.getErrors(),
                ...parserErrorListener.getErrors(),
                ...this.semanticAnalyzer.getDiagnostics()
            ];

            // Get symbols from semantic analyzer
            const symbols = this.semanticAnalyzer.getSymbols();

            return {
                diagnostics,
                symbols
            };
        } catch (error: unknown) {
            // Only report errors for complete statements
            if (sourceCode.trim().endsWith(';')) {
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
            return { diagnostics: [], symbols: new Map() };
        }
    }
} 