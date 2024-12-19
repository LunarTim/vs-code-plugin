// Generated from src/grammar/Lumina.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { LiteralExprContext } from "./LuminaParser";
import { IdentifierExprContext } from "./LuminaParser";
import { IncrementExprContext } from "./LuminaParser";
import { FunctionCallExprContext } from "./LuminaParser";
import { PropertyAccessExprContext } from "./LuminaParser";
import { ParenExprContext } from "./LuminaParser";
import { BinaryExprContext } from "./LuminaParser";
import { LogicalAndExprContext } from "./LuminaParser";
import { LogicalOrExprContext } from "./LuminaParser";
import { NumberLiteralContext } from "./LuminaParser";
import { StringLiteralContext } from "./LuminaParser";
import { BooleanLiteralContext } from "./LuminaParser";
import { ProgramContext } from "./LuminaParser";
import { StatementContext } from "./LuminaParser";
import { VariableDeclarationContext } from "./LuminaParser";
import { AssignmentStatementContext } from "./LuminaParser";
import { ConsoleLogStatementContext } from "./LuminaParser";
import { IncrementStatementContext } from "./LuminaParser";
import { FunctionDeclarationContext } from "./LuminaParser";
import { ParameterListContext } from "./LuminaParser";
import { ParameterContext } from "./LuminaParser";
import { TypeContext } from "./LuminaParser";
import { BlockContext } from "./LuminaParser";
import { ExpressionStatementContext } from "./LuminaParser";
import { IfStatementContext } from "./LuminaParser";
import { ForStatementContext } from "./LuminaParser";
import { ReturnStatementContext } from "./LuminaParser";
import { ExpressionContext } from "./LuminaParser";
import { FunctionCallContext } from "./LuminaParser";
import { ArgumentListContext } from "./LuminaParser";
import { LiteralContext } from "./LuminaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `LuminaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface LuminaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `literalExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpr?: (ctx: LiteralExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `identifierExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierExpr?: (ctx: IdentifierExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `incrementExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncrementExpr?: (ctx: IncrementExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `functionCallExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCallExpr?: (ctx: FunctionCallExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `propertyAccessExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyAccessExpr?: (ctx: PropertyAccessExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenExpr?: (ctx: ParenExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `binaryExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinaryExpr?: (ctx: BinaryExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalAndExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalAndExpr?: (ctx: LogicalAndExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `logicalOrExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicalOrExpr?: (ctx: LogicalOrExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `numberLiteral`
	 * labeled alternative in `LuminaParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberLiteral?: (ctx: NumberLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `LuminaParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `LuminaParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

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
	 * Visit a parse tree produced by `LuminaParser.assignmentStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentStatement?: (ctx: AssignmentStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LuminaParser.consoleLogStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConsoleLogStatement?: (ctx: ConsoleLogStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LuminaParser.incrementStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncrementStatement?: (ctx: IncrementStatementContext) => Result;

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
	 * Visit a parse tree produced by `LuminaParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `LuminaParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

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
	 * Visit a parse tree produced by `LuminaParser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `LuminaParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `LuminaParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `LuminaParser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;

	/**
	 * Visit a parse tree produced by `LuminaParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
}

