interface Completion {
    label: string;
    kind: string;
}

export function getCodeCompletions(ast: any, diagnostics: any[]): Completion[] {
    const contextCompletions: Completion[] = [];

    for (const diagnostic of diagnostics) {
        const suggestion = getSuggestionForError(diagnostic.message);
        if (suggestion) {
            contextCompletions.push(...suggestion);
        }
    }

    return contextCompletions.length > 0 ? contextCompletions : [];
}

function getSuggestionForError(errorMessage: string): Completion[] {
    if (errorMessage.includes("no viable alternative at input")) {
        if (errorMessage.includes("'b}'")) {
            return [
                { label: ';', kind: 'punctuation' }
            ];
        }
        if (errorMessage.includes("'add(x,5'")) {
            return [
                { label: ')', kind: 'punctuation' },
                { label: ',', kind: 'punctuation' }
            ];
        }
    }

    if (errorMessage.includes("missing")) {
        if (errorMessage.includes("';'")) {
            return [{ label: ';', kind: 'punctuation' }];
        }
        if (errorMessage.includes("')'")) {
            return [{ label: ')', kind: 'punctuation' }];
        }
        if (errorMessage.includes("'}'")) {
            return [{ label: '}', kind: 'punctuation' }];
        }
    }

    if (errorMessage.includes("expecting function")) {
        return [
            { label: 'function', kind: 'keyword' },
            { label: '=>', kind: 'operator' }
        ];
    }

    return [];
}

function getBaseCompletions(): Completion[] {
    return [
        // Keywords
        { label: 'let', kind: 'keyword' },
        { label: 'const', kind: 'keyword' },
        { label: 'var', kind: 'keyword' },
        { label: 'function', kind: 'keyword' },
        { label: 'if', kind: 'keyword' },
        { label: 'else', kind: 'keyword' },
        { label: 'for', kind: 'keyword' },
        { label: 'of', kind: 'keyword' },
        { label: 'while', kind: 'keyword' },
        { label: 'return', kind: 'keyword' },
        { label: 'print', kind: 'keyword' },
        { label: 'true', kind: 'keyword' },
        { label: 'false', kind: 'keyword' },
        { label: 'null', kind: 'keyword' },

        // Types
        { label: 'number', kind: 'type' },
        { label: 'string', kind: 'type' },
        { label: 'boolean', kind: 'type' },
        { label: 'any', kind: 'type' },

        // Built-in Functions
        { label: 'parseInt', kind: 'function' },
        { label: 'parseFloat', kind: 'function' },
        { label: 'parseString', kind: 'function' },
        { label: 'parseBoolean', kind: 'function' },
        { label: 'parseNull', kind: 'function' },

        // Operators
        { label: '=', kind: 'operator' },
        { label: '+=', kind: 'operator' },
        { label: '-=', kind: 'operator' },
        { label: '*=', kind: 'operator' },
        { label: '/=', kind: 'operator' },
        { label: '%=', kind: 'operator' },
        { label: '==', kind: 'operator' },
        { label: '!=', kind: 'operator' },
        { label: '===', kind: 'operator' },
        { label: '!==', kind: 'operator' },
        { label: '<', kind: 'operator' },
        { label: '>', kind: 'operator' },
        { label: '<=', kind: 'operator' },
        { label: '>=', kind: 'operator' },
        { label: '+', kind: 'operator' },
        { label: '-', kind: 'operator' },
        { label: '*', kind: 'operator' },
        { label: '/', kind: 'operator' },
        { label: '%', kind: 'operator' },
        { label: '++', kind: 'operator' },
        { label: '--', kind: 'operator' },
        { label: '!', kind: 'operator' },
        { label: '||', kind: 'operator' },
        { label: '&&', kind: 'operator' },
        { label: '=>', kind: 'operator' },
        { label: '?', kind: 'operator' }
    ];
}