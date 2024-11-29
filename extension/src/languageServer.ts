import {
    createConnection,
    TextDocuments,
    ProposedFeatures,
    InitializeParams,
    TextDocumentSyncKind,
    InitializeResult,
    CompletionItem,
    Diagnostic,
    DiagnosticSeverity
} from 'vscode-languageserver/node';

import { TextDocument } from 'vscode-languageserver-textdocument';
import { compile } from '../../compiler/dist/index.js';
import { getCompletions } from './completions';

const connection = createConnection(ProposedFeatures.all);
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize((params: InitializeParams) => {
    const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            completionProvider: {
                resolveProvider: true,
                triggerCharacters: ['.', '(']
            }
        }
    };
    return result;
});

documents.onDidChangeContent(change => {
    validateTextDocument(change.document);
});

connection.onCompletion(params => {
    const document = documents.get(params.textDocument.uri);
    if (!document) return [];

    const result = compile(document.getText());
    const context = {
        document,
        position: params.position,
        variables: new Map(), // You may need to populate this map with actual variables
        functions: new Map()  // You may need to populate this map with actual functions
    };
    return getCompletions(context);
});

async function validateTextDocument(textDocument: TextDocument): Promise<void> {
    const text = textDocument.getText();
    const result = compile(text);
    const diagnostics: Diagnostic[] = result.diagnostics.map(d => ({
        severity: d.severity === 'error' ? DiagnosticSeverity.Error : DiagnosticSeverity.Warning,
        range: {
            start: textDocument.positionAt(d.range.start),
            end: textDocument.positionAt(d.range.end)
        },
        message: d.message,
        source: 'lumina'
    }));

    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });

    connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
}

documents.listen(connection);
connection.listen();