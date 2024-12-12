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

import { compile } from 'lumina-compiler';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents = new TextDocuments(TextDocument);

let hasConfigurationCapability = false;
let hasWorkspaceFolderCapability = false;
let hasDiagnosticRelatedInformationCapability = false;

function log(message: string) {
	connection.console.log(message);
}

// Initialize first, then start logging
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
				resolveProvider: true
			}
		},
		diagnosticProvider: {
			interFileDependencies: false,
			workspaceDiagnostics: false
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
	log('Server initialized');
	if (hasConfigurationCapability) {
		// Register for all configuration changes.
		connection.client.register(DidChangeConfigurationNotification.type, undefined);
	}
	if (hasWorkspaceFolderCapability) {
		connection.workspace.onDidChangeWorkspaceFolders(_event => {
			log('Workspace folder change event received.');
		});
	}
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	log('Document changed event received');
	log(`Document URI: ${change.document.uri}`);
	validateTextDocument(change.document);
});

async function validateTextDocument(textDocument: TextDocument): Promise<Diagnostic[]> {
	try {
		log('Starting document validation');
		
		// Get the text from the document
		const text = textDocument.getText();
		
		// Skip empty files
		if (!text.trim()) {
			log('Empty document, skipping validation');
			return [];
		}

		log(`Validating document: ${textDocument.uri}`);

		// Compile the text using the Lumina compiler
		let result;
		try {
			log('Attempting to compile code');
			result = compile(text);
			log(`Compilation result: ${JSON.stringify(result)}`);

			// Convert compiler diagnostics to LSP diagnostics
			const diagnostics = result.diagnostics.map(diagnostic => ({
				severity: diagnostic.severity === 'error' 
					? DiagnosticSeverity.Error 
					: DiagnosticSeverity.Warning,
				range: {
					start: { line: diagnostic.line || 0, character: diagnostic.character || 0 },
					end: { line: diagnostic.line || 0, character: (diagnostic.character || 0) + (diagnostic.length || 1) }
				},
				message: diagnostic.message,
				source: 'lumina'
			}));

			// Send the diagnostics to the client
			connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
			return diagnostics;

		} catch (compileError) {
			log(`Compilation error caught: ${compileError}`);
			const diagnostic: Diagnostic = {
					severity: DiagnosticSeverity.Error,
					range: {
						start: { line: 0, character: 0 },
						end: { line: 0, character: text.length }
					},
					message: `Syntax error: ${compileError}`,
					source: 'lumina'
			};
			connection.sendDiagnostics({ uri: textDocument.uri, diagnostics: [diagnostic] });
			return [diagnostic];
		}

	} catch (error) {
		const message = `Error in validateTextDocument: ${error}`;
		log(message);
		if (error instanceof Error) {
			log(`Stack trace: ${error.stack}`);
		}
		const diagnostic: Diagnostic = {
			severity: DiagnosticSeverity.Error,
			range: {
				start: { line: 0, character: 0 },
				end: { line: 0, character: 100 }
			},
			message: `Internal error: ${error}`,
			source: 'lumina'
		};
		connection.sendDiagnostics({ uri: textDocument.uri, diagnostics: [diagnostic] });
		return [diagnostic];
	}
}

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
