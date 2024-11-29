import { describe, it, expect } from 'vitest';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { CompletionItem, CompletionItemKind, Position, DiagnosticSeverity } from 'vscode-languageserver';
import { getCompletions } from '../src/completions';
import { convertDiagnostics, categorizeErrors } from '../src/diagnostics';

describe('Extension Tests', () => {
    describe('Code Completion', () => {
        it('should provide basic keyword completions', async () => {
            const document = TextDocument.create('file:///test.lumina', 'lumina', 1, '');
            const position = Position.create(0, 0);

            const completions = await getCompletions({
                document,
                position,
                variables: new Map(),
                functions: new Map()
            });

            expect(completions.length).toBeGreaterThan(0);
            expect(completions.some(c => c.label === 'let')).toBe(true);
            expect(completions.some(c => c.label === 'function')).toBe(true);
        });

        it('should provide variable completions', async () => {
            const document = TextDocument.create('file:///test.lumina', 'lumina', 1, 'let x = 5;');
            const position = Position.create(0, 10);
            const variables = new Map([
                ['x', { type: 'number', documentation: 'Test variable' }]
            ]);

            const completions = await getCompletions({
                document,
                position,
                variables,
                functions: new Map()
            });

            const varCompletion = completions.find(c => c.label === 'x');
            expect(varCompletion).toBeDefined();
            expect(varCompletion?.kind).toBe(CompletionItemKind.Variable);
        });
    });

    describe('Diagnostics', () => {
        it('should convert compiler diagnostics to VS Code diagnostics', () => {
            const document = TextDocument.create('file:///test.lumina', 'lumina', 1, 'let x: number = "string";');
            const compilerDiagnostics = [{
                message: 'Type mismatch: expected number but got string',
                line: 0,
                character: 14,
                length: 8,
                severity: 'error' as const
            }];

            const diagnostics = convertDiagnostics(document, compilerDiagnostics);

            expect(diagnostics.length).toBe(1);
            expect(diagnostics[0].message).toBe(compilerDiagnostics[0].message);
        });

        it('should categorize errors correctly', () => {
            const diagnostics = [
                {
                    message: 'syntax error: unexpected token',
                    severity: DiagnosticSeverity.Error,
                    range: { start: { line: 0, character: 0 }, end: { line: 0, character: 1 } }
                },
                {
                    message: 'type mismatch: expected number',
                    severity: DiagnosticSeverity.Error,
                    range: { start: { line: 1, character: 0 }, end: { line: 1, character: 1 } }
                }
            ];

            const categories = categorizeErrors(diagnostics);

            expect(categories.syntaxErrors).toBe(1);
            expect(categories.typeErrors).toBe(1);
        });
    });
}); 