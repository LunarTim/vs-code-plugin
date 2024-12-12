import { ErrorListener, Token } from 'antlr4';
import { ErrorNode } from 'antlr4/src/antlr4/tree/ErrorNode';
import { ParserRuleContext } from 'antlr4/src/antlr4/context/ParserRuleContext';
import { TerminalNode } from 'antlr4/src/antlr4/tree/TerminalNode';
import LuminaListener from './antlr/generated/LuminaListener';
import { StatementContext, ExpressionStatementContext } from './antlr/generated/LuminaParser';


export class CustomLuminaListener extends ErrorListener<Token> implements LuminaListener {
    private errors: Array<{
        message: string;
        line: number;
        column: number;
        severity: 'error' | 'warning';
    }> = [];

    // Handle syntax errors
    visitErrorNode(node: ErrorNode): void {
        this.errors.push({
            message: `Syntax error: ${node.toString()}`,
            line: node.symbol.line,
            column: node.symbol.column,
            severity: 'error'
        });
    }

    // Handle statement errors
    enterStatement(ctx: StatementContext): void {
        const text = ctx.getText(); // Use getText() instead of toString()
        if (text && !text.endsWith(';') && !text.includes('function')) { // Ignore function declarations
            this.errors.push({
                message: 'Missing semicolon at end of statement',
                line: ctx.start.line,
                column: ctx.start.column,
                severity: 'error'
            });
        }
    }

    // Handle expression statement errors
    enterExpressionStatement(ctx: ExpressionStatementContext): void {
        const text = ctx.getText(); // Use getText() instead of toString()
        if (text && !text.endsWith(';')) {
            this.errors.push({
                message: 'Missing semicolon after expression',
                line: ctx.start.line,
                column: ctx.start.column,
                severity: 'error'
            });
        }
    }

    // Required interface methods
    visitTerminal(node: TerminalNode): void { }
    enterEveryRule(ctx: ParserRuleContext): void { }
    exitEveryRule(ctx: ParserRuleContext): void { }

    // Get collected errors
    getErrors() {
        return this.errors;
    }
}