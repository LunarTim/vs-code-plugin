// extension/src/extension.ts
import * as vscode from 'vscode';
import { compile } from '../../compiler/src/index';

let diagnosticCollection: vscode.DiagnosticCollection;

export function activate(context: vscode.ExtensionContext) {
    // Create diagnostic collection
    diagnosticCollection = vscode.languages.createDiagnosticCollection('lumina');
    context.subscriptions.push(diagnosticCollection);

    // Register document events
    context.subscriptions.push(
        vscode.workspace.onDidChangeTextDocument(event => updateDiagnostics(event.document)),
        vscode.workspace.onDidOpenTextDocument(document => updateDiagnostics(document))
    );

    // Register completion provider
    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider('lumina', {
            provideCompletionItems(document: vscode.TextDocument, position: vscode.Position) {
                return getCompletionItems(document, position);
            }
        })
    );
}

function updateDiagnostics(document: vscode.TextDocument) {
    const text = document.getText();
    const result = compile(text);

    const diagnostics = result.diagnostics.map(d => {
        const diagnostic = new vscode.Diagnostic(
            new vscode.Range(0, 0, 0, 0), // You'll need proper position tracking
            d.message,
            d.severity === 'error' 
                ? vscode.DiagnosticSeverity.Error 
                : vscode.DiagnosticSeverity.Warning
        );
        return diagnostic;
    });

    diagnosticCollection.set(document.uri, diagnostics);
}

function getCompletionItems(document: vscode.TextDocument, position: vscode.Position): vscode.CompletionItem[] {
    const text = document.getText();
    const result = compile(text);

    return result.completions.map(c => {
        const item = new vscode.CompletionItem(c.label);
        item.kind = getCompletionKind(c.kind);
        return item;
    });
}