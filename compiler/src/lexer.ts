export interface Token {
    type: string;
    value: string;
}

export class Lexer {
    private input: string;
    private position: number;
    private tokens: Token[];

    constructor(input: string) {
        this.input = input;
        this.position = 0;
        this.tokens = [];
    }

    private readIdentifier(): Token {
        let start = this.position;
        if (/[a-zA-Z_]/.test(this.input[this.position])) {
            this.position++;
            while (this.position < this.input.length && /[a-zA-Z0-9_]/.test(this.input[this.position])) {
                this.position++;
            }
        }
        return { type: 'IDENTIFIER', value: this.input.slice(start, this.position) };
    }
    
    private readNumber(): Token {
        let start = this.position;
        while (this.position < this.input.length && /\d/.test(this.input[this.position])) {
            this.position++;
        }
        return { type: 'NUMBER', value: this.input.slice(start, this.position) };
    }
    
    private readSymbol(): Token {
        const symbol = this.input[this.position];
        this.position++;
        return { type: 'SYMBOL', value: symbol };
    }

    private readPunctuation(): Token {
        const punctuation = this.input[this.position];
        this.position++;
        return { type: 'PUNCTUATION', value: punctuation }
    }
    

    private skipWhitespace() {
        while (/\s/.test(this.input[this.position])) {
            this.position++;
        }
    }

    public tokenize(): Token[] {
        while (this.position < this.input.length) {
            this.skipWhitespace();
            if (this.position >= this.input.length) break;
    
            const char = this.input[this.position];
            if (/[a-zA-Z]/.test(char)) {
                this.tokens.push(this.readIdentifier());
            } else if (/\d/.test(char)) {
                this.tokens.push(this.readNumber());
            } else if (/[=+\->,]/.test(char)) {
                this.tokens.push(this.readSymbol());
            } else if(/[;(){}]/.test(char)) {
                this.tokens.push(this.readPunctuation());
            } else {
                throw new Error(`Unexpected character: ${char}`);
            }
        }
        return this.tokens;
    }    
}