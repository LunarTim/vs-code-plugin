import { CompletionItem, CompletionItemKind, InsertTextFormat } from 'vscode-languageserver-types';

/**
 * Completion item kind
 */
export { CompletionItem, CompletionItemKind, InsertTextFormat };

/**
 * Diagnostic severity
 */
export enum DiagnosticSeverity {
    Error = 1,
    Warning = 2,
    Information = 3,
    Hint = 4
}

/**
 * Position
 */
export interface Position {
    line: number;
    character: number;
}

/**
 * Range
 */
export interface Range {
    start: Position;
    end: Position;
} 