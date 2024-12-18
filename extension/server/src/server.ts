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

async function validateTextDocument(textDocument: TextDocument): Promise<Diagnostic[]> {
	try {
		const text = textDocument.getText();
		const compilerResult = compiler.compile(text);
		
		return compilerResult.diagnostics.map(diagnostic => {
			// Convert 1-based line numbers to 0-based for VSCode
			const line = Math.max(0, diagnostic.line - 1);
			let column = diagnostic.column;
			
			// Get the line text to determine the range
			const lines = text.split('\n');
			const lineText = lines[line] || '';
			
			// Calculate the range based on the message type
			let endCharacter = column + 1;
			if (diagnostic.message.includes('is declared but never used')) {
				// Find the identifier in the warning message
				const match = diagnostic.message.match(/Variable '([^']+)'/);
				if (match) {
					endCharacter = column + match[1].length;
				}
			} else if (diagnostic.message.includes('is not assignable to type')) {
				// For type errors, highlight the value after the equals sign
				const equalsIndex = lineText.indexOf('=', column);
				if (equalsIndex !== -1) {
					const valueStart = equalsIndex + 1;
					const valueMatch = lineText.slice(valueStart).match(/\s*([^;]+)/);
					if (valueMatch) {
						column = valueStart + valueMatch[0].indexOf(valueMatch[1]);
						endCharacter = column + valueMatch[1].length;
					}
				}
			}

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

connection.onDidChangeWatchedFiles(_change => {
	// Monitored files have change in VSCode
	connection.console.log('We received a file change event');
});

// Define our language keywords and templates
const keywords = [
	'let',
	'function',
	'if',
	'else',
	'for',
	'return',
	'number',
	'string',
	'boolean',
	'void',
	'console',
	'log'
];

const liveTemplates = new Map<string, { snippet: string, description: string }>([
	['log', { 
		snippet: 'console.log($1);',
		description: 'Console log statement'
	}],
	['fi', { 
		snippet: 'if ($1) {\n\t$2\n}',
		description: 'If statement'
	}],
	['elfi', { 
		snippet: 'if ($1) {\n\t$2\n} else {\n\t$3\n}',
		description: 'Else statement'
	}],
	['fori', { 
		snippet: 'for (let ${1:i}: number = 0; ${1:i} < ${2:length}; ${1:i}++) {\n\t$3\n}',
		description: 'For loop'
	}],
	['fn', { 
		snippet: 'function ${1:name}(${2:params}): ${3:type} {\n\t$4\n}',
		description: 'Function declaration'
	}]
]);

// Store document symbols (variables and functions)
const documentSymbols = new Map<string, Map<string, { kind: CompletionItemKind; type?: string }>>();

// Handle code completion requests
connection.onCompletion(
	async (textDocumentPosition: TextDocumentPositionParams): Promise<CompletionItem[]> => {
		const document = documents.get(textDocumentPosition.textDocument.uri);
		if (!document) {
			return [];
		}

		const text = document.getText();
		const position = textDocumentPosition.position;
		const line = text.split('\n')[position.line];
		const linePrefix = line.slice(0, position.character);

		const completions: CompletionItem[] = [];

		// Add live template completions
		liveTemplates.forEach((template, trigger) => {
			completions.push({
				label: trigger,
				kind: CompletionItemKind.Snippet,
				detail: template.description,
				insertText: template.snippet,
				insertTextFormat: InsertTextFormat.Snippet,
				data: { type: 'template' }
			});
		});

		// Add keyword completions
		keywords.forEach(keyword => {
			completions.push({
				label: keyword,
				kind: CompletionItemKind.Keyword,
				data: { type: 'keyword' }
			});
		});

		// Add variable and function completions from the document
		const docSymbols = documentSymbols.get(document.uri);
		if (docSymbols) {
			docSymbols.forEach((info, name) => {
				const isFunction = info.kind === CompletionItemKind.Function;
				completions.push({
					label: name,
					kind: info.kind,
					detail: info.type ? `(${info.type})` : undefined,
					insertText: isFunction ? `${name}()` : name,
					data: { type: 'symbol', symbolType: info.type, kind: info.kind }
				});
			});
		}

		return completions;
	}
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data?.type === 'keyword') {
			item.detail = 'Keyword';
			item.documentation = 'Language keyword';
		} else if (item.data?.type === 'symbol') {
			item.documentation = `Symbol of type: ${item.data.symbolType}`;
		}
		return item;
	}
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
