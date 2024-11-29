import { describe, it, expect } from 'vitest';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { convertDiagnostics } from '../src/diagnostics';

describe('Diagnostics', () => {
    it('should convert compiler diagnostics to LSP diagnostics', () => {
        const document = TextDocument.create('file:///test.lum', 'lumina', 1, 'let x = ;');
        const compilerDiagnostics = [{
            severity: 'error',
            range: { start: 8, end: 9 },
            message: 'Expected expression'
        }];

        const diagnostics = convertDiagnostics(document, compilerDiagnostics);
        expect(diagnostics).toHaveLength(1);
        expect(diagnostics[0].severity).toBe(1); // DiagnosticSeverity.Error
        expect(diagnostics[0].message).toBe('Expected expression');
    });
});
