"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lexer = void 0;
class Lexer {
    constructor(input) {
        this.input = input;
        this.position = 0;
        this.tokens = [];
    }
    readIdentifier() {
        let start = this.position;
        while (/[a-zA-Z]/.test(this.input[this.position])) {
            this.position++;
        }
        return { type: 'IDENTIFIER', value: this.input.slice(start, this.position) };
    }
    readNumber() {
        let start = this.position;
        while (/\d/.test(this.input[this.position])) {
            this.position++;
        }
        return { type: 'NUMBER', value: this.input.slice(start, this.position) };
    }
    tokenize() {
        while (this.position < this.input.length) {
            const char = this.input[this.position];
            if (/\s/.test(char)) {
                this.position++;
            }
            else if (/[a-zA-Z]/.test(char)) {
                this.tokens.push(this.readIdentifier());
            }
            else if (/\d/.test(char)) {
                this.tokens.push(this.readNumber());
            }
            else {
                this.tokens.push({ type: 'SYMBOL', value: char });
                this.position++;
            }
            return this.tokens;
        }
    }
}
exports.Lexer = Lexer;
