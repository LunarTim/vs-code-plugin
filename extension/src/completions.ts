import { CompletionItem, CompletionItemKind, Position, TextDocument } from 'vscode-languageserver';

interface CompletionContext {
    document: TextDocument;
    position: Position;
    variables: Map<string, { type: string; documentation?: string }>;
    functions: Map<string, { 
        params: { name: string; type: string }[];
        returnType: string;
        documentation?: string;
    }>;
}

export function getCompletions(context: CompletionContext): CompletionItem[] {
    const linePrefix = context.document.getText({
        start: { line: context.position.line, character: 0 },
        end: context.position
    });

    const completions: CompletionItem[] = [];

    // Add base language keywords
    completions.push(...getBaseCompletions());

    // Add declared variables
    context.variables.forEach((info, name) => {
        completions.push({
            label: name,
            kind: CompletionItemKind.Variable,
            detail: `(${info.type})`,
            documentation: info.documentation || `Variable of type ${info.type}`,
        });
    });

    // Add declared functions
    context.functions.forEach((info, name) => {
        const params = info.params.map(p => `${p.name}: ${p.type}`).join(', ');
        completions.push({
            label: name,
            kind: CompletionItemKind.Function,
            detail: `(${params}) => ${info.returnType}`,
            documentation: info.documentation || `Function returning ${info.returnType}`,
            insertText: `${name}($1)$0`,
            insertTextFormat: 2, // Snippet
        });
    });

    // Add type-specific completions
    if (linePrefix.trim().endsWith('.')) {
        const varName = linePrefix.trim().slice(0, -1);
        const varType = context.variables.get(varName)?.type;
        
        if (varType) {
            completions.push(...getTypeSpecificCompletions(varType));
        }
    }

    // Add contextual snippets
    if (linePrefix.trim() === '') {
        completions.push(...getCodeSnippets());
    }

    return completions;
}

function getBaseCompletions(): CompletionItem[] {
    const keywords = [
        { label: 'let', documentation: 'Declares a block-scoped variable' },
        { label: 'const', documentation: 'Declares a block-scoped constant' },
        { label: 'var', documentation: 'Declares a function-scoped variable' },
        { label: 'if', documentation: 'Executes code if a condition is true' },
        { label: 'else', documentation: 'Executes code if the previous condition is false' },
        { label: 'while', documentation: 'Creates a loop that executes while a condition is true' },
        { label: 'for', documentation: 'Creates a loop with a custom initialization, condition, and increment' },
        { label: 'function', documentation: 'Declares a new function' },
        { label: 'return', documentation: 'Returns a value from a function' },
        { label: 'true', documentation: 'Boolean true value' },
        { label: 'false', documentation: 'Boolean false value' },
        { label: 'null', documentation: 'Represents no value' },
        { label: 'undefined', documentation: 'Represents an undefined value' },
    ];

    return keywords.map(k => ({
        label: k.label,
        kind: CompletionItemKind.Keyword,
        documentation: k.documentation
    }));
}

function getTypeSpecificCompletions(type: string): CompletionItem[] {
    switch (type) {
        case 'string':
            return [
                {
                    label: 'length',
                    kind: CompletionItemKind.Property,
                    detail: 'number',
                    documentation: 'Returns the length of the string'
                },
                {
                    label: 'toUpperCase',
                    kind: CompletionItemKind.Method,
                    detail: '() => string',
                    documentation: 'Converts the string to uppercase',
                    insertText: 'toUpperCase()'
                },
                {
                    label: 'toLowerCase',
                    kind: CompletionItemKind.Method,
                    detail: '() => string',
                    documentation: 'Converts the string to lowercase',
                    insertText: 'toLowerCase()'
                }
            ];
        case 'number':
            return [
                {
                    label: 'toString',
                    kind: CompletionItemKind.Method,
                    detail: '() => string',
                    documentation: 'Converts the number to a string',
                    insertText: 'toString()'
                }
            ];
        case 'array':
            return [
                {
                    label: 'length',
                    kind: CompletionItemKind.Property,
                    detail: 'number',
                    documentation: 'Returns the length of the array'
                },
                {
                    label: 'push',
                    kind: CompletionItemKind.Method,
                    detail: '(item: T) => number',
                    documentation: 'Adds an item to the end of the array',
                    insertText: 'push($1)$0'
                },
                {
                    label: 'pop',
                    kind: CompletionItemKind.Method,
                    detail: '() => T',
                    documentation: 'Removes and returns the last item from the array',
                    insertText: 'pop()'
                }
            ];
        default:
            return [];
    }
}

function getCodeSnippets(): CompletionItem[] {
    return [
        {
            label: 'if',
            kind: CompletionItemKind.Snippet,
            detail: 'If statement',
            documentation: 'Creates an if statement',
            insertText: 'if (${1:condition}) {\n\t$0\n}',
            insertTextFormat: 2
        },
        {
            label: 'ifelse',
            kind: CompletionItemKind.Snippet,
            detail: 'If-else statement',
            documentation: 'Creates an if-else statement',
            insertText: 'if (${1:condition}) {\n\t$2\n} else {\n\t$0\n}',
            insertTextFormat: 2
        },
        {
            label: 'for',
            kind: CompletionItemKind.Snippet,
            detail: 'For loop',
            documentation: 'Creates a for loop',
            insertText: 'for (let ${1:i} = 0; ${1:i} < ${2:length}; ${1:i}++) {\n\t$0\n}',
            insertTextFormat: 2
        },
        {
            label: 'while',
            kind: CompletionItemKind.Snippet,
            detail: 'While loop',
            documentation: 'Creates a while loop',
            insertText: 'while (${1:condition}) {\n\t$0\n}',
            insertTextFormat: 2
        },
        {
            label: 'function',
            kind: CompletionItemKind.Snippet,
            detail: 'Function declaration',
            documentation: 'Creates a function declaration',
            insertText: 'function ${1:name}(${2:params}) {\n\t$0\n}',
            insertTextFormat: 2
        }
    ];
} 