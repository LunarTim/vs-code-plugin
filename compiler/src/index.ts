// src/index.ts
import { CharStream, CommonTokenStream, ErrorListener, Token } from 'antlr4';
import LuminaLexer from './antlr/generated/LuminaLexer';
import LuminaParser from './antlr/generated/LuminaParser';
import { analyze } from './semanticAnalyzer';
import { LuminaVisitor } from './LuminaVisitor';
import LuminaListener from './antlr/generated/LuminaListener';

class SyntaxErrorListener extends ErrorListener<Token> implements LuminaListener {
    private errors: any[] = [];

    syntaxError(recognizer: any, offendingSymbol: any, line: number, column: number, msg: string): void {
        // Customize error messages for common cases
        let message = msg;
        let errorLine = line;
        let errorColumn = column;

        if (msg.includes('no viable alternative')) {
            message = 'Missing semicolon at end of statement';
            // For missing semicolon errors, point to the end of the previous line
            errorLine = line - 1;
            // Set column to end of line (30 is an estimate of line length)
            errorColumn = 30;
        }

        this.errors.push({
            message,
            line: errorLine - 1, // Convert to 0-based line numbers
            column: errorColumn - 1,
            severity: 'error'
        });
    }

    // Required LuminaListener methods
    visitTerminal(node: any): void { }
    visitErrorNode(node: any): void { }
    enterEveryRule(ctx: any): void { }
    exitEveryRule(ctx: any): void { }

    getErrors() {
        return this.errors;
    }
}

export interface CompileResult {
    ast: any;
    diagnostics: any[];
}

export function compile(source: string): CompileResult {
    try {
        const chars = new CharStream(source);
        const lexer = new LuminaLexer(chars);
        const tokens = new CommonTokenStream(lexer as any);
        const parser = new LuminaParser(tokens as any);

        const listener = new SyntaxErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(listener);

        const tree = parser.program();
        const visitor = new LuminaVisitor();
        const ast = visitor.visit(tree);
        const visitorErrors = visitor.getErrors().map(error => ({
            message: error,
            severity: 'error'
        }));

        const syntaxErrors = listener.getErrors();
        const semanticErrors = analyze(ast).map(error => ({
            message: error.message,
            severity: error.severity
        }));

        const allDiagnostics = [...syntaxErrors, ...visitorErrors, ...semanticErrors];

        return {
            ast,
            diagnostics: allDiagnostics,
        };
    } catch (error: any) {
        return {
            ast: null,
            diagnostics: [{
                message: error.message,
                severity: 'error'
            }],
        };
    }
}