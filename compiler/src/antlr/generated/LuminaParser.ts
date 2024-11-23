// Generated from Lumina.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import LuminaListener from "./LuminaListener.js";
import LuminaVisitor from "./LuminaVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class LuminaParser extends Parser {
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
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly IDENTIFIER = 52;
	public static readonly NUMBER = 53;
	public static readonly STRING = 54;
	public static readonly SEMICOLON = 55;
	public static readonly PUNCTUATION = 56;
	public static readonly WS = 57;
	public static readonly COMMENT = 58;
	public static readonly MULTILINE_COMMENT = 59;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_variableDeclaration = 2;
	public static readonly RULE_functionDeclaration = 3;
	public static readonly RULE_parameterList = 4;
	public static readonly RULE_parameter = 5;
	public static readonly RULE_expressionStatement = 6;
	public static readonly RULE_ifStatement = 7;
	public static readonly RULE_forStatement = 8;
	public static readonly RULE_whileStatement = 9;
	public static readonly RULE_returnStatement = 10;
	public static readonly RULE_printStatement = 11;
	public static readonly RULE_block = 12;
	public static readonly RULE_expression = 13;
	public static readonly RULE_assignmentExpression = 14;
	public static readonly RULE_conditionalExpression = 15;
	public static readonly RULE_logicalOrExpression = 16;
	public static readonly RULE_logicalAndExpression = 17;
	public static readonly RULE_equalityExpression = 18;
	public static readonly RULE_relationalExpression = 19;
	public static readonly RULE_additiveExpression = 20;
	public static readonly RULE_multiplicativeExpression = 21;
	public static readonly RULE_lambdaExpression = 22;
	public static readonly RULE_arrayExpression = 23;
	public static readonly RULE_unaryExpression = 24;
	public static readonly RULE_postfixExpression = 25;
	public static readonly RULE_primaryExpression = 26;
	public static readonly RULE_type = 27;
	public static readonly RULE_assignmentOperator = 28;
	public static readonly RULE_equalityOperator = 29;
	public static readonly RULE_relationalOperator = 30;
	public static readonly RULE_additiveOperator = 31;
	public static readonly RULE_multiplicativeOperator = 32;
	public static readonly RULE_unaryOperator = 33;
	public static readonly literalNames: (string | null)[] = [ null, "'let'", 
                                                            "'const'", "'var'", 
                                                            "':'", "'='", 
                                                            "'function'", 
                                                            "'('", "')'", 
                                                            "','", "'if'", 
                                                            "'else'", "'for'", 
                                                            "'while'", "'return'", 
                                                            "'print'", "'{'", 
                                                            "'}'", "'?'", 
                                                            "'||'", "'&&'", 
                                                            "'=>'", "'['", 
                                                            "']'", "'true'", 
                                                            "'false'", "'null'", 
                                                            "'number'", 
                                                            "'string'", 
                                                            "'boolean'", 
                                                            "'any'", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'%='", 
                                                            "'=='", "'!='", 
                                                            "'==='", "'!=='", 
                                                            "'<'", "'>'", 
                                                            "'<='", "'>='", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'%'", "'!'", 
                                                            "'++'", "'--'", 
                                                            null, null, 
                                                            null, "';'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             "IDENTIFIER", 
                                                             "NUMBER", "STRING", 
                                                             "SEMICOLON", 
                                                             "PUNCTUATION", 
                                                             "WS", "COMMENT", 
                                                             "MULTILINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "variableDeclaration", "functionDeclaration", 
		"parameterList", "parameter", "expressionStatement", "ifStatement", "forStatement", 
		"whileStatement", "returnStatement", "printStatement", "block", "expression", 
		"assignmentExpression", "conditionalExpression", "logicalOrExpression", 
		"logicalAndExpression", "equalityExpression", "relationalExpression", 
		"additiveExpression", "multiplicativeExpression", "lambdaExpression", 
		"arrayExpression", "unaryExpression", "postfixExpression", "primaryExpression", 
		"type", "assignmentOperator", "equalityOperator", "relationalOperator", 
		"additiveOperator", "multiplicativeOperator", "unaryOperator",
	];
	public get grammarFileName(): string { return "Lumina.g4"; }
	public get literalNames(): (string | null)[] { return LuminaParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return LuminaParser.symbolicNames; }
	public get ruleNames(): string[] { return LuminaParser.ruleNames; }
	public get serializedATN(): number[] { return LuminaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, LuminaParser._ATN, LuminaParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, LuminaParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 71;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121763022) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 2019) !== 0)) {
				{
				{
				this.state = 68;
				this.statement();
				}
				}
				this.state = 73;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, LuminaParser.RULE_statement);
		try {
			this.state = 83;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 74;
				this.variableDeclaration();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 75;
				this.functionDeclaration();
				}
				break;
			case 7:
			case 22:
			case 24:
			case 25:
			case 26:
			case 44:
			case 45:
			case 49:
			case 50:
			case 51:
			case 52:
			case 53:
			case 54:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 76;
				this.expressionStatement();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 77;
				this.ifStatement();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 78;
				this.forStatement();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 79;
				this.whileStatement();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 80;
				this.returnStatement();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 81;
				this.printStatement();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 82;
				this.block();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDeclaration(): VariableDeclarationContext {
		let localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LuminaParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 85;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 86;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 87;
				this.match(LuminaParser.T__3);
				this.state = 88;
				this.type_(0);
				}
			}

			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 91;
				this.match(LuminaParser.T__4);
				this.state = 92;
				this.expression();
				}
			}

			this.state = 95;
			this.match(LuminaParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LuminaParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 97;
			this.match(LuminaParser.T__5);
			this.state = 98;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 99;
			this.match(LuminaParser.T__6);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 100;
				this.parameterList();
				}
			}

			this.state = 103;
			this.match(LuminaParser.T__7);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 104;
				this.match(LuminaParser.T__3);
				this.state = 105;
				this.type_(0);
				}
			}

			this.state = 108;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let localctx: ParameterListContext = new ParameterListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, LuminaParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 110;
			this.parameter();
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 111;
				this.match(LuminaParser.T__8);
				this.state = 112;
				this.parameter();
				}
				}
				this.state = 117;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, LuminaParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 118;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 121;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 119;
				this.match(LuminaParser.T__3);
				this.state = 120;
				this.type_(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionStatement(): ExpressionStatementContext {
		let localctx: ExpressionStatementContext = new ExpressionStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, LuminaParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 123;
			this.expression();
			this.state = 124;
			this.match(LuminaParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, LuminaParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
			this.match(LuminaParser.T__9);
			this.state = 127;
			this.match(LuminaParser.T__6);
			this.state = 128;
			this.expression();
			this.state = 129;
			this.match(LuminaParser.T__7);
			this.state = 130;
			this.statement();
			this.state = 133;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 131;
				this.match(LuminaParser.T__10);
				this.state = 132;
				this.statement();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forStatement(): ForStatementContext {
		let localctx: ForStatementContext = new ForStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LuminaParser.RULE_forStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 135;
			this.match(LuminaParser.T__11);
			this.state = 136;
			this.match(LuminaParser.T__6);
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				{
				this.state = 137;
				this.variableDeclaration();
				}
				break;
			case 2:
				{
				this.state = 138;
				this.expressionStatement();
				}
				break;
			}
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 141;
				this.match(LuminaParser.IDENTIFIER);
				this.state = 144;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 40:
				case 41:
				case 42:
				case 43:
					{
					this.state = 142;
					this.relationalOperator();
					}
					break;
				case 36:
				case 37:
				case 38:
				case 39:
					{
					this.state = 143;
					this.equalityOperator();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 146;
				_la = this._input.LA(1);
				if(!(_la===52 || _la===53)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
			}

			this.state = 150;
			this.match(LuminaParser.SEMICOLON);
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 151;
				this.match(LuminaParser.IDENTIFIER);
				this.state = 152;
				this.unaryExpression();
				}
			}

			this.state = 155;
			this.match(LuminaParser.T__7);
			this.state = 156;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileStatement(): WhileStatementContext {
		let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, LuminaParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 158;
			this.match(LuminaParser.T__12);
			this.state = 159;
			this.match(LuminaParser.T__6);
			this.state = 160;
			this.expression();
			this.state = 161;
			this.match(LuminaParser.T__7);
			this.state = 162;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let localctx: ReturnStatementContext = new ReturnStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LuminaParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 164;
			this.match(LuminaParser.T__13);
			this.state = 166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634944) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 2019) !== 0)) {
				{
				this.state = 165;
				this.expression();
				}
			}

			this.state = 168;
			this.match(LuminaParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public printStatement(): PrintStatementContext {
		let localctx: PrintStatementContext = new PrintStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, LuminaParser.RULE_printStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 170;
			this.match(LuminaParser.T__14);
			this.state = 171;
			this.match(LuminaParser.T__6);
			this.state = 172;
			this.expression();
			this.state = 173;
			this.match(LuminaParser.T__7);
			this.state = 174;
			this.match(LuminaParser.SEMICOLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, LuminaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 176;
			this.match(LuminaParser.T__15);
			this.state = 180;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121763022) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 2019) !== 0)) {
				{
				{
				this.state = 177;
				this.statement();
				}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===55) {
				{
				this.state = 183;
				this.match(LuminaParser.SEMICOLON);
				}
			}

			this.state = 186;
			this.match(LuminaParser.T__16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, LuminaParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 188;
			this.assignmentExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentExpression(): AssignmentExpressionContext {
		let localctx: AssignmentExpressionContext = new AssignmentExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, LuminaParser.RULE_assignmentExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 190;
			this.conditionalExpression();
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 191;
				this.assignmentOperator();
				this.state = 192;
				this.assignmentExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditionalExpression(): ConditionalExpressionContext {
		let localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, LuminaParser.RULE_conditionalExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 196;
			this.logicalOrExpression();
			this.state = 202;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 197;
				this.match(LuminaParser.T__17);
				this.state = 198;
				this.expression();
				this.state = 199;
				this.match(LuminaParser.T__3);
				this.state = 200;
				this.conditionalExpression();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public logicalOrExpression(): LogicalOrExpressionContext {
		let localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, LuminaParser.RULE_logicalOrExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 204;
			this.logicalAndExpression();
			this.state = 209;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 205;
					this.match(LuminaParser.T__18);
					this.state = 206;
					this.logicalAndExpression();
					}
					}
				}
				this.state = 211;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 18, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public logicalAndExpression(): LogicalAndExpressionContext {
		let localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, LuminaParser.RULE_logicalAndExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 212;
			this.equalityExpression();
			this.state = 217;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 213;
					this.match(LuminaParser.T__19);
					this.state = 214;
					this.equalityExpression();
					}
					}
				}
				this.state = 219;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public equalityExpression(): EqualityExpressionContext {
		let localctx: EqualityExpressionContext = new EqualityExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, LuminaParser.RULE_equalityExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 220;
			this.relationalExpression();
			this.state = 226;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 221;
					this.equalityOperator();
					this.state = 222;
					this.relationalExpression();
					}
					}
				}
				this.state = 228;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationalExpression(): RelationalExpressionContext {
		let localctx: RelationalExpressionContext = new RelationalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, LuminaParser.RULE_relationalExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 229;
			this.additiveExpression();
			this.state = 235;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 230;
					this.relationalOperator();
					this.state = 231;
					this.additiveExpression();
					}
					}
				}
				this.state = 237;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public additiveExpression(): AdditiveExpressionContext {
		let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, LuminaParser.RULE_additiveExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 238;
			this.multiplicativeExpression();
			this.state = 244;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 239;
					this.additiveOperator();
					this.state = 240;
					this.multiplicativeExpression();
					}
					}
				}
				this.state = 246;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, LuminaParser.RULE_multiplicativeExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 247;
			this.unaryExpression();
			this.state = 253;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 248;
					this.multiplicativeOperator();
					this.state = 249;
					this.unaryExpression();
					}
					}
				}
				this.state = 255;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public lambdaExpression(): LambdaExpressionContext {
		let localctx: LambdaExpressionContext = new LambdaExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, LuminaParser.RULE_lambdaExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 256;
			this.match(LuminaParser.T__6);
			this.state = 258;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 257;
				this.parameterList();
				}
			}

			this.state = 260;
			this.match(LuminaParser.T__7);
			this.state = 261;
			this.match(LuminaParser.T__20);
			this.state = 262;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public arrayExpression(): ArrayExpressionContext {
		let localctx: ArrayExpressionContext = new ArrayExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, LuminaParser.RULE_arrayExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 264;
			this.match(LuminaParser.T__21);
			this.state = 273;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 121634944) !== 0) || ((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 2019) !== 0)) {
				{
				this.state = 265;
				this.expression();
				this.state = 270;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9) {
					{
					{
					this.state = 266;
					this.match(LuminaParser.T__8);
					this.state = 267;
					this.expression();
					}
					}
					this.state = 272;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 275;
			this.match(LuminaParser.T__22);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryExpression(): UnaryExpressionContext {
		let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, LuminaParser.RULE_unaryExpression);
		try {
			this.state = 282;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 277;
				this.postfixExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 278;
				this.unaryOperator();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 279;
				this.unaryOperator();
				this.state = 280;
				this.unaryExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public postfixExpression(): PostfixExpressionContext {
		let localctx: PostfixExpressionContext = new PostfixExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, LuminaParser.RULE_postfixExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 284;
			this.primaryExpression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primaryExpression(): PrimaryExpressionContext {
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, LuminaParser.RULE_primaryExpression);
		try {
			this.state = 298;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 286;
				this.match(LuminaParser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 287;
				this.match(LuminaParser.NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 288;
				this.match(LuminaParser.STRING);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 289;
				this.match(LuminaParser.T__23);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 290;
				this.match(LuminaParser.T__24);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 291;
				this.match(LuminaParser.T__25);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 292;
				this.match(LuminaParser.T__6);
				this.state = 293;
				this.expression();
				this.state = 294;
				this.match(LuminaParser.T__7);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 296;
				this.lambdaExpression();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 297;
				this.arrayExpression();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public type_(): TypeContext;
	public type_(_p: number): TypeContext;
	// @RuleVersion(0)
	public type_(_p?: number): TypeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: TypeContext = new TypeContext(this, this._ctx, _parentState);
		let _prevctx: TypeContext = localctx;
		let _startState: number = 54;
		this.enterRecursionRule(localctx, 54, LuminaParser.RULE_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 306;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 27:
				{
				this.state = 301;
				this.match(LuminaParser.T__26);
				}
				break;
			case 28:
				{
				this.state = 302;
				this.match(LuminaParser.T__27);
				}
				break;
			case 29:
				{
				this.state = 303;
				this.match(LuminaParser.T__28);
				}
				break;
			case 30:
				{
				this.state = 304;
				this.match(LuminaParser.T__29);
				}
				break;
			case 52:
				{
				this.state = 305;
				this.match(LuminaParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 313;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new TypeContext(this, _parentctx, _parentState);
					this.pushNewRecursionContext(localctx, _startState, LuminaParser.RULE_type);
					this.state = 308;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 309;
					this.match(LuminaParser.T__21);
					this.state = 310;
					this.match(LuminaParser.T__22);
					}
					}
				}
				this.state = 315;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assignmentOperator(): AssignmentOperatorContext {
		let localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, LuminaParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 316;
			_la = this._input.LA(1);
			if(!(((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 2080374785) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public equalityOperator(): EqualityOperatorContext {
		let localctx: EqualityOperatorContext = new EqualityOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, LuminaParser.RULE_equalityOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 318;
			_la = this._input.LA(1);
			if(!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & 15) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public relationalOperator(): RelationalOperatorContext {
		let localctx: RelationalOperatorContext = new RelationalOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, LuminaParser.RULE_relationalOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 320;
			_la = this._input.LA(1);
			if(!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 15) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public additiveOperator(): AdditiveOperatorContext {
		let localctx: AdditiveOperatorContext = new AdditiveOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, LuminaParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 322;
			_la = this._input.LA(1);
			if(!(_la===44 || _la===45)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public multiplicativeOperator(): MultiplicativeOperatorContext {
		let localctx: MultiplicativeOperatorContext = new MultiplicativeOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, LuminaParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 324;
			_la = this._input.LA(1);
			if(!(((((_la - 46)) & ~0x1F) === 0 && ((1 << (_la - 46)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unaryOperator(): UnaryOperatorContext {
		let localctx: UnaryOperatorContext = new UnaryOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, LuminaParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 326;
			_la = this._input.LA(1);
			if(!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 227) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 27:
			return this.type_sempred(localctx as TypeContext, predIndex);
		}
		return true;
	}
	private type_sempred(localctx: TypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,59,329,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,1,0,5,0,70,8,0,10,0,12,0,73,9,0,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,3,1,84,8,1,1,2,1,2,1,2,1,2,3,2,90,8,2,1,2,1,2,3,2,94,8,
	2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,102,8,3,1,3,1,3,1,3,3,3,107,8,3,1,3,1,3,1,
	4,1,4,1,4,5,4,114,8,4,10,4,12,4,117,9,4,1,5,1,5,1,5,3,5,122,8,5,1,6,1,6,
	1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,134,8,7,1,8,1,8,1,8,1,8,3,8,140,8,8,
	1,8,1,8,1,8,3,8,145,8,8,1,8,1,8,3,8,149,8,8,1,8,1,8,1,8,3,8,154,8,8,1,8,
	1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,3,10,167,8,10,1,10,1,10,1,11,
	1,11,1,11,1,11,1,11,1,11,1,12,1,12,5,12,179,8,12,10,12,12,12,182,9,12,1,
	12,3,12,185,8,12,1,12,1,12,1,13,1,13,1,14,1,14,1,14,1,14,3,14,195,8,14,
	1,15,1,15,1,15,1,15,1,15,1,15,3,15,203,8,15,1,16,1,16,1,16,5,16,208,8,16,
	10,16,12,16,211,9,16,1,17,1,17,1,17,5,17,216,8,17,10,17,12,17,219,9,17,
	1,18,1,18,1,18,1,18,5,18,225,8,18,10,18,12,18,228,9,18,1,19,1,19,1,19,1,
	19,5,19,234,8,19,10,19,12,19,237,9,19,1,20,1,20,1,20,1,20,5,20,243,8,20,
	10,20,12,20,246,9,20,1,21,1,21,1,21,1,21,5,21,252,8,21,10,21,12,21,255,
	9,21,1,22,1,22,3,22,259,8,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,5,
	23,269,8,23,10,23,12,23,272,9,23,3,23,274,8,23,1,23,1,23,1,24,1,24,1,24,
	1,24,1,24,3,24,283,8,24,1,25,1,25,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,
	26,1,26,1,26,1,26,1,26,3,26,299,8,26,1,27,1,27,1,27,1,27,1,27,1,27,3,27,
	307,8,27,1,27,1,27,1,27,5,27,312,8,27,10,27,12,27,315,9,27,1,28,1,28,1,
	29,1,29,1,30,1,30,1,31,1,31,1,32,1,32,1,33,1,33,1,33,0,1,54,34,0,2,4,6,
	8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
	56,58,60,62,64,66,0,8,1,0,1,3,1,0,52,53,2,0,5,5,31,35,1,0,36,39,1,0,40,
	43,1,0,44,45,1,0,46,48,2,0,44,45,49,51,344,0,71,1,0,0,0,2,83,1,0,0,0,4,
	85,1,0,0,0,6,97,1,0,0,0,8,110,1,0,0,0,10,118,1,0,0,0,12,123,1,0,0,0,14,
	126,1,0,0,0,16,135,1,0,0,0,18,158,1,0,0,0,20,164,1,0,0,0,22,170,1,0,0,0,
	24,176,1,0,0,0,26,188,1,0,0,0,28,190,1,0,0,0,30,196,1,0,0,0,32,204,1,0,
	0,0,34,212,1,0,0,0,36,220,1,0,0,0,38,229,1,0,0,0,40,238,1,0,0,0,42,247,
	1,0,0,0,44,256,1,0,0,0,46,264,1,0,0,0,48,282,1,0,0,0,50,284,1,0,0,0,52,
	298,1,0,0,0,54,306,1,0,0,0,56,316,1,0,0,0,58,318,1,0,0,0,60,320,1,0,0,0,
	62,322,1,0,0,0,64,324,1,0,0,0,66,326,1,0,0,0,68,70,3,2,1,0,69,68,1,0,0,
	0,70,73,1,0,0,0,71,69,1,0,0,0,71,72,1,0,0,0,72,1,1,0,0,0,73,71,1,0,0,0,
	74,84,3,4,2,0,75,84,3,6,3,0,76,84,3,12,6,0,77,84,3,14,7,0,78,84,3,16,8,
	0,79,84,3,18,9,0,80,84,3,20,10,0,81,84,3,22,11,0,82,84,3,24,12,0,83,74,
	1,0,0,0,83,75,1,0,0,0,83,76,1,0,0,0,83,77,1,0,0,0,83,78,1,0,0,0,83,79,1,
	0,0,0,83,80,1,0,0,0,83,81,1,0,0,0,83,82,1,0,0,0,84,3,1,0,0,0,85,86,7,0,
	0,0,86,89,5,52,0,0,87,88,5,4,0,0,88,90,3,54,27,0,89,87,1,0,0,0,89,90,1,
	0,0,0,90,93,1,0,0,0,91,92,5,5,0,0,92,94,3,26,13,0,93,91,1,0,0,0,93,94,1,
	0,0,0,94,95,1,0,0,0,95,96,5,55,0,0,96,5,1,0,0,0,97,98,5,6,0,0,98,99,5,52,
	0,0,99,101,5,7,0,0,100,102,3,8,4,0,101,100,1,0,0,0,101,102,1,0,0,0,102,
	103,1,0,0,0,103,106,5,8,0,0,104,105,5,4,0,0,105,107,3,54,27,0,106,104,1,
	0,0,0,106,107,1,0,0,0,107,108,1,0,0,0,108,109,3,24,12,0,109,7,1,0,0,0,110,
	115,3,10,5,0,111,112,5,9,0,0,112,114,3,10,5,0,113,111,1,0,0,0,114,117,1,
	0,0,0,115,113,1,0,0,0,115,116,1,0,0,0,116,9,1,0,0,0,117,115,1,0,0,0,118,
	121,5,52,0,0,119,120,5,4,0,0,120,122,3,54,27,0,121,119,1,0,0,0,121,122,
	1,0,0,0,122,11,1,0,0,0,123,124,3,26,13,0,124,125,5,55,0,0,125,13,1,0,0,
	0,126,127,5,10,0,0,127,128,5,7,0,0,128,129,3,26,13,0,129,130,5,8,0,0,130,
	133,3,2,1,0,131,132,5,11,0,0,132,134,3,2,1,0,133,131,1,0,0,0,133,134,1,
	0,0,0,134,15,1,0,0,0,135,136,5,12,0,0,136,139,5,7,0,0,137,140,3,4,2,0,138,
	140,3,12,6,0,139,137,1,0,0,0,139,138,1,0,0,0,139,140,1,0,0,0,140,148,1,
	0,0,0,141,144,5,52,0,0,142,145,3,60,30,0,143,145,3,58,29,0,144,142,1,0,
	0,0,144,143,1,0,0,0,145,146,1,0,0,0,146,147,7,1,0,0,147,149,1,0,0,0,148,
	141,1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,0,150,153,5,55,0,0,151,152,5,
	52,0,0,152,154,3,48,24,0,153,151,1,0,0,0,153,154,1,0,0,0,154,155,1,0,0,
	0,155,156,5,8,0,0,156,157,3,2,1,0,157,17,1,0,0,0,158,159,5,13,0,0,159,160,
	5,7,0,0,160,161,3,26,13,0,161,162,5,8,0,0,162,163,3,2,1,0,163,19,1,0,0,
	0,164,166,5,14,0,0,165,167,3,26,13,0,166,165,1,0,0,0,166,167,1,0,0,0,167,
	168,1,0,0,0,168,169,5,55,0,0,169,21,1,0,0,0,170,171,5,15,0,0,171,172,5,
	7,0,0,172,173,3,26,13,0,173,174,5,8,0,0,174,175,5,55,0,0,175,23,1,0,0,0,
	176,180,5,16,0,0,177,179,3,2,1,0,178,177,1,0,0,0,179,182,1,0,0,0,180,178,
	1,0,0,0,180,181,1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,183,185,5,55,0,
	0,184,183,1,0,0,0,184,185,1,0,0,0,185,186,1,0,0,0,186,187,5,17,0,0,187,
	25,1,0,0,0,188,189,3,28,14,0,189,27,1,0,0,0,190,194,3,30,15,0,191,192,3,
	56,28,0,192,193,3,28,14,0,193,195,1,0,0,0,194,191,1,0,0,0,194,195,1,0,0,
	0,195,29,1,0,0,0,196,202,3,32,16,0,197,198,5,18,0,0,198,199,3,26,13,0,199,
	200,5,4,0,0,200,201,3,30,15,0,201,203,1,0,0,0,202,197,1,0,0,0,202,203,1,
	0,0,0,203,31,1,0,0,0,204,209,3,34,17,0,205,206,5,19,0,0,206,208,3,34,17,
	0,207,205,1,0,0,0,208,211,1,0,0,0,209,207,1,0,0,0,209,210,1,0,0,0,210,33,
	1,0,0,0,211,209,1,0,0,0,212,217,3,36,18,0,213,214,5,20,0,0,214,216,3,36,
	18,0,215,213,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,0,0,0,218,
	35,1,0,0,0,219,217,1,0,0,0,220,226,3,38,19,0,221,222,3,58,29,0,222,223,
	3,38,19,0,223,225,1,0,0,0,224,221,1,0,0,0,225,228,1,0,0,0,226,224,1,0,0,
	0,226,227,1,0,0,0,227,37,1,0,0,0,228,226,1,0,0,0,229,235,3,40,20,0,230,
	231,3,60,30,0,231,232,3,40,20,0,232,234,1,0,0,0,233,230,1,0,0,0,234,237,
	1,0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,39,1,0,0,0,237,235,1,0,0,0,
	238,244,3,42,21,0,239,240,3,62,31,0,240,241,3,42,21,0,241,243,1,0,0,0,242,
	239,1,0,0,0,243,246,1,0,0,0,244,242,1,0,0,0,244,245,1,0,0,0,245,41,1,0,
	0,0,246,244,1,0,0,0,247,253,3,48,24,0,248,249,3,64,32,0,249,250,3,48,24,
	0,250,252,1,0,0,0,251,248,1,0,0,0,252,255,1,0,0,0,253,251,1,0,0,0,253,254,
	1,0,0,0,254,43,1,0,0,0,255,253,1,0,0,0,256,258,5,7,0,0,257,259,3,8,4,0,
	258,257,1,0,0,0,258,259,1,0,0,0,259,260,1,0,0,0,260,261,5,8,0,0,261,262,
	5,21,0,0,262,263,3,26,13,0,263,45,1,0,0,0,264,273,5,22,0,0,265,270,3,26,
	13,0,266,267,5,9,0,0,267,269,3,26,13,0,268,266,1,0,0,0,269,272,1,0,0,0,
	270,268,1,0,0,0,270,271,1,0,0,0,271,274,1,0,0,0,272,270,1,0,0,0,273,265,
	1,0,0,0,273,274,1,0,0,0,274,275,1,0,0,0,275,276,5,23,0,0,276,47,1,0,0,0,
	277,283,3,50,25,0,278,283,3,66,33,0,279,280,3,66,33,0,280,281,3,48,24,0,
	281,283,1,0,0,0,282,277,1,0,0,0,282,278,1,0,0,0,282,279,1,0,0,0,283,49,
	1,0,0,0,284,285,3,52,26,0,285,51,1,0,0,0,286,299,5,52,0,0,287,299,5,53,
	0,0,288,299,5,54,0,0,289,299,5,24,0,0,290,299,5,25,0,0,291,299,5,26,0,0,
	292,293,5,7,0,0,293,294,3,26,13,0,294,295,5,8,0,0,295,299,1,0,0,0,296,299,
	3,44,22,0,297,299,3,46,23,0,298,286,1,0,0,0,298,287,1,0,0,0,298,288,1,0,
	0,0,298,289,1,0,0,0,298,290,1,0,0,0,298,291,1,0,0,0,298,292,1,0,0,0,298,
	296,1,0,0,0,298,297,1,0,0,0,299,53,1,0,0,0,300,301,6,27,-1,0,301,307,5,
	27,0,0,302,307,5,28,0,0,303,307,5,29,0,0,304,307,5,30,0,0,305,307,5,52,
	0,0,306,300,1,0,0,0,306,302,1,0,0,0,306,303,1,0,0,0,306,304,1,0,0,0,306,
	305,1,0,0,0,307,313,1,0,0,0,308,309,10,1,0,0,309,310,5,22,0,0,310,312,5,
	23,0,0,311,308,1,0,0,0,312,315,1,0,0,0,313,311,1,0,0,0,313,314,1,0,0,0,
	314,55,1,0,0,0,315,313,1,0,0,0,316,317,7,2,0,0,317,57,1,0,0,0,318,319,7,
	3,0,0,319,59,1,0,0,0,320,321,7,4,0,0,321,61,1,0,0,0,322,323,7,5,0,0,323,
	63,1,0,0,0,324,325,7,6,0,0,325,65,1,0,0,0,326,327,7,7,0,0,327,67,1,0,0,
	0,31,71,83,89,93,101,106,115,121,133,139,144,148,153,166,180,184,194,202,
	209,217,226,235,244,253,258,270,273,282,298,306,313];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LuminaParser.__ATN) {
			LuminaParser.__ATN = new ATNDeserializer().deserialize(LuminaParser._serializedATN);
		}

		return LuminaParser.__ATN;
	}


	static DecisionsToDFA = LuminaParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_program;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitProgram) {
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
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public functionDeclaration(): FunctionDeclarationContext {
		return this.getTypedRuleContext(FunctionDeclarationContext, 0) as FunctionDeclarationContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public ifStatement(): IfStatementContext {
		return this.getTypedRuleContext(IfStatementContext, 0) as IfStatementContext;
	}
	public forStatement(): ForStatementContext {
		return this.getTypedRuleContext(ForStatementContext, 0) as ForStatementContext;
	}
	public whileStatement(): WhileStatementContext {
		return this.getTypedRuleContext(WhileStatementContext, 0) as WhileStatementContext;
	}
	public returnStatement(): ReturnStatementContext {
		return this.getTypedRuleContext(ReturnStatementContext, 0) as ReturnStatementContext;
	}
	public printStatement(): PrintStatementContext {
		return this.getTypedRuleContext(PrintStatementContext, 0) as PrintStatementContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_statement;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitStatement) {
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
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(LuminaParser.IDENTIFIER, 0);
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(LuminaParser.SEMICOLON, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_variableDeclaration;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterVariableDeclaration) {
	 		listener.enterVariableDeclaration(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitVariableDeclaration) {
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


export class FunctionDeclarationContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(LuminaParser.IDENTIFIER, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_functionDeclaration;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterFunctionDeclaration) {
	 		listener.enterFunctionDeclaration(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitFunctionDeclaration) {
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
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_parameterList;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterParameterList) {
	 		listener.enterParameterList(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitParameterList) {
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
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(LuminaParser.IDENTIFIER, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_parameter;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterParameter) {
	 		listener.enterParameter(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitParameter) {
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


export class ExpressionStatementContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(LuminaParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_expressionStatement;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterExpressionStatement) {
	 		listener.enterExpressionStatement(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitExpressionStatement) {
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
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_ifStatement;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterIfStatement) {
	 		listener.enterIfStatement(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitIfStatement) {
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
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(LuminaParser.SEMICOLON, 0);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(LuminaParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(LuminaParser.IDENTIFIER, i);
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
	public NUMBER(): TerminalNode {
		return this.getToken(LuminaParser.NUMBER, 0);
	}
	public relationalOperator(): RelationalOperatorContext {
		return this.getTypedRuleContext(RelationalOperatorContext, 0) as RelationalOperatorContext;
	}
	public equalityOperator(): EqualityOperatorContext {
		return this.getTypedRuleContext(EqualityOperatorContext, 0) as EqualityOperatorContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_forStatement;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterForStatement) {
	 		listener.enterForStatement(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitForStatement) {
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
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_whileStatement;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterWhileStatement) {
	 		listener.enterWhileStatement(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitWhileStatement) {
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
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(LuminaParser.SEMICOLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_returnStatement;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterReturnStatement) {
	 		listener.enterReturnStatement(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitReturnStatement) {
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


export class PrintStatementContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(LuminaParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_printStatement;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterPrintStatement) {
	 		listener.enterPrintStatement(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitPrintStatement) {
	 		listener.exitPrintStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitPrintStatement) {
			return visitor.visitPrintStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(LuminaParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_block;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitBlock) {
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


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_expression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AssignmentExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
	}
	public assignmentExpression(): AssignmentExpressionContext {
		return this.getTypedRuleContext(AssignmentExpressionContext, 0) as AssignmentExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_assignmentExpression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterAssignmentExpression) {
	 		listener.enterAssignmentExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitAssignmentExpression) {
	 		listener.exitAssignmentExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitAssignmentExpression) {
			return visitor.visitAssignmentExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public logicalOrExpression(): LogicalOrExpressionContext {
		return this.getTypedRuleContext(LogicalOrExpressionContext, 0) as LogicalOrExpressionContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public conditionalExpression(): ConditionalExpressionContext {
		return this.getTypedRuleContext(ConditionalExpressionContext, 0) as ConditionalExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_conditionalExpression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterConditionalExpression) {
	 		listener.enterConditionalExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitConditionalExpression) {
	 		listener.exitConditionalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitConditionalExpression) {
			return visitor.visitConditionalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalOrExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public logicalAndExpression_list(): LogicalAndExpressionContext[] {
		return this.getTypedRuleContexts(LogicalAndExpressionContext) as LogicalAndExpressionContext[];
	}
	public logicalAndExpression(i: number): LogicalAndExpressionContext {
		return this.getTypedRuleContext(LogicalAndExpressionContext, i) as LogicalAndExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_logicalOrExpression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterLogicalOrExpression) {
	 		listener.enterLogicalOrExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitLogicalOrExpression) {
	 		listener.exitLogicalOrExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitLogicalOrExpression) {
			return visitor.visitLogicalOrExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LogicalAndExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public equalityExpression_list(): EqualityExpressionContext[] {
		return this.getTypedRuleContexts(EqualityExpressionContext) as EqualityExpressionContext[];
	}
	public equalityExpression(i: number): EqualityExpressionContext {
		return this.getTypedRuleContext(EqualityExpressionContext, i) as EqualityExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_logicalAndExpression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterLogicalAndExpression) {
	 		listener.enterLogicalAndExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitLogicalAndExpression) {
	 		listener.exitLogicalAndExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitLogicalAndExpression) {
			return visitor.visitLogicalAndExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public relationalExpression_list(): RelationalExpressionContext[] {
		return this.getTypedRuleContexts(RelationalExpressionContext) as RelationalExpressionContext[];
	}
	public relationalExpression(i: number): RelationalExpressionContext {
		return this.getTypedRuleContext(RelationalExpressionContext, i) as RelationalExpressionContext;
	}
	public equalityOperator_list(): EqualityOperatorContext[] {
		return this.getTypedRuleContexts(EqualityOperatorContext) as EqualityOperatorContext[];
	}
	public equalityOperator(i: number): EqualityOperatorContext {
		return this.getTypedRuleContext(EqualityOperatorContext, i) as EqualityOperatorContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_equalityExpression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterEqualityExpression) {
	 		listener.enterEqualityExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitEqualityExpression) {
	 		listener.exitEqualityExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitEqualityExpression) {
			return visitor.visitEqualityExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public additiveExpression_list(): AdditiveExpressionContext[] {
		return this.getTypedRuleContexts(AdditiveExpressionContext) as AdditiveExpressionContext[];
	}
	public additiveExpression(i: number): AdditiveExpressionContext {
		return this.getTypedRuleContext(AdditiveExpressionContext, i) as AdditiveExpressionContext;
	}
	public relationalOperator_list(): RelationalOperatorContext[] {
		return this.getTypedRuleContexts(RelationalOperatorContext) as RelationalOperatorContext[];
	}
	public relationalOperator(i: number): RelationalOperatorContext {
		return this.getTypedRuleContext(RelationalOperatorContext, i) as RelationalOperatorContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_relationalExpression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterRelationalExpression) {
	 		listener.enterRelationalExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitRelationalExpression) {
	 		listener.exitRelationalExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitRelationalExpression) {
			return visitor.visitRelationalExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public multiplicativeExpression_list(): MultiplicativeExpressionContext[] {
		return this.getTypedRuleContexts(MultiplicativeExpressionContext) as MultiplicativeExpressionContext[];
	}
	public multiplicativeExpression(i: number): MultiplicativeExpressionContext {
		return this.getTypedRuleContext(MultiplicativeExpressionContext, i) as MultiplicativeExpressionContext;
	}
	public additiveOperator_list(): AdditiveOperatorContext[] {
		return this.getTypedRuleContexts(AdditiveOperatorContext) as AdditiveOperatorContext[];
	}
	public additiveOperator(i: number): AdditiveOperatorContext {
		return this.getTypedRuleContext(AdditiveOperatorContext, i) as AdditiveOperatorContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_additiveExpression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterAdditiveExpression) {
	 		listener.enterAdditiveExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitAdditiveExpression) {
	 		listener.exitAdditiveExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitAdditiveExpression) {
			return visitor.visitAdditiveExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unaryExpression_list(): UnaryExpressionContext[] {
		return this.getTypedRuleContexts(UnaryExpressionContext) as UnaryExpressionContext[];
	}
	public unaryExpression(i: number): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, i) as UnaryExpressionContext;
	}
	public multiplicativeOperator_list(): MultiplicativeOperatorContext[] {
		return this.getTypedRuleContexts(MultiplicativeOperatorContext) as MultiplicativeOperatorContext[];
	}
	public multiplicativeOperator(i: number): MultiplicativeOperatorContext {
		return this.getTypedRuleContext(MultiplicativeOperatorContext, i) as MultiplicativeOperatorContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_multiplicativeExpression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterMultiplicativeExpression) {
	 		listener.enterMultiplicativeExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitMultiplicativeExpression) {
	 		listener.exitMultiplicativeExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitMultiplicativeExpression) {
			return visitor.visitMultiplicativeExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LambdaExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public parameterList(): ParameterListContext {
		return this.getTypedRuleContext(ParameterListContext, 0) as ParameterListContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_lambdaExpression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterLambdaExpression) {
	 		listener.enterLambdaExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitLambdaExpression) {
	 		listener.exitLambdaExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitLambdaExpression) {
			return visitor.visitLambdaExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArrayExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_arrayExpression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterArrayExpression) {
	 		listener.enterArrayExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitArrayExpression) {
	 		listener.exitArrayExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitArrayExpression) {
			return visitor.visitArrayExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public postfixExpression(): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, 0) as PostfixExpressionContext;
	}
	public unaryOperator(): UnaryOperatorContext {
		return this.getTypedRuleContext(UnaryOperatorContext, 0) as UnaryOperatorContext;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_unaryExpression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterUnaryExpression) {
	 		listener.enterUnaryExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitUnaryExpression) {
	 		listener.exitUnaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitUnaryExpression) {
			return visitor.visitUnaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PostfixExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_postfixExpression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterPostfixExpression) {
	 		listener.enterPostfixExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitPostfixExpression) {
	 		listener.exitPostfixExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitPostfixExpression) {
			return visitor.visitPostfixExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrimaryExpressionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(LuminaParser.IDENTIFIER, 0);
	}
	public NUMBER(): TerminalNode {
		return this.getToken(LuminaParser.NUMBER, 0);
	}
	public STRING(): TerminalNode {
		return this.getToken(LuminaParser.STRING, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public lambdaExpression(): LambdaExpressionContext {
		return this.getTypedRuleContext(LambdaExpressionContext, 0) as LambdaExpressionContext;
	}
	public arrayExpression(): ArrayExpressionContext {
		return this.getTypedRuleContext(ArrayExpressionContext, 0) as ArrayExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_primaryExpression;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterPrimaryExpression) {
	 		listener.enterPrimaryExpression(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitPrimaryExpression) {
	 		listener.exitPrimaryExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitPrimaryExpression) {
			return visitor.visitPrimaryExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(LuminaParser.IDENTIFIER, 0);
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_type;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitType) {
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


export class AssignmentOperatorContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_assignmentOperator;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterAssignmentOperator) {
	 		listener.enterAssignmentOperator(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitAssignmentOperator) {
	 		listener.exitAssignmentOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitAssignmentOperator) {
			return visitor.visitAssignmentOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EqualityOperatorContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_equalityOperator;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterEqualityOperator) {
	 		listener.enterEqualityOperator(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitEqualityOperator) {
	 		listener.exitEqualityOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitEqualityOperator) {
			return visitor.visitEqualityOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RelationalOperatorContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_relationalOperator;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterRelationalOperator) {
	 		listener.enterRelationalOperator(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitRelationalOperator) {
	 		listener.exitRelationalOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitRelationalOperator) {
			return visitor.visitRelationalOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AdditiveOperatorContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_additiveOperator;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterAdditiveOperator) {
	 		listener.enterAdditiveOperator(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitAdditiveOperator) {
	 		listener.exitAdditiveOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitAdditiveOperator) {
			return visitor.visitAdditiveOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiplicativeOperatorContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_multiplicativeOperator;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterMultiplicativeOperator) {
	 		listener.enterMultiplicativeOperator(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitMultiplicativeOperator) {
	 		listener.exitMultiplicativeOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitMultiplicativeOperator) {
			return visitor.visitMultiplicativeOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnaryOperatorContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_unaryOperator;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterUnaryOperator) {
	 		listener.enterUnaryOperator(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitUnaryOperator) {
	 		listener.exitUnaryOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitUnaryOperator) {
			return visitor.visitUnaryOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
