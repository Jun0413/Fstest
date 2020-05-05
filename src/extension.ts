// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "fstest" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('fstest.run', () => {
		// The code you place here will be executed every time your command is executed

		let root = vscode.workspace.rootPath;
		if (root) {
			let from = path.join(root, '.gitignore');
			let to   = path.join(root, '.gitignore.duplicate');
			fs.readFile(from, (err, d) => {
				if (err) { throw err; }
				console.log(d);
				fs.writeFileSync(to, d);
			});
		} else {
			console.log('Root path is undefined.');
		}

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from fstest!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
