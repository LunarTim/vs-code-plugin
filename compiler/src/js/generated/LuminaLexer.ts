// Generated from Lumina.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class LuminaLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"T__41", "T__42", "T__43", "T__44", "T__45", "IDENTIFIER", "NUMBER", "STRING", 
		"PUNCTUATION", "WS", "COMMENT", "MULTILINE_COMMENT",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, LuminaLexer._ATN, LuminaLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Lumina.g4"; }

	public get literalNames(): (string | null)[] { return LuminaLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return LuminaLexer.symbolicNames; }
	public get ruleNames(): string[] { return LuminaLexer.ruleNames; }

	public get serializedATN(): number[] { return LuminaLexer._serializedATN; }

	public get channelNames(): string[] { return LuminaLexer.channelNames; }

	public get modeNames(): string[] { return LuminaLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,53,348,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,
	2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,
	31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,
	7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,
	45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,
	1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,
	1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,
	1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,13,1,
	13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,16,1,16,1,17,
	1,17,1,18,1,18,1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,
	21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,
	1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,
	25,1,25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,
	1,30,1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,
	34,1,34,1,35,1,35,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,38,1,39,1,39,
	1,39,1,40,1,40,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,
	46,5,46,275,8,46,10,46,12,46,278,9,46,1,47,4,47,281,8,47,11,47,12,47,282,
	1,47,1,47,4,47,287,8,47,11,47,12,47,288,3,47,291,8,47,1,48,1,48,1,48,1,
	48,5,48,297,8,48,10,48,12,48,300,9,48,1,48,1,48,1,48,1,48,1,48,5,48,307,
	8,48,10,48,12,48,310,9,48,1,48,3,48,313,8,48,1,49,1,49,1,50,4,50,318,8,
	50,11,50,12,50,319,1,50,1,50,1,51,1,51,1,51,1,51,5,51,328,8,51,10,51,12,
	51,331,9,51,1,51,1,51,1,52,1,52,1,52,1,52,5,52,339,8,52,10,52,12,52,342,
	9,52,1,52,1,52,1,52,1,52,1,52,1,340,0,53,1,1,3,2,5,3,7,4,9,5,11,6,13,7,
	15,8,17,9,19,10,21,11,23,12,25,13,27,14,29,15,31,16,33,17,35,18,37,19,39,
	20,41,21,43,22,45,23,47,24,49,25,51,26,53,27,55,28,57,29,59,30,61,31,63,
	32,65,33,67,34,69,35,71,36,73,37,75,38,77,39,79,40,81,41,83,42,85,43,87,
	44,89,45,91,46,93,47,95,48,97,49,99,50,101,51,103,52,105,53,1,0,8,4,0,36,
	36,65,90,95,95,97,122,5,0,36,36,48,57,65,90,95,95,97,122,1,0,48,57,2,0,
	34,34,92,92,2,0,39,39,92,92,8,0,40,41,44,44,46,46,59,59,91,91,93,93,123,
	123,125,125,3,0,9,10,13,13,32,32,2,0,10,10,13,13,359,0,1,1,0,0,0,0,3,1,
	0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,
	1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,
	0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,
	1,0,0,0,0,39,1,0,0,0,0,41,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,0,47,1,0,0,
	0,0,49,1,0,0,0,0,51,1,0,0,0,0,53,1,0,0,0,0,55,1,0,0,0,0,57,1,0,0,0,0,59,
	1,0,0,0,0,61,1,0,0,0,0,63,1,0,0,0,0,65,1,0,0,0,0,67,1,0,0,0,0,69,1,0,0,
	0,0,71,1,0,0,0,0,73,1,0,0,0,0,75,1,0,0,0,0,77,1,0,0,0,0,79,1,0,0,0,0,81,
	1,0,0,0,0,83,1,0,0,0,0,85,1,0,0,0,0,87,1,0,0,0,0,89,1,0,0,0,0,91,1,0,0,
	0,0,93,1,0,0,0,0,95,1,0,0,0,0,97,1,0,0,0,0,99,1,0,0,0,0,101,1,0,0,0,0,103,
	1,0,0,0,0,105,1,0,0,0,1,107,1,0,0,0,3,111,1,0,0,0,5,117,1,0,0,0,7,121,1,
	0,0,0,9,123,1,0,0,0,11,125,1,0,0,0,13,134,1,0,0,0,15,136,1,0,0,0,17,138,
	1,0,0,0,19,140,1,0,0,0,21,143,1,0,0,0,23,148,1,0,0,0,25,152,1,0,0,0,27,
	154,1,0,0,0,29,160,1,0,0,0,31,167,1,0,0,0,33,169,1,0,0,0,35,171,1,0,0,0,
	37,173,1,0,0,0,39,176,1,0,0,0,41,179,1,0,0,0,43,184,1,0,0,0,45,190,1,0,
	0,0,47,195,1,0,0,0,49,202,1,0,0,0,51,209,1,0,0,0,53,217,1,0,0,0,55,221,
	1,0,0,0,57,224,1,0,0,0,59,227,1,0,0,0,61,230,1,0,0,0,63,233,1,0,0,0,65,
	236,1,0,0,0,67,239,1,0,0,0,69,242,1,0,0,0,71,246,1,0,0,0,73,250,1,0,0,0,
	75,252,1,0,0,0,77,254,1,0,0,0,79,257,1,0,0,0,81,260,1,0,0,0,83,262,1,0,
	0,0,85,264,1,0,0,0,87,266,1,0,0,0,89,268,1,0,0,0,91,270,1,0,0,0,93,272,
	1,0,0,0,95,280,1,0,0,0,97,312,1,0,0,0,99,314,1,0,0,0,101,317,1,0,0,0,103,
	323,1,0,0,0,105,334,1,0,0,0,107,108,5,108,0,0,108,109,5,101,0,0,109,110,
	5,116,0,0,110,2,1,0,0,0,111,112,5,99,0,0,112,113,5,111,0,0,113,114,5,110,
	0,0,114,115,5,115,0,0,115,116,5,116,0,0,116,4,1,0,0,0,117,118,5,118,0,0,
	118,119,5,97,0,0,119,120,5,114,0,0,120,6,1,0,0,0,121,122,5,58,0,0,122,8,
	1,0,0,0,123,124,5,61,0,0,124,10,1,0,0,0,125,126,5,102,0,0,126,127,5,117,
	0,0,127,128,5,110,0,0,128,129,5,99,0,0,129,130,5,116,0,0,130,131,5,105,
	0,0,131,132,5,111,0,0,132,133,5,110,0,0,133,12,1,0,0,0,134,135,5,40,0,0,
	135,14,1,0,0,0,136,137,5,41,0,0,137,16,1,0,0,0,138,139,5,44,0,0,139,18,
	1,0,0,0,140,141,5,105,0,0,141,142,5,102,0,0,142,20,1,0,0,0,143,144,5,101,
	0,0,144,145,5,108,0,0,145,146,5,115,0,0,146,147,5,101,0,0,147,22,1,0,0,
	0,148,149,5,102,0,0,149,150,5,111,0,0,150,151,5,114,0,0,151,24,1,0,0,0,
	152,153,5,59,0,0,153,26,1,0,0,0,154,155,5,119,0,0,155,156,5,104,0,0,156,
	157,5,105,0,0,157,158,5,108,0,0,158,159,5,101,0,0,159,28,1,0,0,0,160,161,
	5,114,0,0,161,162,5,101,0,0,162,163,5,116,0,0,163,164,5,117,0,0,164,165,
	5,114,0,0,165,166,5,110,0,0,166,30,1,0,0,0,167,168,5,123,0,0,168,32,1,0,
	0,0,169,170,5,125,0,0,170,34,1,0,0,0,171,172,5,63,0,0,172,36,1,0,0,0,173,
	174,5,124,0,0,174,175,5,124,0,0,175,38,1,0,0,0,176,177,5,38,0,0,177,178,
	5,38,0,0,178,40,1,0,0,0,179,180,5,116,0,0,180,181,5,114,0,0,181,182,5,117,
	0,0,182,183,5,101,0,0,183,42,1,0,0,0,184,185,5,102,0,0,185,186,5,97,0,0,
	186,187,5,108,0,0,187,188,5,115,0,0,188,189,5,101,0,0,189,44,1,0,0,0,190,
	191,5,110,0,0,191,192,5,117,0,0,192,193,5,108,0,0,193,194,5,108,0,0,194,
	46,1,0,0,0,195,196,5,110,0,0,196,197,5,117,0,0,197,198,5,109,0,0,198,199,
	5,98,0,0,199,200,5,101,0,0,200,201,5,114,0,0,201,48,1,0,0,0,202,203,5,115,
	0,0,203,204,5,116,0,0,204,205,5,114,0,0,205,206,5,105,0,0,206,207,5,110,
	0,0,207,208,5,103,0,0,208,50,1,0,0,0,209,210,5,98,0,0,210,211,5,111,0,0,
	211,212,5,111,0,0,212,213,5,108,0,0,213,214,5,101,0,0,214,215,5,97,0,0,
	215,216,5,110,0,0,216,52,1,0,0,0,217,218,5,97,0,0,218,219,5,110,0,0,219,
	220,5,121,0,0,220,54,1,0,0,0,221,222,5,43,0,0,222,223,5,61,0,0,223,56,1,
	0,0,0,224,225,5,45,0,0,225,226,5,61,0,0,226,58,1,0,0,0,227,228,5,42,0,0,
	228,229,5,61,0,0,229,60,1,0,0,0,230,231,5,47,0,0,231,232,5,61,0,0,232,62,
	1,0,0,0,233,234,5,37,0,0,234,235,5,61,0,0,235,64,1,0,0,0,236,237,5,61,0,
	0,237,238,5,61,0,0,238,66,1,0,0,0,239,240,5,33,0,0,240,241,5,61,0,0,241,
	68,1,0,0,0,242,243,5,61,0,0,243,244,5,61,0,0,244,245,5,61,0,0,245,70,1,
	0,0,0,246,247,5,33,0,0,247,248,5,61,0,0,248,249,5,61,0,0,249,72,1,0,0,0,
	250,251,5,60,0,0,251,74,1,0,0,0,252,253,5,62,0,0,253,76,1,0,0,0,254,255,
	5,60,0,0,255,256,5,61,0,0,256,78,1,0,0,0,257,258,5,62,0,0,258,259,5,61,
	0,0,259,80,1,0,0,0,260,261,5,43,0,0,261,82,1,0,0,0,262,263,5,45,0,0,263,
	84,1,0,0,0,264,265,5,42,0,0,265,86,1,0,0,0,266,267,5,47,0,0,267,88,1,0,
	0,0,268,269,5,37,0,0,269,90,1,0,0,0,270,271,5,33,0,0,271,92,1,0,0,0,272,
	276,7,0,0,0,273,275,7,1,0,0,274,273,1,0,0,0,275,278,1,0,0,0,276,274,1,0,
	0,0,276,277,1,0,0,0,277,94,1,0,0,0,278,276,1,0,0,0,279,281,7,2,0,0,280,
	279,1,0,0,0,281,282,1,0,0,0,282,280,1,0,0,0,282,283,1,0,0,0,283,290,1,0,
	0,0,284,286,5,46,0,0,285,287,7,2,0,0,286,285,1,0,0,0,287,288,1,0,0,0,288,
	286,1,0,0,0,288,289,1,0,0,0,289,291,1,0,0,0,290,284,1,0,0,0,290,291,1,0,
	0,0,291,96,1,0,0,0,292,298,5,34,0,0,293,297,8,3,0,0,294,295,5,92,0,0,295,
	297,9,0,0,0,296,293,1,0,0,0,296,294,1,0,0,0,297,300,1,0,0,0,298,296,1,0,
	0,0,298,299,1,0,0,0,299,301,1,0,0,0,300,298,1,0,0,0,301,313,5,34,0,0,302,
	308,5,39,0,0,303,307,8,4,0,0,304,305,5,92,0,0,305,307,9,0,0,0,306,303,1,
	0,0,0,306,304,1,0,0,0,307,310,1,0,0,0,308,306,1,0,0,0,308,309,1,0,0,0,309,
	311,1,0,0,0,310,308,1,0,0,0,311,313,5,39,0,0,312,292,1,0,0,0,312,302,1,
	0,0,0,313,98,1,0,0,0,314,315,7,5,0,0,315,100,1,0,0,0,316,318,7,6,0,0,317,
	316,1,0,0,0,318,319,1,0,0,0,319,317,1,0,0,0,319,320,1,0,0,0,320,321,1,0,
	0,0,321,322,6,50,0,0,322,102,1,0,0,0,323,324,5,47,0,0,324,325,5,47,0,0,
	325,329,1,0,0,0,326,328,8,7,0,0,327,326,1,0,0,0,328,331,1,0,0,0,329,327,
	1,0,0,0,329,330,1,0,0,0,330,332,1,0,0,0,331,329,1,0,0,0,332,333,6,51,0,
	0,333,104,1,0,0,0,334,335,5,47,0,0,335,336,5,42,0,0,336,340,1,0,0,0,337,
	339,9,0,0,0,338,337,1,0,0,0,339,342,1,0,0,0,340,341,1,0,0,0,340,338,1,0,
	0,0,341,343,1,0,0,0,342,340,1,0,0,0,343,344,5,42,0,0,344,345,5,47,0,0,345,
	346,1,0,0,0,346,347,6,52,0,0,347,106,1,0,0,0,13,0,276,282,288,290,296,298,
	306,308,312,319,329,340,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LuminaLexer.__ATN) {
			LuminaLexer.__ATN = new ATNDeserializer().deserialize(LuminaLexer._serializedATN);
		}

		return LuminaLexer.__ATN;
	}


	static DecisionsToDFA = LuminaLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}