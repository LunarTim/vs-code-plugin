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
	public static readonly IDENTIFIER = 47;
	public static readonly NUMBER = 48;
	public static readonly STRING = 49;
	public static readonly PUNCTUATION = 50;
	public static readonly WS = 51;
	public static readonly COMMENT = 52;
	public static readonly MULTILINE_COMMENT = 53;
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
	public static readonly RULE_block = 11;
	public static readonly RULE_expression = 12;
	public static readonly RULE_assignmentExpression = 13;
	public static readonly RULE_conditionalExpression = 14;
	public static readonly RULE_logicalOrExpression = 15;
	public static readonly RULE_logicalAndExpression = 16;
	public static readonly RULE_equalityExpression = 17;
	public static readonly RULE_relationalExpression = 18;
	public static readonly RULE_additiveExpression = 19;
	public static readonly RULE_multiplicativeExpression = 20;
	public static readonly RULE_unaryExpression = 21;
	public static readonly RULE_postfixExpression = 22;
	public static readonly RULE_primaryExpression = 23;
	public static readonly RULE_type = 24;
	public static readonly RULE_assignmentOperator = 25;
	public static readonly RULE_equalityOperator = 26;
	public static readonly RULE_relationalOperator = 27;
	public static readonly RULE_additiveOperator = 28;
	public static readonly RULE_multiplicativeOperator = 29;
	public static readonly RULE_unaryOperator = 30;
	public static readonly literalNames: (string | null)[] = [ null, "'let'", 
                                                            "'const'", "'var'", 
                                                            "':'", "'='", 
                                                            "'function'", 
                                                            "'('", "')'", 
                                                            "','", "'if'", 
                                                            "'else'", "'for'", 
                                                            "';'", "'while'", 
                                                            "'return'", 
                                                            "'{'", "'}'", 
                                                            "'?'", "'||'", 
                                                            "'&&'", "'true'", 
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
                                                            "'%'", "'!'" ];
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
                                                             null, "IDENTIFIER", 
                                                             "NUMBER", "STRING", 
                                                             "PUNCTUATION", 
                                                             "WS", "COMMENT", 
                                                             "MULTILINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "variableDeclaration", "functionDeclaration", 
		"parameterList", "parameter", "expressionStatement", "ifStatement", "forStatement", 
		"whileStatement", "returnStatement", "block", "expression", "assignmentExpression", 
		"conditionalExpression", "logicalOrExpression", "logicalAndExpression", 
		"equalityExpression", "relationalExpression", "additiveExpression", "multiplicativeExpression", 
		"unaryExpression", "postfixExpression", "primaryExpression", "type", "assignmentOperator", 
		"equalityOperator", "relationalOperator", "additiveOperator", "multiplicativeOperator", 
		"unaryOperator",
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
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14800078) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 241) !== 0)) {
				{
				{
				this.state = 62;
				this.statement();
				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 68;
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
			this.state = 78;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 70;
				this.variableDeclaration();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 71;
				this.functionDeclaration();
				}
				break;
			case 7:
			case 21:
			case 22:
			case 23:
			case 42:
			case 46:
			case 47:
			case 48:
			case 49:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 72;
				this.expressionStatement();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 73;
				this.ifStatement();
				}
				break;
			case 12:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 74;
				this.forStatement();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 75;
				this.whileStatement();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 76;
				this.returnStatement();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 77;
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
			this.state = 80;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 81;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 84;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 82;
				this.match(LuminaParser.T__3);
				this.state = 83;
				this.type_();
				}
			}

			this.state = 88;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===5) {
				{
				this.state = 86;
				this.match(LuminaParser.T__4);
				this.state = 87;
				this.expression();
				}
			}

			this.state = 90;
			this.match(LuminaParser.PUNCTUATION);
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
			this.state = 92;
			this.match(LuminaParser.T__5);
			this.state = 93;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 94;
			this.match(LuminaParser.T__6);
			this.state = 96;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===47) {
				{
				this.state = 95;
				this.parameterList();
				}
			}

			this.state = 98;
			this.match(LuminaParser.T__7);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 99;
				this.match(LuminaParser.T__3);
				this.state = 100;
				this.type_();
				}
			}

			this.state = 103;
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
			this.state = 105;
			this.parameter();
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===9) {
				{
				{
				this.state = 106;
				this.match(LuminaParser.T__8);
				this.state = 107;
				this.parameter();
				}
				}
				this.state = 112;
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
			this.state = 113;
			this.match(LuminaParser.IDENTIFIER);
			this.state = 116;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 114;
				this.match(LuminaParser.T__3);
				this.state = 115;
				this.type_();
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
			this.state = 118;
			this.expression();
			this.state = 119;
			this.match(LuminaParser.PUNCTUATION);
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
			this.state = 121;
			this.match(LuminaParser.T__9);
			this.state = 122;
			this.match(LuminaParser.T__6);
			this.state = 123;
			this.expression();
			this.state = 124;
			this.match(LuminaParser.T__7);
			this.state = 125;
			this.statement();
			this.state = 128;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 126;
				this.match(LuminaParser.T__10);
				this.state = 127;
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
			this.state = 130;
			this.match(LuminaParser.T__11);
			this.state = 131;
			this.match(LuminaParser.T__6);
			this.state = 134;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
				{
				this.state = 132;
				this.variableDeclaration();
				}
				break;
			case 7:
			case 21:
			case 22:
			case 23:
			case 42:
			case 46:
			case 47:
			case 48:
			case 49:
				{
				this.state = 133;
				this.expressionStatement();
				}
				break;
			case 13:
				break;
			default:
				break;
			}
			this.state = 136;
			this.match(LuminaParser.T__12);
			this.state = 138;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14680192) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 241) !== 0)) {
				{
				this.state = 137;
				this.expression();
				}
			}

			this.state = 140;
			this.match(LuminaParser.T__12);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14680192) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 241) !== 0)) {
				{
				this.state = 141;
				this.expression();
				}
			}

			this.state = 144;
			this.match(LuminaParser.T__7);
			this.state = 145;
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
			this.state = 147;
			this.match(LuminaParser.T__13);
			this.state = 148;
			this.match(LuminaParser.T__6);
			this.state = 149;
			this.expression();
			this.state = 150;
			this.match(LuminaParser.T__7);
			this.state = 151;
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
			this.state = 153;
			this.match(LuminaParser.T__14);
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14680192) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 241) !== 0)) {
				{
				this.state = 154;
				this.expression();
				}
			}

			this.state = 157;
			this.match(LuminaParser.PUNCTUATION);
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
		this.enterRule(localctx, 22, LuminaParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 159;
			this.match(LuminaParser.T__15);
			this.state = 163;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14800078) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 241) !== 0)) {
				{
				{
				this.state = 160;
				this.statement();
				}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 166;
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
		this.enterRule(localctx, 24, LuminaParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 168;
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
		this.enterRule(localctx, 26, LuminaParser.RULE_assignmentExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 170;
			this.conditionalExpression();
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 260046849) !== 0)) {
				{
				this.state = 171;
				this.assignmentOperator();
				this.state = 172;
				this.assignmentExpression();
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
	public conditionalExpression(): ConditionalExpressionContext {
		let localctx: ConditionalExpressionContext = new ConditionalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, LuminaParser.RULE_conditionalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 176;
			this.logicalOrExpression();
			this.state = 182;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 177;
				this.match(LuminaParser.T__17);
				this.state = 178;
				this.expression();
				this.state = 179;
				this.match(LuminaParser.T__3);
				this.state = 180;
				this.conditionalExpression();
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
	public logicalOrExpression(): LogicalOrExpressionContext {
		let localctx: LogicalOrExpressionContext = new LogicalOrExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, LuminaParser.RULE_logicalOrExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 184;
			this.logicalAndExpression();
			this.state = 189;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===19) {
				{
				{
				this.state = 185;
				this.match(LuminaParser.T__18);
				this.state = 186;
				this.logicalAndExpression();
				}
				}
				this.state = 191;
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
	public logicalAndExpression(): LogicalAndExpressionContext {
		let localctx: LogicalAndExpressionContext = new LogicalAndExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, LuminaParser.RULE_logicalAndExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 192;
			this.equalityExpression();
			this.state = 197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===20) {
				{
				{
				this.state = 193;
				this.match(LuminaParser.T__19);
				this.state = 194;
				this.equalityExpression();
				}
				}
				this.state = 199;
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
	public equalityExpression(): EqualityExpressionContext {
		let localctx: EqualityExpressionContext = new EqualityExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, LuminaParser.RULE_equalityExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 200;
			this.relationalExpression();
			this.state = 206;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 15) !== 0)) {
				{
				{
				this.state = 201;
				this.equalityOperator();
				this.state = 202;
				this.relationalExpression();
				}
				}
				this.state = 208;
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
	public relationalExpression(): RelationalExpressionContext {
		let localctx: RelationalExpressionContext = new RelationalExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, LuminaParser.RULE_relationalExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 209;
			this.additiveExpression();
			this.state = 215;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 15) !== 0)) {
				{
				{
				this.state = 210;
				this.relationalOperator();
				this.state = 211;
				this.additiveExpression();
				}
				}
				this.state = 217;
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
	public additiveExpression(): AdditiveExpressionContext {
		let localctx: AdditiveExpressionContext = new AdditiveExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, LuminaParser.RULE_additiveExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 218;
			this.multiplicativeExpression();
			this.state = 224;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===41 || _la===42) {
				{
				{
				this.state = 219;
				this.additiveOperator();
				this.state = 220;
				this.multiplicativeExpression();
				}
				}
				this.state = 226;
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
	public multiplicativeExpression(): MultiplicativeExpressionContext {
		let localctx: MultiplicativeExpressionContext = new MultiplicativeExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, LuminaParser.RULE_multiplicativeExpression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 227;
			this.unaryExpression();
			this.state = 233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 7) !== 0)) {
				{
				{
				this.state = 228;
				this.multiplicativeOperator();
				this.state = 229;
				this.unaryExpression();
				}
				}
				this.state = 235;
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
	public unaryExpression(): UnaryExpressionContext {
		let localctx: UnaryExpressionContext = new UnaryExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, LuminaParser.RULE_unaryExpression);
		try {
			this.state = 240;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
			case 21:
			case 22:
			case 23:
			case 47:
			case 48:
			case 49:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 236;
				this.postfixExpression();
				}
				break;
			case 42:
			case 46:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 237;
				this.unaryOperator();
				this.state = 238;
				this.unaryExpression();
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
	public postfixExpression(): PostfixExpressionContext {
		let localctx: PostfixExpressionContext = new PostfixExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, LuminaParser.RULE_postfixExpression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 242;
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
		this.enterRule(localctx, 46, LuminaParser.RULE_primaryExpression);
		try {
			this.state = 254;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 244;
				this.match(LuminaParser.IDENTIFIER);
				}
				break;
			case 48:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 245;
				this.match(LuminaParser.NUMBER);
				}
				break;
			case 49:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 246;
				this.match(LuminaParser.STRING);
				}
				break;
			case 21:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 247;
				this.match(LuminaParser.T__20);
				}
				break;
			case 22:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 248;
				this.match(LuminaParser.T__21);
				}
				break;
			case 23:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 249;
				this.match(LuminaParser.T__22);
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 250;
				this.match(LuminaParser.T__6);
				this.state = 251;
				this.expression();
				this.state = 252;
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
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, LuminaParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 256;
			_la = this._input.LA(1);
			if(!(((((_la - 24)) & ~0x1F) === 0 && ((1 << (_la - 24)) & 8388623) !== 0))) {
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
	public assignmentOperator(): AssignmentOperatorContext {
		let localctx: AssignmentOperatorContext = new AssignmentOperatorContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, LuminaParser.RULE_assignmentOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 258;
			_la = this._input.LA(1);
			if(!(((((_la - 5)) & ~0x1F) === 0 && ((1 << (_la - 5)) & 260046849) !== 0))) {
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
		this.enterRule(localctx, 52, LuminaParser.RULE_equalityOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 260;
			_la = this._input.LA(1);
			if(!(((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 15) !== 0))) {
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
		this.enterRule(localctx, 54, LuminaParser.RULE_relationalOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 262;
			_la = this._input.LA(1);
			if(!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 15) !== 0))) {
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
		this.enterRule(localctx, 56, LuminaParser.RULE_additiveOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 264;
			_la = this._input.LA(1);
			if(!(_la===41 || _la===42)) {
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
		this.enterRule(localctx, 58, LuminaParser.RULE_multiplicativeOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 266;
			_la = this._input.LA(1);
			if(!(((((_la - 43)) & ~0x1F) === 0 && ((1 << (_la - 43)) & 7) !== 0))) {
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
		this.enterRule(localctx, 60, LuminaParser.RULE_unaryOperator);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 268;
			_la = this._input.LA(1);
			if(!(_la===42 || _la===46)) {
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

	public static readonly _serializedATN: number[] = [4,1,53,271,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,5,0,
	64,8,0,10,0,12,0,67,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,79,
	8,1,1,2,1,2,1,2,1,2,3,2,85,8,2,1,2,1,2,3,2,89,8,2,1,2,1,2,1,3,1,3,1,3,1,
	3,3,3,97,8,3,1,3,1,3,1,3,3,3,102,8,3,1,3,1,3,1,4,1,4,1,4,5,4,109,8,4,10,
	4,12,4,112,9,4,1,5,1,5,1,5,3,5,117,8,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,
	1,7,1,7,3,7,129,8,7,1,8,1,8,1,8,1,8,3,8,135,8,8,1,8,1,8,3,8,139,8,8,1,8,
	1,8,3,8,143,8,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,3,10,156,
	8,10,1,10,1,10,1,11,1,11,5,11,162,8,11,10,11,12,11,165,9,11,1,11,1,11,1,
	12,1,12,1,13,1,13,1,13,1,13,3,13,175,8,13,1,14,1,14,1,14,1,14,1,14,1,14,
	3,14,183,8,14,1,15,1,15,1,15,5,15,188,8,15,10,15,12,15,191,9,15,1,16,1,
	16,1,16,5,16,196,8,16,10,16,12,16,199,9,16,1,17,1,17,1,17,1,17,5,17,205,
	8,17,10,17,12,17,208,9,17,1,18,1,18,1,18,1,18,5,18,214,8,18,10,18,12,18,
	217,9,18,1,19,1,19,1,19,1,19,5,19,223,8,19,10,19,12,19,226,9,19,1,20,1,
	20,1,20,1,20,5,20,232,8,20,10,20,12,20,235,9,20,1,21,1,21,1,21,1,21,3,21,
	241,8,21,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,
	23,255,8,23,1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,
	1,30,1,30,1,30,0,0,31,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
	36,38,40,42,44,46,48,50,52,54,56,58,60,0,8,1,0,1,3,2,0,24,27,47,47,2,0,
	5,5,28,32,1,0,33,36,1,0,37,40,1,0,41,42,1,0,43,45,2,0,42,42,46,46,275,0,
	65,1,0,0,0,2,78,1,0,0,0,4,80,1,0,0,0,6,92,1,0,0,0,8,105,1,0,0,0,10,113,
	1,0,0,0,12,118,1,0,0,0,14,121,1,0,0,0,16,130,1,0,0,0,18,147,1,0,0,0,20,
	153,1,0,0,0,22,159,1,0,0,0,24,168,1,0,0,0,26,170,1,0,0,0,28,176,1,0,0,0,
	30,184,1,0,0,0,32,192,1,0,0,0,34,200,1,0,0,0,36,209,1,0,0,0,38,218,1,0,
	0,0,40,227,1,0,0,0,42,240,1,0,0,0,44,242,1,0,0,0,46,254,1,0,0,0,48,256,
	1,0,0,0,50,258,1,0,0,0,52,260,1,0,0,0,54,262,1,0,0,0,56,264,1,0,0,0,58,
	266,1,0,0,0,60,268,1,0,0,0,62,64,3,2,1,0,63,62,1,0,0,0,64,67,1,0,0,0,65,
	63,1,0,0,0,65,66,1,0,0,0,66,68,1,0,0,0,67,65,1,0,0,0,68,69,5,0,0,1,69,1,
	1,0,0,0,70,79,3,4,2,0,71,79,3,6,3,0,72,79,3,12,6,0,73,79,3,14,7,0,74,79,
	3,16,8,0,75,79,3,18,9,0,76,79,3,20,10,0,77,79,3,22,11,0,78,70,1,0,0,0,78,
	71,1,0,0,0,78,72,1,0,0,0,78,73,1,0,0,0,78,74,1,0,0,0,78,75,1,0,0,0,78,76,
	1,0,0,0,78,77,1,0,0,0,79,3,1,0,0,0,80,81,7,0,0,0,81,84,5,47,0,0,82,83,5,
	4,0,0,83,85,3,48,24,0,84,82,1,0,0,0,84,85,1,0,0,0,85,88,1,0,0,0,86,87,5,
	5,0,0,87,89,3,24,12,0,88,86,1,0,0,0,88,89,1,0,0,0,89,90,1,0,0,0,90,91,5,
	50,0,0,91,5,1,0,0,0,92,93,5,6,0,0,93,94,5,47,0,0,94,96,5,7,0,0,95,97,3,
	8,4,0,96,95,1,0,0,0,96,97,1,0,0,0,97,98,1,0,0,0,98,101,5,8,0,0,99,100,5,
	4,0,0,100,102,3,48,24,0,101,99,1,0,0,0,101,102,1,0,0,0,102,103,1,0,0,0,
	103,104,3,22,11,0,104,7,1,0,0,0,105,110,3,10,5,0,106,107,5,9,0,0,107,109,
	3,10,5,0,108,106,1,0,0,0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,
	0,111,9,1,0,0,0,112,110,1,0,0,0,113,116,5,47,0,0,114,115,5,4,0,0,115,117,
	3,48,24,0,116,114,1,0,0,0,116,117,1,0,0,0,117,11,1,0,0,0,118,119,3,24,12,
	0,119,120,5,50,0,0,120,13,1,0,0,0,121,122,5,10,0,0,122,123,5,7,0,0,123,
	124,3,24,12,0,124,125,5,8,0,0,125,128,3,2,1,0,126,127,5,11,0,0,127,129,
	3,2,1,0,128,126,1,0,0,0,128,129,1,0,0,0,129,15,1,0,0,0,130,131,5,12,0,0,
	131,134,5,7,0,0,132,135,3,4,2,0,133,135,3,12,6,0,134,132,1,0,0,0,134,133,
	1,0,0,0,134,135,1,0,0,0,135,136,1,0,0,0,136,138,5,13,0,0,137,139,3,24,12,
	0,138,137,1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,142,5,13,0,0,141,
	143,3,24,12,0,142,141,1,0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,145,5,
	8,0,0,145,146,3,2,1,0,146,17,1,0,0,0,147,148,5,14,0,0,148,149,5,7,0,0,149,
	150,3,24,12,0,150,151,5,8,0,0,151,152,3,2,1,0,152,19,1,0,0,0,153,155,5,
	15,0,0,154,156,3,24,12,0,155,154,1,0,0,0,155,156,1,0,0,0,156,157,1,0,0,
	0,157,158,5,50,0,0,158,21,1,0,0,0,159,163,5,16,0,0,160,162,3,2,1,0,161,
	160,1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,166,1,0,
	0,0,165,163,1,0,0,0,166,167,5,17,0,0,167,23,1,0,0,0,168,169,3,26,13,0,169,
	25,1,0,0,0,170,174,3,28,14,0,171,172,3,50,25,0,172,173,3,26,13,0,173,175,
	1,0,0,0,174,171,1,0,0,0,174,175,1,0,0,0,175,27,1,0,0,0,176,182,3,30,15,
	0,177,178,5,18,0,0,178,179,3,24,12,0,179,180,5,4,0,0,180,181,3,28,14,0,
	181,183,1,0,0,0,182,177,1,0,0,0,182,183,1,0,0,0,183,29,1,0,0,0,184,189,
	3,32,16,0,185,186,5,19,0,0,186,188,3,32,16,0,187,185,1,0,0,0,188,191,1,
	0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,31,1,0,0,0,191,189,1,0,0,0,192,
	197,3,34,17,0,193,194,5,20,0,0,194,196,3,34,17,0,195,193,1,0,0,0,196,199,
	1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,33,1,0,0,0,199,197,1,0,0,0,
	200,206,3,36,18,0,201,202,3,52,26,0,202,203,3,36,18,0,203,205,1,0,0,0,204,
	201,1,0,0,0,205,208,1,0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,35,1,0,
	0,0,208,206,1,0,0,0,209,215,3,38,19,0,210,211,3,54,27,0,211,212,3,38,19,
	0,212,214,1,0,0,0,213,210,1,0,0,0,214,217,1,0,0,0,215,213,1,0,0,0,215,216,
	1,0,0,0,216,37,1,0,0,0,217,215,1,0,0,0,218,224,3,40,20,0,219,220,3,56,28,
	0,220,221,3,40,20,0,221,223,1,0,0,0,222,219,1,0,0,0,223,226,1,0,0,0,224,
	222,1,0,0,0,224,225,1,0,0,0,225,39,1,0,0,0,226,224,1,0,0,0,227,233,3,42,
	21,0,228,229,3,58,29,0,229,230,3,42,21,0,230,232,1,0,0,0,231,228,1,0,0,
	0,232,235,1,0,0,0,233,231,1,0,0,0,233,234,1,0,0,0,234,41,1,0,0,0,235,233,
	1,0,0,0,236,241,3,44,22,0,237,238,3,60,30,0,238,239,3,42,21,0,239,241,1,
	0,0,0,240,236,1,0,0,0,240,237,1,0,0,0,241,43,1,0,0,0,242,243,3,46,23,0,
	243,45,1,0,0,0,244,255,5,47,0,0,245,255,5,48,0,0,246,255,5,49,0,0,247,255,
	5,21,0,0,248,255,5,22,0,0,249,255,5,23,0,0,250,251,5,7,0,0,251,252,3,24,
	12,0,252,253,5,8,0,0,253,255,1,0,0,0,254,244,1,0,0,0,254,245,1,0,0,0,254,
	246,1,0,0,0,254,247,1,0,0,0,254,248,1,0,0,0,254,249,1,0,0,0,254,250,1,0,
	0,0,255,47,1,0,0,0,256,257,7,1,0,0,257,49,1,0,0,0,258,259,7,2,0,0,259,51,
	1,0,0,0,260,261,7,3,0,0,261,53,1,0,0,0,262,263,7,4,0,0,263,55,1,0,0,0,264,
	265,7,5,0,0,265,57,1,0,0,0,266,267,7,6,0,0,267,59,1,0,0,0,268,269,7,7,0,
	0,269,61,1,0,0,0,24,65,78,84,88,96,101,110,116,128,134,138,142,155,163,
	174,182,189,197,206,215,224,233,240,254];

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
	public PUNCTUATION(): TerminalNode {
		return this.getToken(LuminaParser.PUNCTUATION, 0);
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
	public PUNCTUATION(): TerminalNode {
		return this.getToken(LuminaParser.PUNCTUATION, 0);
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
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public variableDeclaration(): VariableDeclarationContext {
		return this.getTypedRuleContext(VariableDeclarationContext, 0) as VariableDeclarationContext;
	}
	public expressionStatement(): ExpressionStatementContext {
		return this.getTypedRuleContext(ExpressionStatementContext, 0) as ExpressionStatementContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
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
	public PUNCTUATION(): TerminalNode {
		return this.getToken(LuminaParser.PUNCTUATION, 0);
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
