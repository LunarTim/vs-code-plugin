import { CharStreams, CommonTokenStream, CharStream } from 'antlr4ts';
import { LuminaLexer } from '../grammar/generated/LuminaLexer';
import { LuminaParser } from '../grammar/generated/LuminaParser';
import { LexerErrorListener, ParserErrorListener } from './ErrorListener';
import { DiagnosticSeverity } from './types';
import { SemanticAnalyzer } from './SemanticAnalyzer';

export interface Diagnostic {
    message: string;
    line: number;
    column: number;
    severity: DiagnosticSeverity;
}

export class Compiler {
    private diagnostics: Diagnostic[] = [];

    compile(input: string): { diagnostics: Diagnostic[] } {
        this.diagnostics = [];

        try {
            // Create the lexer and parser
            const inputStream: CharStream = CharStreams.fromString(input);
            const lexer = new LuminaLexer(inputStream);

            // Add error listener to lexer
            const lexerErrorListener = new LexerErrorListener();
            lexer.removeErrorListeners();
            lexer.addErrorListener(lexerErrorListener);

            const tokenStream = new CommonTokenStream(lexer);
            const parser = new LuminaParser(tokenStream);

            // Add error listener to parser
            const parserErrorListener = new ParserErrorListener();
            parser.removeErrorListeners();
            parser.addErrorListener(parserErrorListener);

            // Parse the input
            const tree = parser.program();

            // Add any lexer errors to diagnostics
            this.diagnostics.push(...lexerErrorListener.getErrors());

            // Add any parser errors to diagnostics
            const parserErrors = parserErrorListener.getErrors();
            this.diagnostics.push(...parserErrors);

            // Always perform semantic analysis
            const analyzer = new SemanticAnalyzer();
            analyzer.visit(tree);
            
            // Add semantic diagnostics, filtering out duplicates
            const semanticDiagnostics = analyzer.getDiagnostics();
            const hasSimilarError = (diagnostic: Diagnostic) => 
                this.diagnostics.some(existing => 
                    existing.line === diagnostic.line && 
                    ((existing.message === diagnostic.message) ||
                     (existing.message.includes('identifier') && 
                      diagnostic.message.includes('identifier') && 
                      existing.severity === DiagnosticSeverity.Error))
                );

            for (const diagnostic of semanticDiagnostics) {
                if (!hasSimilarError(diagnostic)) {
                    this.diagnostics.push(diagnostic);
                }
            }

            // Sort diagnostics by severity (errors first) and line number
            this.diagnostics.sort((a, b) => {
                if (a.severity !== b.severity) {
                    return a.severity - b.severity;
                }
                return a.line - b.line;
            });

            return {
                diagnostics: this.diagnostics
            };
        } catch (error) {
            this.diagnostics.push({
                message: error instanceof Error ? error.message : 'Unknown error occurred',
                line: 1,
                column: 0,
                severity: DiagnosticSeverity.Error
            });

            return {
                diagnostics: this.diagnostics
            };
        }
    }

    addDiagnostic(diagnostic: Diagnostic): void {
        this.diagnostics.push(diagnostic);
    }
} 