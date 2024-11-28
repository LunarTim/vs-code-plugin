import { CompletionItem, CompletionItemKind } from 'vscode-languageserver';

export function getCompletions(diagnostics: any[]): CompletionItem[] {
    // Move completion logic here
    // Convert to return CompletionItem[] directly
    return getBaseCompletions();
}

function getBaseCompletions(): CompletionItem[] {
    return [
        { label: 'let', kind: CompletionItemKind.Keyword },
        { label: 'const', kind: CompletionItemKind.Keyword },
        { label: 'var', kind: CompletionItemKind.Keyword },
        { label: 'if', kind: CompletionItemKind.Keyword },
        { label: 'else', kind: CompletionItemKind.Keyword },
        { label: 'while', kind: CompletionItemKind.Keyword },
        { label: 'for', kind: CompletionItemKind.Keyword },
        { label: 'function', kind: CompletionItemKind.Keyword },
        { label: 'return', kind: CompletionItemKind.Keyword },
        { label: 'true', kind: CompletionItemKind.Keyword },
        { label: 'false', kind: CompletionItemKind.Keyword },
        { label: 'null', kind: CompletionItemKind.Keyword },
        { label: 'undefined', kind: CompletionItemKind.Keyword },
    ];
} 