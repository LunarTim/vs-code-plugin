import { describe, it, expect } from 'vitest';
import LuminaLexer from '../src/antlr/generated/LuminaLexer';
import LuminaParser from '../src/antlr/generated/LuminaParser';
import { CharStreams, CommonTokenStream }  from 'antlr4';


// describe('LuminaLexer', () => {
//     it('should tokenize numbers correctly', () => {
//         const input = '123 456'; 
//         const chars = new CharStream(input);
//         const lexer = new LuminaLexer(chars);
//         const tokenStream = new CommonTokenStream(lexer);
//         tokenStream.fill();
//         const tokens = tokenStream.tokens.map(token => ({
//             type: lexer.symbolicNames[token.type],
//             value: token.text
//         }));
//         expect(tokens).toEqual([
//             { type: 'NUMBER', value: '123' },
//             { type: 'NUMBER', value: '456' }
//         ]);
//     });

//     it('should tokenize symbols correctly', () => {
//         const input = '= + -';
//         const chars = new CharStream(input);
//         const lexer = new LuminaLexer(chars);
//         const tokenStream = new CommonTokenStream(lexer);
//         tokenStream.fill();
//         /*const tokens = tokenStream.getTokens().map(token => ({
//             type: lexer.symbolicNames[token.type],
//             value: token.text
//         }));*/
//         expect(tokenStream).toEqual([
//             { type: 'OPERATOR', value: '=' },
//             { type: 'OPERATOR', value: '+' },
//             { type: 'OPERATOR', value: '-' }
//         ]);
//     });

//     it('should tokenize a full statement correctly', () => {
//         const input = 'let a = 10;';
//         const chars = new CharStream(input);
//         const lexer = new LuminaLexer(chars);
//         const tokenStream = new CommonTokenStream(lexer);
//         tokenStream.fill();
//         /*const tokens = tokenStream.getTokens().map(token => ({
//             type: lexer.symbolicNames[token.type],
//             value: token.text
//         }));*/
//         expect(tokenStream).toEqual([
//             { type: 'LET', value: 'let' },
//             { type: 'IDENTIFIER', value: 'a' },
//             { type: 'OPERATOR', value: '=' },
//             { type: 'NUMBER', value: '10' },
//             { type: 'PUNCTUATION', value: ';' }
//         ]);
//     });

//     it('should ignore whitespace', () => {
//         const input = '   let   a   =   10   ;   ';
//         const chars = new CharStream(input);
//         const lexer = new LuminaLexer(chars);
//         const tokenStream = new CommonTokenStream(lexer);
//         tokenStream.fill();
//         /*const tokens = tokenStream.getTokens().map(token => ({
//             type: lexer.symbolicNames[token.type],
//             value: token.text
//         }));*/
//         expect(tokenStream).toEqual([
//             { type: 'LET', value: 'let' },
//             { type: 'IDENTIFIER', value: 'a' },
//             { type: 'OPERATOR', value: '=' },
//             { type: 'NUMBER', value: '10' },
//             { type: 'PUNCTUATION', value: ';' }
//         ]);
//     });
// });


// describe('tester', () => {
//     it('should give output', () => {
//         const input = 'let a = 10;';
//         const chars = new CharStream(input);
//         const lexer = new LuminaLexer(chars);
//         const tokenStream = new CommonTokenStream(lexer);
//         const parser = new LuminaParser(tokenStream);
//         const tree = parser.program
//         console.log("tree;")
//         console.log(tree.arguments)
//         expect(tree).toEqual([
//             { type: 'LET', value: 'let' },
//             { type: 'IDENTIFIER', value: 'a' },
//             { type: 'OPERATOR', value: '=' },
//             { type: 'NUMBER', value: '10' },
//             { type: 'PUNCTUATION', value: ';' }
//         ]);
//     });
// })

describe('LuminaLexer', () => {
    it('should tokenize numbers correctly', () => {
        const input = CharStreams.fromString('123 456');
        const lexer = new LuminaLexer(input);
        const tokenStream = new CommonTokenStream(lexer);
        tokenStream.fill(); // Fetch all tokens from the lexer
        const tokens = tokenStream.tokens.map(token => ({
            type: lexer.symbolicNames[token.type],
            value: token.text
        }));
        expect(tokens).toEqual([
            { type: 'NUMBER', value: '123' },
            { type: 'NUMBER', value: '456' },
            { type: undefined, value: '<EOF>' }
        ]);
    });

    // Other test cases...
});

describe('tester', () => {
    it('should give output', () => {
        const input = CharStreams.fromString('let a = 10;');
        const lexer = new LuminaLexer(input);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new LuminaParser(tokenStream);
        const tree = parser.program();
        expect(tree).toBeDefined();
    });

    it('should give output', () => {
        const input = CharStreams.fromString('function add(a, b) { return a + b; }');
        const lexer = new LuminaLexer(input);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new LuminaParser(tokenStream);
        const tree = parser.program();
        expect(tree).toBeDefined();
    });
});