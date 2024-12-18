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
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly NUMBER = 44;
	public static readonly STRING = 45;
	public static readonly BOOLEAN = 46;
	public static readonly IDENTIFIER = 47;
	public static readonly WS = 48;
	public static readonly COMMENT = 49;
	public static readonly MULTILINE_COMMENT = 50;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_variableDeclaration = 2;
	public static readonly RULE_variableAssignment = 3;
	public static readonly RULE_functionDeclaration = 4;
	public static readonly RULE_parameterList = 5;
	public static readonly RULE_parameter = 6;
	public static readonly RULE_type = 7;
	public static readonly RULE_block = 8;
	public static readonly RULE_expressionStatement = 9;
	public static readonly RULE_ifStatement = 10;
	public static readonly RULE_forStatement = 11;
	public static readonly RULE_whileStatement = 12;
	public static readonly RULE_returnStatement = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_functionCall = 15;
	public static readonly RULE_argumentList = 16;
	public static readonly RULE_literal = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "variableDeclaration", "variableAssignment", "functionDeclaration", 
		"parameterList", "parameter", "type", "block", "expressionStatement", 
		"ifStatement", "forStatement", "whileStatement", "returnStatement", "expression", 
		"functionCall", "argumentList", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'let'", "'const'", "'var'", "':'", "'='", "';'", "'+='", "'-='", 
		"'*='", "'/='", "'function'", "'('", "')'", "','", "'number'", "'string'", 
		"'boolean'", "'void'", "'{'", "'}'", "'if'", "'else'", "'for'", "'of'", 
		"'while'", "'return'", "'++'", "'--'", "'.'", "'['", "']'", "'*'", "'/'", 
		"'+'", "'-'", "'=='", "'!='", "'<'", "'>'", "'<='", "'>='", "'&&'", "'||'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, "NUMBER", "STRING", "BOOLEAN", "IDENTIFIER", "WS", 
		"COMMENT", "MULTILINE_COMMENT",
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
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuminaParser.T__0) | (1 << LuminaParser.T__1) | (1 << LuminaParser.T__2) | (1 << LuminaParser.T__10) | (1 << LuminaParser.T__11) | (1 << LuminaParser.T__20) | (1 << LuminaParser.T__22) | (1 << LuminaParser.T__24) | (1 << LuminaParser.T__25))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (LuminaParser.NUMBER - 44)) | (1 << (LuminaParser.STRING - 44)) | (1 << (LuminaParser.BOOLEAN - 44)) | (1 << (LuminaParser.IDENTIFIER - 44)))) !== 0)) {
				{
				{
				this.state = 36;
				this.statement();
				}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 42;
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
			this.state = 52;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				this.variableDeclaration();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 45;
				this.variableAssignment();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 46;
				this.functionDeclaration();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 47;
				this.expressionStatement();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 48;
				this.ifStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 49;
				this.forStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 50;
				this.whileStatement();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 51;
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
			this.state = 54;
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
			this.state = 55;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 58;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__3) {
				{
				this.state = 56;
				this.match(LuminaParser.T__3);
				this.state = 57;
				this.type();
				}
			}

			this.state = 62;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__4) {
				{
				this.state = 60;
				this.match(LuminaParser.T__4);
				this.state = 61;
				this.expression(0);
				}
			}

			this.state = 64;
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
	public variableAssignment(): VariableAssignmentContext {
		let _localctx: VariableAssignmentContext = new VariableAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LuminaParser.RULE_variableAssignment);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 67;
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
			this.state = 68;
			this.expression(0);
			this.state = 69;
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
		this.enterRule(_localctx, 8, LuminaParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(LuminaParser.T__10);
			this.state = 72;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 73;
			this.match(LuminaParser.T__11);
			this.state = 75;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.IDENTIFIER) {
				{
				this.state = 74;
				this.parameterList();
				}
			}

			this.state = 77;
			this.match(LuminaParser.T__12);
			this.state = 80;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__3) {
				{
				this.state = 78;
				this.match(LuminaParser.T__3);
				this.state = 79;
				this.type();
				}
			}

			this.state = 82;
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
		this.enterRule(_localctx, 10, LuminaParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 84;
			this.parameter();
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuminaParser.T__13) {
				{
				{
				this.state = 85;
				this.match(LuminaParser.T__13);
				this.state = 86;
				this.parameter();
				}
				}
				this.state = 91;
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
		this.enterRule(_localctx, 12, LuminaParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 92;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 93;
			this.match(LuminaParser.T__3);
			this.state = 94;
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
		this.enterRule(_localctx, 14, LuminaParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuminaParser.T__14) | (1 << LuminaParser.T__15) | (1 << LuminaParser.T__16) | (1 << LuminaParser.T__17))) !== 0))) {
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
		this.enterRule(_localctx, 16, LuminaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this.match(LuminaParser.T__18);
			this.state = 102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuminaParser.T__0) | (1 << LuminaParser.T__1) | (1 << LuminaParser.T__2) | (1 << LuminaParser.T__10) | (1 << LuminaParser.T__11) | (1 << LuminaParser.T__20) | (1 << LuminaParser.T__22) | (1 << LuminaParser.T__24) | (1 << LuminaParser.T__25))) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (LuminaParser.NUMBER - 44)) | (1 << (LuminaParser.STRING - 44)) | (1 << (LuminaParser.BOOLEAN - 44)) | (1 << (LuminaParser.IDENTIFIER - 44)))) !== 0)) {
				{
				{
				this.state = 99;
				this.statement();
				}
				}
				this.state = 104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 105;
			this.match(LuminaParser.T__19);
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
		this.enterRule(_localctx, 18, LuminaParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this.expression(0);
			this.state = 108;
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
		this.enterRule(_localctx, 20, LuminaParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 110;
			this.match(LuminaParser.T__20);
			this.state = 111;
			this.match(LuminaParser.T__11);
			this.state = 112;
			this.expression(0);
			this.state = 113;
			this.match(LuminaParser.T__12);
			this.state = 114;
			this.block();
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__21) {
				{
				this.state = 115;
				this.match(LuminaParser.T__21);
				this.state = 116;
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
		this.enterRule(_localctx, 22, LuminaParser.RULE_forStatement);
		let _la: number;
		try {
			this.state = 150;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 119;
				this.match(LuminaParser.T__22);
				this.state = 120;
				this.match(LuminaParser.T__11);
				this.state = 121;
				this.variableDeclaration();
				this.state = 122;
				this.expression(0);
				this.state = 123;
				this.match(LuminaParser.T__5);
				this.state = 124;
				this.expression(0);
				this.state = 125;
				this.match(LuminaParser.T__12);
				this.state = 126;
				this.block();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 128;
				this.match(LuminaParser.T__22);
				this.state = 129;
				this.match(LuminaParser.T__11);
				this.state = 130;
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
				this.state = 131;
				this.match(LuminaParser.IDENTIFIER);
				this.state = 132;
				this.match(LuminaParser.T__3);
				this.state = 133;
				this.type();
				this.state = 134;
				this.match(LuminaParser.T__5);
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
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 141;
				this.match(LuminaParser.T__22);
				this.state = 142;
				this.match(LuminaParser.T__11);
				this.state = 143;
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
				this.state = 144;
				this.match(LuminaParser.IDENTIFIER);
				this.state = 145;
				this.match(LuminaParser.T__23);
				this.state = 146;
				this.expression(0);
				this.state = 147;
				this.match(LuminaParser.T__12);
				this.state = 148;
				this.block();
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
	public whileStatement(): WhileStatementContext {
		let _localctx: WhileStatementContext = new WhileStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, LuminaParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this.match(LuminaParser.T__24);
			this.state = 153;
			this.match(LuminaParser.T__11);
			this.state = 154;
			this.expression(0);
			this.state = 155;
			this.match(LuminaParser.T__12);
			this.state = 156;
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
		this.enterRule(_localctx, 26, LuminaParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 158;
			this.match(LuminaParser.T__25);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__11 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (LuminaParser.NUMBER - 44)) | (1 << (LuminaParser.STRING - 44)) | (1 << (LuminaParser.BOOLEAN - 44)) | (1 << (LuminaParser.IDENTIFIER - 44)))) !== 0)) {
				{
				this.state = 159;
				this.expression(0);
				}
			}

			this.state = 162;
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
		let _startState: number = 28;
		this.enterRecursionRule(_localctx, 28, LuminaParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 165;
				this.literal();
				}
				break;

			case 2:
				{
				_localctx = new IdentifierExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 166;
				this.match(LuminaParser.IDENTIFIER);
				}
				break;

			case 3:
				{
				_localctx = new IncrementDecrementExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 167;
				this.match(LuminaParser.IDENTIFIER);
				this.state = 168;
				_la = this._input.LA(1);
				if (!(_la === LuminaParser.T__26 || _la === LuminaParser.T__27)) {
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
				_localctx = new AssignmentExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 169;
				this.match(LuminaParser.IDENTIFIER);
				this.state = 170;
				_la = this._input.LA(1);
				if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuminaParser.T__6) | (1 << LuminaParser.T__7) | (1 << LuminaParser.T__8) | (1 << LuminaParser.T__9))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 171;
				this.expression(11);
				}
				break;

			case 5:
				{
				_localctx = new FunctionCallExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 172;
				this.functionCall();
				}
				break;

			case 6:
				{
				_localctx = new ParenExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 173;
				this.match(LuminaParser.T__11);
				this.state = 174;
				this.expression(0);
				this.state = 175;
				this.match(LuminaParser.T__12);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 210;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 208;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
					case 1:
						{
						_localctx = new MultiplicativeExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 179;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 180;
						_la = this._input.LA(1);
						if (!(_la === LuminaParser.T__31 || _la === LuminaParser.T__32)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 181;
						this.expression(7);
						}
						break;

					case 2:
						{
						_localctx = new AdditiveExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 182;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 183;
						_la = this._input.LA(1);
						if (!(_la === LuminaParser.T__33 || _la === LuminaParser.T__34)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 184;
						this.expression(6);
						}
						break;

					case 3:
						{
						_localctx = new ComparisonExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 185;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 186;
						_la = this._input.LA(1);
						if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (LuminaParser.T__35 - 36)) | (1 << (LuminaParser.T__36 - 36)) | (1 << (LuminaParser.T__37 - 36)) | (1 << (LuminaParser.T__38 - 36)) | (1 << (LuminaParser.T__39 - 36)) | (1 << (LuminaParser.T__40 - 36)))) !== 0))) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 187;
						this.expression(5);
						}
						break;

					case 4:
						{
						_localctx = new LogicalAndExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 188;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 189;
						this.match(LuminaParser.T__41);
						this.state = 190;
						this.expression(4);
						}
						break;

					case 5:
						{
						_localctx = new LogicalOrExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 191;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 192;
						this.match(LuminaParser.T__42);
						this.state = 193;
						this.expression(3);
						}
						break;

					case 6:
						{
						_localctx = new PropertyAccessExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 194;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 195;
						this.match(LuminaParser.T__28);
						this.state = 196;
						this.match(LuminaParser.IDENTIFIER);
						}
						break;

					case 7:
						{
						_localctx = new IndexAccessExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 197;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 198;
						this.match(LuminaParser.T__29);
						this.state = 199;
						this.expression(0);
						this.state = 200;
						this.match(LuminaParser.T__30);
						}
						break;

					case 8:
						{
						_localctx = new FunctionCallExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 202;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 203;
						this.match(LuminaParser.T__11);
						this.state = 205;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === LuminaParser.T__11 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (LuminaParser.NUMBER - 44)) | (1 << (LuminaParser.STRING - 44)) | (1 << (LuminaParser.BOOLEAN - 44)) | (1 << (LuminaParser.IDENTIFIER - 44)))) !== 0)) {
							{
							this.state = 204;
							this.argumentList();
							}
						}

						this.state = 207;
						this.match(LuminaParser.T__12);
						}
						break;
					}
					}
				}
				this.state = 212;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 14, this._ctx);
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
		this.enterRule(_localctx, 30, LuminaParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 214;
			this.match(LuminaParser.T__11);
			this.state = 216;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__11 || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (LuminaParser.NUMBER - 44)) | (1 << (LuminaParser.STRING - 44)) | (1 << (LuminaParser.BOOLEAN - 44)) | (1 << (LuminaParser.IDENTIFIER - 44)))) !== 0)) {
				{
				this.state = 215;
				this.argumentList();
				}
			}

			this.state = 218;
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
		this.enterRule(_localctx, 32, LuminaParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 220;
			this.expression(0);
			this.state = 225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuminaParser.T__13) {
				{
				{
				this.state = 221;
				this.match(LuminaParser.T__13);
				this.state = 222;
				this.expression(0);
				}
				}
				this.state = 227;
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
		this.enterRule(_localctx, 34, LuminaParser.RULE_literal);
		try {
			this.state = 231;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuminaParser.NUMBER:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 228;
				this.match(LuminaParser.NUMBER);
				}
				break;
			case LuminaParser.STRING:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 229;
				this.match(LuminaParser.STRING);
				}
				break;
			case LuminaParser.BOOLEAN:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 230;
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
		case 14:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);

		case 1:
			return this.precpred(this._ctx, 5);

		case 2:
			return this.precpred(this._ctx, 4);

		case 3:
			return this.precpred(this._ctx, 3);

		case 4:
			return this.precpred(this._ctx, 2);

		case 5:
			return this.precpred(this._ctx, 9);

		case 6:
			return this.precpred(this._ctx, 8);

		case 7:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x034\xEC\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x07\x02(\n\x02\f\x02\x0E\x02+\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"7\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04=\n\x04\x03\x04\x03\x04" +
		"\x05\x04A\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06N\n\x06\x03\x06\x03\x06\x03\x06" +
		"\x05\x06S\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x07\x07Z\n\x07" +
		"\f\x07\x0E\x07]\v\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n" +
		"\x07\ng\n\n\f\n\x0E\nj\v\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x05\fx\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x05\r\x99\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0F\x03\x0F\x05\x0F\xA3\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x05\x10\xB4\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x05\x10\xD0\n\x10\x03\x10\x07\x10\xD3\n\x10\f" +
		"\x10\x0E\x10\xD6\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\xDB\n\x11\x03\x11" +
		"\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\xE2\n\x12\f\x12\x0E\x12\xE5\v" +
		"\x12\x03\x13\x03\x13\x03\x13\x05\x13\xEA\n\x13\x03\x13\x02\x02\x03\x1E" +
		"\x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02\n" +
		"\x03\x02\x03\x05\x04\x02\x07\x07\t\f\x03\x02\x11\x14\x03\x02\x1D\x1E\x03" +
		"\x02\t\f\x03\x02\"#\x03\x02$%\x03\x02&+\x02\xFD\x02)\x03\x02\x02\x02\x04" +
		"6\x03\x02\x02\x02\x068\x03\x02\x02\x02\bD\x03\x02\x02\x02\nI\x03\x02\x02" +
		"\x02\fV\x03\x02\x02\x02\x0E^\x03\x02\x02\x02\x10b\x03\x02\x02\x02\x12" +
		"d\x03\x02\x02\x02\x14m\x03\x02\x02\x02\x16p\x03\x02\x02\x02\x18\x98\x03" +
		"\x02\x02\x02\x1A\x9A\x03\x02\x02\x02\x1C\xA0\x03\x02\x02\x02\x1E\xB3\x03" +
		"\x02\x02\x02 \xD7\x03\x02\x02\x02\"\xDE\x03\x02\x02\x02$\xE9\x03\x02\x02" +
		"\x02&(\x05\x04\x03\x02\'&\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02" +
		"\x02\x02)*\x03\x02\x02\x02*,\x03\x02\x02\x02+)\x03\x02\x02\x02,-\x07\x02" +
		"\x02\x03-\x03\x03\x02\x02\x02.7\x05\x06\x04\x02/7\x05\b\x05\x0207\x05" +
		"\n\x06\x0217\x05\x14\v\x0227\x05\x16\f\x0237\x05\x18\r\x0247\x05\x1A\x0E" +
		"\x0257\x05\x1C\x0F\x026.\x03\x02\x02\x026/\x03\x02\x02\x0260\x03\x02\x02" +
		"\x0261\x03\x02\x02\x0262\x03\x02\x02\x0263\x03\x02\x02\x0264\x03\x02\x02" +
		"\x0265\x03\x02\x02\x027\x05\x03\x02\x02\x0289\t\x02\x02\x029<\x071\x02" +
		"\x02:;\x07\x06\x02\x02;=\x05\x10\t\x02<:\x03\x02\x02\x02<=\x03\x02\x02" +
		"\x02=@\x03\x02\x02\x02>?\x07\x07\x02\x02?A\x05\x1E\x10\x02@>\x03\x02\x02" +
		"\x02@A\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x07\b\x02\x02C\x07\x03\x02" +
		"\x02\x02DE\x071\x02\x02EF\t\x03\x02\x02FG\x05\x1E\x10\x02GH\x07\b\x02" +
		"\x02H\t\x03\x02\x02\x02IJ\x07\r\x02\x02JK\x071\x02\x02KM\x07\x0E\x02\x02" +
		"LN\x05\f\x07\x02ML\x03\x02\x02\x02MN\x03\x02\x02\x02NO\x03\x02\x02\x02" +
		"OR\x07\x0F\x02\x02PQ\x07\x06\x02\x02QS\x05\x10\t\x02RP\x03\x02\x02\x02" +
		"RS\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x05\x12\n\x02U\v\x03\x02\x02\x02" +
		"V[\x05\x0E\b\x02WX\x07\x10\x02\x02XZ\x05\x0E\b\x02YW\x03\x02\x02\x02Z" +
		"]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\\r\x03\x02\x02" +
		"\x02][\x03\x02\x02\x02^_\x071\x02\x02_`\x07\x06\x02\x02`a\x05\x10\t\x02" +
		"a\x0F\x03\x02\x02\x02bc\t\x04\x02\x02c\x11\x03\x02\x02\x02dh\x07\x15\x02" +
		"\x02eg\x05\x04\x03\x02fe\x03\x02\x02\x02gj\x03\x02\x02\x02hf\x03\x02\x02" +
		"\x02hi\x03\x02\x02\x02ik\x03\x02\x02\x02jh\x03\x02\x02\x02kl\x07\x16\x02" +
		"\x02l\x13\x03\x02\x02\x02mn\x05\x1E\x10\x02no\x07\b\x02\x02o\x15\x03\x02" +
		"\x02\x02pq\x07\x17\x02\x02qr\x07\x0E\x02\x02rs\x05\x1E\x10\x02st\x07\x0F" +
		"\x02\x02tw\x05\x12\n\x02uv\x07\x18\x02\x02vx\x05\x12\n\x02wu\x03\x02\x02" +
		"\x02wx\x03\x02\x02\x02x\x17\x03\x02\x02\x02yz\x07\x19\x02\x02z{\x07\x0E" +
		"\x02\x02{|\x05\x06\x04\x02|}\x05\x1E\x10\x02}~\x07\b\x02\x02~\x7F\x05" +
		"\x1E\x10\x02\x7F\x80\x07\x0F\x02\x02\x80\x81\x05\x12\n\x02\x81\x99\x03" +
		"\x02\x02\x02\x82\x83\x07\x19\x02\x02\x83\x84\x07\x0E\x02\x02\x84\x85\t" +
		"\x02\x02\x02\x85\x86\x071\x02\x02\x86\x87\x07\x06\x02\x02\x87\x88\x05" +
		"\x10\t\x02\x88\x89\x07\b\x02\x02\x89\x8A\x05\x1E\x10\x02\x8A\x8B\x07\b" +
		"\x02\x02\x8B\x8C\x05\x1E\x10\x02\x8C\x8D\x07\x0F\x02\x02\x8D\x8E\x05\x12" +
		"\n\x02\x8E\x99\x03\x02\x02\x02\x8F\x90\x07\x19\x02\x02\x90\x91\x07\x0E" +
		"\x02\x02\x91\x92\t\x02\x02\x02\x92\x93\x071\x02\x02\x93\x94\x07\x1A\x02" +
		"\x02\x94\x95\x05\x1E\x10\x02\x95\x96\x07\x0F\x02\x02\x96\x97\x05\x12\n" +
		"\x02\x97\x99\x03\x02\x02\x02\x98y\x03\x02\x02\x02\x98\x82\x03\x02\x02" +
		"\x02\x98\x8F\x03\x02\x02\x02\x99\x19\x03\x02\x02\x02\x9A\x9B\x07\x1B\x02" +
		"\x02\x9B\x9C\x07\x0E\x02\x02\x9C\x9D\x05\x1E\x10\x02\x9D\x9E\x07\x0F\x02" +
		"\x02\x9E\x9F\x05\x12\n\x02\x9F\x1B\x03\x02\x02\x02\xA0\xA2\x07\x1C\x02" +
		"\x02\xA1\xA3\x05\x1E\x10\x02\xA2\xA1\x03\x02\x02\x02\xA2\xA3\x03\x02\x02" +
		"\x02\xA3\xA4\x03\x02\x02\x02\xA4\xA5\x07\b\x02\x02\xA5\x1D\x03\x02\x02" +
		"\x02\xA6\xA7\b\x10\x01\x02\xA7\xB4\x05$\x13\x02\xA8\xB4\x071\x02\x02\xA9" +
		"\xAA\x071\x02\x02\xAA\xB4\t\x05\x02\x02\xAB\xAC\x071\x02\x02\xAC\xAD\t" +
		"\x06\x02\x02\xAD\xB4\x05\x1E\x10\r\xAE\xB4\x05 \x11\x02\xAF\xB0\x07\x0E" +
		"\x02\x02\xB0\xB1\x05\x1E\x10\x02\xB1\xB2\x07\x0F\x02\x02\xB2\xB4\x03\x02" +
		"\x02\x02\xB3\xA6\x03\x02\x02\x02\xB3\xA8\x03\x02\x02\x02\xB3\xA9\x03\x02" +
		"\x02\x02\xB3\xAB\x03\x02\x02\x02\xB3\xAE\x03\x02\x02\x02\xB3\xAF\x03\x02" +
		"\x02\x02\xB4\xD4\x03\x02\x02\x02\xB5\xB6\f\b\x02\x02\xB6\xB7\t\x07\x02" +
		"\x02\xB7\xD3\x05\x1E\x10\t\xB8\xB9\f\x07\x02\x02\xB9\xBA\t\b\x02\x02\xBA" +
		"\xD3\x05\x1E\x10\b\xBB\xBC\f\x06\x02\x02\xBC\xBD\t\t\x02\x02\xBD\xD3\x05" +
		"\x1E\x10\x07\xBE\xBF\f\x05\x02\x02\xBF\xC0\x07,\x02\x02\xC0\xD3\x05\x1E" +
		"\x10\x06\xC1\xC2\f\x04\x02\x02\xC2\xC3\x07-\x02\x02\xC3\xD3\x05\x1E\x10" +
		"\x05\xC4\xC5\f\v\x02\x02\xC5\xC6\x07\x1F\x02\x02\xC6\xD3\x071\x02\x02" +
		"\xC7\xC8\f\n\x02\x02\xC8\xC9\x07 \x02\x02\xC9\xCA\x05\x1E\x10\x02\xCA" +
		"\xCB\x07!\x02\x02\xCB\xD3\x03\x02\x02\x02\xCC\xCD\f\t\x02\x02\xCD\xCF" +
		"\x07\x0E\x02\x02\xCE\xD0\x05\"\x12\x02\xCF\xCE\x03\x02\x02\x02\xCF\xD0" +
		"\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1\xD3\x07\x0F\x02\x02\xD2\xB5" +
		"\x03\x02\x02\x02\xD2\xB8\x03\x02\x02\x02\xD2\xBB\x03\x02\x02\x02\xD2\xBE" +
		"\x03\x02\x02\x02\xD2\xC1\x03\x02\x02\x02\xD2\xC4\x03\x02\x02\x02\xD2\xC7" +
		"\x03\x02\x02\x02\xD2\xCC\x03\x02\x02\x02\xD3\xD6\x03\x02\x02\x02\xD4\xD2" +
		"\x03\x02\x02\x02\xD4\xD5\x03\x02\x02\x02\xD5\x1F\x03\x02\x02\x02\xD6\xD4" +
		"\x03\x02\x02\x02\xD7\xD8\x071\x02\x02\xD8\xDA\x07\x0E\x02\x02\xD9\xDB" +
		"\x05\"\x12\x02\xDA\xD9\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB\xDC" +
		"\x03\x02\x02\x02\xDC\xDD\x07\x0F\x02\x02\xDD!\x03\x02\x02\x02\xDE\xE3" +
		"\x05\x1E\x10\x02\xDF\xE0\x07\x10\x02\x02\xE0\xE2\x05\x1E\x10\x02\xE1\xDF" +
		"\x03\x02\x02\x02\xE2\xE5\x03\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE3\xE4" +
		"\x03\x02\x02\x02\xE4#\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02\xE6\xEA" +
		"\x07.\x02\x02\xE7\xEA\x07/\x02\x02\xE8\xEA\x070\x02\x02\xE9\xE6\x03\x02" +
		"\x02\x02\xE9\xE7\x03\x02\x02\x02\xE9\xE8\x03\x02\x02\x02\xEA%\x03\x02" +
		"\x02\x02\x14)6<@MR[hw\x98\xA2\xB3\xCF\xD2\xD4\xDA\xE3\xE9";
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
	public variableAssignment(): VariableAssignmentContext | undefined {
		return this.tryGetRuleContext(0, VariableAssignmentContext);
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
	public whileStatement(): WhileStatementContext | undefined {
		return this.tryGetRuleContext(0, WhileStatementContext);
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


export class VariableAssignmentContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(LuminaParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_variableAssignment; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterVariableAssignment) {
			listener.enterVariableAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitVariableAssignment) {
			listener.exitVariableAssignment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitVariableAssignment) {
			return visitor.visitVariableAssignment(this);
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
	public variableDeclaration(): VariableDeclarationContext | undefined {
		return this.tryGetRuleContext(0, VariableDeclarationContext);
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
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(LuminaParser.IDENTIFIER, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
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


export class WhileStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return LuminaParser.RULE_whileStatement; }
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterWhileStatement) {
			listener.enterWhileStatement(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitWhileStatement) {
			listener.exitWhileStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitWhileStatement) {
			return visitor.visitWhileStatement(this);
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
export class IncrementDecrementExprContext extends ExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(LuminaParser.IDENTIFIER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterIncrementDecrementExpr) {
			listener.enterIncrementDecrementExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitIncrementDecrementExpr) {
			listener.exitIncrementDecrementExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitIncrementDecrementExpr) {
			return visitor.visitIncrementDecrementExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AssignmentExprContext extends ExpressionContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(LuminaParser.IDENTIFIER, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: LuminaListener): void {
		if (listener.enterAssignmentExpr) {
			listener.enterAssignmentExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitAssignmentExpr) {
			listener.exitAssignmentExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitAssignmentExpr) {
			return visitor.visitAssignmentExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctionCallExprContext extends ExpressionContext {
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public argumentList(): ArgumentListContext | undefined {
		return this.tryGetRuleContext(0, ArgumentListContext);
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
export class IndexAccessExprContext extends ExpressionContext {
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
		if (listener.enterIndexAccessExpr) {
			listener.enterIndexAccessExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitIndexAccessExpr) {
			listener.exitIndexAccessExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitIndexAccessExpr) {
			return visitor.visitIndexAccessExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MultiplicativeExprContext extends ExpressionContext {
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
		if (listener.enterMultiplicativeExpr) {
			listener.enterMultiplicativeExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitMultiplicativeExpr) {
			listener.exitMultiplicativeExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpr) {
			return visitor.visitMultiplicativeExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AdditiveExprContext extends ExpressionContext {
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
		if (listener.enterAdditiveExpr) {
			listener.enterAdditiveExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitAdditiveExpr) {
			listener.exitAdditiveExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitAdditiveExpr) {
			return visitor.visitAdditiveExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ComparisonExprContext extends ExpressionContext {
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
		if (listener.enterComparisonExpr) {
			listener.enterComparisonExpr(this);
		}
	}
	// @Override
	public exitRule(listener: LuminaListener): void {
		if (listener.exitComparisonExpr) {
			listener.exitComparisonExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitComparisonExpr) {
			return visitor.visitComparisonExpr(this);
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


