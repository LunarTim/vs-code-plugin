/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { workspace, ExtensionContext } from 'vscode';

import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	console.log('Activating Lumina Language Client');

	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);

	console.log(`Server module path: ${serverModule}`);

	// If the extension is launched in debug mode then the debug server options are used
	// Otherwise the run options are used
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
		}
	};

	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		// Register the server for Lumina documents
		documentSelector: [{ scheme: 'file', language: 'lumina' }],
		synchronize: {
			// Notify the server about file changes to Lumina files in the workspace
			fileEvents: workspace.createFileSystemWatcher('**/*.{lum,lumina}')
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'luminaLanguageServer',
		'Lumina Language Server',
		serverOptions,
		clientOptions
	);

	// Start the client. This will also launch the server
	client.start().then(() => {
		console.log('Lumina Language Client started successfully');
	}).catch(error => {
		console.error('Failed to start Lumina Language Client:', error);
	});
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
