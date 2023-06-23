// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { readFile } from "node:fs/promises";
import { loadConfig } from "graphql-config";
import { join } from "path";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  console.log(
    'Congratulations, your extension "vscode-graphql-config-bug" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "graphqlconfig.helloWorld",
    async () => {

      const rootDir = vscode.workspace.workspaceFolders![0].uri.fsPath

      const file = await readFile(join(rootDir, "src/query.ts"), { encoding: "utf-8" });
      vscode.window.showInformationMessage(file);

      const config = await loadConfig({ rootDir });

      vscode.window.showInformationMessage(JSON.stringify(config));

      const schema = await config?.getDefault().getSchema('string');
      if (schema) {
        vscode.window.showInformationMessage(schema);
      }

      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World!");
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }

