// src/index.ts
import { CharStream, CommonTokenStream } from 'antlr4';
import LuminaLexer from './antlr/generated/LuminaLexer';
import LuminaParser from './antlr/generated/LuminaParser';
import LuminaListener from './antlr/generated/LuminaListener';
import { analyze } from './semanticAnalyzer';
//import { getCodeCompletions, Completion } from './codeCompletion';
import { LuminaVisitor } from './LuminaVisitor';

interface SyntaxErrorListener {
    syntaxError(
        recognizer: any,
        offendingSymbol: any,
        line: number,
        column: number,
        msg: string,
        e: any
    ): void;
    reportAmbiguity(
        recognizer: any,
        dfa: any,
        startIndex: number,
        stopIndex: number,
        exact: boolean,
        ambigAlts: any,
        configs: any
    ): void;
    reportAttemptingFullContext(
        recognizer: any,
        dfa: any,
        startIndex: number,
        stopIndex: number,
        conflictingAlts: any,
        configs: any
    ): void;
    reportContextSensitivity(
        recognizer: any,
        dfa: any,
        startIndex: number,
        stopIndex: number,
        prediction: number,
        configs: any
    ): void;
}



class ErrorListener implements SyntaxErrorListener {
    private errors: any[] = [];

    syntaxError(
        recognizer: any,
        offendingSymbol: any,
        line: number,
        column: number,
        msg: string,
        e: any
    ): void {
        // Store error
        this.errors.push({
            message: msg,
            line: line,
            column: column,
            severity: 'error'
        });
    }

    reportAmbiguity(
        recognizer: any,
        dfa: any,
        startIndex: number,
        stopIndex: number,
        exact: boolean,
        ambigAlts: any,
        configs: any
    ): void { }

    reportAttemptingFullContext(
        recognizer: any,
        dfa: any,
        startIndex: number,
        stopIndex: number,
        conflictingAlts: any,
        configs: any
    ): void { }

    reportContextSensitivity(
        recognizer: any,
        dfa: any,
        startIndex: number,
        stopIndex: number,
        prediction: number,
        configs: any
    ): void { }

    getErrors() {
        return this.errors;
    }
}



export interface CompileResult {
    ast: any;
    diagnostics: any[];
    //completions: Completion[];
}

export function compile(source: string): CompileResult {
    try {
        const chars = new CharStream(source);
        const lexer = new LuminaLexer(chars);
        const tokens = new CommonTokenStream(lexer);
        const parser = new LuminaParser(tokens);

        const errorListener = new ErrorListener();
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);

        const tree = parser.program();
        const visitor = new LuminaVisitor();
        const ast = visitor.visit(tree);
        const visitorErrors = visitor.getErrors().map(error => ({
            message: error,
            severity: 'error'
        }));

        const syntaxErrors = errorListener.getErrors();
        const allDiagnostics = [...syntaxErrors, ...visitorErrors];

        //const completions = getCodeCompletions(tree, allDiagnostics);

        return {
            ast,
            diagnostics: allDiagnostics,
            //completions: completions
        };
    } catch (error: any) {
        return {
            ast: null,
            diagnostics: [{
                message: error.message,
                severity: 'error'
            }],
            //completions: []
        };
    }
}


