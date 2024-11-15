"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
class Parser {
    constructor(tokens) {
        this.tokens = tokens;
        this.position = 0;
    }
    parse() {
        let statements = [];
        while (this.position < this.tokens.length) {
            statements.push(this.parseStatement());
        }
        return { type: 'Program', body: statements };
    }
    parseStatement() {
        var _a, _b;
        const token = this.tokens[this.position];
        if (token.type === 'IDENTIFIER' && ((_a = this.tokens[this.position + 1]) === null || _a === void 0 ? void 0 : _a.value) === '=') {
            return this.parseVariableDeclaration();
        }
        else if (token.type === 'IDENTIFIER' && ((_b = this.tokens[this.position + 1]) === null || _b === void 0 ? void 0 : _b.value) === '(') {
            return this.parseFunctionCall();
        }
        else {
            throw new Error(`Unexpected token: ${token.value}`);
        }
    }
    parseVariableDeclaration() {
        const identifier = this.tokens[this.position];
        this.position += 2; // Skip identifier and '='
        const value = this.parseExpression();
        this.position++; // Skip ';'
        return { type: 'VariableDeclaration', identifier, value };
    }
    parseFunctionCall() {
        var _a, _b;
        const identifier = this.tokens[this.position];
        this.position += 2; // Skip identifier and '('
        const args = [];
        while (((_a = this.tokens[this.position]) === null || _a === void 0 ? void 0 : _a.value) !== ')') {
            args.push(this.parseExpression());
            if (((_b = this.tokens[this.position]) === null || _b === void 0 ? void 0 : _b.value) === ',') {
                this.position++;
            }
        }
        this.position += 2; // Skip ')' and ';'
        return { type: 'FunctionCall', identifier, arguments: args };
    }
    parseExpression() {
        const token = this.tokens[this.position];
        if (token.type === 'NUMBER') {
            this.position++;
            return { type: 'Literal', value: token.value };
        }
        else if (token.type === 'IDENTIFIER') {
            this.position++;
            return { type: 'Identifier', name: token.value };
        }
        else {
            throw new Error(`Unexpected token: ${token.value}`);
        }
    }
}
exports.Parser = Parser;
