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
    PropertyAccessExprContext,
    ConsoleLogStatementContext,
    IfStatementContext
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
        try {
            // Clear previous state
            this.symbolTable.clear();
            this.diagnostics = [];
            console.log('Starting semantic analysis...');

            // Visit all statements first
            ctx.statement().forEach(stmt => this.visit(stmt));

            // Then check for unused variables
            this.symbolTable.forEach((info, name) => {
                if (!info.used && info.kind === 'Variable') {
                    console.log('Found unused variable:', {
                        name,
                        info,
                        location: `line ${info.line}, column ${info.column}`
                    });
                    this.addDiagnostic({
                        message: `Variable '${name}' is declared but never used`,
                        line: info.line,
                        column: info.column,
                        severity: DiagnosticSeverity.Warning
                    });
                }
            });

            console.log('Semantic analysis completed. Generated diagnostics:', this.diagnostics);
        } catch (error) {
            console.error('Error in visitProgram:', error);
        }
    }

    visitVariableDeclaration(ctx: VariableDeclarationContext): void {
        try {
            const identifier = ctx.IDENTIFIER();
            const type = ctx.type();
            const expr = ctx.expression();
            const declarationType = ctx.children?.[0].text; // 'let', 'const', or 'var'

            console.log('Processing variable declaration:', {
                identifier: identifier?.text,
                declaredType: type?.text,
                expression: expr?.text,
                declarationType,
                line: ctx.start.line,
                column: ctx.start.charPositionInLine
            });

            if (identifier) {
                const name = identifier.text;
                const declaredType = type ? type.text : undefined;

                // Add warning for missing type annotation
                if (!declaredType) {
                    this.addDiagnostic({
                        message: `Variable '${name}' is missing type annotation`,
                        line: ctx.start.line,
                        column: identifier.symbol.charPositionInLine,
                        severity: DiagnosticSeverity.Warning
                    });
                }

                // Get the type of the initializer expression
                const inferredType = expr ? this.getExpressionType(expr) : undefined;
                console.log('Type checking:', {
                    name,
                    declaredType,
                    inferredType,
                    expr: expr?.text,
                    line: ctx.start.line,
                    column: expr?.start.charPositionInLine
                });

                // Check type compatibility
                if (expr && declaredType && inferredType && declaredType !== inferredType) {
                    const exprStartColumn = expr.start.charPositionInLine;
                    console.log(`Type mismatch: ${inferredType} is not assignable to ${declaredType} at column ${exprStartColumn}`);
                    this.addDiagnostic({
                        message: `Type '${inferredType}' is not assignable to type '${declaredType}'`,
                        line: ctx.start.line,
                        column: exprStartColumn,
                        severity: DiagnosticSeverity.Error
                    });
                }

                // Add to symbol table
                this.symbolTable.set(name, {
                    type: declaredType || inferredType || 'any',
                    used: false,
                    kind: 'Variable',
                    line: identifier.symbol.line,
                    column: identifier.symbol.charPositionInLine,
                    isConst: declarationType === 'const'
                });

                console.log('Added to symbol table:', {
                    name,
                    symbol: this.symbolTable.get(name)
                });
            }
        } catch (error) {
            console.error('Error in visitVariableDeclaration:', error);
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
        console.log('Getting expression type for:', {
            text: ctx.text,
            type: ctx.constructor.name,
            start: { line: ctx.start.line, column: ctx.start.charPositionInLine }
        });

        if (ctx instanceof LiteralExprContext) {
            const literal = ctx.literal();
            console.log('Literal Expression:', {
                text: ctx.text,
                literalType: literal.constructor.name,
                rawText: literal.text,
                start: { line: literal.start.line, column: literal.start.charPositionInLine }
            });

            // Check if it's a string literal (wrapped in quotes)
            if (literal.text.startsWith('"') || literal.text.startsWith("'")) {
                return 'string';
            }
            // Check if it's a number
            if (/^[0-9]+(\.[0-9]+)?$/.test(literal.text)) {
                return 'number';
            }
            // Check if it's a boolean
            if (literal.text === 'true' || literal.text === 'false') {
                return 'boolean';
            }
            // If it's a number in quotes, it's still a string
            if (/^["'][0-9]+(\.[0-9]+)?["']$/.test(literal.text)) {
                return 'string';
            }
        } else if (ctx instanceof IdentifierExprContext) {
            const identifier = ctx.IDENTIFIER();
            const name = identifier.text;
            const symbol = this.symbolTable.get(name);

            console.log('Identifier Expression:', {
                name,
                symbol,
                location: {
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine
                }
            });

            if (symbol) {
                // Mark the variable as used when referenced
                symbol.used = true;
                this.symbolTable.set(name, symbol);
                return symbol.type;
            } else {
                this.addDiagnostic({
                    message: `Cannot find name '${name}'`,
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine,
                    severity: DiagnosticSeverity.Error
                });
            }
        } else if (ctx instanceof BinaryExprContext) {
            const leftType = this.getExpressionType(ctx.expression(0));
            const rightType = this.getExpressionType(ctx.expression(1));
            const op = ctx.children?.[1].text || '';

            console.log('Binary Expression:', {
                operator: op,
                leftType,
                rightType,
                location: {
                    line: ctx.start.line,
                    column: ctx.start.charPositionInLine
                }
            });

            if (leftType === 'number' && rightType === 'number') {
                return 'number';
            }

            if (op === '+' && leftType === 'string' && rightType === 'string') {
                return 'string';
            }

            if (['>', '<', '>=', '<=', '==', '!='].includes(op)) {
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
        console.log('Adding diagnostic:', diagnostic);
        this.diagnostics.push(diagnostic);
    }

    protected defaultResult(): void {
        return;
    }

    visitFunctionDeclaration(ctx: FunctionDeclarationContext): void {
        try {
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

            // Visit function body if it exists
            try {
                const block = ctx.block();
                if (block) {
                    this.visit(block);
                }
            } catch (error) {
                // Ignore block errors during typing
            }
        } catch (error) {
            console.error('Error in visitFunctionDeclaration:', error);
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

    visitConsoleLogStatement(ctx: ConsoleLogStatementContext): void {
        try {
            const expr = ctx.expression();
            if (expr) {
                // This will mark any variables in the expression as used
                this.getExpressionType(expr);
            }
        } catch (error) {
            console.error('Error in visitConsoleLogStatement:', error);
        }
    }

    visitIfStatement(ctx: IfStatementContext): void {
        try {
            const condition = ctx.expression();
            if (condition) {
                // This will mark any variables in the condition as used
                this.getExpressionType(condition);
            }

            // Visit the if block and else block if they exist
            const blocks = ctx.block();
            blocks.forEach(block => this.visit(block));
        } catch (error) {
            console.error('Error in visitIfStatement:', error);
        }
    }
} 