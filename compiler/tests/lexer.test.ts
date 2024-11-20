import { describe, it, expect } from 'vitest';
import { Lexer } from '../src/lexer';

describe('Lexer', () => {
    it('should tokenize identifiers correctly', () => {
        const lexer = new Lexer('let variableName');
        const tokens = lexer.tokenize();
        expect(tokens).toEqual([
            { type: 'IDENTIFIER', value: 'let' },
            { type: 'IDENTIFIER', value: 'variableName' }
        ]);
    });

    it('should tokenize numbers correctly', () => {
        const lexer = new Lexer('123 456');
        const tokens = lexer.tokenize();
        expect(tokens).toEqual([
            { type: 'NUMBER', value: '123' },
            { type: 'NUMBER', value: '456' }
        ]);
    });

    it('should tokenize symbols correctly', () => {
        const lexer = new Lexer('= + -');
        const tokens = lexer.tokenize();
        expect(tokens).toEqual([
            { type: 'SYMBOL', value: '=' },
            { type: 'SYMBOL', value: '+' },
            { type: 'SYMBOL', value: '-' }
        ]);
    });

    it('should tokenize a full statement correctly', () => {
        const lexer = new Lexer('let a = 10;');
        const tokens = lexer.tokenize();
        expect(tokens).toEqual([
            { type: 'IDENTIFIER', value: 'let' },
            { type: 'IDENTIFIER', value: 'a' },
            { type: 'SYMBOL', value: '=' },
            { type: 'NUMBER', value: '10' },
            { type: 'PUNCTUATION', value: ';' }
        ]);
    });

    it('should ignore whitespace', () => {
        const lexer = new Lexer('   let   a   =   10   ;   ');
        const tokens = lexer.tokenize();
        expect(tokens).toEqual([
            { type: 'IDENTIFIER', value: 'let' },
            { type: 'IDENTIFIER', value: 'a' },
            { type: 'SYMBOL', value: '=' },
            { type: 'NUMBER', value: '10' },
            { type: 'PUNCTUATION', value: ';' }
        ]);
    });

    it('no whitespaces', () => {
        const lexer = new Lexer('let a=10;');
        const tokens = lexer.tokenize();
        expect(tokens).toEqual([
            { type: 'IDENTIFIER', value: 'let' },
            { type: 'IDENTIFIER', value: 'a' },
            { type: 'SYMBOL', value: '=' },
            { type: 'NUMBER', value: '10' },
            { type: 'PUNCTUATION', value: ';' }
        ]);
    });


    it('should throw an error for unexpected characters', () => {
        const lexer = new Lexer('let a = 10 @');
        expect(() => lexer.tokenize()).toThrow('Unexpected character: @');
    });

    it('should tokenize mixed content correctly', () => {
        const lexer = new Lexer('let x = 42 + y;');
        const tokens = lexer.tokenize();
        expect(tokens).toEqual([
            { type: 'IDENTIFIER', value: 'let' },
            { type: 'IDENTIFIER', value: 'x' },
            { type: 'SYMBOL', value: '=' },
            { type: 'NUMBER', value: '42' },
            { type: 'SYMBOL', value: '+' },
            { type: 'IDENTIFIER', value: 'y' },
            { type: 'PUNCTUATION', value: ';' }
        ]);
    });

    it('should tokenize complex expressions correctly', () => {
        const lexer = new Lexer('if (x > 10) { x = x + 1; }');
        const tokens = lexer.tokenize();
        expect(tokens).toEqual([
            { type: 'IDENTIFIER', value: 'if' },
            { type: 'PUNCTUATION', value: '(' },
            { type: 'IDENTIFIER', value: 'x' },
            { type: 'SYMBOL', value: '>' },
            { type: 'NUMBER', value: '10' },
            { type: 'PUNCTUATION', value: ')' },
            { type: 'PUNCTUATION', value: '{' },
            { type: 'IDENTIFIER', value: 'x' },
            { type: 'SYMBOL', value: '=' },
            { type: 'IDENTIFIER', value: 'x' },
            { type: 'SYMBOL', value: '+' },
            { type: 'NUMBER', value: '1' },
            { type: 'PUNCTUATION', value: ';' },
            { type: 'PUNCTUATION', value: '}' }
        ]);
    });

    it('should tokenize a complex function definition correctly', () => {
        const lexer = new Lexer('function add(a, b) { return a + b; }');
        const tokens = lexer.tokenize();
        expect(tokens).toEqual([
            { type: 'IDENTIFIER', value: 'function' },
            { type: 'IDENTIFIER', value: 'add' },
            { type: 'PUNCTUATION', value: '(' },
            { type: 'IDENTIFIER', value: 'a' },
            { type: 'SYMBOL', value: ',' },
            { type: 'IDENTIFIER', value: 'b' },
            { type: 'PUNCTUATION', value: ')' },
            { type: 'PUNCTUATION', value: '{' },
            { type: 'IDENTIFIER', value: 'return' },
            { type: 'IDENTIFIER', value: 'a' },
            { type: 'SYMBOL', value: '+' },
            { type: 'IDENTIFIER', value: 'b' },
            { type: 'PUNCTUATION', value: ';' },
            { type: 'PUNCTUATION', value: '}' }
        ]);
    });
});