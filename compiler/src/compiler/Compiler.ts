import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { LuminaLexer } from '../grammar/generated/LuminaLexer';
import { LuminaParser } from '../grammar/generated/LuminaParser';
import { LexerErrorListener, ParserErrorListener } from './ErrorListener';
import { DiagnosticSeverity } from './types';
import { SemanticAnalyzer } from './SemanticAnalyzer';
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
    private symbolTable: Map<string, { kind: string; type?: string }> = new Map();

    constructor() {
        this.semanticAnalyzer = new SemanticAnalyzer();
    }

    compile(sourceCode: string): CompilerResult {
        try {
            if (!sourceCode.trim()) {
                return { diagnostics: [], symbols: this.symbolTable };
            }

            this.semanticAnalyzer.reset();

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
            let tree;
            try {
                tree = parser.program();
                // Update symbol table with new analysis
                this.semanticAnalyzer.visit(tree);
                this.symbolTable = this.semanticAnalyzer.getAllSymbols();
            } catch (parseError) {
                // Keep existing symbols on parse error
                return {
                    diagnostics: [{
                        message: parseError instanceof Error ? parseError.message : 'Parse error occurred',
                        line: 1,
                        column: 0,
                        severity: DiagnosticSeverity.Error
                    }],
                    symbols: this.symbolTable
                };
            }

            // Collect syntax errors
            const syntaxErrors = [
                ...lexerErrorListener.getErrors(),
                ...parserErrorListener.getErrors()
            ];

            const diagnostics = this.semanticAnalyzer.getDiagnostics();

            return {
                diagnostics: [...syntaxErrors, ...diagnostics],
                symbols: this.symbolTable
            };
        } catch (error: unknown) {
            return {
                diagnostics: [{
                    message: error instanceof Error ? error.message : 'Unknown error occurred',
                    line: 1,
                    column: 0,
                    severity: DiagnosticSeverity.Error
                }],
                symbols: this.symbolTable
            };
        }
    }

    getCompletionItems(sourceCode: string, position: Position): CompletionItem[] {
        try {
            // Compile to update symbol table
            const result = this.compile(sourceCode);

            const lines = sourceCode.split('\n');
            const currentLine = lines[position.line];
            const textBeforeCursor = currentLine?.slice(0, position.character) || '';

            console.log('Current text before cursor:', textBeforeCursor);
            console.log('Current symbol table:', this.symbolTable);

            // Get the current word being typed
            const currentWord = textBeforeCursor.trim().split(/[\s(){}[\],;=+\-*/<>!&|]+/).pop() || '';
            console.log('Current word:', currentWord);

            if (currentWord === 'fn') {
                console.log('Detected fn trigger');
                return this.generateFunctionCompletions(this.symbolTable);
            }

            return this.generateCompletionItems(this.symbolTable);
        } catch (error) {
            console.error('Error getting completion items:', error);
            return [];
        }
    }

    private generateCompletionItems(symbols: Map<string, { kind: string; type?: string }>): CompletionItem[] {
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
            const completionItem: CompletionItem = {
                label: name,
                kind: this.getCompletionItemKind(info.kind),
                detail: info.type ? `(${info.type})` : undefined
            };

            // Add brackets for functions
            if (info.kind === 'Function') {
                completionItem.insertText = `${name}($1)`;
                completionItem.insertTextFormat = InsertTextFormat.Snippet;
            }

            items.push(completionItem);
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
                detail: `(): ${info.type}`,
                insertText: `${name}($1)`,
                insertTextFormat: InsertTextFormat.Snippet
            });
        });

        return items;
    }

    private generateFunctionCompletions(symbols: Map<string, { kind: string; type?: string }>): CompletionItem[] {
        const items: CompletionItem[] = [];

        // Add function template
        items.push({
            label: 'fn (New Function)',
            kind: CompletionItemKind.Snippet,
            detail: 'Create new function',
            insertText: 'function ${1:name}(${2:params}): ${3:type} {\n\t$4\n}',
            insertTextFormat: InsertTextFormat.Snippet
        });

        // Add all declared functions
        symbols.forEach((info: any, name) => {
            console.log(`Processing symbol for completion: ${name}`, info);
            // Handle the nested structure
            const functionInfo = info.value || info;
            if (functionInfo.kind === 'Function') {
                const completionItem = {
                    label: name,
                    kind: CompletionItemKind.Function,
                    detail: `${name}(): ${functionInfo.type || 'void'}`,
                    insertText: `${name}($1)`,
                    insertTextFormat: InsertTextFormat.Snippet,
                    filterText: `fn${name}`,
                    documentation: `Function ${name} returning ${functionInfo.type || 'void'}`
                };
                console.log(`Adding completion item:`, completionItem);
                items.push(completionItem);
            }
        });

        console.log('Final completion items:', items);
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
} 