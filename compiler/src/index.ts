import LuminaLexer from './antlr/generated/LuminaLexer';
import LuminaParser from './antlr/generated/LuminaParser';
import { analyze } from './semanticAnalyzer';
import { getDiagnostics } from './diagnostics';
import { getCodeCompletions } from './codeCompletion';
import { CharStreams, CommonTokenStream } from 'antlr4';

interface CustomSyntaxError {
    message: string;
    line: number;
    character: number;
    length: number;
    severity: 'error';
}

export function compile(source: string) {
    const chars = CharStreams.fromString(source);
    const lexer = new LuminaLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    const parser = new LuminaParser(tokens);

    // Collect syntax errors
    const syntaxErrors: CustomSyntaxError[] = [];
    lexer.removeErrorListeners();
    lexer.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, charPositionInLine, msg, e) => {
            syntaxErrors.push({
                message: msg,
                line,
                character: charPositionInLine,
                length: offendingSymbol ? (offendingSymbol as any).text.length : 1,
                severity: 'error'
            });
        }
    });

    parser.removeErrorListeners();
    parser.addErrorListener({
        syntaxError: (recognizer, offendingSymbol, line, charPositionInLine, msg, e) => {
            syntaxErrors.push({
                message: msg,
                line,
                character: charPositionInLine,
                length: offendingSymbol ? (offendingSymbol as any).text.length : 1,
                severity: 'error'
            });
        }
    });

    const ast = parser.program();
    const semanticErrors = analyze(ast);
    const diagnostics = getDiagnostics([...syntaxErrors, ...semanticErrors]);
    const completions = getCodeCompletions(ast);

    return { diagnostics, completions };
}