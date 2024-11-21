// Generated from Lumina.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


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
 * This interface defines a complete listener for a parse tree produced by
 * `LuminaParser`.
 */
export default class LuminaListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `LuminaParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;
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
	 * Enter a parse tree produced by `LuminaParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	enterAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.assignmentExpression`.
	 * @param ctx the parse tree
	 */
	exitAssignmentExpression?: (ctx: AssignmentExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	enterConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.conditionalExpression`.
	 * @param ctx the parse tree
	 */
	exitConditionalExpression?: (ctx: ConditionalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.logicalOrExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalOrExpression?: (ctx: LogicalOrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	enterLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.logicalAndExpression`.
	 * @param ctx the parse tree
	 */
	exitLogicalAndExpression?: (ctx: LogicalAndExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	enterEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.equalityExpression`.
	 * @param ctx the parse tree
	 */
	exitEqualityExpression?: (ctx: EqualityExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	enterRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.relationalExpression`.
	 * @param ctx the parse tree
	 */
	exitRelationalExpression?: (ctx: RelationalExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	enterAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.additiveExpression`.
	 * @param ctx the parse tree
	 */
	exitAdditiveExpression?: (ctx: AdditiveExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	enterUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.unaryExpression`.
	 * @param ctx the parse tree
	 */
	exitUnaryExpression?: (ctx: UnaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	enterPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.postfixExpression`.
	 * @param ctx the parse tree
	 */
	exitPostfixExpression?: (ctx: PostfixExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	enterPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.primaryExpression`.
	 * @param ctx the parse tree
	 */
	exitPrimaryExpression?: (ctx: PrimaryExpressionContext) => void;
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
	 * Enter a parse tree produced by `LuminaParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	enterAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.assignmentOperator`.
	 * @param ctx the parse tree
	 */
	exitAssignmentOperator?: (ctx: AssignmentOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.equalityOperator`.
	 * @param ctx the parse tree
	 */
	enterEqualityOperator?: (ctx: EqualityOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.equalityOperator`.
	 * @param ctx the parse tree
	 */
	exitEqualityOperator?: (ctx: EqualityOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.relationalOperator`.
	 * @param ctx the parse tree
	 */
	enterRelationalOperator?: (ctx: RelationalOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.relationalOperator`.
	 * @param ctx the parse tree
	 */
	exitRelationalOperator?: (ctx: RelationalOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.additiveOperator`.
	 * @param ctx the parse tree
	 */
	enterAdditiveOperator?: (ctx: AdditiveOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.additiveOperator`.
	 * @param ctx the parse tree
	 */
	exitAdditiveOperator?: (ctx: AdditiveOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 */
	enterMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.multiplicativeOperator`.
	 * @param ctx the parse tree
	 */
	exitMultiplicativeOperator?: (ctx: MultiplicativeOperatorContext) => void;
	/**
	 * Enter a parse tree produced by `LuminaParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	enterUnaryOperator?: (ctx: UnaryOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `LuminaParser.unaryOperator`.
	 * @param ctx the parse tree
	 */
	exitUnaryOperator?: (ctx: UnaryOperatorContext) => void;
}

