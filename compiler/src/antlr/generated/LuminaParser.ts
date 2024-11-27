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
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly IDENTIFIER = 59;
	public static readonly NUMBER = 60;
	public static readonly STRING = 61;
	public static readonly SEMICOLON = 62;
	public static readonly WS = 63;
	public static readonly COMMENT = 64;
	public static readonly MULTILINE_COMMENT = 65;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_variableDeclaration = 2;
	public static readonly RULE_variableAssignment = 3;
	public static readonly RULE_functionDeclaration = 4;
	public static readonly RULE_parameterList = 5;
	public static readonly RULE_parameter = 6;
	public static readonly RULE_expressionStatement = 7;
	public static readonly RULE_ifStatement = 8;
	public static readonly RULE_forStatement = 9;
	public static readonly RULE_whileStatement = 10;
	public static readonly RULE_returnStatement = 11;
	public static readonly RULE_printStatement = 12;
	public static readonly RULE_block = 13;
	public static readonly RULE_expression = 14;
	public static readonly RULE_assignmentExpression = 15;
	public static readonly RULE_conditionalExpression = 16;
	public static readonly RULE_logicalOrExpression = 17;
	public static readonly RULE_logicalAndExpression = 18;
	public static readonly RULE_equalityExpression = 19;
	public static readonly RULE_relationalExpression = 20;
	public static readonly RULE_additiveExpression = 21;
	public static readonly RULE_multiplicativeExpression = 22;
	public static readonly RULE_lambdaExpression = 23;
	public static readonly RULE_arrayExpression = 24;
	public static readonly RULE_unaryExpression = 25;
	public static readonly RULE_postfixExpression = 26;
	public static readonly RULE_postfixOperation = 27;
	public static readonly RULE_argumentList = 28;
	public static readonly RULE_primaryExpression = 29;
	public static readonly RULE_methodCall = 30;
	public static readonly RULE_nonNullAssertion = 31;
	public static readonly RULE_type = 32;
	public static readonly RULE_parse = 33;
	public static readonly RULE_parseInt = 34;
	public static readonly RULE_parseFloat = 35;
	public static readonly RULE_parseString = 36;
	public static readonly RULE_parseBoolean = 37;
	public static readonly RULE_parseNull = 38;
	public static readonly RULE_assignmentOperator = 39;
	public static readonly RULE_equalityOperator = 40;
	public static readonly RULE_relationalOperator = 41;
	public static readonly RULE_additiveOperator = 42;
	public static readonly RULE_multiplicativeOperator = 43;
	public static readonly RULE_unaryOperator = 44;
	public static readonly literalNames: (string | null)[] = [ null, "'let'", 
                                                            "'const'", "'var'", 
                                                            "':'", "'.'", 
                                                            "'function'", 
                                                            "'('", "')'", 
                                                            "','", "'if'", 
                                                            "'else'", "'for'", 
                                                            "'of'", "'while'", 
                                                            "'return'", 
                                                            "'print'", "'{'", 
                                                            "'}'", "'?'", 
                                                            "'||'", "'&&'", 
                                                            "'=>'", "'['", 
                                                            "']'", "'true'", 
                                                            "'false'", "'null'", 
                                                            "'!'", "'number'", 
                                                            "'string'", 
                                                            "'boolean'", 
                                                            "'any'", "'parseInt'", 
                                                            "'parseFloat'", 
                                                            "'parseString'", 
                                                            "'parseBoolean'", 
                                                            "'parseNull'", 
                                                            "'='", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'%='", 
                                                            "'=='", "'!='", 
                                                            "'==='", "'!=='", 
                                                            "'<'", "'>'", 
                                                            "'<='", "'>='", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'%'", "'++'", 
                                                            "'--'", null, 
                                                            null, null, 
                                                            "';'" ];
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
                                                             null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "IDENTIFIER", 
                                                             "NUMBER", "STRING", 
                                                             "SEMICOLON", 
                                                             "WS", "COMMENT", 
                                                             "MULTILINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "variableDeclaration", "variableAssignment", "functionDeclaration", 
		"parameterList", "parameter", "expressionStatement", "ifStatement", "forStatement", 
		"whileStatement", "returnStatement", "printStatement", "block", "expression", 
		"assignmentExpression", "conditionalExpression", "logicalOrExpression", 
		"logicalAndExpression", "equalityExpression", "relationalExpression", 
		"additiveExpression", "multiplicativeExpression", "lambdaExpression", 
		"arrayExpression", "unaryExpression", "postfixExpression", "postfixOperation", 
		"argumentList", "primaryExpression", "methodCall", "nonNullAssertion", 
		"type", "parse", "parseInt", "parseFloat", "parseString", "parseBoolean", 
		"parseNull", "assignmentOperator", "equalityOperator", "relationalOperator", 
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
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 511956174) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 521666591) !== 0)) {
				{
				{
				this.state = 90;
				this.statement();
				}
				}
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 96;
			this.match(LuminaParser.EOF);
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
			this.state = 108;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 98;
				this.variableDeclaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 99;
				this.variableAssignment();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 100;
				this.functionDeclaration();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 101;
				this.expressionStatement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 102;
				this.ifStatement();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 103;
				this.forStatement();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 104;
				this.whileStatement();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 105;
				this.returnStatement();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 106;
				this.printStatement();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 107;
				this.block();
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
	public variableDeclaration(): VariableDeclarationContext {
		let localctx: VariableDeclarationContext = new VariableDeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, LuminaParser.RULE_variableDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 110;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 111;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 112;
				this.match(LuminaParser.T__3);
				this.state = 113;
				this.type_(0);
				}
			}

			this.state = 119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 63) !== 0)) {
				{
				this.state = 116;
				this.assignmentOperator();
				this.state = 117;
				this.expression();
				}
			}

			this.state = 121;
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
	public variableAssignment(): VariableAssignmentContext {
		let localctx: VariableAssignmentContext = new VariableAssignmentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, LuminaParser.RULE_variableAssignment);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 123;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 128;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 124;
				this.match(LuminaParser.T__4);
				this.state = 125;
				this.match(LuminaParser.IDENTIFIER);
				}
				}
				this.state = 130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 131;
			this.assignmentOperator();
			this.state = 132;
			this.expression();
			this.state = 133;
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
		this.enterRule(localctx, 8, LuminaParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 135;
			this.match(LuminaParser.T__5);
			this.state = 136;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 137;
			this.match(LuminaParser.T__6);
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 138;
				this.parameterList();
				}
			}

			this.state = 141;
			this.match(LuminaParser.T__7);
			this.state = 144;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 142;
				this.match(LuminaParser.T__3);
				this.state = 143;
				this.type_(0);
				}
			}

			this.state = 146;
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
		this.enterRule(localctx, 10, LuminaParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 148;
			this.parameter();
			this.state = 153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 149;
				this.match(LuminaParser.T__8);
				this.state = 150;
				this.parameter();
				}
				}
				this.state = 155;
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
		this.enterRule(localctx, 12, LuminaParser.RULE_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 156;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 159;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 157;
				this.match(LuminaParser.T__3);
				this.state = 158;
				this.type_(0);
				}
			}

			this.state = 164;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 63) !== 0)) {
				{
				this.state = 161;
				this.assignmentOperator();
				this.state = 162;
				this.expression();
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
		this.enterRule(localctx, 14, LuminaParser.RULE_expressionStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 166;
			this.expression();
			this.state = 168;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 167;
				this.match(LuminaParser.SEMICOLON);
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
	public ifStatement(): IfStatementContext {
		let localctx: IfStatementContext = new IfStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, LuminaParser.RULE_ifStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 170;
			this.match(LuminaParser.T__9);
			this.state = 171;
			this.match(LuminaParser.T__6);
			this.state = 172;
			this.expression();
			this.state = 173;
			this.match(LuminaParser.T__7);
			this.state = 174;
			this.statement();
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 175;
				this.match(LuminaParser.T__10);
				this.state = 176;
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
		this.enterRule(localctx, 18, LuminaParser.RULE_forStatement);
		let _la: number;
		try {
			this.state = 210;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 179;
				this.match(LuminaParser.T__11);
				this.state = 180;
				this.match(LuminaParser.T__6);
				this.state = 183;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 181;
					this.variableDeclaration();
					}
					break;
				case 2:
					{
					this.state = 182;
					this.expressionStatement();
					}
					break;
				}
				this.state = 192;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 185;
					this.match(LuminaParser.IDENTIFIER);
					this.state = 188;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 48:
					case 49:
					case 50:
					case 51:
						{
						this.state = 186;
						this.relationalOperator();
						}
						break;
					case 44:
					case 45:
					case 46:
					case 47:
						{
						this.state = 187;
						this.equalityOperator();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 190;
					this.expression();
					}
				}

				this.state = 194;
				this.match(LuminaParser.SEMICOLON);
				this.state = 197;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 195;
					this.match(LuminaParser.IDENTIFIER);
					this.state = 196;
					this.unaryExpression();
					}
				}

				this.state = 199;
				this.match(LuminaParser.T__7);
				this.state = 200;
				this.statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 201;
				this.match(LuminaParser.T__11);
				this.state = 202;
				this.match(LuminaParser.T__6);
				this.state = 203;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 204;
				this.match(LuminaParser.IDENTIFIER);
				this.state = 205;
				this.match(LuminaParser.T__12);
				this.state = 206;
				this.expression();
				this.state = 207;
				this.match(LuminaParser.T__7);
				this.state = 208;
				this.statement();
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
	public whileStatement(): WhileStatementContext {
		let localctx: WhileStatementContext = new WhileStatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, LuminaParser.RULE_whileStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 212;
			this.match(LuminaParser.T__13);
			this.state = 213;
			this.match(LuminaParser.T__6);
			this.state = 214;
			this.expression();
			this.state = 215;
			this.match(LuminaParser.T__7);
			this.state = 216;
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
		this.enterRule(localctx, 22, LuminaParser.RULE_returnStatement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 218;
			this.match(LuminaParser.T__14);
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 511705216) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 521666591) !== 0)) {
				{
				this.state = 219;
				this.expression();
				}
			}

			this.state = 222;
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
		this.enterRule(localctx, 24, LuminaParser.RULE_printStatement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 224;
			this.match(LuminaParser.T__15);
			this.state = 225;
			this.match(LuminaParser.T__6);
			this.state = 226;
			this.expression();
			this.state = 227;
			this.match(LuminaParser.T__7);
			this.state = 228;
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
		this.enterRule(localctx, 26, LuminaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 230;
			this.match(LuminaParser.T__16);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 511956174) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 521666591) !== 0)) {
				{
				{
				this.state = 231;
				this.statement();
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 237;
			this.match(LuminaParser.T__17);
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
		this.enterRule(localctx, 28, LuminaParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 239;
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
		this.enterRule(localctx, 30, LuminaParser.RULE_assignmentExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 241;
			this.conditionalExpression();
			this.state = 245;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				{
				this.state = 242;
				this.assignmentOperator();
				this.state = 243;
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
		this.enterRule(localctx, 32, LuminaParser.RULE_conditionalExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 247;
			this.logicalOrExpression();
			this.state = 253;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 248;
				this.match(LuminaParser.T__18);
				this.state = 249;
				this.expression();
				this.state = 250;
				this.match(LuminaParser.T__3);
				this.state = 251;
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
		this.enterRule(localctx, 34, LuminaParser.RULE_logicalOrExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 255;
			this.logicalAndExpression();
			this.state = 260;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 21, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 256;
					this.match(LuminaParser.T__19);
					this.state = 257;
					this.logicalAndExpression();
					}
					}
				}
				this.state = 262;
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
	public logicalAndExpression(): LogicalAndExpressionContext {
		let localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, LuminaParser.RULE_logicalAndExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 263;
			this.equalityExpression();
			this.state = 268;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 264;
					this.match(LuminaParser.T__20);
					this.state = 265;
					this.equalityExpression();
					}
					}
				}
				this.state = 270;
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
	public equalityExpression(): EqualityExpressionContext {
		let localctx: EqualityExpressionContext = new EqualityExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, LuminaParser.RULE_equalityExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 271;
			this.relationalExpression();
			this.state = 277;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 272;
					this.equalityOperator();
					this.state = 273;
					this.relationalExpression();
					}
					}
				}
				this.state = 279;
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
	public relationalExpression(): RelationalExpressionContext {
		let localctx: RelationalExpressionContext = new RelationalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, LuminaParser.RULE_relationalExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 280;
			this.additiveExpression();
			this.state = 282;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 281;
				this.postfixExpression();
				}
				break;
			}
			this.state = 291;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 284;
					this.relationalOperator();
					this.state = 285;
					this.additiveExpression();
					this.state = 287;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
					case 1:
						{
						this.state = 286;
						this.postfixExpression();
						}
						break;
					}
					}
					}
				}
				this.state = 293;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
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
		this.enterRule(localctx, 42, LuminaParser.RULE_additiveExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 294;
			this.multiplicativeExpression();
			this.state = 300;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 295;
					this.additiveOperator();
					this.state = 296;
					this.multiplicativeExpression();
					}
					}
				}
				this.state = 302;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
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
		this.enterRule(localctx, 44, LuminaParser.RULE_multiplicativeExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 303;
			this.unaryExpression();
			this.state = 309;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 304;
					this.multiplicativeOperator();
					this.state = 305;
					this.unaryExpression();
					}
					}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
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
		this.enterRule(localctx, 46, LuminaParser.RULE_lambdaExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 312;
			this.match(LuminaParser.T__6);
			this.state = 314;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 313;
				this.parameterList();
				}
			}

			this.state = 316;
			this.match(LuminaParser.T__7);
			this.state = 317;
			this.match(LuminaParser.T__21);
			this.state = 318;
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
	public arrayExpression(): ArrayExpressionContext {
		let localctx: ArrayExpressionContext = new ArrayExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, LuminaParser.RULE_arrayExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 320;
			this.match(LuminaParser.T__22);
			this.state = 329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 511705216) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 521666591) !== 0)) {
				{
				this.state = 321;
				this.expression();
				this.state = 326;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9) {
					{
					{
					this.state = 322;
					this.match(LuminaParser.T__8);
					this.state = 323;
					this.expression();
					}
					}
					this.state = 328;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 331;
			this.match(LuminaParser.T__23);
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
		this.enterRule(localctx, 50, LuminaParser.RULE_unaryExpression);
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 333;
				this.postfixExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 334;
				this.unaryOperator();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 335;
				this.unaryOperator();
				this.state = 336;
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
		this.enterRule(localctx, 52, LuminaParser.RULE_postfixExpression);
		try {
			let _alt: number;
			this.state = 349;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 340;
				this.primaryExpression();
				this.state = 344;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 341;
						this.postfixOperation();
						}
						}
					}
					this.state = 346;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
				}
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 347;
				this.methodCall();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 348;
				this.nonNullAssertion();
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
	public postfixOperation(): PostfixOperationContext {
		let localctx: PostfixOperationContext = new PostfixOperationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, LuminaParser.RULE_postfixOperation);
		let _la: number;
		try {
			this.state = 362;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 351;
				this.match(LuminaParser.T__4);
				this.state = 352;
				this.match(LuminaParser.IDENTIFIER);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 353;
				this.match(LuminaParser.T__22);
				this.state = 354;
				this.expression();
				this.state = 355;
				this.match(LuminaParser.T__23);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 357;
				this.match(LuminaParser.T__6);
				this.state = 359;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 511705216) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 521666591) !== 0)) {
					{
					this.state = 358;
					this.argumentList();
					}
				}

				this.state = 361;
				this.match(LuminaParser.T__7);
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
	public argumentList(): ArgumentListContext {
		let localctx: ArgumentListContext = new ArgumentListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, LuminaParser.RULE_argumentList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 364;
			this.expression();
			this.state = 369;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 365;
				this.match(LuminaParser.T__8);
				this.state = 366;
				this.expression();
				}
				}
				this.state = 371;
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
	public primaryExpression(): PrimaryExpressionContext {
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, LuminaParser.RULE_primaryExpression);
		try {
			this.state = 390;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 39, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 372;
				this.match(LuminaParser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 373;
				this.match(LuminaParser.NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 374;
				this.match(LuminaParser.STRING);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 375;
				this.match(LuminaParser.T__24);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 376;
				this.match(LuminaParser.T__25);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 377;
				this.match(LuminaParser.T__26);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 378;
				this.match(LuminaParser.T__6);
				this.state = 379;
				this.expression();
				this.state = 380;
				this.match(LuminaParser.T__7);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 382;
				this.lambdaExpression();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 383;
				this.arrayExpression();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 384;
				this.parse();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 385;
				this.match(LuminaParser.T__27);
				this.state = 388;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 386;
					this.match(LuminaParser.T__4);
					this.state = 387;
					this.expression();
					}
					break;
				}
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
	public methodCall(): MethodCallContext {
		let localctx: MethodCallContext = new MethodCallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, LuminaParser.RULE_methodCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 392;
			this.primaryExpression();
			this.state = 397;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 393;
				this.match(LuminaParser.T__4);
				this.state = 394;
				this.match(LuminaParser.IDENTIFIER);
				}
				}
				this.state = 399;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 400;
			this.match(LuminaParser.T__6);
			this.state = 404;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 41, this._ctx) ) {
			case 1:
				{
				this.state = 401;
				this.primaryExpression();
				this.state = 402;
				this.match(LuminaParser.T__8);
				}
				break;
			}
			this.state = 414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 511705216) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 521666591) !== 0)) {
				{
				this.state = 406;
				this.expression();
				this.state = 411;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9) {
					{
					{
					this.state = 407;
					this.match(LuminaParser.T__8);
					this.state = 408;
					this.expression();
					}
					}
					this.state = 413;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 416;
			this.match(LuminaParser.T__7);
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
	public nonNullAssertion(): NonNullAssertionContext {
		let localctx: NonNullAssertionContext = new NonNullAssertionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, LuminaParser.RULE_nonNullAssertion);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 418;
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
		let _startState: number = 64;
		this.enterRecursionRule(localctx, 64, LuminaParser.RULE_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 426;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 29:
				{
				this.state = 421;
				this.match(LuminaParser.T__28);
				}
				break;
			case 30:
				{
				this.state = 422;
				this.match(LuminaParser.T__29);
				}
				break;
			case 31:
				{
				this.state = 423;
				this.match(LuminaParser.T__30);
				}
				break;
			case 32:
				{
				this.state = 424;
				this.match(LuminaParser.T__31);
				}
				break;
			case 59:
				{
				this.state = 425;
				this.match(LuminaParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 433;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
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
					this.state = 428;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 429;
					this.match(LuminaParser.T__22);
					this.state = 430;
					this.match(LuminaParser.T__23);
					}
					}
				}
				this.state = 435;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
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
	public parse(): ParseContext {
		let localctx: ParseContext = new ParseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, LuminaParser.RULE_parse);
		try {
			this.state = 441;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 33:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 436;
				this.parseInt();
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 437;
				this.parseFloat();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 438;
				this.parseString();
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 439;
				this.parseBoolean();
				}
				break;
			case 37:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 440;
				this.parseNull();
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
	public parseInt(): ParseIntContext {
		let localctx: ParseIntContext = new ParseIntContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, LuminaParser.RULE_parseInt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 443;
			this.match(LuminaParser.T__32);
			this.state = 444;
			this.match(LuminaParser.T__6);
			this.state = 445;
			this.expression();
			this.state = 446;
			this.match(LuminaParser.T__7);
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
	public parseFloat(): ParseFloatContext {
		let localctx: ParseFloatContext = new ParseFloatContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, LuminaParser.RULE_parseFloat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 448;
			this.match(LuminaParser.T__33);
			this.state = 449;
			this.match(LuminaParser.T__6);
			this.state = 450;
			this.expression();
			this.state = 451;
			this.match(LuminaParser.T__7);
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
	public parseString(): ParseStringContext {
		let localctx: ParseStringContext = new ParseStringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, LuminaParser.RULE_parseString);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 453;
			this.match(LuminaParser.T__34);
			this.state = 454;
			this.match(LuminaParser.T__6);
			this.state = 455;
			this.expression();
			this.state = 456;
			this.match(LuminaParser.T__7);
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
	public parseBoolean(): ParseBooleanContext {
		let localctx: ParseBooleanContext = new ParseBooleanContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, LuminaParser.RULE_parseBoolean);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 458;
			this.match(LuminaParser.T__35);
			this.state = 459;
			this.match(LuminaParser.T__6);
			this.state = 460;
			this.expression();
			this.state = 461;
			this.match(LuminaParser.T__7);
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
	public parseNull(): ParseNullContext {
		let localctx: ParseNullContext = new ParseNullContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, LuminaParser.RULE_parseNull);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 463;
			this.match(LuminaParser.T__36);
			this.state = 464;
			this.match(LuminaParser.T__6);
			this.state = 465;
			this.expression();
			this.state = 466;
			this.match(LuminaParser.T__7);
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
	public assignmentOperator(): AssignmentOperatorContext {
		let localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, LuminaParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 468;
			_la = this._input.LA(1);
			if(!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 63) !== 0))) {
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
		this.enterRule(localctx, 80, LuminaParser.RULE_equalityOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 470;
			_la = this._input.LA(1);
			if(!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & 15) !== 0))) {
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
		this.enterRule(localctx, 82, LuminaParser.RULE_relationalOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 472;
			_la = this._input.LA(1);
			if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 15) !== 0))) {
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
		this.enterRule(localctx, 84, LuminaParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 474;
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
		this.enterRule(localctx, 86, LuminaParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 476;
			_la = this._input.LA(1);
			if(!(((((_la - 54)) & ~0x1F) === 0 && ((1 << (_la - 54)) & 7) !== 0))) {
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
		this.enterRule(localctx, 88, LuminaParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 478;
			_la = this._input.LA(1);
			if(!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & 1660944385) !== 0))) {
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
		case 32:
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

	public static readonly _serializedATN: number[] = [4,1,65,481,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,1,0,5,0,92,8,
	0,10,0,12,0,95,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,
	109,8,1,1,2,1,2,1,2,1,2,3,2,115,8,2,1,2,1,2,1,2,3,2,120,8,2,1,2,1,2,1,3,
	1,3,1,3,5,3,127,8,3,10,3,12,3,130,9,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,3,
	4,140,8,4,1,4,1,4,1,4,3,4,145,8,4,1,4,1,4,1,5,1,5,1,5,5,5,152,8,5,10,5,
	12,5,155,9,5,1,6,1,6,1,6,3,6,160,8,6,1,6,1,6,1,6,3,6,165,8,6,1,7,1,7,3,
	7,169,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,178,8,8,1,9,1,9,1,9,1,9,3,9,184,
	8,9,1,9,1,9,1,9,3,9,189,8,9,1,9,1,9,3,9,193,8,9,1,9,1,9,1,9,3,9,198,8,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,211,8,9,1,10,1,10,1,10,
	1,10,1,10,1,10,1,11,1,11,3,11,221,8,11,1,11,1,11,1,12,1,12,1,12,1,12,1,
	12,1,12,1,13,1,13,5,13,233,8,13,10,13,12,13,236,9,13,1,13,1,13,1,14,1,14,
	1,15,1,15,1,15,1,15,3,15,246,8,15,1,16,1,16,1,16,1,16,1,16,1,16,3,16,254,
	8,16,1,17,1,17,1,17,5,17,259,8,17,10,17,12,17,262,9,17,1,18,1,18,1,18,5,
	18,267,8,18,10,18,12,18,270,9,18,1,19,1,19,1,19,1,19,5,19,276,8,19,10,19,
	12,19,279,9,19,1,20,1,20,3,20,283,8,20,1,20,1,20,1,20,3,20,288,8,20,5,20,
	290,8,20,10,20,12,20,293,9,20,1,21,1,21,1,21,1,21,5,21,299,8,21,10,21,12,
	21,302,9,21,1,22,1,22,1,22,1,22,5,22,308,8,22,10,22,12,22,311,9,22,1,23,
	1,23,3,23,315,8,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,5,24,325,8,24,
	10,24,12,24,328,9,24,3,24,330,8,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,3,
	25,339,8,25,1,26,1,26,5,26,343,8,26,10,26,12,26,346,9,26,1,26,1,26,3,26,
	350,8,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,360,8,27,1,27,3,27,
	363,8,27,1,28,1,28,1,28,5,28,368,8,28,10,28,12,28,371,9,28,1,29,1,29,1,
	29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,
	389,8,29,3,29,391,8,29,1,30,1,30,1,30,5,30,396,8,30,10,30,12,30,399,9,30,
	1,30,1,30,1,30,1,30,3,30,405,8,30,1,30,1,30,1,30,5,30,410,8,30,10,30,12,
	30,413,9,30,3,30,415,8,30,1,30,1,30,1,31,1,31,1,32,1,32,1,32,1,32,1,32,
	1,32,3,32,427,8,32,1,32,1,32,1,32,5,32,432,8,32,10,32,12,32,435,9,32,1,
	33,1,33,1,33,1,33,1,33,3,33,442,8,33,1,34,1,34,1,34,1,34,1,34,1,35,1,35,
	1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,38,1,
	38,1,38,1,38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,1,43,1,43,1,44,
	1,44,1,44,0,1,64,45,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
	38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
	86,88,0,7,1,0,1,3,1,0,38,43,1,0,44,47,1,0,48,51,1,0,52,53,1,0,54,56,3,0,
	28,28,52,53,57,58,509,0,93,1,0,0,0,2,108,1,0,0,0,4,110,1,0,0,0,6,123,1,
	0,0,0,8,135,1,0,0,0,10,148,1,0,0,0,12,156,1,0,0,0,14,166,1,0,0,0,16,170,
	1,0,0,0,18,210,1,0,0,0,20,212,1,0,0,0,22,218,1,0,0,0,24,224,1,0,0,0,26,
	230,1,0,0,0,28,239,1,0,0,0,30,241,1,0,0,0,32,247,1,0,0,0,34,255,1,0,0,0,
	36,263,1,0,0,0,38,271,1,0,0,0,40,280,1,0,0,0,42,294,1,0,0,0,44,303,1,0,
	0,0,46,312,1,0,0,0,48,320,1,0,0,0,50,338,1,0,0,0,52,349,1,0,0,0,54,362,
	1,0,0,0,56,364,1,0,0,0,58,390,1,0,0,0,60,392,1,0,0,0,62,418,1,0,0,0,64,
	426,1,0,0,0,66,441,1,0,0,0,68,443,1,0,0,0,70,448,1,0,0,0,72,453,1,0,0,0,
	74,458,1,0,0,0,76,463,1,0,0,0,78,468,1,0,0,0,80,470,1,0,0,0,82,472,1,0,
	0,0,84,474,1,0,0,0,86,476,1,0,0,0,88,478,1,0,0,0,90,92,3,2,1,0,91,90,1,
	0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,96,1,0,0,0,95,93,1,0,
	0,0,96,97,5,0,0,1,97,1,1,0,0,0,98,109,3,4,2,0,99,109,3,6,3,0,100,109,3,
	8,4,0,101,109,3,14,7,0,102,109,3,16,8,0,103,109,3,18,9,0,104,109,3,20,10,
	0,105,109,3,22,11,0,106,109,3,24,12,0,107,109,3,26,13,0,108,98,1,0,0,0,
	108,99,1,0,0,0,108,100,1,0,0,0,108,101,1,0,0,0,108,102,1,0,0,0,108,103,
	1,0,0,0,108,104,1,0,0,0,108,105,1,0,0,0,108,106,1,0,0,0,108,107,1,0,0,0,
	109,3,1,0,0,0,110,111,7,0,0,0,111,114,5,59,0,0,112,113,5,4,0,0,113,115,
	3,64,32,0,114,112,1,0,0,0,114,115,1,0,0,0,115,119,1,0,0,0,116,117,3,78,
	39,0,117,118,3,28,14,0,118,120,1,0,0,0,119,116,1,0,0,0,119,120,1,0,0,0,
	120,121,1,0,0,0,121,122,5,62,0,0,122,5,1,0,0,0,123,128,5,59,0,0,124,125,
	5,5,0,0,125,127,5,59,0,0,126,124,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,
	0,128,129,1,0,0,0,129,131,1,0,0,0,130,128,1,0,0,0,131,132,3,78,39,0,132,
	133,3,28,14,0,133,134,5,62,0,0,134,7,1,0,0,0,135,136,5,6,0,0,136,137,5,
	59,0,0,137,139,5,7,0,0,138,140,3,10,5,0,139,138,1,0,0,0,139,140,1,0,0,0,
	140,141,1,0,0,0,141,144,5,8,0,0,142,143,5,4,0,0,143,145,3,64,32,0,144,142,
	1,0,0,0,144,145,1,0,0,0,145,146,1,0,0,0,146,147,3,26,13,0,147,9,1,0,0,0,
	148,153,3,12,6,0,149,150,5,9,0,0,150,152,3,12,6,0,151,149,1,0,0,0,152,155,
	1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,11,1,0,0,0,155,153,1,0,0,0,
	156,159,5,59,0,0,157,158,5,4,0,0,158,160,3,64,32,0,159,157,1,0,0,0,159,
	160,1,0,0,0,160,164,1,0,0,0,161,162,3,78,39,0,162,163,3,28,14,0,163,165,
	1,0,0,0,164,161,1,0,0,0,164,165,1,0,0,0,165,13,1,0,0,0,166,168,3,28,14,
	0,167,169,5,62,0,0,168,167,1,0,0,0,168,169,1,0,0,0,169,15,1,0,0,0,170,171,
	5,10,0,0,171,172,5,7,0,0,172,173,3,28,14,0,173,174,5,8,0,0,174,177,3,2,
	1,0,175,176,5,11,0,0,176,178,3,2,1,0,177,175,1,0,0,0,177,178,1,0,0,0,178,
	17,1,0,0,0,179,180,5,12,0,0,180,183,5,7,0,0,181,184,3,4,2,0,182,184,3,14,
	7,0,183,181,1,0,0,0,183,182,1,0,0,0,183,184,1,0,0,0,184,192,1,0,0,0,185,
	188,5,59,0,0,186,189,3,82,41,0,187,189,3,80,40,0,188,186,1,0,0,0,188,187,
	1,0,0,0,189,190,1,0,0,0,190,191,3,28,14,0,191,193,1,0,0,0,192,185,1,0,0,
	0,192,193,1,0,0,0,193,194,1,0,0,0,194,197,5,62,0,0,195,196,5,59,0,0,196,
	198,3,50,25,0,197,195,1,0,0,0,197,198,1,0,0,0,198,199,1,0,0,0,199,200,5,
	8,0,0,200,211,3,2,1,0,201,202,5,12,0,0,202,203,5,7,0,0,203,204,7,0,0,0,
	204,205,5,59,0,0,205,206,5,13,0,0,206,207,3,28,14,0,207,208,5,8,0,0,208,
	209,3,2,1,0,209,211,1,0,0,0,210,179,1,0,0,0,210,201,1,0,0,0,211,19,1,0,
	0,0,212,213,5,14,0,0,213,214,5,7,0,0,214,215,3,28,14,0,215,216,5,8,0,0,
	216,217,3,2,1,0,217,21,1,0,0,0,218,220,5,15,0,0,219,221,3,28,14,0,220,219,
	1,0,0,0,220,221,1,0,0,0,221,222,1,0,0,0,222,223,5,62,0,0,223,23,1,0,0,0,
	224,225,5,16,0,0,225,226,5,7,0,0,226,227,3,28,14,0,227,228,5,8,0,0,228,
	229,5,62,0,0,229,25,1,0,0,0,230,234,5,17,0,0,231,233,3,2,1,0,232,231,1,
	0,0,0,233,236,1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,237,1,0,0,0,236,
	234,1,0,0,0,237,238,5,18,0,0,238,27,1,0,0,0,239,240,3,30,15,0,240,29,1,
	0,0,0,241,245,3,32,16,0,242,243,3,78,39,0,243,244,3,30,15,0,244,246,1,0,
	0,0,245,242,1,0,0,0,245,246,1,0,0,0,246,31,1,0,0,0,247,253,3,34,17,0,248,
	249,5,19,0,0,249,250,3,28,14,0,250,251,5,4,0,0,251,252,3,32,16,0,252,254,
	1,0,0,0,253,248,1,0,0,0,253,254,1,0,0,0,254,33,1,0,0,0,255,260,3,36,18,
	0,256,257,5,20,0,0,257,259,3,36,18,0,258,256,1,0,0,0,259,262,1,0,0,0,260,
	258,1,0,0,0,260,261,1,0,0,0,261,35,1,0,0,0,262,260,1,0,0,0,263,268,3,38,
	19,0,264,265,5,21,0,0,265,267,3,38,19,0,266,264,1,0,0,0,267,270,1,0,0,0,
	268,266,1,0,0,0,268,269,1,0,0,0,269,37,1,0,0,0,270,268,1,0,0,0,271,277,
	3,40,20,0,272,273,3,80,40,0,273,274,3,40,20,0,274,276,1,0,0,0,275,272,1,
	0,0,0,276,279,1,0,0,0,277,275,1,0,0,0,277,278,1,0,0,0,278,39,1,0,0,0,279,
	277,1,0,0,0,280,282,3,42,21,0,281,283,3,52,26,0,282,281,1,0,0,0,282,283,
	1,0,0,0,283,291,1,0,0,0,284,285,3,82,41,0,285,287,3,42,21,0,286,288,3,52,
	26,0,287,286,1,0,0,0,287,288,1,0,0,0,288,290,1,0,0,0,289,284,1,0,0,0,290,
	293,1,0,0,0,291,289,1,0,0,0,291,292,1,0,0,0,292,41,1,0,0,0,293,291,1,0,
	0,0,294,300,3,44,22,0,295,296,3,84,42,0,296,297,3,44,22,0,297,299,1,0,0,
	0,298,295,1,0,0,0,299,302,1,0,0,0,300,298,1,0,0,0,300,301,1,0,0,0,301,43,
	1,0,0,0,302,300,1,0,0,0,303,309,3,50,25,0,304,305,3,86,43,0,305,306,3,50,
	25,0,306,308,1,0,0,0,307,304,1,0,0,0,308,311,1,0,0,0,309,307,1,0,0,0,309,
	310,1,0,0,0,310,45,1,0,0,0,311,309,1,0,0,0,312,314,5,7,0,0,313,315,3,10,
	5,0,314,313,1,0,0,0,314,315,1,0,0,0,315,316,1,0,0,0,316,317,5,8,0,0,317,
	318,5,22,0,0,318,319,3,26,13,0,319,47,1,0,0,0,320,329,5,23,0,0,321,326,
	3,28,14,0,322,323,5,9,0,0,323,325,3,28,14,0,324,322,1,0,0,0,325,328,1,0,
	0,0,326,324,1,0,0,0,326,327,1,0,0,0,327,330,1,0,0,0,328,326,1,0,0,0,329,
	321,1,0,0,0,329,330,1,0,0,0,330,331,1,0,0,0,331,332,5,24,0,0,332,49,1,0,
	0,0,333,339,3,52,26,0,334,339,3,88,44,0,335,336,3,88,44,0,336,337,3,50,
	25,0,337,339,1,0,0,0,338,333,1,0,0,0,338,334,1,0,0,0,338,335,1,0,0,0,339,
	51,1,0,0,0,340,344,3,58,29,0,341,343,3,54,27,0,342,341,1,0,0,0,343,346,
	1,0,0,0,344,342,1,0,0,0,344,345,1,0,0,0,345,350,1,0,0,0,346,344,1,0,0,0,
	347,350,3,60,30,0,348,350,3,62,31,0,349,340,1,0,0,0,349,347,1,0,0,0,349,
	348,1,0,0,0,350,53,1,0,0,0,351,352,5,5,0,0,352,363,5,59,0,0,353,354,5,23,
	0,0,354,355,3,28,14,0,355,356,5,24,0,0,356,363,1,0,0,0,357,359,5,7,0,0,
	358,360,3,56,28,0,359,358,1,0,0,0,359,360,1,0,0,0,360,361,1,0,0,0,361,363,
	5,8,0,0,362,351,1,0,0,0,362,353,1,0,0,0,362,357,1,0,0,0,363,55,1,0,0,0,
	364,369,3,28,14,0,365,366,5,9,0,0,366,368,3,28,14,0,367,365,1,0,0,0,368,
	371,1,0,0,0,369,367,1,0,0,0,369,370,1,0,0,0,370,57,1,0,0,0,371,369,1,0,
	0,0,372,391,5,59,0,0,373,391,5,60,0,0,374,391,5,61,0,0,375,391,5,25,0,0,
	376,391,5,26,0,0,377,391,5,27,0,0,378,379,5,7,0,0,379,380,3,28,14,0,380,
	381,5,8,0,0,381,391,1,0,0,0,382,391,3,46,23,0,383,391,3,48,24,0,384,391,
	3,66,33,0,385,388,5,28,0,0,386,387,5,5,0,0,387,389,3,28,14,0,388,386,1,
	0,0,0,388,389,1,0,0,0,389,391,1,0,0,0,390,372,1,0,0,0,390,373,1,0,0,0,390,
	374,1,0,0,0,390,375,1,0,0,0,390,376,1,0,0,0,390,377,1,0,0,0,390,378,1,0,
	0,0,390,382,1,0,0,0,390,383,1,0,0,0,390,384,1,0,0,0,390,385,1,0,0,0,391,
	59,1,0,0,0,392,397,3,58,29,0,393,394,5,5,0,0,394,396,5,59,0,0,395,393,1,
	0,0,0,396,399,1,0,0,0,397,395,1,0,0,0,397,398,1,0,0,0,398,400,1,0,0,0,399,
	397,1,0,0,0,400,404,5,7,0,0,401,402,3,58,29,0,402,403,5,9,0,0,403,405,1,
	0,0,0,404,401,1,0,0,0,404,405,1,0,0,0,405,414,1,0,0,0,406,411,3,28,14,0,
	407,408,5,9,0,0,408,410,3,28,14,0,409,407,1,0,0,0,410,413,1,0,0,0,411,409,
	1,0,0,0,411,412,1,0,0,0,412,415,1,0,0,0,413,411,1,0,0,0,414,406,1,0,0,0,
	414,415,1,0,0,0,415,416,1,0,0,0,416,417,5,8,0,0,417,61,1,0,0,0,418,419,
	3,58,29,0,419,63,1,0,0,0,420,421,6,32,-1,0,421,427,5,29,0,0,422,427,5,30,
	0,0,423,427,5,31,0,0,424,427,5,32,0,0,425,427,5,59,0,0,426,420,1,0,0,0,
	426,422,1,0,0,0,426,423,1,0,0,0,426,424,1,0,0,0,426,425,1,0,0,0,427,433,
	1,0,0,0,428,429,10,1,0,0,429,430,5,23,0,0,430,432,5,24,0,0,431,428,1,0,
	0,0,432,435,1,0,0,0,433,431,1,0,0,0,433,434,1,0,0,0,434,65,1,0,0,0,435,
	433,1,0,0,0,436,442,3,68,34,0,437,442,3,70,35,0,438,442,3,72,36,0,439,442,
	3,74,37,0,440,442,3,76,38,0,441,436,1,0,0,0,441,437,1,0,0,0,441,438,1,0,
	0,0,441,439,1,0,0,0,441,440,1,0,0,0,442,67,1,0,0,0,443,444,5,33,0,0,444,
	445,5,7,0,0,445,446,3,28,14,0,446,447,5,8,0,0,447,69,1,0,0,0,448,449,5,
	34,0,0,449,450,5,7,0,0,450,451,3,28,14,0,451,452,5,8,0,0,452,71,1,0,0,0,
	453,454,5,35,0,0,454,455,5,7,0,0,455,456,3,28,14,0,456,457,5,8,0,0,457,
	73,1,0,0,0,458,459,5,36,0,0,459,460,5,7,0,0,460,461,3,28,14,0,461,462,5,
	8,0,0,462,75,1,0,0,0,463,464,5,37,0,0,464,465,5,7,0,0,465,466,3,28,14,0,
	466,467,5,8,0,0,467,77,1,0,0,0,468,469,7,1,0,0,469,79,1,0,0,0,470,471,7,
	2,0,0,471,81,1,0,0,0,472,473,7,3,0,0,473,83,1,0,0,0,474,475,7,4,0,0,475,
	85,1,0,0,0,476,477,7,5,0,0,477,87,1,0,0,0,478,479,7,6,0,0,479,89,1,0,0,
	0,47,93,108,114,119,128,139,144,153,159,164,168,177,183,188,192,197,210,
	220,234,245,253,260,268,277,282,287,291,300,309,314,326,329,338,344,349,
	359,362,369,388,390,397,404,411,414,426,433,441];

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
	public EOF(): TerminalNode {
		return this.getToken(LuminaParser.EOF, 0);
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
	public variableAssignment(): VariableAssignmentContext {
		return this.getTypedRuleContext(VariableAssignmentContext, 0) as VariableAssignmentContext;
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
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
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


export class VariableAssignmentContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(LuminaParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(LuminaParser.IDENTIFIER, i);
	}
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMICOLON(): TerminalNode {
		return this.getToken(LuminaParser.SEMICOLON, 0);
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_variableAssignment;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterVariableAssignment) {
	 		listener.enterVariableAssignment(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitVariableAssignment) {
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
	public assignmentOperator(): AssignmentOperatorContext {
		return this.getTypedRuleContext(AssignmentOperatorContext, 0) as AssignmentOperatorContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
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
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public unaryExpression(): UnaryExpressionContext {
		return this.getTypedRuleContext(UnaryExpressionContext, 0) as UnaryExpressionContext;
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
	public postfixExpression_list(): PostfixExpressionContext[] {
		return this.getTypedRuleContexts(PostfixExpressionContext) as PostfixExpressionContext[];
	}
	public postfixExpression(i: number): PostfixExpressionContext {
		return this.getTypedRuleContext(PostfixExpressionContext, i) as PostfixExpressionContext;
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
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
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
	public postfixOperation_list(): PostfixOperationContext[] {
		return this.getTypedRuleContexts(PostfixOperationContext) as PostfixOperationContext[];
	}
	public postfixOperation(i: number): PostfixOperationContext {
		return this.getTypedRuleContext(PostfixOperationContext, i) as PostfixOperationContext;
	}
	public methodCall(): MethodCallContext {
		return this.getTypedRuleContext(MethodCallContext, 0) as MethodCallContext;
	}
	public nonNullAssertion(): NonNullAssertionContext {
		return this.getTypedRuleContext(NonNullAssertionContext, 0) as NonNullAssertionContext;
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


export class PostfixOperationContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(LuminaParser.IDENTIFIER, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public argumentList(): ArgumentListContext {
		return this.getTypedRuleContext(ArgumentListContext, 0) as ArgumentListContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_postfixOperation;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterPostfixOperation) {
	 		listener.enterPostfixOperation(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitPostfixOperation) {
	 		listener.exitPostfixOperation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitPostfixOperation) {
			return visitor.visitPostfixOperation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentListContext extends ParserRuleContext {
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
    	return LuminaParser.RULE_argumentList;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterArgumentList) {
	 		listener.enterArgumentList(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitArgumentList) {
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
	public parse(): ParseContext {
		return this.getTypedRuleContext(ParseContext, 0) as ParseContext;
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


export class MethodCallContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryExpression_list(): PrimaryExpressionContext[] {
		return this.getTypedRuleContexts(PrimaryExpressionContext) as PrimaryExpressionContext[];
	}
	public primaryExpression(i: number): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, i) as PrimaryExpressionContext;
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(LuminaParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(LuminaParser.IDENTIFIER, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_methodCall;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterMethodCall) {
	 		listener.enterMethodCall(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitMethodCall) {
	 		listener.exitMethodCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitMethodCall) {
			return visitor.visitMethodCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NonNullAssertionContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_nonNullAssertion;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterNonNullAssertion) {
	 		listener.enterNonNullAssertion(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitNonNullAssertion) {
	 		listener.exitNonNullAssertion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitNonNullAssertion) {
			return visitor.visitNonNullAssertion(this);
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


export class ParseContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public parseInt(): ParseIntContext {
		return this.getTypedRuleContext(ParseIntContext, 0) as ParseIntContext;
	}
	public parseFloat(): ParseFloatContext {
		return this.getTypedRuleContext(ParseFloatContext, 0) as ParseFloatContext;
	}
	public parseString(): ParseStringContext {
		return this.getTypedRuleContext(ParseStringContext, 0) as ParseStringContext;
	}
	public parseBoolean(): ParseBooleanContext {
		return this.getTypedRuleContext(ParseBooleanContext, 0) as ParseBooleanContext;
	}
	public parseNull(): ParseNullContext {
		return this.getTypedRuleContext(ParseNullContext, 0) as ParseNullContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_parse;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterParse) {
	 		listener.enterParse(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitParse) {
	 		listener.exitParse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitParse) {
			return visitor.visitParse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParseIntContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_parseInt;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterParseInt) {
	 		listener.enterParseInt(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitParseInt) {
	 		listener.exitParseInt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitParseInt) {
			return visitor.visitParseInt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParseFloatContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_parseFloat;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterParseFloat) {
	 		listener.enterParseFloat(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitParseFloat) {
	 		listener.exitParseFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitParseFloat) {
			return visitor.visitParseFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParseStringContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_parseString;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterParseString) {
	 		listener.enterParseString(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitParseString) {
	 		listener.exitParseString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitParseString) {
			return visitor.visitParseString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParseBooleanContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_parseBoolean;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterParseBoolean) {
	 		listener.enterParseBoolean(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitParseBoolean) {
	 		listener.exitParseBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitParseBoolean) {
			return visitor.visitParseBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ParseNullContext extends ParserRuleContext {
	constructor(parser?: LuminaParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return LuminaParser.RULE_parseNull;
	}
	public enterRule(listener: LuminaListener): void {
	    if(listener.enterParseNull) {
	 		listener.enterParseNull(this);
		}
	}
	public exitRule(listener: LuminaListener): void {
	    if(listener.exitParseNull) {
	 		listener.exitParseNull(this);
		}
	}
	// @Override
	public accept<Result>(visitor: LuminaVisitor<Result>): Result {
		if (visitor.visitParseNull) {
			return visitor.visitParseNull(this);
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
