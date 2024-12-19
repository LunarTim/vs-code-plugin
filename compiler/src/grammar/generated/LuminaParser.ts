// Generated from src/grammar/Lumina.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { LuminaListener } from "./LuminaListener";
import { LuminaVisitor } from "./LuminaVisitor";


export class LuminaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly NUMBER = 41;
	public static readonly STRING = 42;
	public static readonly BOOLEAN = 43;
	public static readonly IDENTIFIER = 44;
	public static readonly WS = 45;
	public static readonly COMMENT = 46;
	public static readonly MULTILINE_COMMENT = 47;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_variableDeclaration = 2;
	public static readonly RULE_assignmentStatement = 3;
	public static readonly RULE_consoleLogStatement = 4;
	public static readonly RULE_incrementStatement = 5;
	public static readonly RULE_functionDeclaration = 6;
	public static readonly RULE_parameterList = 7;
	public static readonly RULE_parameter = 8;
	public static readonly RULE_type = 9;
	public static readonly RULE_block = 10;
	public static readonly RULE_expressionStatement = 11;
	public static readonly RULE_ifStatement = 12;
	public static readonly RULE_forStatement = 13;
	public static readonly RULE_returnStatement = 14;
	public static readonly RULE_expression = 15;
	public static readonly RULE_functionCall = 16;
	public static readonly RULE_argumentList = 17;
	public static readonly RULE_literal = 18;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "variableDeclaration", "assignmentStatement", 
		"consoleLogStatement", "incrementStatement", "functionDeclaration", "parameterList", 
		"parameter", "type", "block", "expressionStatement", "ifStatement", "forStatement", 
		"returnStatement", "expression", "functionCall", "argumentList", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'let'", "'const'", "'var'", "':'", "'='", "';'", "'+='", "'-='", 
		"'*='", "'/='", "'console.log'", "'('", "')'", "'++'", "'--'", "'function'", 
		"','", "'number'", "'string'", "'boolean'", "'void'", "'{'", "'}'", "'if'", 
		"'else'", "'for'", "'return'", "'.'", "'*'", "'/'", "'+'", "'-'", "'=='", 
		"'!='", "'<'", "'>'", "'<='", "'>='", "'&&'", "'||'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "NUMBER", 
		"STRING", "BOOLEAN", "IDENTIFIER", "WS", "COMMENT", "MULTILINE_COMMENT",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LuminaParser._LITERAL_NAMES, LuminaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LuminaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Lumina.g4"; }

	// @Override
	public get ruleNames(): string[] { return LuminaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return LuminaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(LuminaParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, LuminaParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuminaParser.T__0) | (1 << LuminaParser.T__1) | (1 << LuminaParser.T__2) | (1 << LuminaParser.T__10) | (1 << LuminaParser.T__11) | (1 << LuminaParser.T__15) | (1 << LuminaParser.T__23) | (1 << LuminaParser.T__25) | (1 << LuminaParser.T__26))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LuminaParser.NUMBER - 41)) | (1 << (LuminaParser.STRING - 41)) | (1 << (LuminaParser.BOOLEAN - 41)) | (1 << (LuminaParser.IDENTIFIER - 41)))) !== 0)) {
				{
				{
				this.state = 38;
				this.statement();
				}
				}
				this.state = 43;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 44;
			this.match(LuminaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, LuminaParser.RULE_statement);
		try {
			this.state = 55;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 46;
				this.variableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 47;
				this.assignmentStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 48;
				this.consoleLogStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 49;
				this.incrementStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 50;
				this.functionDeclaration();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 51;
				this.expressionStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 52;
				this.ifStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 53;
				this.forStatement();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 54;
				this.returnStatement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let _localctx: VariableDeclarationContext = new VariableDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, LuminaParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 57;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuminaParser.T__0) | (1 << LuminaParser.T__1) | (1 << LuminaParser.T__2))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 58;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 61;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__3) {
				{
				this.state = 59;
				this.match(LuminaParser.T__3);
				this.state = 60;
				this.type();
				}
			}

			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__4) {
				{
				this.state = 63;
				this.match(LuminaParser.T__4);
				this.state = 64;
				this.expression(0);
				}
			}

			this.state = 67;
			this.match(LuminaParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public assignmentStatement(): AssignmentStatementContext {
		let _localctx: AssignmentStatementContext = new AssignmentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LuminaParser.RULE_assignmentStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 70;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuminaParser.T__4) | (1 << LuminaParser.T__6) | (1 << LuminaParser.T__7) | (1 << LuminaParser.T__8) | (1 << LuminaParser.T__9))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 71;
			this.expression(0);
			this.state = 72;
			this.match(LuminaParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public consoleLogStatement(): ConsoleLogStatementContext {
		let _localctx: ConsoleLogStatementContext = new ConsoleLogStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LuminaParser.RULE_consoleLogStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(LuminaParser.T__10);
			this.state = 75;
			this.match(LuminaParser.T__11);
			this.state = 76;
			this.expression(0);
			this.state = 77;
			this.match(LuminaParser.T__12);
			this.state = 78;
			this.match(LuminaParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public incrementStatement(): IncrementStatementContext {
		let _localctx: IncrementStatementContext = new IncrementStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, LuminaParser.RULE_incrementStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 81;
			_la = this._input.LA(1);
			if (!(_la === LuminaParser.T__13 || _la === LuminaParser.T__14)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 82;
			this.match(LuminaParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, LuminaParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.match(LuminaParser.T__15);
			this.state = 85;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 86;
			this.match(LuminaParser.T__11);
			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.IDENTIFIER) {
				{
				this.state = 87;
				this.parameterList();
				}
			}

			this.state = 90;
			this.match(LuminaParser.T__12);
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__3) {
				{
				this.state = 91;
				this.match(LuminaParser.T__3);
				this.state = 92;
				this.type();
				}
			}

			this.state = 95;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, LuminaParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.parameter();
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuminaParser.T__16) {
				{
				{
				this.state = 98;
				this.match(LuminaParser.T__16);
				this.state = 99;
				this.parameter();
				}
				}
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, LuminaParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 105;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 106;
			this.match(LuminaParser.T__3);
			this.state = 107;
			this.type();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, LuminaParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuminaParser.T__17) | (1 << LuminaParser.T__18) | (1 << LuminaParser.T__19) | (1 << LuminaParser.T__20))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, LuminaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.match(LuminaParser.T__21);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuminaParser.T__0) | (1 << LuminaParser.T__1) | (1 << LuminaParser.T__2) | (1 << LuminaParser.T__10) | (1 << LuminaParser.T__11) | (1 << LuminaParser.T__15) | (1 << LuminaParser.T__23) | (1 << LuminaParser.T__25) | (1 << LuminaParser.T__26))) !== 0) || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LuminaParser.NUMBER - 41)) | (1 << (LuminaParser.STRING - 41)) | (1 << (LuminaParser.BOOLEAN - 41)) | (1 << (LuminaParser.IDENTIFIER - 41)))) !== 0)) {
				{
				{
				this.state = 112;
				this.statement();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 118;
			this.match(LuminaParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let _localctx: ExpressionStatementContext = new ExpressionStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, LuminaParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.expression(0);
			this.state = 121;
			this.match(LuminaParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LuminaParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.match(LuminaParser.T__23);
			this.state = 124;
			this.match(LuminaParser.T__11);
			this.state = 125;
			this.expression(0);
			this.state = 126;
			this.match(LuminaParser.T__12);
			this.state = 127;
			this.block();
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__24) {
				{
				this.state = 128;
				this.match(LuminaParser.T__24);
				this.state = 129;
				this.block();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let _localctx: ForStatementContext = new ForStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, LuminaParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 132;
			this.match(LuminaParser.T__25);
			this.state = 133;
			this.match(LuminaParser.T__11);
			this.state = 134;
			this.variableDeclaration();
			this.state = 135;
			this.expression(0);
			this.state = 136;
			this.match(LuminaParser.T__5);
			this.state = 137;
			this.expression(0);
			this.state = 138;
			this.match(LuminaParser.T__12);
			this.state = 139;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, LuminaParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(LuminaParser.T__26);
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__11 || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LuminaParser.NUMBER - 41)) | (1 << (LuminaParser.STRING - 41)) | (1 << (LuminaParser.BOOLEAN - 41)) | (1 << (LuminaParser.IDENTIFIER - 41)))) !== 0)) {
				{
				this.state = 142;
				this.expression(0);
				}
			}

			this.state = 145;
			this.match(LuminaParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 30;
		this.enterRecursionRule(_localctx, 30, LuminaParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 148;
				this.literal();
				}
				break;

			case 2:
				{
				_localctx = new IdentifierExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 149;
				this.match(LuminaParser.IDENTIFIER);
				}
				break;

			case 3:
				{
				_localctx = new IncrementExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 150;
				this.match(LuminaParser.IDENTIFIER);
				this.state = 151;
				_la = this._input.LA(1);
				if (!(_la === LuminaParser.T__13 || _la === LuminaParser.T__14)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;

			case 4:
				{
				_localctx = new FunctionCallExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 152;
				this.functionCall();
				}
				break;

			case 5:
				{
				_localctx = new ParenExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 153;
				this.match(LuminaParser.T__11);
				this.state = 154;
				this.expression(0);
				this.state = 155;
				this.match(LuminaParser.T__12);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 179;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 177;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new BinaryExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 159;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 160;
						(_localctx as BinaryExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === LuminaParser.T__28 || _la === LuminaParser.T__29)) {
							(_localctx as BinaryExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 161;
						this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new BinaryExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 162;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 163;
						(_localctx as BinaryExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === LuminaParser.T__30 || _la === LuminaParser.T__31)) {
							(_localctx as BinaryExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 164;
						this.expression(5);
						}
						break;

					case 3:
						{
						_localctx = new BinaryExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 165;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 166;
						(_localctx as BinaryExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (LuminaParser.T__32 - 33)) | (1 << (LuminaParser.T__33 - 33)) | (1 << (LuminaParser.T__34 - 33)) | (1 << (LuminaParser.T__35 - 33)) | (1 << (LuminaParser.T__36 - 33)) | (1 << (LuminaParser.T__37 - 33)))) !== 0))) {
							(_localctx as BinaryExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 167;
						this.expression(4);
						}
						break;

					case 4:
						{
						_localctx = new LogicalAndExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 168;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 169;
						this.match(LuminaParser.T__38);
						this.state = 170;
						this.expression(3);
						}
						break;

					case 5:
						{
						_localctx = new LogicalOrExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 171;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 172;
						this.match(LuminaParser.T__39);
						this.state = 173;
						this.expression(2);
						}
						break;

					case 6:
						{
						_localctx = new PropertyAccessExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 174;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 175;
						this.match(LuminaParser.T__27);
						this.state = 176;
						this.match(LuminaParser.IDENTIFIER);
						}
						break;
					}
					}
				}
				this.state = 181;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, LuminaParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 183;
			this.match(LuminaParser.T__11);
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__11 || ((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & ((1 << (LuminaParser.NUMBER - 41)) | (1 << (LuminaParser.STRING - 41)) | (1 << (LuminaParser.BOOLEAN - 41)) | (1 << (LuminaParser.IDENTIFIER - 41)))) !== 0)) {
				{
				this.state = 184;
				this.argumentList();
				}
			}

			this.state = 187;
			this.match(LuminaParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentList(): ArgumentListContext {
		let _localctx: ArgumentListContext = new ArgumentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, LuminaParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 189;
			this.expression(0);
			this.state = 194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuminaParser.T__16) {
				{
				{
				this.state = 190;
				this.match(LuminaParser.T__16);
				this.state = 191;
				this.expression(0);
				}
				}
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, LuminaParser.RULE_literal);
		try {
			this.state = 200;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuminaParser.NUMBER:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 197;
				this.match(LuminaParser.NUMBER);
				}
				break;
			case LuminaParser.STRING:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 198;
				this.match(LuminaParser.STRING);
				}
				break;
			case LuminaParser.BOOLEAN:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 199;
				this.match(LuminaParser.BOOLEAN);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 15:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 5);

		case 1:
			return this.precpred(this._ctx, 4);

		case 2:
			return this.precpred(this._ctx, 3);

		case 3:
			return this.precpred(this._ctx, 2);

		case 4:
			return this.precpred(this._ctx, 1);

		case 5:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x031\xCD\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x03\x02\x07\x02*\n\x02\f\x02\x0E\x02-\v\x02\x03" +
		"\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03:\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04@\n" +
		"\x04\x03\x04\x03\x04\x05\x04D\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x05\b[\n\b\x03\b" +
		"\x03\b\x03\b\x05\b`\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\tg\n\t\f\t\x0E" +
		"\tj\v\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x07\ft\n\f\f\f" +
		"\x0E\fw\v\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\x85\n\x0E\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x05\x10" +
		"\x92\n\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xA0\n\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xB4\n" +
		"\x11\f\x11\x0E\x11\xB7\v\x11\x03\x12\x03\x12\x03\x12\x05\x12\xBC\n\x12" +
		"\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x07\x13\xC3\n\x13\f\x13\x0E\x13" +
		"\xC6\v\x13\x03\x14\x03\x14\x03\x14\x05\x14\xCB\n\x14\x03\x14\x02\x02\x03" +
		" \x15\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"\x02\t\x03\x02\x03\x05\x04\x02\x07\x07\t\f\x03\x02\x10\x11\x03\x02\x14" +
		"\x17\x03\x02\x1F \x03\x02!\"\x03\x02#(\x02\xD8\x02+\x03\x02\x02\x02\x04" +
		"9\x03\x02\x02\x02\x06;\x03\x02\x02\x02\bG\x03\x02\x02\x02\nL\x03\x02\x02" +
		"\x02\fR\x03\x02\x02\x02\x0EV\x03\x02\x02\x02\x10c\x03\x02\x02\x02\x12" +
		"k\x03\x02\x02\x02\x14o\x03\x02\x02\x02\x16q\x03\x02\x02\x02\x18z\x03\x02" +
		"\x02\x02\x1A}\x03\x02\x02\x02\x1C\x86\x03\x02\x02\x02\x1E\x8F\x03\x02" +
		"\x02\x02 \x9F\x03\x02\x02\x02\"\xB8\x03\x02\x02\x02$\xBF\x03\x02\x02\x02" +
		"&\xCA\x03\x02\x02\x02(*\x05\x04\x03\x02)(\x03\x02\x02\x02*-\x03\x02\x02" +
		"\x02+)\x03\x02\x02\x02+,\x03\x02\x02\x02,.\x03\x02\x02\x02-+\x03\x02\x02" +
		"\x02./\x07\x02\x02\x03/\x03\x03\x02\x02\x020:\x05\x06\x04\x021:\x05\b" +
		"\x05\x022:\x05\n\x06\x023:\x05\f\x07\x024:\x05\x0E\b\x025:\x05\x18\r\x02" +
		"6:\x05\x1A\x0E\x027:\x05\x1C\x0F\x028:\x05\x1E\x10\x0290\x03\x02\x02\x02" +
		"91\x03\x02\x02\x0292\x03\x02\x02\x0293\x03\x02\x02\x0294\x03\x02\x02\x02" +
		"95\x03\x02\x02\x0296\x03\x02\x02\x0297\x03\x02\x02\x0298\x03\x02\x02\x02" +
		":\x05\x03\x02\x02\x02;<\t\x02\x02\x02<?\x07.\x02\x02=>\x07\x06\x02\x02" +
		">@\x05\x14\v\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@C\x03\x02\x02\x02" +
		"AB\x07\x07\x02\x02BD\x05 \x11\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02" +
		"DE\x03\x02\x02\x02EF\x07\b\x02\x02F\x07\x03\x02\x02\x02GH\x07.\x02\x02" +
		"HI\t\x03\x02\x02IJ\x05 \x11\x02JK\x07\b\x02\x02K\t\x03\x02\x02\x02LM\x07" +
		"\r\x02\x02MN\x07\x0E\x02\x02NO\x05 \x11\x02OP\x07\x0F\x02\x02PQ\x07\b" +
		"\x02\x02Q\v\x03\x02\x02\x02RS\x07.\x02\x02ST\t\x04\x02\x02TU\x07\b\x02" +
		"\x02U\r\x03\x02\x02\x02VW\x07\x12\x02\x02WX\x07.\x02\x02XZ\x07\x0E\x02" +
		"\x02Y[\x05\x10\t\x02ZY\x03\x02\x02\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02" +
		"\x02\\_\x07\x0F\x02\x02]^\x07\x06\x02\x02^`\x05\x14\v\x02_]\x03\x02\x02" +
		"\x02_`\x03\x02\x02\x02`a\x03\x02\x02\x02ab\x05\x16\f\x02b\x0F\x03\x02" +
		"\x02\x02ch\x05\x12\n\x02de\x07\x13\x02\x02eg\x05\x12\n\x02fd\x03\x02\x02" +
		"\x02gj\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02\x02\x02i\x11\x03\x02" +
		"\x02\x02jh\x03\x02\x02\x02kl\x07.\x02\x02lm\x07\x06\x02\x02mn\x05\x14" +
		"\v\x02n\x13\x03\x02\x02\x02op\t\x05\x02\x02p\x15\x03\x02\x02\x02qu\x07" +
		"\x18\x02\x02rt\x05\x04\x03\x02sr\x03\x02\x02\x02tw\x03\x02\x02\x02us\x03" +
		"\x02\x02\x02uv\x03\x02\x02\x02vx\x03\x02\x02\x02wu\x03\x02\x02\x02xy\x07" +
		"\x19\x02\x02y\x17\x03\x02\x02\x02z{\x05 \x11\x02{|\x07\b\x02\x02|\x19" +
		"\x03\x02\x02\x02}~\x07\x1A\x02\x02~\x7F\x07\x0E\x02\x02\x7F\x80\x05 \x11" +
		"\x02\x80\x81\x07\x0F\x02\x02\x81\x84\x05\x16\f\x02\x82\x83\x07\x1B\x02" +
		"\x02\x83\x85\x05\x16\f\x02\x84\x82\x03\x02\x02\x02\x84\x85\x03\x02\x02" +
		"\x02\x85\x1B\x03\x02\x02\x02\x86\x87\x07\x1C\x02\x02\x87\x88\x07\x0E\x02" +
		"\x02\x88\x89\x05\x06\x04\x02\x89\x8A\x05 \x11\x02\x8A\x8B\x07\b\x02\x02" +
		"\x8B\x8C\x05 \x11\x02\x8C\x8D\x07\x0F\x02\x02\x8D\x8E\x05\x16\f\x02\x8E" +
		"\x1D\x03\x02\x02\x02\x8F\x91\x07\x1D\x02\x02\x90\x92\x05 \x11\x02\x91" +
		"\x90\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93" +
		"\x94\x07\b\x02\x02\x94\x1F\x03\x02\x02\x02\x95\x96\b\x11\x01\x02\x96\xA0" +
		"\x05&\x14\x02\x97\xA0\x07.\x02\x02\x98\x99\x07.\x02\x02\x99\xA0\t\x04" +
		"\x02\x02\x9A\xA0\x05\"\x12\x02\x9B\x9C\x07\x0E\x02\x02\x9C\x9D\x05 \x11" +
		"\x02\x9D\x9E\x07\x0F\x02\x02\x9E\xA0\x03\x02\x02\x02\x9F\x95\x03\x02\x02" +
		"\x02\x9F\x97\x03\x02\x02\x02\x9F\x98\x03\x02\x02\x02\x9F\x9A\x03\x02\x02" +
		"\x02\x9F\x9B\x03\x02\x02\x02\xA0\xB5\x03\x02\x02\x02\xA1\xA2\f\x07\x02" +
		"\x02\xA2\xA3\t\x06\x02\x02\xA3\xB4\x05 \x11\b\xA4\xA5\f\x06\x02\x02\xA5" +
		"\xA6\t\x07\x02\x02\xA6\xB4\x05 \x11\x07\xA7\xA8\f\x05\x02\x02\xA8\xA9" +
		"\t\b\x02\x02\xA9\xB4\x05 \x11\x06\xAA\xAB\f\x04\x02\x02\xAB\xAC\x07)\x02" +
		"\x02\xAC\xB4\x05 \x11\x05\xAD\xAE\f\x03\x02\x02\xAE\xAF\x07*\x02\x02\xAF" +
		"\xB4\x05 \x11\x04\xB0\xB1\f\t\x02\x02\xB1\xB2\x07\x1E\x02\x02\xB2\xB4" +
		"\x07.\x02\x02\xB3\xA1\x03\x02\x02\x02\xB3\xA4\x03\x02\x02\x02\xB3\xA7" +
		"\x03\x02\x02\x02\xB3\xAA\x03\x02\x02\x02\xB3\xAD\x03\x02\x02\x02\xB3\xB0" +
		"\x03\x02\x02\x02\xB4\xB7\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6" +
		"\x03\x02\x02\x02\xB6!\x03\x02\x02\x02\xB7\xB5\x03\x02\x02\x02\xB8\xB9" +
		"\x07.\x02\x02\xB9\xBB\x07\x0E\x02\x02\xBA\xBC\x05$\x13\x02\xBB\xBA\x03" +
		"\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBD\x03\x02\x02\x02\xBD\xBE\x07" +
		"\x0F\x02\x02\xBE#\x03\x02\x02\x02\xBF\xC4\x05 \x11\x02\xC0\xC1\x07\x13" +
		"\x02\x02\xC1\xC3\x05 \x11\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC6\x03\x02" +
		"\x02\x02\xC4\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5%\x03\x02" +
		"\x02\x02\xC6\xC4\x03\x02\x02\x02\xC7\xCB\x07+\x02\x02\xC8\xCB\x07,\x02" +
		"\x02\xC9\xCB\x07-\x02\x02\xCA\xC7\x03\x02\x02\x02\xCA\xC8\x03\x02\x02" +
		"\x02\xCA\xC9\x03\x02\x02\x02\xCB\'\x03\x02\x02\x02\x12+9?CZ_hu\x84\x91" +
		"\x9F\xB3\xB5\xBB\xC4\xCA";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LuminaParser.__ATN) {
			LuminaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LuminaParser._serializedATN));
		}

		return LuminaParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(LuminaParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_program; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
	}
	public assignmentStatement(): AssignmentStatementContext | undefined {
		return this.tryGetRuleContext(0, AssignmentStatementContext);
	}
	public consoleLogStatement(): ConsoleLogStatementContext | undefined {
		return this.tryGetRuleContext(0, ConsoleLogStatementContext);
	}
	public incrementStatement(): IncrementStatementContext | undefined {
		return this.tryGetRuleContext(0, IncrementStatementContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public expressionStatement(): ExpressionStatementContext | undefined {
		return this.tryGetRuleContext(0, ExpressionStatementContext);
	}
	public ifStatement(): IfStatementContext | undefined {
		return this.tryGetRuleContext(0, IfStatementContext);
	}
	public forStatement(): ForStatementContext | undefined {
		return this.tryGetRuleContext(0, ForStatementContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_statement; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableDeclarationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(LuminaParser.IDENTIFIER, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_variableDeclaration; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterVariableDeclaration) {
			listener.enterVariableDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitVariableDeclaration) {
			listener.exitVariableDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitVariableDeclaration) {
			return visitor.visitVariableDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentStatementContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(LuminaParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_assignmentStatement; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterAssignmentStatement) {
			listener.enterAssignmentStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitAssignmentStatement) {
			listener.exitAssignmentStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitAssignmentStatement) {
			return visitor.visitAssignmentStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConsoleLogStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_consoleLogStatement; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterConsoleLogStatement) {
			listener.enterConsoleLogStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitConsoleLogStatement) {
			listener.exitConsoleLogStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitConsoleLogStatement) {
			return visitor.visitConsoleLogStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncrementStatementContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(LuminaParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_incrementStatement; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterIncrementStatement) {
			listener.enterIncrementStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitIncrementStatement) {
			listener.exitIncrementStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitIncrementStatement) {
			return visitor.visitIncrementStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(LuminaParser.IDENTIFIER, 0); }
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitFunctionDeclaration) {
			return visitor.visitFunctionDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitParameterList) {
			return visitor.visitParameterList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(LuminaParser.IDENTIFIER, 0); }
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_parameter; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitParameter) {
			return visitor.visitParameter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_type; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_block; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_expressionStatement; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterExpressionStatement) {
			listener.enterExpressionStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitExpressionStatement) {
			listener.exitExpressionStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitExpressionStatement) {
			return visitor.visitExpressionStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitIfStatement) {
			return visitor.visitIfStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStatementContext extends ParserRuleContext {
	public variableDeclaration(): VariableDeclarationContext {
		return this.getRuleContext(0, VariableDeclarationContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_forStatement; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterForStatement) {
			listener.enterForStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitForStatement) {
			listener.exitForStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitForStatement) {
			return visitor.visitForStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitReturnStatement) {
			return visitor.visitReturnStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LiteralExprContext extends ExpressionContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterLiteralExpr) {
			listener.enterLiteralExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitLiteralExpr) {
			listener.exitLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitLiteralExpr) {
			return visitor.visitLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentifierExprContext extends ExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(LuminaParser.IDENTIFIER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterIdentifierExpr) {
			listener.enterIdentifierExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitIdentifierExpr) {
			listener.exitIdentifierExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitIdentifierExpr) {
			return visitor.visitIdentifierExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncrementExprContext extends ExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(LuminaParser.IDENTIFIER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterIncrementExpr) {
			listener.enterIncrementExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitIncrementExpr) {
			listener.exitIncrementExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitIncrementExpr) {
			return visitor.visitIncrementExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExprContext extends ExpressionContext {
	public functionCall(): FunctionCallContext {
		return this.getRuleContext(0, FunctionCallContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterFunctionCallExpr) {
			listener.enterFunctionCallExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitFunctionCallExpr) {
			listener.exitFunctionCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitFunctionCallExpr) {
			return visitor.visitFunctionCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PropertyAccessExprContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public IDENTIFIER(): TerminalNode { return this.getToken(LuminaParser.IDENTIFIER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterPropertyAccessExpr) {
			listener.enterPropertyAccessExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitPropertyAccessExpr) {
			listener.exitPropertyAccessExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitPropertyAccessExpr) {
			return visitor.visitPropertyAccessExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenExprContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterParenExpr) {
			listener.enterParenExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitParenExpr) {
			listener.exitParenExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitParenExpr) {
			return visitor.visitParenExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BinaryExprContext extends ExpressionContext {
	public _op!: Token;
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterBinaryExpr) {
			listener.enterBinaryExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitBinaryExpr) {
			listener.exitBinaryExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitBinaryExpr) {
			return visitor.visitBinaryExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalAndExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterLogicalAndExpr) {
			listener.enterLogicalAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitLogicalAndExpr) {
			listener.exitLogicalAndExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpr) {
			return visitor.visitLogicalAndExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicalOrExprContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterLogicalOrExpr) {
			listener.enterLogicalOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitLogicalOrExpr) {
			listener.exitLogicalOrExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpr) {
			return visitor.visitLogicalOrExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(LuminaParser.IDENTIFIER, 0); }
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitFunctionCall) {
			return visitor.visitFunctionCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_argumentList; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterArgumentList) {
			listener.enterArgumentList(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitArgumentList) {
			listener.exitArgumentList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitArgumentList) {
			return visitor.visitArgumentList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class NumberLiteralContext extends LiteralContext {
	public NUMBER(): TerminalNode { return this.getToken(LuminaParser.NUMBER, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterNumberLiteral) {
			listener.enterNumberLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitNumberLiteral) {
			listener.exitNumberLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitNumberLiteral) {
			return visitor.visitNumberLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING(): TerminalNode { return this.getToken(LuminaParser.STRING, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitStringLiteral) {
			return visitor.visitStringLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanLiteralContext extends LiteralContext {
	public BOOLEAN(): TerminalNode { return this.getToken(LuminaParser.BOOLEAN, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterBooleanLiteral) {
			listener.enterBooleanLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitBooleanLiteral) {
			listener.exitBooleanLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitBooleanLiteral) {
			return visitor.visitBooleanLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


