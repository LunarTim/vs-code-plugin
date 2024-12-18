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
    BooleanLiteralContext,
    FunctionDeclarationContext,
    IdentifierExprContext,
    BinaryExprContext,
    AssignmentStatementContext,
    IncrementStatementContext,
    IncrementExprContext,
    FunctionCallContext,
    FunctionCallExprContext
} from '../grammar/generated/LuminaParser';
import { Diagnostic } from './Compiler';
import { DiagnosticSeverity } from './types';

export class SemanticAnalyzer extends AbstractParseTreeVisitor<void> implements LuminaVisitor<void> {
    private diagnostics: Diagnostic[] = [];
    private symbolTable: Map<string, { 
        type: string; 
        used: boolean; 
        kind: string;
        line: number;
        column: number;
    }> = new Map();

    visitProgram(ctx: ProgramContext): void {
        this.symbolTable.clear();
        this.diagnostics = [];
        ctx.statement().forEach(stmt => this.visit(stmt));
        
        // Check for unused variables
        this.symbolTable.forEach((info, name) => {
            if (!info.used) {
                this.addDiagnostic({
                    message: `Variable '${name}' is declared but never used`,
                    line: info.line,
                    column: info.column,
                    severity: DiagnosticSeverity.Warning
                });
            }
        });
    }

    visitVariableDeclaration(ctx: VariableDeclarationContext): void {
        try {
            const identifier = ctx.IDENTIFIER();
            const type = ctx.type();
            const expr = ctx.expression();

            if (identifier) {
                const name = identifier.text;
                const declaredType = type ? type.text : this.inferType(expr);
                
                this.symbolTable.set(name, {
                    type: declaredType || 'any',
                    used: false,
                    kind: 'Variable',
                    line: identifier.symbol.line,
                    column: identifier.symbol.charPositionInLine
                });

                if (expr) {
                    const exprType = this.getExpressionType(expr);
                    if (declaredType && exprType && declaredType !== exprType) {
                        this.addDiagnostic({
                            message: `Type '${exprType}' is not assignable to type '${declaredType}'`,
                            line: ctx.start.line,
                            column: expr.start.charPositionInLine,
                            severity: DiagnosticSeverity.Error
                        });
                    }
                }
            }
        } catch (error) {
            // Silently ignore errors for incomplete declarations during typing
        }
    }

