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
	public static readonly RULE_primaryExpression = 27;
	public static readonly RULE_methodCall = 28;
	public static readonly RULE_nonNullAssertion = 29;
	public static readonly RULE_type = 30;
	public static readonly RULE_parse = 31;
	public static readonly RULE_parseInt = 32;
	public static readonly RULE_parseFloat = 33;
	public static readonly RULE_parseString = 34;
	public static readonly RULE_parseBoolean = 35;
	public static readonly RULE_parseNull = 36;
	public static readonly RULE_assignmentOperator = 37;
	public static readonly RULE_equalityOperator = 38;
	public static readonly RULE_relationalOperator = 39;
	public static readonly RULE_additiveOperator = 40;
	public static readonly RULE_multiplicativeOperator = 41;
	public static readonly RULE_unaryOperator = 42;
	public static readonly literalNames: (string | null)[] = [ null, "'let'", 
                                                            "'const'", "'var'", 
                                                            "':'", "'.'", 
                                                            "'function'", 
                                                            "'('", "')'", 
                                                            "','", "'='", 
                                                            "'if'", "'else'", 
                                                            "'for'", "'of'", 
                                                            "'while'", "'return'", 
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
                                                            "'+='", "'-='", 
                                                            "'*='", "'/='", 
                                                            "'%='", "'=='", 
                                                            "'!='", "'==='", 
                                                            "'!=='", "'<'", 
                                                            "'>'", "'<='", 
                                                            "'>='", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'%'", 
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
		"arrayExpression", "unaryExpression", "postfixExpression", "primaryExpression", 
		"methodCall", "nonNullAssertion", "type", "parse", "parseInt", "parseFloat", 
		"parseString", "parseBoolean", "parseNull", "assignmentOperator", "equalityOperator", 
		"relationalOperator", "additiveOperator", "multiplicativeOperator", "unaryOperator",
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
			this.state = 89;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1023912142) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 260833311) !== 0)) {
				{
				{
				this.state = 86;
				this.statement();
				}
				}
				this.state = 91;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 92;
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
			this.state = 103;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 94;
				this.variableDeclaration();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 95;
				this.functionDeclaration();
				}
				break;
			case 7:
			case 24:
			case 26:
			case 27:
			case 28:
			case 29:
			case 34:
			case 35:
			case 36:
			case 37:
			case 38:
			case 52:
			case 53:
			case 57:
			case 58:
			case 59:
			case 60:
			case 61:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 96;
				this.expressionStatement();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 97;
				this.ifStatement();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 98;
				this.forStatement();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 99;
				this.whileStatement();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 100;
				this.returnStatement();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 101;
				this.printStatement();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 102;
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
			this.state = 105;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 106;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 109;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 107;
				this.match(LuminaParser.T__3);
				this.state = 108;
				this.type_(0);
				}
			}

			this.state = 114;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 31) !== 0)) {
				{
				this.state = 111;
				this.assignmentOperator();
				this.state = 112;
				this.expression();
				}
			}

			this.state = 116;
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
			this.state = 118;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 119;
				this.match(LuminaParser.T__4);
				this.state = 120;
				this.match(LuminaParser.IDENTIFIER);
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 126;
			this.assignmentOperator();
			this.state = 127;
			this.expression();
			this.state = 128;
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
			this.state = 130;
			this.match(LuminaParser.T__5);
			this.state = 131;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 132;
			this.match(LuminaParser.T__6);
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 133;
				this.parameterList();
				}
			}

			this.state = 136;
			this.match(LuminaParser.T__7);
			this.state = 139;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 137;
				this.match(LuminaParser.T__3);
				this.state = 138;
				this.type_(0);
				}
			}

			this.state = 141;
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
			this.state = 143;
			this.parameter();
			this.state = 148;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 144;
				this.match(LuminaParser.T__8);
				this.state = 145;
				this.parameter();
				}
				}
				this.state = 150;
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
			this.state = 151;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 154;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 152;
				this.match(LuminaParser.T__3);
				this.state = 153;
				this.type_(0);
				}
			}

			this.state = 158;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===10) {
				{
				this.state = 156;
				this.match(LuminaParser.T__9);
				this.state = 157;
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
			this.state = 160;
			this.expression();
			this.state = 162;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 161;
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
			this.state = 164;
			this.match(LuminaParser.T__10);
			this.state = 165;
			this.match(LuminaParser.T__6);
			this.state = 166;
			this.expression();
			this.state = 167;
			this.match(LuminaParser.T__7);
			this.state = 168;
			this.statement();
			this.state = 171;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				{
				this.state = 169;
				this.match(LuminaParser.T__11);
				this.state = 170;
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
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 173;
				this.match(LuminaParser.T__12);
				this.state = 174;
				this.match(LuminaParser.T__6);
				this.state = 177;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 175;
					this.variableDeclaration();
					}
					break;
				case 2:
					{
					this.state = 176;
					this.expressionStatement();
					}
					break;
				}
				this.state = 186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 179;
					this.match(LuminaParser.IDENTIFIER);
					this.state = 182;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case 48:
					case 49:
					case 50:
					case 51:
						{
						this.state = 180;
						this.relationalOperator();
						}
						break;
					case 44:
					case 45:
					case 46:
					case 47:
						{
						this.state = 181;
						this.equalityOperator();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 184;
					this.expression();
					}
				}

				this.state = 188;
				this.match(LuminaParser.SEMICOLON);
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===59) {
					{
					this.state = 189;
					this.match(LuminaParser.IDENTIFIER);
					this.state = 190;
					this.unaryExpression();
					}
				}

				this.state = 193;
				this.match(LuminaParser.T__7);
				this.state = 194;
				this.statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 195;
				this.match(LuminaParser.T__12);
				this.state = 196;
				this.match(LuminaParser.T__6);
				this.state = 197;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0))) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 198;
				this.match(LuminaParser.IDENTIFIER);
				this.state = 199;
				this.match(LuminaParser.T__13);
				this.state = 200;
				this.expression();
				this.state = 201;
				this.match(LuminaParser.T__7);
				this.state = 202;
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
			this.state = 206;
			this.match(LuminaParser.T__14);
			this.state = 207;
			this.match(LuminaParser.T__6);
			this.state = 208;
			this.expression();
			this.state = 209;
			this.match(LuminaParser.T__7);
			this.state = 210;
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
			this.state = 212;
			this.match(LuminaParser.T__15);
			this.state = 214;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1023410304) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 260833311) !== 0)) {
				{
				this.state = 213;
				this.expression();
				}
			}

			this.state = 216;
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
			this.state = 218;
			this.match(LuminaParser.T__16);
			this.state = 219;
			this.match(LuminaParser.T__6);
			this.state = 220;
			this.expression();
			this.state = 221;
			this.match(LuminaParser.T__7);
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
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, LuminaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 224;
			this.match(LuminaParser.T__17);
			this.state = 228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1023912142) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 260833311) !== 0)) {
				{
				{
				this.state = 225;
				this.statement();
				}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 232;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===62) {
				{
				this.state = 231;
				this.match(LuminaParser.SEMICOLON);
				}
			}

			this.state = 234;
			this.match(LuminaParser.T__18);
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
			this.state = 236;
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
			this.state = 238;
			this.conditionalExpression();
			this.state = 242;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 239;
				this.assignmentOperator();
				this.state = 240;
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
			this.state = 244;
			this.logicalOrExpression();
			this.state = 250;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				this.state = 245;
				this.match(LuminaParser.T__19);
				this.state = 246;
				this.expression();
				this.state = 247;
				this.match(LuminaParser.T__3);
				this.state = 248;
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
			this.state = 252;
			this.logicalAndExpression();
			this.state = 257;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 253;
					this.match(LuminaParser.T__20);
					this.state = 254;
					this.logicalAndExpression();
					}
					}
				}
				this.state = 259;
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
	public logicalAndExpression(): LogicalAndExpressionContext {
		let localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, LuminaParser.RULE_logicalAndExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 260;
			this.equalityExpression();
			this.state = 265;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 261;
					this.match(LuminaParser.T__21);
					this.state = 262;
					this.equalityExpression();
					}
					}
				}
				this.state = 267;
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
	public equalityExpression(): EqualityExpressionContext {
		let localctx: EqualityExpressionContext = new EqualityExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, LuminaParser.RULE_equalityExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 268;
			this.relationalExpression();
			this.state = 274;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 269;
					this.equalityOperator();
					this.state = 270;
					this.relationalExpression();
					}
					}
				}
				this.state = 276;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 24, this._ctx);
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
			this.state = 277;
			this.additiveExpression();
			this.state = 279;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 278;
				this.postfixExpression();
				}
				break;
			}
			this.state = 288;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 281;
					this.relationalOperator();
					this.state = 282;
					this.additiveExpression();
					this.state = 284;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
					case 1:
						{
						this.state = 283;
						this.postfixExpression();
						}
						break;
					}
					}
					}
				}
				this.state = 290;
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
	public additiveExpression(): AdditiveExpressionContext {
		let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, LuminaParser.RULE_additiveExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 291;
			this.multiplicativeExpression();
			this.state = 297;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 28, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 292;
					this.additiveOperator();
					this.state = 293;
					this.multiplicativeExpression();
					}
					}
				}
				this.state = 299;
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
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, LuminaParser.RULE_multiplicativeExpression);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 300;
			this.unaryExpression();
			this.state = 306;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 301;
					this.multiplicativeOperator();
					this.state = 302;
					this.unaryExpression();
					}
					}
				}
				this.state = 308;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
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
			this.state = 309;
			this.match(LuminaParser.T__6);
			this.state = 311;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===59) {
				{
				this.state = 310;
				this.parameterList();
				}
			}

			this.state = 313;
			this.match(LuminaParser.T__7);
			this.state = 314;
			this.match(LuminaParser.T__22);
			this.state = 315;
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
		this.enterRule(localctx, 48, LuminaParser.RULE_arrayExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 317;
			this.match(LuminaParser.T__23);
			this.state = 326;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1023410304) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 260833311) !== 0)) {
				{
				this.state = 318;
				this.expression();
				this.state = 323;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9) {
					{
					{
					this.state = 319;
					this.match(LuminaParser.T__8);
					this.state = 320;
					this.expression();
					}
					}
					this.state = 325;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 328;
			this.match(LuminaParser.T__24);
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
			this.state = 335;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 330;
				this.postfixExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 331;
				this.unaryOperator();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 332;
				this.unaryOperator();
				this.state = 333;
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
			this.state = 340;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 337;
				this.primaryExpression();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 338;
				this.methodCall();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 339;
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
	public primaryExpression(): PrimaryExpressionContext {
		let localctx: PrimaryExpressionContext = new PrimaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, LuminaParser.RULE_primaryExpression);
		try {
			this.state = 360;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 342;
				this.match(LuminaParser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 343;
				this.match(LuminaParser.NUMBER);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 344;
				this.match(LuminaParser.STRING);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 345;
				this.match(LuminaParser.T__25);
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 346;
				this.match(LuminaParser.T__26);
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 347;
				this.match(LuminaParser.T__27);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 348;
				this.match(LuminaParser.T__6);
				this.state = 349;
				this.expression();
				this.state = 350;
				this.match(LuminaParser.T__7);
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 352;
				this.lambdaExpression();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 353;
				this.arrayExpression();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 354;
				this.parse();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 11);
				{
				this.state = 355;
				this.match(LuminaParser.T__28);
				this.state = 358;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 356;
					this.match(LuminaParser.T__4);
					this.state = 357;
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
		this.enterRule(localctx, 56, LuminaParser.RULE_methodCall);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 362;
			this.primaryExpression();
			this.state = 367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===5) {
				{
				{
				this.state = 363;
				this.match(LuminaParser.T__4);
				this.state = 364;
				this.match(LuminaParser.IDENTIFIER);
				}
				}
				this.state = 369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 370;
			this.match(LuminaParser.T__6);
			this.state = 379;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 1023410304) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 260833311) !== 0)) {
				{
				this.state = 371;
				this.expression();
				this.state = 376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===9) {
					{
					{
					this.state = 372;
					this.match(LuminaParser.T__8);
					this.state = 373;
					this.expression();
					}
					}
					this.state = 378;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 381;
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
		this.enterRule(localctx, 58, LuminaParser.RULE_nonNullAssertion);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 383;
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
		let _startState: number = 60;
		this.enterRecursionRule(localctx, 60, LuminaParser.RULE_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 391;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 30:
				{
				this.state = 386;
				this.match(LuminaParser.T__29);
				}
				break;
			case 31:
				{
				this.state = 387;
				this.match(LuminaParser.T__30);
				}
				break;
			case 32:
				{
				this.state = 388;
				this.match(LuminaParser.T__31);
				}
				break;
			case 33:
				{
				this.state = 389;
				this.match(LuminaParser.T__32);
				}
				break;
			case 59:
				{
				this.state = 390;
				this.match(LuminaParser.IDENTIFIER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 398;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
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
					this.state = 393;
					if (!(this.precpred(this._ctx, 1))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
					}
					this.state = 394;
					this.match(LuminaParser.T__23);
					this.state = 395;
					this.match(LuminaParser.T__24);
					}
					}
				}
				this.state = 400;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 41, this._ctx);
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
		this.enterRule(localctx, 62, LuminaParser.RULE_parse);
		try {
			this.state = 406;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 34:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 401;
				this.parseInt();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 402;
				this.parseFloat();
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 403;
				this.parseString();
				}
				break;
			case 37:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 404;
				this.parseBoolean();
				}
				break;
			case 38:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 405;
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
		this.enterRule(localctx, 64, LuminaParser.RULE_parseInt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 408;
			this.match(LuminaParser.T__33);
			this.state = 409;
			this.match(LuminaParser.T__6);
			this.state = 410;
			this.expression();
			this.state = 411;
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
		this.enterRule(localctx, 66, LuminaParser.RULE_parseFloat);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 413;
			this.match(LuminaParser.T__34);
			this.state = 414;
			this.match(LuminaParser.T__6);
			this.state = 415;
			this.expression();
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
	public parseString(): ParseStringContext {
		let localctx: ParseStringContext = new ParseStringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, LuminaParser.RULE_parseString);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 418;
			this.match(LuminaParser.T__35);
			this.state = 419;
			this.match(LuminaParser.T__6);
			this.state = 420;
			this.expression();
			this.state = 421;
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
		this.enterRule(localctx, 70, LuminaParser.RULE_parseBoolean);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 423;
			this.match(LuminaParser.T__36);
			this.state = 424;
			this.match(LuminaParser.T__6);
			this.state = 425;
			this.expression();
			this.state = 426;
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
		this.enterRule(localctx, 72, LuminaParser.RULE_parseNull);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 428;
			this.match(LuminaParser.T__37);
			this.state = 429;
			this.match(LuminaParser.T__6);
			this.state = 430;
			this.expression();
			this.state = 431;
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
		this.enterRule(localctx, 74, LuminaParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 433;
			_la = this._input.LA(1);
			if(!(_la===10 || ((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 31) !== 0))) {
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
		this.enterRule(localctx, 76, LuminaParser.RULE_equalityOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 435;
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
		this.enterRule(localctx, 78, LuminaParser.RULE_relationalOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 437;
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
		this.enterRule(localctx, 80, LuminaParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 439;
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
		this.enterRule(localctx, 82, LuminaParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 441;
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
		this.enterRule(localctx, 84, LuminaParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 443;
			_la = this._input.LA(1);
			if(!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & 830472193) !== 0))) {
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
		case 30:
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

	public static readonly _serializedATN: number[] = [4,1,65,446,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,1,0,5,0,88,8,0,10,0,12,0,91,9,0,1,
	0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,104,8,1,1,2,1,2,1,2,1,2,3,
	2,110,8,2,1,2,1,2,1,2,3,2,115,8,2,1,2,1,2,1,3,1,3,1,3,5,3,122,8,3,10,3,
	12,3,125,9,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,135,8,4,1,4,1,4,1,4,3,
	4,140,8,4,1,4,1,4,1,5,1,5,1,5,5,5,147,8,5,10,5,12,5,150,9,5,1,6,1,6,1,6,
	3,6,155,8,6,1,6,1,6,3,6,159,8,6,1,7,1,7,3,7,163,8,7,1,8,1,8,1,8,1,8,1,8,
	1,8,1,8,3,8,172,8,8,1,9,1,9,1,9,1,9,3,9,178,8,9,1,9,1,9,1,9,3,9,183,8,9,
	1,9,1,9,3,9,187,8,9,1,9,1,9,1,9,3,9,192,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
	1,9,1,9,1,9,1,9,3,9,205,8,9,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,3,11,
	215,8,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,5,13,227,8,13,
	10,13,12,13,230,9,13,1,13,3,13,233,8,13,1,13,1,13,1,14,1,14,1,15,1,15,1,
	15,1,15,3,15,243,8,15,1,16,1,16,1,16,1,16,1,16,1,16,3,16,251,8,16,1,17,
	1,17,1,17,5,17,256,8,17,10,17,12,17,259,9,17,1,18,1,18,1,18,5,18,264,8,
	18,10,18,12,18,267,9,18,1,19,1,19,1,19,1,19,5,19,273,8,19,10,19,12,19,276,
	9,19,1,20,1,20,3,20,280,8,20,1,20,1,20,1,20,3,20,285,8,20,5,20,287,8,20,
	10,20,12,20,290,9,20,1,21,1,21,1,21,1,21,5,21,296,8,21,10,21,12,21,299,
	9,21,1,22,1,22,1,22,1,22,5,22,305,8,22,10,22,12,22,308,9,22,1,23,1,23,3,
	23,312,8,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,5,24,322,8,24,10,24,
	12,24,325,9,24,3,24,327,8,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,3,25,336,
	8,25,1,26,1,26,1,26,3,26,341,8,26,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
	27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,3,27,359,8,27,3,27,361,8,27,
	1,28,1,28,1,28,5,28,366,8,28,10,28,12,28,369,9,28,1,28,1,28,1,28,1,28,5,
	28,375,8,28,10,28,12,28,378,9,28,3,28,380,8,28,1,28,1,28,1,29,1,29,1,30,
	1,30,1,30,1,30,1,30,1,30,3,30,392,8,30,1,30,1,30,1,30,5,30,397,8,30,10,
	30,12,30,400,9,30,1,31,1,31,1,31,1,31,1,31,3,31,407,8,31,1,32,1,32,1,32,
	1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,
	35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,40,
	1,40,1,41,1,41,1,42,1,42,1,42,0,1,60,43,0,2,4,6,8,10,12,14,16,18,20,22,
	24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
	72,74,76,78,80,82,84,0,7,1,0,1,3,2,0,10,10,39,43,1,0,44,47,1,0,48,51,1,
	0,52,53,1,0,54,56,3,0,29,29,52,53,57,58,470,0,89,1,0,0,0,2,103,1,0,0,0,
	4,105,1,0,0,0,6,118,1,0,0,0,8,130,1,0,0,0,10,143,1,0,0,0,12,151,1,0,0,0,
	14,160,1,0,0,0,16,164,1,0,0,0,18,204,1,0,0,0,20,206,1,0,0,0,22,212,1,0,
	0,0,24,218,1,0,0,0,26,224,1,0,0,0,28,236,1,0,0,0,30,238,1,0,0,0,32,244,
	1,0,0,0,34,252,1,0,0,0,36,260,1,0,0,0,38,268,1,0,0,0,40,277,1,0,0,0,42,
	291,1,0,0,0,44,300,1,0,0,0,46,309,1,0,0,0,48,317,1,0,0,0,50,335,1,0,0,0,
	52,340,1,0,0,0,54,360,1,0,0,0,56,362,1,0,0,0,58,383,1,0,0,0,60,391,1,0,
	0,0,62,406,1,0,0,0,64,408,1,0,0,0,66,413,1,0,0,0,68,418,1,0,0,0,70,423,
	1,0,0,0,72,428,1,0,0,0,74,433,1,0,0,0,76,435,1,0,0,0,78,437,1,0,0,0,80,
	439,1,0,0,0,82,441,1,0,0,0,84,443,1,0,0,0,86,88,3,2,1,0,87,86,1,0,0,0,88,
	91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,92,1,0,0,0,91,89,1,0,0,0,92,93,
	5,0,0,1,93,1,1,0,0,0,94,104,3,4,2,0,95,104,3,8,4,0,96,104,3,14,7,0,97,104,
	3,16,8,0,98,104,3,18,9,0,99,104,3,20,10,0,100,104,3,22,11,0,101,104,3,24,
	12,0,102,104,3,26,13,0,103,94,1,0,0,0,103,95,1,0,0,0,103,96,1,0,0,0,103,
	97,1,0,0,0,103,98,1,0,0,0,103,99,1,0,0,0,103,100,1,0,0,0,103,101,1,0,0,
	0,103,102,1,0,0,0,104,3,1,0,0,0,105,106,7,0,0,0,106,109,5,59,0,0,107,108,
	5,4,0,0,108,110,3,60,30,0,109,107,1,0,0,0,109,110,1,0,0,0,110,114,1,0,0,
	0,111,112,3,74,37,0,112,113,3,28,14,0,113,115,1,0,0,0,114,111,1,0,0,0,114,
	115,1,0,0,0,115,116,1,0,0,0,116,117,5,62,0,0,117,5,1,0,0,0,118,123,5,59,
	0,0,119,120,5,5,0,0,120,122,5,59,0,0,121,119,1,0,0,0,122,125,1,0,0,0,123,
	121,1,0,0,0,123,124,1,0,0,0,124,126,1,0,0,0,125,123,1,0,0,0,126,127,3,74,
	37,0,127,128,3,28,14,0,128,129,5,62,0,0,129,7,1,0,0,0,130,131,5,6,0,0,131,
	132,5,59,0,0,132,134,5,7,0,0,133,135,3,10,5,0,134,133,1,0,0,0,134,135,1,
	0,0,0,135,136,1,0,0,0,136,139,5,8,0,0,137,138,5,4,0,0,138,140,3,60,30,0,
	139,137,1,0,0,0,139,140,1,0,0,0,140,141,1,0,0,0,141,142,3,26,13,0,142,9,
	1,0,0,0,143,148,3,12,6,0,144,145,5,9,0,0,145,147,3,12,6,0,146,144,1,0,0,
	0,147,150,1,0,0,0,148,146,1,0,0,0,148,149,1,0,0,0,149,11,1,0,0,0,150,148,
	1,0,0,0,151,154,5,59,0,0,152,153,5,4,0,0,153,155,3,60,30,0,154,152,1,0,
	0,0,154,155,1,0,0,0,155,158,1,0,0,0,156,157,5,10,0,0,157,159,3,28,14,0,
	158,156,1,0,0,0,158,159,1,0,0,0,159,13,1,0,0,0,160,162,3,28,14,0,161,163,
	5,62,0,0,162,161,1,0,0,0,162,163,1,0,0,0,163,15,1,0,0,0,164,165,5,11,0,
	0,165,166,5,7,0,0,166,167,3,28,14,0,167,168,5,8,0,0,168,171,3,2,1,0,169,
	170,5,12,0,0,170,172,3,2,1,0,171,169,1,0,0,0,171,172,1,0,0,0,172,17,1,0,
	0,0,173,174,5,13,0,0,174,177,5,7,0,0,175,178,3,4,2,0,176,178,3,14,7,0,177,
	175,1,0,0,0,177,176,1,0,0,0,177,178,1,0,0,0,178,186,1,0,0,0,179,182,5,59,
	0,0,180,183,3,78,39,0,181,183,3,76,38,0,182,180,1,0,0,0,182,181,1,0,0,0,
	183,184,1,0,0,0,184,185,3,28,14,0,185,187,1,0,0,0,186,179,1,0,0,0,186,187,
	1,0,0,0,187,188,1,0,0,0,188,191,5,62,0,0,189,190,5,59,0,0,190,192,3,50,
	25,0,191,189,1,0,0,0,191,192,1,0,0,0,192,193,1,0,0,0,193,194,5,8,0,0,194,
	205,3,2,1,0,195,196,5,13,0,0,196,197,5,7,0,0,197,198,7,0,0,0,198,199,5,
	59,0,0,199,200,5,14,0,0,200,201,3,28,14,0,201,202,5,8,0,0,202,203,3,2,1,
	0,203,205,1,0,0,0,204,173,1,0,0,0,204,195,1,0,0,0,205,19,1,0,0,0,206,207,
	5,15,0,0,207,208,5,7,0,0,208,209,3,28,14,0,209,210,5,8,0,0,210,211,3,2,
	1,0,211,21,1,0,0,0,212,214,5,16,0,0,213,215,3,28,14,0,214,213,1,0,0,0,214,
	215,1,0,0,0,215,216,1,0,0,0,216,217,5,62,0,0,217,23,1,0,0,0,218,219,5,17,
	0,0,219,220,5,7,0,0,220,221,3,28,14,0,221,222,5,8,0,0,222,223,5,62,0,0,
	223,25,1,0,0,0,224,228,5,18,0,0,225,227,3,2,1,0,226,225,1,0,0,0,227,230,
	1,0,0,0,228,226,1,0,0,0,228,229,1,0,0,0,229,232,1,0,0,0,230,228,1,0,0,0,
	231,233,5,62,0,0,232,231,1,0,0,0,232,233,1,0,0,0,233,234,1,0,0,0,234,235,
	5,19,0,0,235,27,1,0,0,0,236,237,3,30,15,0,237,29,1,0,0,0,238,242,3,32,16,
	0,239,240,3,74,37,0,240,241,3,30,15,0,241,243,1,0,0,0,242,239,1,0,0,0,242,
	243,1,0,0,0,243,31,1,0,0,0,244,250,3,34,17,0,245,246,5,20,0,0,246,247,3,
	28,14,0,247,248,5,4,0,0,248,249,3,32,16,0,249,251,1,0,0,0,250,245,1,0,0,
	0,250,251,1,0,0,0,251,33,1,0,0,0,252,257,3,36,18,0,253,254,5,21,0,0,254,
	256,3,36,18,0,255,253,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,0,257,258,1,
	0,0,0,258,35,1,0,0,0,259,257,1,0,0,0,260,265,3,38,19,0,261,262,5,22,0,0,
	262,264,3,38,19,0,263,261,1,0,0,0,264,267,1,0,0,0,265,263,1,0,0,0,265,266,
	1,0,0,0,266,37,1,0,0,0,267,265,1,0,0,0,268,274,3,40,20,0,269,270,3,76,38,
	0,270,271,3,40,20,0,271,273,1,0,0,0,272,269,1,0,0,0,273,276,1,0,0,0,274,
	272,1,0,0,0,274,275,1,0,0,0,275,39,1,0,0,0,276,274,1,0,0,0,277,279,3,42,
	21,0,278,280,3,52,26,0,279,278,1,0,0,0,279,280,1,0,0,0,280,288,1,0,0,0,
	281,282,3,78,39,0,282,284,3,42,21,0,283,285,3,52,26,0,284,283,1,0,0,0,284,
	285,1,0,0,0,285,287,1,0,0,0,286,281,1,0,0,0,287,290,1,0,0,0,288,286,1,0,
	0,0,288,289,1,0,0,0,289,41,1,0,0,0,290,288,1,0,0,0,291,297,3,44,22,0,292,
	293,3,80,40,0,293,294,3,44,22,0,294,296,1,0,0,0,295,292,1,0,0,0,296,299,
	1,0,0,0,297,295,1,0,0,0,297,298,1,0,0,0,298,43,1,0,0,0,299,297,1,0,0,0,
	300,306,3,50,25,0,301,302,3,82,41,0,302,303,3,50,25,0,303,305,1,0,0,0,304,
	301,1,0,0,0,305,308,1,0,0,0,306,304,1,0,0,0,306,307,1,0,0,0,307,45,1,0,
	0,0,308,306,1,0,0,0,309,311,5,7,0,0,310,312,3,10,5,0,311,310,1,0,0,0,311,
	312,1,0,0,0,312,313,1,0,0,0,313,314,5,8,0,0,314,315,5,23,0,0,315,316,3,
	28,14,0,316,47,1,0,0,0,317,326,5,24,0,0,318,323,3,28,14,0,319,320,5,9,0,
	0,320,322,3,28,14,0,321,319,1,0,0,0,322,325,1,0,0,0,323,321,1,0,0,0,323,
	324,1,0,0,0,324,327,1,0,0,0,325,323,1,0,0,0,326,318,1,0,0,0,326,327,1,0,
	0,0,327,328,1,0,0,0,328,329,5,25,0,0,329,49,1,0,0,0,330,336,3,52,26,0,331,
	336,3,84,42,0,332,333,3,84,42,0,333,334,3,50,25,0,334,336,1,0,0,0,335,330,
	1,0,0,0,335,331,1,0,0,0,335,332,1,0,0,0,336,51,1,0,0,0,337,341,3,54,27,
	0,338,341,3,56,28,0,339,341,3,58,29,0,340,337,1,0,0,0,340,338,1,0,0,0,340,
	339,1,0,0,0,341,53,1,0,0,0,342,361,5,59,0,0,343,361,5,60,0,0,344,361,5,
	61,0,0,345,361,5,26,0,0,346,361,5,27,0,0,347,361,5,28,0,0,348,349,5,7,0,
	0,349,350,3,28,14,0,350,351,5,8,0,0,351,361,1,0,0,0,352,361,3,46,23,0,353,
	361,3,48,24,0,354,361,3,62,31,0,355,358,5,29,0,0,356,357,5,5,0,0,357,359,
	3,28,14,0,358,356,1,0,0,0,358,359,1,0,0,0,359,361,1,0,0,0,360,342,1,0,0,
	0,360,343,1,0,0,0,360,344,1,0,0,0,360,345,1,0,0,0,360,346,1,0,0,0,360,347,
	1,0,0,0,360,348,1,0,0,0,360,352,1,0,0,0,360,353,1,0,0,0,360,354,1,0,0,0,
	360,355,1,0,0,0,361,55,1,0,0,0,362,367,3,54,27,0,363,364,5,5,0,0,364,366,
	5,59,0,0,365,363,1,0,0,0,366,369,1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,
	0,368,370,1,0,0,0,369,367,1,0,0,0,370,379,5,7,0,0,371,376,3,28,14,0,372,
	373,5,9,0,0,373,375,3,28,14,0,374,372,1,0,0,0,375,378,1,0,0,0,376,374,1,
	0,0,0,376,377,1,0,0,0,377,380,1,0,0,0,378,376,1,0,0,0,379,371,1,0,0,0,379,
	380,1,0,0,0,380,381,1,0,0,0,381,382,5,8,0,0,382,57,1,0,0,0,383,384,3,54,
	27,0,384,59,1,0,0,0,385,386,6,30,-1,0,386,392,5,30,0,0,387,392,5,31,0,0,
	388,392,5,32,0,0,389,392,5,33,0,0,390,392,5,59,0,0,391,385,1,0,0,0,391,
	387,1,0,0,0,391,388,1,0,0,0,391,389,1,0,0,0,391,390,1,0,0,0,392,398,1,0,
	0,0,393,394,10,1,0,0,394,395,5,24,0,0,395,397,5,25,0,0,396,393,1,0,0,0,
	397,400,1,0,0,0,398,396,1,0,0,0,398,399,1,0,0,0,399,61,1,0,0,0,400,398,
	1,0,0,0,401,407,3,64,32,0,402,407,3,66,33,0,403,407,3,68,34,0,404,407,3,
	70,35,0,405,407,3,72,36,0,406,401,1,0,0,0,406,402,1,0,0,0,406,403,1,0,0,
	0,406,404,1,0,0,0,406,405,1,0,0,0,407,63,1,0,0,0,408,409,5,34,0,0,409,410,
	5,7,0,0,410,411,3,28,14,0,411,412,5,8,0,0,412,65,1,0,0,0,413,414,5,35,0,
	0,414,415,5,7,0,0,415,416,3,28,14,0,416,417,5,8,0,0,417,67,1,0,0,0,418,
	419,5,36,0,0,419,420,5,7,0,0,420,421,3,28,14,0,421,422,5,8,0,0,422,69,1,
	0,0,0,423,424,5,37,0,0,424,425,5,7,0,0,425,426,3,28,14,0,426,427,5,8,0,
	0,427,71,1,0,0,0,428,429,5,38,0,0,429,430,5,7,0,0,430,431,3,28,14,0,431,
	432,5,8,0,0,432,73,1,0,0,0,433,434,7,1,0,0,434,75,1,0,0,0,435,436,7,2,0,
	0,436,77,1,0,0,0,437,438,7,3,0,0,438,79,1,0,0,0,439,440,7,4,0,0,440,81,
	1,0,0,0,441,442,7,5,0,0,442,83,1,0,0,0,443,444,7,6,0,0,444,85,1,0,0,0,43,
	89,103,109,114,123,134,139,148,154,158,162,171,177,182,186,191,204,214,
	228,232,242,250,257,265,274,279,284,288,297,306,311,323,326,335,340,358,
	360,367,376,379,391,398,406];

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
	public primaryExpression(): PrimaryExpressionContext {
		return this.getTypedRuleContext(PrimaryExpressionContext, 0) as PrimaryExpressionContext;
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
