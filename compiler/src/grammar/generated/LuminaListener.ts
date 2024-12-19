// Generated from src/grammar/Lumina.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `LuminaParser`.
 */
export interface LuminaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `literalExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpr?: (ctx: LiteralExprContext) => void;
	/**
	 * Exit a parse tree produced by the `literalExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpr?: (ctx: LiteralExprContext) => void;

	/**
	 * Enter a parse tree produced by the `identifierExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpr?: (ctx: IdentifierExprContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpr?: (ctx: IdentifierExprContext) => void;

	/**
	 * Enter a parse tree produced by the `incrementExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIncrementExpr?: (ctx: IncrementExprContext) => void;
	/**
	 * Exit a parse tree produced by the `incrementExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIncrementExpr?: (ctx: IncrementExprContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCallExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpr?: (ctx: FunctionCallExprContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCallExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpr?: (ctx: FunctionCallExprContext) => void;

	/**
	 * Enter a parse tree produced by the `propertyAccessExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPropertyAccessExpr?: (ctx: PropertyAccessExprContext) => void;
	/**
	 * Exit a parse tree produced by the `propertyAccessExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPropertyAccessExpr?: (ctx: PropertyAccessExprContext) => void;

	/**
	 * Enter a parse tree produced by the `parenExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenExpr?: (ctx: ParenExprContext) => void;
	/**
	 * Exit a parse tree produced by the `parenExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenExpr?: (ctx: ParenExprContext) => void;

	/**
	 * Enter a parse tree produced by the `binaryExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBinaryExpr?: (ctx: BinaryExprContext) => void;
	/**
	 * Exit a parse tree produced by the `binaryExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBinaryExpr?: (ctx: BinaryExprContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalAndExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpr?: (ctx: LogicalAndExprContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalAndExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpr?: (ctx: LogicalAndExprContext) => void;

	/**
	 * Enter a parse tree produced by the `logicalOrExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpr?: (ctx: LogicalOrExprContext) => void;
	/**
	 * Exit a parse tree produced by the `logicalOrExpr`
	 * labeled alternative in `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpr?: (ctx: LogicalOrExprContext) => void;

	/**
	 * Enter a parse tree produced by the `numberLiteral`
	 * labeled alternative in `LuminaParser.literal`.
	 * @param ctx the parse tree
	 */
	enterNumberLiteral?: (ctx: NumberLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `numberLiteral`
	 * labeled alternative in `LuminaParser.literal`.
	 * @param ctx the parse tree
	 */
	exitNumberLiteral?: (ctx: NumberLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `stringLiteral`
	 * labeled alternative in `LuminaParser.literal`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `stringLiteral`
	 * labeled alternative in `LuminaParser.literal`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `LuminaParser.literal`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `booleanLiteral`
	 * labeled alternative in `LuminaParser.literal`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	enterVariableDeclaration?: (ctx: VariableDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.variableDeclaration`.
	 * @param ctx the parse tree
	 */
	exitVariableDeclaration?: (ctx: VariableDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentStatement?: (ctx: AssignmentStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.assignmentStatement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentStatement?: (ctx: AssignmentStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.consoleLogStatement`.
	 * @param ctx the parse tree
	 */
	enterConsoleLogStatement?: (ctx: ConsoleLogStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.consoleLogStatement`.
	 * @param ctx the parse tree
	 */
	exitConsoleLogStatement?: (ctx: ConsoleLogStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.incrementStatement`.
	 * @param ctx the parse tree
	 */
	enterIncrementStatement?: (ctx: IncrementStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.incrementStatement`.
	 * @param ctx the parse tree
	 */
	exitIncrementStatement?: (ctx: IncrementStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterParameter?: (ctx: ParameterContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitParameter?: (ctx: ParameterContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	enterExpressionStatement?: (ctx: ExpressionStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.expressionStatement`.
	 * @param ctx the parse tree
	 */
	exitExpressionStatement?: (ctx: ExpressionStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.argumentList`.
	 * @param ctx the parse tree
	 */
	enterArgumentList?: (ctx: ArgumentListContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.argumentList`.
	 * @param ctx the parse tree
	 */
	exitArgumentList?: (ctx: ArgumentListContext) => void;

	/**
	 * Enter a parse tree produced by `LuminaParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;
}

