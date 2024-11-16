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
            { type: 'SYMBOL', value: ';' }
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
            { type: 'SYMBOL', value: ';' }
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
            { type: 'SYMBOL', value: ';' }
        ]);
    })
});