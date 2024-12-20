import { CharStreams, CommonTokenStream, CharStream } from 'antlr4ts';
import { LuminaLexer } from '../grammar/generated/LuminaLexer';
import { LuminaParser, ProgramContext } from '../grammar/generated/LuminaParser';
import { LexerErrorListener, ParserErrorListener } from './ErrorListener';
import { DiagnosticSeverity } from './types';
import { SemanticAnalyzer } from './SemanticAnalyzer';
import { DefaultErrorStrategy } from 'antlr4ts/DefaultErrorStrategy';
import { CompletionItem, CompletionItemKind, InsertTextFormat } from 'vscode-languageserver-types';
import { Position } from './types';

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

    getCompletionItems(sourceCode: string, position: Position): CompletionItem[] {
        try {
            // First compile to get the semantic analysis
            const result = this.compile(sourceCode);

            // Create a new analyzer and analyze the code to get current scope
            const analyzer = new SemanticAnalyzer();
            analyzer.visit(this.parse(sourceCode));

            // Get all symbols from the analyzer
            const symbols = analyzer.getAllSymbols();

            return this.generateCompletionItems(position, symbols);
        } catch (error) {
            console.error('Error getting completion items:', error);
            return [];
        }
    }

    private generateCompletionItems(position: Position, symbols: Map<string, { kind: string; type?: string }>): CompletionItem[] {
        const items: CompletionItem[] = [];

        // Add live templates
        const liveTemplates = new Map<string, { snippet: string, description: string }>([
            ['log', {
                snippet: 'console.log($1);',
                description: 'Console log statement'
            }],
            ['fi', {
                snippet: 'if ($1) {\n\t$2\n}',
                description: 'If statement'
            }],
            ['elfi', {
                snippet: 'if ($1) {\n\t$2\n} else {\n\t$3\n}',
                description: 'If else statement'
            }],
            ['fori', {
                snippet: 'for (let ${1:i}: number = 0; ${1:i} < ${2:length}; ${1:i}++) {\n\t$3\n}',
                description: 'For loop'
            }],
            ['fn', {
                snippet: 'function ${1:name}(${2:params}): ${3:type} {\n\t$4\n}',
                description: 'Function declaration'
            }]
        ]);

        // Add live template completions
        liveTemplates.forEach((template, trigger) => {
            items.push({
                label: trigger,
                kind: CompletionItemKind.Snippet,
                detail: template.description,
                insertText: template.snippet,
                insertTextFormat: InsertTextFormat.Snippet
            });
        });

        // Add language keywords
        const keywords = ['let', 'const', 'var', 'function', 'if', 'else', 'return'];
        keywords.forEach(keyword => {
            items.push({
                label: keyword,
                kind: CompletionItemKind.Keyword
            });
        });

        // Add symbols from current scope
        symbols.forEach((info, name) => {
            items.push({
                label: name,
                kind: this.getCompletionItemKind(info.kind),
                detail: info.type ? `(${info.type})` : undefined
            });
        });

        // Add built-in types
        const types = ['number', 'string', 'boolean', 'void'];
        types.forEach(type => {
            items.push({
                label: type,
                kind: CompletionItemKind.TypeParameter
            });
        });

        // Add built-in methods
        const methods = new Map([
            ['toString', { type: 'string' }],
            ['log', { type: 'void' }]
        ]);

        methods.forEach((info, name) => {
            items.push({
                label: name,
                kind: CompletionItemKind.Method,
                detail: `(): ${info.type}`
            });
        });

        return items;
    }

    private getCompletionItemKind(symbolKind: string): CompletionItemKind {
        switch (symbolKind) {
            case 'Function': return CompletionItemKind.Function;
            case 'Variable': return CompletionItemKind.Variable;
            case 'Parameter': return CompletionItemKind.Variable;
            default: return CompletionItemKind.Text;
        }
    }

    private parse(sourceCode: string): ProgramContext {
        const inputStream = CharStreams.fromString(sourceCode);
        const lexer = new LuminaLexer(inputStream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new LuminaParser(tokenStream);
        return parser.program();
    }
} 