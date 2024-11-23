// Generated from Lumina.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./LuminaParser";
import { StatementContext } from "./LuminaParser";
import { VariableDeclarationContext } from "./LuminaParser";
import { FunctionDeclarationContext } from "./LuminaParser";
import { ParameterListContext } from "./LuminaParser";
import { ParameterContext } from "./LuminaParser";
import { ExpressionStatementContext } from "./LuminaParser";
import { IfStatementContext } from "./LuminaParser";
import { ForStatementContext } from "./LuminaParser";
import { WhileStatementContext } from "./LuminaParser";
import { ReturnStatementContext } from "./LuminaParser";
import { PrintStatementContext } from "./LuminaParser";
import { BlockContext } from "./LuminaParser";
import { ExpressionContext } from "./LuminaParser";
import { AssignmentExpressionContext } from "./LuminaParser";
import { ConditionalExpressionContext } from "./LuminaParser";
import { LogicalOrExpressionContext } from "./LuminaParser";
import { LogicalAndExpressionContext } from "./LuminaParser";
import { EqualityExpressionContext } from "./LuminaParser";
import { RelationalExpressionContext } from "./LuminaParser";
import { AdditiveExpressionContext } from "./LuminaParser";
import { MultiplicativeExpressionContext } from "./LuminaParser";
import { LambdaExpressionContext } from "./LuminaParser";
import { ArrayExpressionContext } from "./LuminaParser";
import { UnaryExpressionContext } from "./LuminaParser";
import { PostfixExpressionContext } from "./LuminaParser";
import { PrimaryExpressionContext } from "./LuminaParser";
import { TypeContext } from "./LuminaParser";
import { AssignmentOperatorContext } from "./LuminaParser";
import { EqualityOperatorContext } from "./LuminaParser";
import { RelationalOperatorContext } from "./LuminaParser";
import { AdditiveOperatorContext } from "./LuminaParser";
import { MultiplicativeOperatorContext } from "./LuminaParser";
import { UnaryOperatorContext } from "./LuminaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LuminaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class LuminaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `LuminaParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.variableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaration?: (ctx: VariableDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.functionDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.parameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterList?: (ctx: ParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.parameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameter?: (ctx: ParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.ifStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStatement?: (ctx: IfStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.printStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStatement?: (ctx: PrintStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.assignmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.equalityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.lambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.arrayExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayExpression?: (ctx: ArrayExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.primaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryExpression?: (ctx: PrimaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.equalityOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityOperator?: (ctx: EqualityOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.relationalOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalOperator?: (ctx: RelationalOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.additiveOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveOperator?: (ctx: AdditiveOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `LuminaParser.unaryOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOperator?: (ctx: UnaryOperatorContext) => Result;
}

