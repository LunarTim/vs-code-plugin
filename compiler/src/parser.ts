import { Token } from './lexer';

interface ASTNode {
    type: string;
    [key: string]: any;
}

export class Parser {
    private tokens: Token[];
    private position: number;

    constructor(tokens: Token[]) {
        this.tokens = tokens;
        this.position = 0;
    }

    parse(): ASTNode {
        let statements: ASTNode[] = [];
        while (this.position < this.tokens.length) {
            statements.push(this.parseStatement());
        }
        return { type: 'Program', body: statements };
    }

    private parseStatement(): ASTNode {
        const token = this.tokens[this.position];
        if (token.type === 'IDENTIFIER' && this.tokens[this.position + 1]?.value === '=') {
            return this.parseVariableDeclaration();
        } else if (token.type === 'IDENTIFIER' && this.tokens[this.position + 1]?.value === '(') {
            return this.parseFunctionCall();
        } else {
            throw new Error(`Unexpected token: ${token.value}`);
        }
    }

    private parseVariableDeclaration(): ASTNode {
        const identifier = this.tokens[this.position];
        this.position += 2; // Skip identifier and '='
        const value = this.parseExpression();
        this.position++; // Skip ';'
        return { type: 'VariableDeclaration', identifier, value };
    }

    private parseFunctionCall(): ASTNode {
        const identifier = this.tokens[this.position];
        this.position += 2; // Skip identifier and '('
        const args: ASTNode[] = [];
        while (this.tokens[this.position]?.value !== ')') {
            args.push(this.parseExpression());
            if (this.tokens[this.position]?.value === ',') {
                this.position++;
            }
        }
        this.position += 2; // Skip ')' and ';'
        return { type: 'FunctionCall', identifier, arguments: args };
    }

    private parseExpression(): ASTNode {
        const token = this.tokens[this.position];
        if (token.type === 'NUMBER') {
            this.position++;
            return { type: 'Literal', value: token.value };
        } else if (token.type === 'IDENTIFIER') {
            this.position++;
            return { type: 'Identifier', name: token.value };
        } else if(token.type === "PUNCTUATION"){
            this.position++;
            return {type: "Punctuation", value: token.value};
        } else {
            throw new Error(`Unexpected token: ${token.value}`);
        }
    }
}