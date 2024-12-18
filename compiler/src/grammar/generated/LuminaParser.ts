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
	public static readonly NUMBER = 40;
	public static readonly STRING = 41;
	public static readonly BOOLEAN = 42;
	public static readonly IDENTIFIER = 43;
	public static readonly WS = 44;
	public static readonly COMMENT = 45;
	public static readonly MULTILINE_COMMENT = 46;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_variableDeclaration = 2;
	public static readonly RULE_assignmentStatement = 3;
	public static readonly RULE_incrementStatement = 4;
	public static readonly RULE_functionDeclaration = 5;
	public static readonly RULE_parameterList = 6;
	public static readonly RULE_parameter = 7;
	public static readonly RULE_type = 8;
	public static readonly RULE_block = 9;
	public static readonly RULE_expressionStatement = 10;
	public static readonly RULE_ifStatement = 11;
	public static readonly RULE_forStatement = 12;
	public static readonly RULE_returnStatement = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_functionCall = 15;
	public static readonly RULE_argumentList = 16;
	public static readonly RULE_literal = 17;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "variableDeclaration", "assignmentStatement", 
		"incrementStatement", "functionDeclaration", "parameterList", "parameter", 
		"type", "block", "expressionStatement", "ifStatement", "forStatement", 
		"returnStatement", "expression", "functionCall", "argumentList", "literal",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'let'", "'const'", "'var'", "':'", "'='", "';'", "'+='", "'-='", 
		"'*='", "'/='", "'++'", "'--'", "'function'", "'('", "')'", "','", "'number'", 
		"'string'", "'boolean'", "'void'", "'{'", "'}'", "'if'", "'else'", "'for'", 
		"'return'", "'.'", "'*'", "'/'", "'+'", "'-'", "'=='", "'!='", "'<'", 
		"'>'", "'<='", "'>='", "'&&'", "'||'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, "NUMBER", "STRING", 
		"BOOLEAN", "IDENTIFIER", "WS", "COMMENT", "MULTILINE_COMMENT",
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuminaParser.T__0) | (1 << LuminaParser.T__1) | (1 << LuminaParser.T__2) | (1 << LuminaParser.T__12) | (1 << LuminaParser.T__13) | (1 << LuminaParser.T__22) | (1 << LuminaParser.T__24) | (1 << LuminaParser.T__25))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (LuminaParser.NUMBER - 40)) | (1 << (LuminaParser.STRING - 40)) | (1 << (LuminaParser.BOOLEAN - 40)) | (1 << (LuminaParser.IDENTIFIER - 40)))) !== 0)) {
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
				this.assignmentStatement();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 46;
				this.incrementStatement();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 47;
				this.functionDeclaration();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 48;
				this.expressionStatement();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 49;
				this.ifStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 50;
				this.forStatement();
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
	public assignmentStatement(): AssignmentStatementContext {
		let _localctx: AssignmentStatementContext = new AssignmentStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, LuminaParser.RULE_assignmentStatement);
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
	public incrementStatement(): IncrementStatementContext {
		let _localctx: IncrementStatementContext = new IncrementStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, LuminaParser.RULE_incrementStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 72;
			_la = this._input.LA(1);
			if (!(_la === LuminaParser.T__10 || _la === LuminaParser.T__11)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 73;
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
		this.enterRule(_localctx, 10, LuminaParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(LuminaParser.T__12);
			this.state = 76;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 77;
			this.match(LuminaParser.T__13);
			this.state = 79;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.IDENTIFIER) {
				{
				this.state = 78;
				this.parameterList();
				}
			}

			this.state = 81;
			this.match(LuminaParser.T__14);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__3) {
				{
				this.state = 82;
				this.match(LuminaParser.T__3);
				this.state = 83;
				this.type();
				}
			}

			this.state = 86;
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
		this.enterRule(_localctx, 12, LuminaParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.parameter();
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuminaParser.T__15) {
				{
				{
				this.state = 89;
				this.match(LuminaParser.T__15);
				this.state = 90;
				this.parameter();
				}
				}
				this.state = 95;
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
		this.enterRule(_localctx, 14, LuminaParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 97;
			this.match(LuminaParser.T__3);
			this.state = 98;
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
		this.enterRule(_localctx, 16, LuminaParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuminaParser.T__16) | (1 << LuminaParser.T__17) | (1 << LuminaParser.T__18) | (1 << LuminaParser.T__19))) !== 0))) {
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
		this.enterRule(_localctx, 18, LuminaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 102;
			this.match(LuminaParser.T__20);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << LuminaParser.T__0) | (1 << LuminaParser.T__1) | (1 << LuminaParser.T__2) | (1 << LuminaParser.T__12) | (1 << LuminaParser.T__13) | (1 << LuminaParser.T__22) | (1 << LuminaParser.T__24) | (1 << LuminaParser.T__25))) !== 0) || ((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (LuminaParser.NUMBER - 40)) | (1 << (LuminaParser.STRING - 40)) | (1 << (LuminaParser.BOOLEAN - 40)) | (1 << (LuminaParser.IDENTIFIER - 40)))) !== 0)) {
				{
				{
				this.state = 103;
				this.statement();
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 109;
			this.match(LuminaParser.T__21);
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
		this.enterRule(_localctx, 20, LuminaParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this.expression(0);
			this.state = 112;
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
		this.enterRule(_localctx, 22, LuminaParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			this.match(LuminaParser.T__22);
			this.state = 115;
			this.match(LuminaParser.T__13);
			this.state = 116;
			this.expression(0);
			this.state = 117;
			this.match(LuminaParser.T__14);
			this.state = 118;
			this.block();
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === LuminaParser.T__23) {
				{
				this.state = 119;
				this.match(LuminaParser.T__23);
				this.state = 120;
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
		this.enterRule(_localctx, 24, LuminaParser.RULE_forStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.match(LuminaParser.T__24);
			this.state = 124;
			this.match(LuminaParser.T__13);
			this.state = 125;
			this.variableDeclaration();
			this.state = 126;
			this.expression(0);
			this.state = 127;
			this.match(LuminaParser.T__5);
			this.state = 128;
			this.expression(0);
			this.state = 129;
			this.match(LuminaParser.T__14);
			this.state = 130;
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
			this.state = 132;
			this.match(LuminaParser.T__25);
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (LuminaParser.T__13 - 14)) | (1 << (LuminaParser.NUMBER - 14)) | (1 << (LuminaParser.STRING - 14)) | (1 << (LuminaParser.BOOLEAN - 14)) | (1 << (LuminaParser.IDENTIFIER - 14)))) !== 0)) {
				{
				this.state = 133;
				this.expression(0);
				}
			}

			this.state = 136;
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
			this.state = 148;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 139;
				this.literal();
				}
				break;

			case 2:
				{
				_localctx = new IdentifierExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 140;
				this.match(LuminaParser.IDENTIFIER);
				}
				break;

			case 3:
				{
				_localctx = new IncrementExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 141;
				this.match(LuminaParser.IDENTIFIER);
				this.state = 142;
				_la = this._input.LA(1);
				if (!(_la === LuminaParser.T__10 || _la === LuminaParser.T__11)) {
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
				this.state = 143;
				this.functionCall();
				}
				break;

			case 5:
				{
				_localctx = new ParenExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 144;
				this.match(LuminaParser.T__13);
				this.state = 145;
				this.expression(0);
				this.state = 146;
				this.match(LuminaParser.T__14);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 170;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 168;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
					case 1:
						{
						_localctx = new BinaryExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 150;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 151;
						(_localctx as BinaryExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === LuminaParser.T__27 || _la === LuminaParser.T__28)) {
							(_localctx as BinaryExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 152;
						this.expression(6);
						}
						break;

					case 2:
						{
						_localctx = new BinaryExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 153;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 154;
						(_localctx as BinaryExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === LuminaParser.T__29 || _la === LuminaParser.T__30)) {
							(_localctx as BinaryExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 155;
						this.expression(5);
						}
						break;

					case 3:
						{
						_localctx = new BinaryExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 156;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 157;
						(_localctx as BinaryExprContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (LuminaParser.T__31 - 32)) | (1 << (LuminaParser.T__32 - 32)) | (1 << (LuminaParser.T__33 - 32)) | (1 << (LuminaParser.T__34 - 32)) | (1 << (LuminaParser.T__35 - 32)) | (1 << (LuminaParser.T__36 - 32)))) !== 0))) {
							(_localctx as BinaryExprContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 158;
						this.expression(4);
						}
						break;

					case 4:
						{
						_localctx = new LogicalAndExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 159;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 160;
						this.match(LuminaParser.T__37);
						this.state = 161;
						this.expression(3);
						}
						break;

					case 5:
						{
						_localctx = new LogicalOrExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 162;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 163;
						this.match(LuminaParser.T__38);
						this.state = 164;
						this.expression(2);
						}
						break;

					case 6:
						{
						_localctx = new PropertyAccessExprContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, LuminaParser.RULE_expression);
						this.state = 165;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 166;
						this.match(LuminaParser.T__26);
						this.state = 167;
						this.match(LuminaParser.IDENTIFIER);
						}
						break;
					}
					}
				}
				this.state = 172;
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
		this.enterRule(_localctx, 30, LuminaParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 173;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 174;
			this.match(LuminaParser.T__13);
			this.state = 176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (LuminaParser.T__13 - 14)) | (1 << (LuminaParser.NUMBER - 14)) | (1 << (LuminaParser.STRING - 14)) | (1 << (LuminaParser.BOOLEAN - 14)) | (1 << (LuminaParser.IDENTIFIER - 14)))) !== 0)) {
				{
				this.state = 175;
				this.argumentList();
				}
			}

			this.state = 178;
			this.match(LuminaParser.T__14);
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
			this.state = 180;
			this.expression(0);
			this.state = 185;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === LuminaParser.T__15) {
				{
				{
				this.state = 181;
				this.match(LuminaParser.T__15);
				this.state = 182;
				this.expression(0);
				}
				}
				this.state = 187;
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
			this.state = 191;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case LuminaParser.NUMBER:
				_localctx = new NumberLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this.match(LuminaParser.NUMBER);
				}
				break;
			case LuminaParser.STRING:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 189;
				this.match(LuminaParser.STRING);
				}
				break;
			case LuminaParser.BOOLEAN:
				_localctx = new BooleanLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 190;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x030\xC4\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x03\x02\x07\x02(\n\x02\f\x02\x0E\x02+\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"7\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04=\n\x04\x03\x04\x03\x04" +
		"\x05\x04A\n\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05" +
		"\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		"R\n\x07\x03\x07\x03\x07\x03\x07\x05\x07W\n\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x07\b^\n\b\f\b\x0E\ba\v\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n" +
		"\x03\v\x03\v\x07\vk\n\v\f\v\x0E\vn\v\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r|\n\r\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x05" +
		"\x0F\x89\n\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\x97\n\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x07\x10\xAB" +
		"\n\x10\f\x10\x0E\x10\xAE\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\xB3\n\x11" +
		"\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x07\x12\xBA\n\x12\f\x12\x0E\x12" +
		"\xBD\v\x12\x03\x13\x03\x13\x03\x13\x05\x13\xC2\n\x13\x03\x13\x02\x02\x03" +
		"\x1E\x14\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02\x02" +
		"\t\x03\x02\x03\x05\x04\x02\x07\x07\t\f\x03\x02\r\x0E\x03\x02\x13\x16\x03" +
		"\x02\x1E\x1F\x03\x02 !\x03\x02\"\'\x02\xCF\x02)\x03\x02\x02\x02\x046\x03" +
		"\x02\x02\x02\x068\x03\x02\x02\x02\bD\x03\x02\x02\x02\nI\x03\x02\x02\x02" +
		"\fM\x03\x02\x02\x02\x0EZ\x03\x02\x02\x02\x10b\x03\x02\x02\x02\x12f\x03" +
		"\x02\x02\x02\x14h\x03\x02\x02\x02\x16q\x03\x02\x02\x02\x18t\x03\x02\x02" +
		"\x02\x1A}\x03\x02\x02\x02\x1C\x86\x03\x02\x02\x02\x1E\x96\x03\x02\x02" +
		"\x02 \xAF\x03\x02\x02\x02\"\xB6\x03\x02\x02\x02$\xC1\x03\x02\x02\x02&" +
		"(\x05\x04\x03\x02\'&\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02" +
		"\x02)*\x03\x02\x02\x02*,\x03\x02\x02\x02+)\x03\x02\x02\x02,-\x07\x02\x02" +
		"\x03-\x03\x03\x02\x02\x02.7\x05\x06\x04\x02/7\x05\b\x05\x0207\x05\n\x06" +
		"\x0217\x05\f\x07\x0227\x05\x16\f\x0237\x05\x18\r\x0247\x05\x1A\x0E\x02" +
		"57\x05\x1C\x0F\x026.\x03\x02\x02\x026/\x03\x02\x02\x0260\x03\x02\x02\x02" +
		"61\x03\x02\x02\x0262\x03\x02\x02\x0263\x03\x02\x02\x0264\x03\x02\x02\x02" +
		"65\x03\x02\x02\x027\x05\x03\x02\x02\x0289\t\x02\x02\x029<\x07-\x02\x02" +
		":;\x07\x06\x02\x02;=\x05\x12\n\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02" +
		"=@\x03\x02\x02\x02>?\x07\x07\x02\x02?A\x05\x1E\x10\x02@>\x03\x02\x02\x02" +
		"@A\x03\x02\x02\x02AB\x03\x02\x02\x02BC\x07\b\x02\x02C\x07\x03\x02\x02" +
		"\x02DE\x07-\x02\x02EF\t\x03\x02\x02FG\x05\x1E\x10\x02GH\x07\b\x02\x02" +
		"H\t\x03\x02\x02\x02IJ\x07-\x02\x02JK\t\x04\x02\x02KL\x07\b\x02\x02L\v" +
		"\x03\x02\x02\x02MN\x07\x0F\x02\x02NO\x07-\x02\x02OQ\x07\x10\x02\x02PR" +
		"\x05\x0E\b\x02QP\x03\x02\x02\x02QR\x03\x02\x02\x02RS\x03\x02\x02\x02S" +
		"V\x07\x11\x02\x02TU\x07\x06\x02\x02UW\x05\x12\n\x02VT\x03\x02\x02\x02" +
		"VW\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x05\x14\v\x02Y\r\x03\x02\x02\x02" +
		"Z_\x05\x10\t\x02[\\\x07\x12\x02\x02\\^\x05\x10\t\x02][\x03\x02\x02\x02" +
		"^a\x03\x02\x02\x02_]\x03\x02\x02\x02_`\x03\x02\x02\x02`\x0F\x03\x02\x02" +
		"\x02a_\x03\x02\x02\x02bc\x07-\x02\x02cd\x07\x06\x02\x02de\x05\x12\n\x02" +
		"e\x11\x03\x02\x02\x02fg\t\x05\x02\x02g\x13\x03\x02\x02\x02hl\x07\x17\x02" +
		"\x02ik\x05\x04\x03\x02ji\x03\x02\x02\x02kn\x03\x02\x02\x02lj\x03\x02\x02" +
		"\x02lm\x03\x02\x02\x02mo\x03\x02\x02\x02nl\x03\x02\x02\x02op\x07\x18\x02" +
		"\x02p\x15\x03\x02\x02\x02qr\x05\x1E\x10\x02rs\x07\b\x02\x02s\x17\x03\x02" +
		"\x02\x02tu\x07\x19\x02\x02uv\x07\x10\x02\x02vw\x05\x1E\x10\x02wx\x07\x11" +
		"\x02\x02x{\x05\x14\v\x02yz\x07\x1A\x02\x02z|\x05\x14\v\x02{y\x03\x02\x02" +
		"\x02{|\x03\x02\x02\x02|\x19\x03\x02\x02\x02}~\x07\x1B\x02\x02~\x7F\x07" +
		"\x10\x02\x02\x7F\x80\x05\x06\x04\x02\x80\x81\x05\x1E\x10\x02\x81\x82\x07" +
		"\b\x02\x02\x82\x83\x05\x1E\x10\x02\x83\x84\x07\x11\x02\x02\x84\x85\x05" +
		"\x14\v\x02\x85\x1B\x03\x02\x02\x02\x86\x88\x07\x1C\x02\x02\x87\x89\x05" +
		"\x1E\x10\x02\x88\x87\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x03" +
		"\x02\x02\x02\x8A\x8B\x07\b\x02\x02\x8B\x1D\x03\x02\x02\x02\x8C\x8D\b\x10" +
		"\x01\x02\x8D\x97\x05$\x13\x02\x8E\x97\x07-\x02\x02\x8F\x90\x07-\x02\x02" +
		"\x90\x97\t\x04\x02\x02\x91\x97\x05 \x11\x02\x92\x93\x07\x10\x02\x02\x93" +
		"\x94\x05\x1E\x10\x02\x94\x95\x07\x11\x02\x02\x95\x97\x03\x02\x02\x02\x96" +
		"\x8C\x03\x02\x02\x02\x96\x8E\x03\x02\x02\x02\x96\x8F\x03\x02\x02\x02\x96" +
		"\x91\x03\x02\x02\x02\x96\x92\x03\x02\x02\x02\x97\xAC\x03\x02\x02\x02\x98" +
		"\x99\f\x07\x02\x02\x99\x9A\t\x06\x02\x02\x9A\xAB\x05\x1E\x10\b\x9B\x9C" +
		"\f\x06\x02\x02\x9C\x9D\t\x07\x02\x02\x9D\xAB\x05\x1E\x10\x07\x9E\x9F\f" +
		"\x05\x02\x02\x9F\xA0\t\b\x02\x02\xA0\xAB\x05\x1E\x10\x06\xA1\xA2\f\x04" +
		"\x02\x02\xA2\xA3\x07(\x02\x02\xA3\xAB\x05\x1E\x10\x05\xA4\xA5\f\x03\x02" +
		"\x02\xA5\xA6\x07)\x02\x02\xA6\xAB\x05\x1E\x10\x04\xA7\xA8\f\t\x02\x02" +
		"\xA8\xA9\x07\x1D\x02\x02\xA9\xAB\x07-\x02\x02\xAA\x98\x03\x02\x02\x02" +
		"\xAA\x9B\x03\x02\x02\x02\xAA\x9E\x03\x02\x02\x02\xAA\xA1\x03\x02\x02\x02" +
		"\xAA\xA4\x03\x02\x02\x02\xAA\xA7\x03\x02\x02\x02\xAB\xAE\x03\x02\x02\x02" +
		"\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\x1F\x03\x02\x02\x02" +
		"\xAE\xAC\x03\x02\x02\x02\xAF\xB0\x07-\x02\x02\xB0\xB2\x07\x10\x02\x02" +
		"\xB1\xB3\x05\"\x12\x02\xB2\xB1\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02" +
		"\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x07\x11\x02\x02\xB5!\x03\x02\x02\x02" +
		"\xB6\xBB\x05\x1E\x10\x02\xB7\xB8\x07\x12\x02\x02\xB8\xBA\x05\x1E\x10\x02" +
		"\xB9\xB7\x03\x02\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02" +
		"\xBB\xBC\x03\x02\x02\x02\xBC#\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02" +
		"\xBE\xC2\x07*\x02\x02\xBF\xC2\x07+\x02\x02\xC0\xC2\x07,\x02\x02\xC1\xBE" +
		"\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC0\x03\x02\x02\x02\xC2%" +
		"\x03\x02\x02\x02\x12)6<@QV_l{\x88\x96\xAA\xAC\xB2\xBB\xC1";
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


