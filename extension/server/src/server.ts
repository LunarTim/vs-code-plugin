/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	DiagnosticSeverity,
	ProposedFeatures,
	InitializeParams,
	DidChangeConfigurationNotification,
	CompletionItem,
	CompletionItemKind,
	TextDocumentPositionParams,
	TextDocumentSyncKind,
	InitializeResult,
	DocumentDiagnosticReportKind,
	type DocumentDiagnosticReport
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import { Compiler } from 'compiler';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

// Create an instance of our compiler
const compiler = new Compiler();

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;

	// Does the client support the `workspace/configuration` request?
	// If not, we fall back using global settings.
	hasConfigurationCapability = !!(
		capabilities.workspace && !!capabilities.workspace.configuration
	);
	hasWorkspaceFolderCapability = !!(
		capabilities.workspace && !!capabilities.workspace.workspaceFolders
	);
	hasDiagnosticRelatedInformationCapability = !!(
		capabilities.textDocument &&
		capabilities.textDocument.publishDiagnostics &&
		capabilities.textDocument.publishDiagnostics.relatedInformation
	);

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true,
				triggerCharacters: ['.', ':', ' '] // Added space as trigger for variable declarations
			},
			diagnosticProvider: {
				interFileDependencies: false,
				workspaceDiagnostics: false
			}
		}
	};
	if (hasWorkspaceFolderCapability) {
		result.capabilities.workspace = {
			workspaceFolders: {
				supported: true
			}
		};
	}
	return result;
});

connection.onInitialized(() => {
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			connection.console.log('Workspace folder change event received.');
		});
	}
});

// The example settings
interface ExampleSettings {
	maxNumberOfProblems: number;
}

// The global settings, used when the `workspace/configuration` request is not supported by the client.
// Please note that this is not the case when using this server with the client provided in this example
// but could happen with other clients.
const defaultSettings: ExampleSettings = { maxNumberOfProblems: 1000 };
let globalSettings: ExampleSettings = defaultSettings;

// Cache the settings of all open documents
const documentSettings = new Map<string, Thenable<ExampleSettings>>();

connection.onDidChangeConfiguration(change => {
	if (hasConfigurationCapability) {
		// Reset all cached document settings
		documentSettings.clear();
	} else {
		globalSettings = (
			(change.settings.languageServerExample || defaultSettings)
		);
	}
	// Refresh the diagnostics since the `maxNumberOfProblems` could have changed.
	// We could optimize things here and re-fetch the setting first can compare it
	// to the existing setting, but this is out of scope for this example.
	connection.languages.diagnostics.refresh();
});

function getDocumentSettings(resource: string): Thenable<ExampleSettings> {
	if (!hasConfigurationCapability) {
		return Promise.resolve(globalSettings);
	}
	let result = documentSettings.get(resource);
	if (!result) {
		result = connection.workspace.getConfiguration({
			scopeUri: resource,
			section: 'languageServerExample'
		});
		documentSettings.set(resource, result);
	}
	return result;
}

// Only keep settings for open documents
documents.onDidClose(e => {
	documentSettings.delete(e.document.uri);
});


connection.languages.diagnostics.on(async (params) => {
	const document = documents.get(params.textDocument.uri);
	if (document !== undefined) {
		return {
			kind: DocumentDiagnosticReportKind.Full,
			items: await validateTextDocument(document)
		} satisfies DocumentDiagnosticReport;
	} else {
		// We don't know the document. We can either try to read it from disk
		// or we don't report problems for it.
		return {
			kind: DocumentDiagnosticReportKind.Full,
			items: []
		} satisfies DocumentDiagnosticReport;
	}
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<Diagnostic[]> {
	const text = textDocument.getText();
	const compilerResult = compiler.compile(text);
	
	return compilerResult.diagnostics.map(diagnostic => {
		// Convert 1-based line numbers to 0-based for VSCode
		const line = diagnostic.line - 1;
		const column = diagnostic.column;
		
		// Get the line text to determine the range
		const lines = text.split('\n');
		const lineText = lines[line] || '';
		
		// Create a range that spans the appropriate portion of the line
		const range = {
			start: {
				line,
				character: column
			},
			end: {
				line,
				character: column + 1
			}
		};

		// For variable declarations, try to highlight the whole problematic part
		if (diagnostic.message.includes('must have an identifier')) {
			// Find the 'let' keyword and highlight it plus some space after it
			const letMatch = lineText.match(/\blet\b/);
			if (letMatch) {
				range.start.character = letMatch.index || 0;
				range.end.character = (letMatch.index || 0) + 4;
			}
		} else if (diagnostic.message.includes('should specify a type')) {
			// Find the identifier and highlight it
			const afterLet = lineText.substring(lineText.indexOf('let') + 3);
			const identifierMatch = afterLet.match(/\s+([a-zA-Z_][a-zA-Z0-9_]*)/);
			if (identifierMatch) {
				range.start.character = lineText.indexOf('let') + 3 + (identifierMatch.index || 0);
				range.end.character = range.start.character + identifierMatch[1].length;
			}
		} else if (diagnostic.message.includes('not assignable to type')) {
			// Find the expression after the equals sign
			const equalsIndex = lineText.indexOf('=');
			if (equalsIndex !== -1) {
				range.start.character = equalsIndex + 1;
				range.end.character = lineText.length;
			}
		}

		return {
			severity: diagnostic.severity as DiagnosticSeverity,
			range,
			message: diagnostic.message,
			source: 'lumina'
		};
	});
}

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received a file change event');
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
	(textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
		const document = documents.get(textDocumentPosition.textDocument.uri);
		if (!document) {
			return [];
		}

		const text = document.getText();
		const position = textDocumentPosition.position;
		const offset = document.offsetAt(position);

		// Get the current line up to the cursor
		const currentLine = text.split('\n')[position.line];
		const linePrefix = currentLine.slice(0, position.character);

		// Check if we're in a variable declaration
		if (linePrefix.trim().startsWith('let')) {
			// After 'let' keyword, suggest type annotations
			if (linePrefix.includes('let') && !linePrefix.includes(':')) {
				return [
					{
						label: ': number',
						kind: CompletionItemKind.Snippet,
						detail: 'Declare a number variable',
						insertText: ': number'
					},
					{
						label: ': string',
						kind: CompletionItemKind.Snippet,
						detail: 'Declare a string variable',
						insertText: ': string'
					},
					{
						label: ': boolean',
						kind: CompletionItemKind.Snippet,
						detail: 'Declare a boolean variable',
						insertText: ': boolean'
					}
				];
			}
		}

		// Default completions
		return [
			{
				label: 'let',
				kind: CompletionItemKind.Keyword,
				detail: 'Variable declaration',
				documentation: 'Declares a new variable'
			},
			{
				label: 'function',
				kind: CompletionItemKind.Keyword,
				detail: 'Function declaration',
				documentation: 'Declares a new function'
			},
			{
				label: 'if',
				kind: CompletionItemKind.Keyword,
				detail: 'If statement',
				documentation: 'Conditional execution'
			},
			{
				label: 'for',
				kind: CompletionItemKind.Keyword,
				detail: 'For loop',
				documentation: 'Loop construct'
			},
			{
				label: 'return',
				kind: CompletionItemKind.Keyword,
				detail: 'Return statement',
				documentation: 'Returns a value from a function'
			}
		];
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		return item;
	}
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
