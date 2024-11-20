import { describe, it, expect } from 'vitest';
import { Parser } from '../src/parser';
import { Token } from '../src/lexer';

describe('Parser', () => {
    describe('constructor', () => {
        it('should initialize with given tokens', () => {
            const tokens: Token[] = [
                { type: 'IDENTIFIER', value: 'x' },
                { type: 'OPERATOR', value: '=' },
                { type: 'NUMBER', value: '42' },
                { type: 'PUNCTUATION', value: ';' }
            ];
            const parser = new Parser(tokens);
            expect(parser['tokens']).toEqual(tokens);
            expect(parser['position']).toBe(0);
        });

        it('should initialize with an empty token array', () => {
            const tokens: Token[] = [];
            const parser = new Parser(tokens);
            expect(parser['tokens']).toEqual(tokens);
            expect(parser['position']).toBe(0);
        });
    });

    describe('parse', () => {
        it('should parse a variable declaration', () => {
            const tokens: Token[] = [
                { type: 'IDENTIFIER', value: 'x' },
                { type: 'OPERATOR', value: '=' },
                { type: 'NUMBER', value: '42' },
                { type: 'PUNCTUATION', value: ';' }
            ];
            const parser = new Parser(tokens);
            const ast = parser.parse();
            expect(ast).toEqual({
                type: 'Program',
                body: [
                    {
                        type: 'VariableDeclaration',
                        identifier: { type: 'IDENTIFIER', value: 'x' },
                        value: { type: 'Literal', value: '42' }
                    }
                ]
            });
        });

        it('should parse a function call', () => {
            const tokens: Token[] = [
                { type: 'IDENTIFIER', value: 'foo' },
                { type: 'PUNCTUATION', value: '(' },
                { type: 'NUMBER', value: '42' },
                { type: 'PUNCTUATION', value: ')' },
                { type: 'PUNCTUATION', value: ';' }
            ];
            const parser = new Parser(tokens);
            const ast = parser.parse();
            expect(ast).toEqual({
                type: 'Program',
                body: [
                    {
                        type: 'FunctionCall',
                        identifier: { type: 'IDENTIFIER', value: 'foo' },
                        arguments: [{ type: 'Literal', value: '42' }]
                    }
                ]
            });
        });

        it('should throw an error for unexpected token', () => {
            const tokens: Token[] = [
                { type: 'NUMBER', value: '42' }
            ];
            const parser = new Parser(tokens);
            expect(() => parser.parse()).toThrow('Unexpected token: 42');
        });
    });

    describe('parseExpression', () => {
        it('should parse a number literal', () => {
            const tokens: Token[] = [
                { type: 'NUMBER', value: '42' }
            ];
            const parser = new Parser(tokens);
            const expression = parser['parseExpression']();
            expect(expression).toEqual({ type: 'Literal', value: '42' });
        });

        it('should parse an identifier', () => {
            const tokens: Token[] = [
                { type: 'IDENTIFIER', value: 'x' }
            ];
            const parser = new Parser(tokens);
            const expression = parser['parseExpression']();
            expect(expression).toEqual({ type: 'Identifier', name: 'x' });
        });

        it('should throw an error for unexpected token', () => {
            const tokens: Token[] = [ 
                { type: 'PUNCTUATION', value: ';' }
            ];
            const parser = new Parser(tokens);
            const expression = parser['parseExpression']();
            expect(expression).toEqual({ type: 'Punctuation', value: ';' });
        });
    });
});