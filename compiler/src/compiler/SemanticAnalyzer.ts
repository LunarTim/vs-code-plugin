import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { LuminaVisitor } from '../grammar/generated/LuminaVisitor';
import { 
    ProgramContext,
    VariableDeclarationContext,
    TypeContext,
    ExpressionContext,
    LiteralContext,
    LiteralExprContext,
    NumberLiteralContext,
    StringLiteralContext,
    BooleanLiteralContext
} from '../grammar/generated/LuminaParser';
import { Diagnostic } from './Compiler';
import { DiagnosticSeverity } from './types';

export class SemanticAnalyzer extends AbstractParseTreeVisitor<void> implements LuminaVisitor<void> {
    private diagnostics: Diagnostic[] = [];

    visitProgram(ctx: ProgramContext): void {
        ctx.statement().forEach(stmt => this.visit(stmt));
    }

    visitVariableDeclaration(ctx: VariableDeclarationContext): void {
        const identifier = ctx.IDENTIFIER();
        const type = ctx.type();
        const expr = ctx.expression();

        // Check for missing identifier (highest priority)
        if (!identifier) {
            this.addDiagnostic({
                message: 'Variable declaration must have an identifier',
                line: ctx.start.line,
                column: ctx.start.charPositionInLine,
                severity: DiagnosticSeverity.Error
            });
            return; // Stop further analysis for this declaration
        }

        // Check for empty identifier
        if (identifier.text.trim() === '') {
            this.addDiagnostic({
                message: 'Variable declaration must have an identifier',
                line: ctx.start.line,
                column: identifier.symbol.charPositionInLine,
                severity: DiagnosticSeverity.Error
            });
            return; // Stop further analysis for this declaration
        }

        // Check for missing type (warning)
        if (!type) {
            this.addDiagnostic({
                message: 'Variable declaration should specify a type',
                line: ctx.start.line,
                column: identifier.symbol.charPositionInLine,
                severity: DiagnosticSeverity.Warning
            });
        }

        // Check type compatibility if we have both a type and an expression
        if (type && expr) {
            const declaredType = type.text;
            const expressionType = this.getExpressionType(expr);
            
            if (expressionType && declaredType !== expressionType) {
                this.addDiagnostic({
                    message: `Type '${expressionType}' is not assignable to type '${declaredType}'`,
                    line: expr.start.line,
                    column: expr.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
            }
        }
    }

    private getExpressionType(ctx: ExpressionContext): string | undefined {
        // For now, we'll just handle literal expressions
        if (ctx instanceof LiteralExprContext) {
            const literal = ctx.literal();
            if (literal instanceof NumberLiteralContext) return 'number';
            if (literal instanceof StringLiteralContext) return 'string';
            if (literal instanceof BooleanLiteralContext) return 'boolean';
        }
        return undefined;
    }

    protected defaultResult(): void {
        // Do nothing for unhandled rules
    }

    getDiagnostics(): Diagnostic[] {
        return this.diagnostics;
    }

    private addDiagnostic(diagnostic: Diagnostic): void {
        // Ensure line numbers are 1-based as per LSP specification
        if (diagnostic.line <= 0) {
            diagnostic.line = 1;
        }
        this.diagnostics.push(diagnostic);
    }
} 