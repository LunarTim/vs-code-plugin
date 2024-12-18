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
    FunctionCallExprContext,
    PropertyAccessExprContext
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
        isConst?: boolean;
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
            const declarationType = ctx.children?.[0].text; // 'let', 'const', or 'var'

            if (identifier) {
                const name = identifier.text;
                const declaredType = type ? type.text : undefined;
                
                // For const declarations, require an initializer
                if (declarationType === 'const' && !expr) {
                    this.addDiagnostic({
                        message: 'Const declarations must be initialized',
                        line: ctx.start.line,
                        column: ctx.start.charPositionInLine,
                        severity: DiagnosticSeverity.Error
                    });
                    return;
                }

                // If there's no declared type but there is an expression, infer the type
                const inferredType = this.inferType(expr);
                const effectiveType = declaredType || inferredType || 'any';

                console.log('Variable Declaration:', {
                    name,
                    declaredType,
                    inferredType,
                    effectiveType,
                    hasExpr: !!expr
                });

                // Check type compatibility before adding to symbol table
                if (expr && declaredType && inferredType) {
                    console.log('Type Checking:', {
                        declaredType,
                        inferredType,
                        expr: expr.text
                    });
                    if (declaredType !== inferredType) {
                        this.addDiagnostic({
                            message: `Type '${inferredType}' is not assignable to type '${declaredType}'`,
                            line: ctx.start.line,
                            column: expr.start.charPositionInLine,
                            severity: DiagnosticSeverity.Error
                        });
                    }
                }

                this.symbolTable.set(name, {
                    type: effectiveType,
                    used: false,
                    kind: 'Variable',
                    line: identifier.symbol.line,
                    column: identifier.symbol.charPositionInLine,
                    isConst: declarationType === 'const'
                });

                // If there's no type annotation, add a warning
                if (!declaredType) {
                    this.addDiagnostic({
                        message: 'Variable declaration should specify a type',
                        line: ctx.start.line,
                        column: ctx.start.charPositionInLine,
                        severity: DiagnosticSeverity.Warning
                    });
                }
            }
        } catch (error) {
            console.error('Error in visitVariableDeclaration:', error);
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

            // Check for const reassignment
            if (symbol.isConst) {
                this.addDiagnostic({
                    message: `Cannot assign to '${name}' because it is a constant`,
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

            // Check for const increment
            if (symbol.isConst) {
                this.addDiagnostic({
                    message: `Cannot increment '${name}' because it is a constant`,
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
            console.log('Literal Expression:', {
                text: ctx.text,
                literalType: literal.constructor.name
            });
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
        } else if (ctx instanceof PropertyAccessExprContext) {
            const objType = this.getExpressionType(ctx.expression());
            const prop = ctx.IDENTIFIER().text;

            if (objType === 'string') {
                if (prop === 'length') return 'number';
                this.addDiagnostic({
                    message: `Property '${prop}' does not exist on type 'string'`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
            } else {
                this.addDiagnostic({
                    message: `Property '${prop}' does not exist on type '${objType}'`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
            }
            return undefined;
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