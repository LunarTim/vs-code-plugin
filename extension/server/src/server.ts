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
	type DocumentDiagnosticReport,
	InsertTextFormat
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

/**
 * Validate a text document
 * @param textDocument - The text document to validate
 * @returns The diagnostics
 */
async function validateTextDocument(textDocument: TextDocument): Promise<Diagnostic[]> {
	try {
		const text = textDocument.getText();
		console.log('Validating document:', {
			uri: textDocument.uri,
			version: textDocument.version,
			length: text.length
		});

		const compilerResult = compiler.compile(text);
		console.log('Compiler result:', {
			diagnosticsCount: compilerResult.diagnostics.length,
			diagnostics: compilerResult.diagnostics
		});

		return compilerResult.diagnostics.map(diagnostic => {
			// Convert 1-based line numbers to 0-based for VSCode
			const line = Math.max(0, diagnostic.line - 1);
			let column = diagnostic.column;

			// Get the line text to determine the range
			const lines = text.split('\n');
			const lineText = lines[line] || '';

			// Calculate the range based on the message type
			let endCharacter = column;

			if (diagnostic.message.includes('is declared but never used')) {
				// For unused variable warnings, highlight the variable name
				const match = diagnostic.message.match(/Variable '([^']+)'/);
				if (match) {
					const variableName = match[1];
					const variableStart = lineText.indexOf(variableName);
					if (variableStart !== -1) {
						column = variableStart;
						endCharacter = variableStart + variableName.length;
					}
				}
			} else if (diagnostic.message.includes('is not assignable to type')) {
				// For type mismatch errors, highlight the value
				const equalsIndex = lineText.indexOf('=');
				if (equalsIndex !== -1) {
					// Find the value after the equals sign
					const afterEquals = lineText.slice(equalsIndex + 1).trim();
					const valueMatch = afterEquals.match(/^([^;]+)/);
					if (valueMatch) {
						const value = valueMatch[1].trim();
						column = equalsIndex + 1 + lineText.slice(equalsIndex + 1).indexOf(value);
						endCharacter = column + value.length;
					}
				}
			} else if (diagnostic.message.includes('Expected')) {
				// For syntax errors like missing semicolons, highlight the current position
				endCharacter = column + 1;
			} else {
				// For other diagnostics, try to determine the appropriate range
				const tokenMatch = lineText.slice(column).match(/[a-zA-Z0-9_]+|[^a-zA-Z0-9_\s]+/);
				if (tokenMatch) {
					endCharacter = column + tokenMatch[0].length;
				} else {
					endCharacter = column + 1;
				}
			}

			console.log('Creating diagnostic:', {
				message: diagnostic.message,
				line,
				column,
				endCharacter,
				severity: diagnostic.severity,
				lineText,
				range: {
					start: { line, character: column },
					end: { line, character: endCharacter }
				}
			});

			return {
				severity: diagnostic.severity as DiagnosticSeverity,
				range: {
					start: { line, character: column },
					end: { line, character: endCharacter }
				},
				message: diagnostic.message,
				source: 'lumina'
			};
		});
	} catch (error) {
		console.error('Validation error:', error);
		return [{
			severity: DiagnosticSeverity.Error,
			range: {
				start: { line: 0, character: 0 },
				end: { line: 0, character: 1 }
			},
			message: error instanceof Error ? error.message : 'An error occurred during validation',
			source: 'lumina'
		}];
	}
}



// Handle code completion requests
connection.onCompletion(
	async (textDocumentPosition: TextDocumentPositionParams): Promise<CompletionItem[]> => {
		const document = documents.get(textDocumentPosition.textDocument.uri);
		if (!document) {
			return [];
		}

		try {
			return compiler.getCompletionItems(document.getText(), {
				line: textDocumentPosition.position.line,
				character: textDocumentPosition.position.character
			});
		} catch (error) {
			console.error('Error getting completions:', error);
			return [];
		}
	}
);

// Simplify completion resolve since details are now provided by compiler
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
