import { ANTLRErrorListener, RecognitionException, Recognizer, Token } from 'antlr4ts';
import { Diagnostic } from './Compiler';
import { DiagnosticSeverity } from './types';

abstract class BaseErrorListener {
    protected errors: Diagnostic[] = [];

    getErrors(): Diagnostic[] {
        return this.errors;
    }

    protected addError(line: number, column: number, message: string) {
        this.errors.push({
            message,
            line,
            column,
            severity: DiagnosticSeverity.Error
        });
    }
}

export class LexerErrorListener extends BaseErrorListener implements ANTLRErrorListener<number> {
    syntaxError(recognizer: Recognizer<number, any>, offendingSymbol: number | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        if (msg.includes('token recognition error')) {
            const match = msg.match(/token recognition error at: '(.+)'/);
            const invalidChar = match ? match[1] : '@';
            this.addError(line, charPositionInLine, `Invalid character '${invalidChar}' in input`);
        } else {
            this.addError(line, charPositionInLine, msg);
        }
    }
}

export class ParserErrorListener extends BaseErrorListener implements ANTLRErrorListener<Token> {
    syntaxError(recognizer: Recognizer<Token, any>, offendingSymbol: Token | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void {
        let errorMessage = msg;
        let position = charPositionInLine;

        if (msg.includes('missing IDENTIFIER')) {
            errorMessage = 'Variable declaration must have an identifier';
            if (offendingSymbol) {
                position = Math.max(0, offendingSymbol.charPositionInLine - 4);
            }
        } else if (msg.includes('extraneous input')) {
            const match = msg.match(/extraneous input '(.+)' expecting/);
            const invalidToken = match ? match[1] : '';
            errorMessage = `Unexpected token '${invalidToken}'`;
        } else if (msg.includes('mismatched input')) {
            const match = msg.match(/mismatched input '(.+)' expecting/);
            const invalidToken = match ? match[1] : '';
            errorMessage = `Unexpected token '${invalidToken}'`;
        }

        this.addError(line, position, errorMessage);
    }
} 