    visitAssignmentStatement(ctx: AssignmentStatementContext): void {
        const identifier = ctx.IDENTIFIER();
        const expr = ctx.expression();
        const operator = ctx.children?.[1].text || '=';

        if (identifier) {
            const name = identifier.text;
            const symbol = this.symbolTable.get(name);

            if (!symbol) {
                this.addDiagnostic({
                    message: `Cannot find name '${name}'`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
                return;
            }

            if (expr) {
                const exprType = this.getExpressionType(expr);
                if (operator !== '=' && symbol.type !== 'number') {
                    this.addDiagnostic({
                        message: `Operator '${operator}' can only be applied to numeric types`,
                        line: ctx.start.line,
                        column: ctx.start.charPositionInLine,
                        severity: DiagnosticSeverity.Error
                    });
                } else if (exprType && symbol.type !== exprType) {
                    this.addDiagnostic({
                        message: `Type '${exprType}' is not assignable to type '${symbol.type}'`,
                        line: ctx.start.line,
                        column: expr.start.charPositionInLine,
                        severity: DiagnosticSeverity.Error
                    });
                }
            }

            // Mark the variable as used
            symbol.used = true;
            this.symbolTable.set(name, symbol);
        }
    }

    visitIncrementStatement(ctx: IncrementStatementContext): void {
        const identifier = ctx.IDENTIFIER();
        if (identifier) {
            const name = identifier.text;
            const symbol = this.symbolTable.get(name);

            if (!symbol) {
                this.addDiagnostic({
                    message: `Cannot find name '${name}'`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
                return;
            }

            if (symbol.type !== 'number') {
                this.addDiagnostic({
                    message: `The ${ctx.children?.[1].text} operator can only be applied to numeric types`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
                return;
            }

            // Mark the variable as used
            symbol.used = true;
            this.symbolTable.set(name, symbol);
        }
    }

    private inferType(expr: ExpressionContext | undefined): string | undefined {
        if (!expr) return undefined;
        return this.getExpressionType(expr);
    }

    private getExpressionType(ctx: ExpressionContext): string | undefined {
        if (ctx instanceof LiteralExprContext) {
            const literal = ctx.literal();
            if (literal instanceof NumberLiteralContext) return 'number';
            if (literal instanceof StringLiteralContext) return 'string';
            if (literal instanceof BooleanLiteralContext) return 'boolean';
        } else if (ctx instanceof IdentifierExprContext) {
            const symbol = this.symbolTable.get(ctx.IDENTIFIER().text);
            if (symbol) {
                symbol.used = true;
                this.symbolTable.set(ctx.IDENTIFIER().text, symbol);
                return symbol.type;
            }
        } else if (ctx instanceof FunctionCallExprContext) {
            const functionCall = ctx.functionCall();
            const name = functionCall.IDENTIFIER().text;
            const symbol = this.symbolTable.get(name);
            if (symbol) {
                symbol.used = true;
                this.symbolTable.set(name, symbol);
                return symbol.type;
            }
        } else if (ctx instanceof IncrementExprContext) {
            const symbol = this.symbolTable.get(ctx.IDENTIFIER().text);
            if (symbol) {
                if (symbol.type !== 'number') {
                    this.addDiagnostic({
                        message: `The ${ctx.children?.[1].text} operator can only be applied to numeric types`,
                        line: ctx.start.line,
                        column: ctx.start.charPositionInLine,
                        severity: DiagnosticSeverity.Error
                    });
                }
                symbol.used = true;
                this.symbolTable.set(ctx.IDENTIFIER().text, symbol);
                return 'number';
            }
        } else if (ctx instanceof BinaryExprContext) {
            const leftType = this.getExpressionType(ctx.expression(0));
            const rightType = this.getExpressionType(ctx.expression(1));
            const op = ctx.children?.[1].text || '';

            if (leftType === 'number' && rightType === 'number') {
                return 'number';
            }

            if (op === '+' && leftType === 'string' && rightType === 'string') {
                return 'string';
            }

            if (['>','<','>=','<=','==','!='].includes(op)) {
                return 'boolean';
            }

            this.addDiagnostic({
                message: `Operator '${op}' cannot be applied to types '${leftType}' and '${rightType}'`,
                line: ctx.start.line,
                column: ctx.start.charPositionInLine,
                severity: DiagnosticSeverity.Error
            });
        }
        return undefined;
    }

    getSymbols(): Map<string, { kind: string; type?: string }> {
        const symbols = new Map<string, { kind: string; type?: string }>();
        this.symbolTable.forEach((info, name) => {
            symbols.set(name, {
                kind: info.kind,
                type: info.type
            });
        });
        return symbols;
    }

    getDiagnostics(): Diagnostic[] {
        return this.diagnostics;
    }

    private addDiagnostic(diagnostic: Diagnostic): void {
        this.diagnostics.push(diagnostic);
    }

    protected defaultResult(): void {
        return;
    }

    visitFunctionDeclaration(ctx: FunctionDeclarationContext): void {
        const identifier = ctx.IDENTIFIER();
        const returnType = ctx.type();
        
        if (identifier) {
            const name = identifier.text;
            this.symbolTable.set(name, {
                type: returnType ? returnType.text : 'void',
                used: false,
                kind: 'Function',
                line: identifier.symbol.line,
                column: identifier.symbol.charPositionInLine
            });
        }

        // Visit function body
        if (ctx.block()) {
            this.visit(ctx.block());
        }
    }

    visitFunctionCall(ctx: FunctionCallContext): void {
        const identifier = ctx.IDENTIFIER();
        if (identifier) {
            const name = identifier.text;
            const symbol = this.symbolTable.get(name);

            if (!symbol) {
                this.addDiagnostic({
                    message: `Cannot find function '${name}'`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
                return;
            }

            if (symbol.kind !== 'Function') {
                this.addDiagnostic({
                    message: `'${name}' is not a function`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
                return;
            }

            // Mark the function as used
            symbol.used = true;
            this.symbolTable.set(name, symbol);
        }
    }
} 