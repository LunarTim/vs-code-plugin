import { ANTLRErrorListener, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { Diagnostic } from './Compiler';
import { DiagnosticSeverity } from './types';

/**
 * Base class for error listeners
 */
abstract class BaseErrorListener {
    protected errors: Diagnostic[] = [];

    /**
     * Get the errors
     * @returns The errors
     */
    getErrors(): Diagnostic[] {
        return this.errors;
    }

    /**
     * Add an error
     * @param line - The line of the error
     * @param column - The column of the error
     * @param message - The message of the error
     */
    protected addError(line: number, column: number, message: string) {
        this.errors.push({
            message,
            line,
            column,
            severity: DiagnosticSeverity.Error
        });
    }
}

/**
 * Lexer error listener
 */
export class LexerErrorListener extends BaseErrorListener implements ANTLRErrorListener<number> {
    /**
     * Syntax error
     * @param recognizer - The recognizer
     * @param offendingSymbol - The offending symbol
     * @param line - The line of the error
     * @param charPositionInLine - The column of the error
     * @param msg - The message of the error
     * @param e - The exception
     */
    syntaxError(recognizer: Recognizer<number, any>, offendingSymbol: number | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        const errorMsg = msg.includes('token recognition error') 
            ? `Invalid character in input: ${msg.split("'")[1]}`
            : 'Syntax error: Invalid token';
        this.addError(line, charPositionInLine, errorMsg);
    }
}

/**
 * Parser error listener
 */
export class ParserErrorListener extends BaseErrorListener implements ANTLRErrorListener<Token> {
    /**
     * Syntax error
     * @param recognizer - The recognizer
     * @param offendingSymbol - The offending symbol
     * @param line - The line of the error
     * @param charPositionInLine - The column of the error
     * @param msg - The message of the error
     * @param e - The exception
     */
    syntaxError(recognizer: Recognizer<Token, any>, offendingSymbol: Token | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        let errorMessage = msg;

        if (msg.includes('missing')) {
            const expected = msg.split("missing")[1].split("at")[0].trim();
            errorMessage = `Expected ${expected}`;
        } else if (msg.includes('extraneous input')) {
            const unexpected = msg.split("'")[1];
            errorMessage = `Unexpected token '${unexpected}'`;
        } else if (msg.includes('no viable alternative')) {
            errorMessage = 'Invalid syntax';
        }

        this.addError(line, charPositionInLine, errorMessage);
    }
} 