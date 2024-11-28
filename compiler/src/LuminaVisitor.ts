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
import {
    ASTNode,
    ProgramNode,
    StatementNode,
    VariableDeclarationNode,
    VariableAssignmentNode,
    FunctionDeclarationNode,
    ExpressionStatementNode,
    IfStatementNode,
    ForStatementNode,
    WhileStatementNode,
    ReturnStatementNode,
    PrintStatementNode,
    BlockNode,
    ExpressionNode,
    LiteralNode,
    IdentifierNode,
    BinaryExpressionNode,
    CallExpressionNode,
    UnaryExpressionNode,
    ArrayExpressionNode,
    LambdaExpressionNode,
    TypeNode
} from './ast';

export interface SymbolTable {
    [key: string]: {
        type: string;
        value?: any;
        isConstant?: boolean;
    };
}

export class LuminaVisitor extends ParseTreeVisitor<ASTNode> {
    private symbolTable: SymbolTable = {};
    private errors: string[] = [];

    visitProgram(ctx: ProgramContext): ProgramNode {
        const statements = [];
        for (let i = 0; i < ctx.statement_list().length; i++) {
            const stmt = ctx.statement_list()[i];
            if (stmt) {
                statements.push(this.visit(stmt) as StatementNode);
            }
        }
        return {
            type: 'Program',
            body: statements
        };
    }

    visitVariableDeclaration(ctx: VariableDeclarationContext): VariableDeclarationNode {
        const identifier = ctx.IDENTIFIER().getText();
        const typeCtx = ctx.type_();
        const type = typeCtx ? this.visit(typeCtx) as TypeNode : undefined;
        const text = ctx.getText();
        const isConstant = text.startsWith('const');

        if (this.symbolTable[identifier]) {
            this.errors.push(`Variable '${identifier}' is already declared`);
        }

        this.symbolTable[identifier] = {
            type: type?.name || 'any',
            isConstant
        };

        const expression = ctx.expression();
        const initializer = expression ? this.visitExpression(expression) : undefined;

        if (initializer) {
            this.symbolTable[identifier].value = initializer;
        }

        return {
            type: 'VariableDeclaration',
            kind: isConstant ? 'const' : text.startsWith('let') ? 'let' : 'var',
            identifier: { type: 'Identifier', name: identifier },
            varType: type,
            initializer
        };
    }

    visitVariableAssignment(ctx: VariableAssignmentContext): VariableAssignmentNode {
        const identifier = ctx.IDENTIFIER(0).getText();
        if (!this.symbolTable[identifier]) {
            this.errors.push(`Variable '${identifier}' is not declared`);
        }

        if (this.symbolTable[identifier]?.isConstant) {
            this.errors.push(`Cannot reassign constant '${identifier}'`);
        }

        const value = this.visit(ctx.expression()) as ExpressionNode;
        if (this.symbolTable[identifier]) {
            this.symbolTable[identifier].value = value;
        }

        return {
            type: 'VariableAssignment',
            identifier: { type: 'Identifier', name: identifier },
            operator: { type: 'AssignmentOperator', operator: '=' },
            value
        };
    }

    visitType(ctx: TypeContext): TypeNode {
        return {
            type: 'Type',
            name: ctx.getText()
        };
    }

    visitExpression(ctx: ExpressionContext): ExpressionNode {
        return {
            type: 'Literal',
            value: ctx.getText()
        } as LiteralNode;
    }

    getErrors(): string[] {
        return this.errors;
    }

    getSymbolTable(): SymbolTable {
        return this.symbolTable;
    }
} 