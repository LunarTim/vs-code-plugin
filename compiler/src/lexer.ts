export interface Token {
    type: string;
    value: string;
}

export class Lexer{
    private input: string;
    private position: number;
    private tokens: Token[];

    constructor(input: string){
        this.input = input;
        this.position = 0;
        this.tokens = [];
    }

    private readIdentifier(): Token {
        let start = this.position;
        while (/[a-zA-Z]/.test(this.input[this.position])) {
            this.position++;
        }
        return { type: 'IDENTIFIER', value: this.input.slice(start, this.position) };
    }

    private readNumber(): Token {
        let start = this.position;
        while (/\d/.test(this.input[this.position])) {
            this.position++;
        }
        return { type: 'NUMBER', value: this.input.slice(start, this.position) };
    }

    tokenize(){
        while (this.position < this.input.length){
            const char = this.input[this.position];
            if(/\s/.test(char)){
                this.position++;
            }else if (/[a-zA-Z]/.test(char)) {
                this.tokens.push(this.readIdentifier());
            } else if (/\d/.test(char)) {
                this.tokens.push(this.readNumber());
            } else {
                this.tokens.push({ type: 'SYMBOL', value: char });
                this.position++;
        }
        return this.tokens;
        }
    }
}