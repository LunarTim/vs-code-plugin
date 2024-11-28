import { ParseTreeVisitor } from 'antlr4';
import {
    ProgramContext,
    StatementContext,
    VariableDeclarationContext,
    VariableAssignmentContext,
    FunctionDeclarationContext,
    ExpressionStatementContext,
    IfStatementContext,
    ForStatementContext,
    WhileStatementContext,
    ReturnStatementContext,
    PrintStatementContext,
    BlockContext,
    ExpressionContext,
    AssignmentExpressionContext,
    ConditionalExpressionContext,
    LogicalOrExpressionContext,
    LogicalAndExpressionContext,
    EqualityExpressionContext,
    RelationalExpressionContext,
    AdditiveExpressionContext,
    MultiplicativeExpressionContext,
    UnaryExpressionContext,
    PostfixExpressionContext,
    PrimaryExpressionContext,
    MethodCallContext,
    TypeContext
} from './antlr/generated/LuminaParser';

export interface SymbolTable {
    [key: string]: {
        type: string;
        value?: any;
        isConstant?: boolean;
    };
}

export class LuminaVisitor extends ParseTreeVisitor<any> {
    private symbolTable: SymbolTable = {};
    private errors: string[] = [];

    visitProgram(ctx: ProgramContext): any {
        return this.visitChildren(ctx);
    }

    visitStatement(ctx: StatementContext): any {
        return this.visitChildren(ctx);
    }

    visitVariableDeclaration(ctx: VariableDeclarationContext): any {
        const identifier = ctx.IDENTIFIER().getText();
        const typeCtx = ctx.type_();
        const type = typeCtx ? this.visit(typeCtx) : 'any';
        const isConstant = ctx.getText().startsWith("const" || "let" || "var");

        if (this.symbolTable[identifier]) {
            this.errors.push(`Variable '${identifier}' is already declared`);
            return;
        }

        this.symbolTable[identifier] = {
            type,
            isConstant
        };

        const expression = ctx.expression();
        if (expression) {
            const value = this.visit(expression);
            this.symbolTable[identifier].value = value;
        }

        return null;
    }

    visitVariableAssignment(ctx: VariableAssignmentContext): any {
        const identifier = ctx.IDENTIFIER(0).getText();
        if (!this.symbolTable[identifier]) {
            this.errors.push(`Variable '${identifier}' is not declared`);
            return;
        }

        if (this.symbolTable[identifier].isConstant) {
            this.errors.push(`Cannot reassign constant '${identifier}'`);
            return;
        }

        const value = this.visit(ctx.expression());
        this.symbolTable[identifier].value = value;
        return value;
    }

    visitFunctionDeclaration(ctx: FunctionDeclarationContext): any {
        const identifier = ctx.IDENTIFIER().getText();
        const returnType = ctx.type_() ? this.visit(ctx.type_()) : 'void';

        if (this.symbolTable[identifier]) {
            this.errors.push(`Function '${identifier}' is already declared`);
            return;
        }

        this.symbolTable[identifier] = {
            type: 'function',
            value: {
                returnType,
                parameters: ctx.parameterList() ? this.visit(ctx.parameterList()) : []
            }
        };

        return null;
    }

    visitExpression(ctx: ExpressionContext): any {
        return this.visitChildren(ctx);
    }

    visitPrimaryExpression(ctx: PrimaryExpressionContext): any {
        if (ctx.IDENTIFIER()) {
            const identifier = ctx.IDENTIFIER().getText();
            if (!this.symbolTable[identifier]) {
                this.errors.push(`Variable '${identifier}' is not declared`);
                return null;
            }
            return this.symbolTable[identifier].value;
        }
        return this.visitChildren(ctx);
    }

    visitType(ctx: TypeContext): string {
        return ctx.getText();
    }

    visitMethodCall(ctx: MethodCallContext): any {
        const identifier = ctx.primaryExpression(0).getText();
        if (!this.symbolTable[identifier]) {
            this.errors.push(`Function '${identifier}' is not declared`);
            return null;
        }
        return null;
    }

    getErrors(): string[] {
        return this.errors;
    }

    getSymbolTable(): SymbolTable {
        return this.symbolTable;
    }
} 