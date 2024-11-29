import { describe, it, expect } from 'vitest';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { Position } from 'vscode-languageserver';
import { getCompletions } from '../src/completions';

describe('Completions', () => {
    it('should provide basic keyword completions', () => {
        const document = TextDocument.create('file:///test.lumina', 'lumina', 1, '');
        const position = Position.create(0, 0);

        const completions = getCompletions({
            document,
            position,
            variables: new Map(),
            functions: new Map()
        });

        expect(completions).toContainEqual(
            expect.objectContaining({ label: 'let' })
        );
        expect(completions).toContainEqual(
            expect.objectContaining({ label: 'const' })
        );
    });
});
