import { describe, it, expect } from 'vitest';
import LuminaLexer from '../src/antlr/generated/LuminaLexer';
import LuminaParser, { ProgramContext } from '../src/antlr/generated/LuminaParser';
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
    it('should not give warning declaring variable', () => {
        const input = 'let a = 10;';
        const output = runLexer(input);
        expect(output).toBeDefined();
    });

    it('should not give warning declaring functiont', () => {
        const input = 'function add(a, b) { return a + b; }';
        const output = runLexer(input);
        expect(output).toBeDefined();
    });

    it('should not give warning declaring if statement', () => {
        const input = 'if (a > b) { return a; }';
        const output = runLexer(input);
        expect(output).toBeDefined();
    });

    it('should not give warning declaring while statement', () => {
        const input = 'while (a > b) { return a; }';
        const output = runLexer(input);
        expect(output).toBeDefined();
    });

    it('should not give warning declaring for statement', () => {
        const input = 'for (let i = 0; i < 10; i++) { return i; }';
        const output = runLexer(input);
        expect(output).toBeDefined();
    });

    it('should not give warning declaring return statement', () => {
        const input = 'return a;';
        const output = runLexer(input);
        expect(output).toBeDefined();
    });

    it('should not give warning declaring print statement', () => {
        const input = 'print(a);';
        const output = runLexer(input);
        expect(output).toBeDefined();
    });

    it('should not give warning declaring shorter if statement', () => {
        const input = 'if (missingIndex > 0) { return missingIndex; }';
        const output = runLexer(input);
        expect(output).toBeDefined();
    });

    it('should not give warning declaring if statement', () => {
        const input = 'if (missingIndex.length > 0) { return missingIndex; }';
        const output = runLexer(input);
        expect(output).toBeDefined();
    });

    it('should not give warning difficult query', () => {
        const input = `
function validateIndex(data: GeneralTableItem[]) {
    const missingIndex: number[] = [];
    const maxIndex = Number(document.getElementById("MaxIndex")!.getAttribute("data-index-max")!);

    for (let i = 1; i < maxIndex + 1; i++) {
        let found = false;
        for (const item of data) {
            if (item['index'] === i) {
                found = true;
                break;
            }
        }
        if (!found) {
            missingIndex.push(i);
        }
    }
    if (missingIndex.length > 0) {
        const indexAlert = document.getElementById("indexAlert");
        const wrapper = document.createElement('div');
        indexAlert!.append(wrapper);
    }
}`
        const output = runLexer(input);
        expect(output).toBeDefined();
    });

    it('should not give warning declaring function', () => {
        const input = `
        function createButtonCell(id: number, type: string, editLink: string = "") {
    const cell = document.createElement("td");
    cell.setAttribute("data-col-buttons", "true");
    const div = document.createElement("div");
    div.classList.add("d-flex", "justify-content-end", "gap-2");
    let button = document.createElement("button");
    button.classList.add("btn", "btn-danger", "rounded-2", "text-white");
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#deleteModal");
    button.setAttribute("data-bs-id", id.toString());
    button.setAttribute("data-bs-type", type);
    button.innerText = "Delete";
    let icon = document.createElement("i");
    icon.classList.add("bi", "bi-trash");
    button.append(icon);
    div.append(button);
    button = document.createElement("button");
    button.classList.add("btn", "btn-primary", "rounded-2", "text-white");
    button.setAttribute("data-bs-id", id.toString())
    button.innerText = "Edit";
    button.addEventListener("click", () => {window.location.href = editLink === "" ? true : false;});
    icon = document.createElement("i");
    icon.classList.add("bi", "bi-pencil");
    button.append(icon);
    div.append(button);
    cell.append(div)
    return cell;
}

        `;
        const output = runLexer(input);
        expect(output).toBeDefined();
    });
});



function runLexer(input: string): ProgramContext {
    const chars = CharStreams.fromString(input);
    const lexer = new LuminaLexer(chars);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new LuminaParser(tokenStream);
    const tree = parser.program();
    return tree;
}