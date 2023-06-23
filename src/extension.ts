// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { readFile } from "node:fs/promises";
import { GraphQLExtensionDeclaration, loadConfig } from "graphql-config";
import { join } from "path";
import { CodeFileLoader } from '@graphql-tools/code-file-loader'

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

      const file = await readFile(join(rootDir, "src/queries/query.ts"), { encoding: "utf-8" });
      vscode.window.showInformationMessage(file);

      const InspectorExtension: GraphQLExtensionDeclaration = api => {
        // For schema
        api.loaders.schema.register(new CodeFileLoader())
        // For documents
        api.loaders.documents.register(new CodeFileLoader())
       
        return { name: 'languageService' }
      }

      const config = await loadConfig({ rootDir, extensions: [InspectorExtension] });

      vscode.window.showInformationMessage(JSON.stringify(config));

      const schema = await config?.getDefault().getSchema('string');
      if (schema) {
        vscode.window.showInformationMessage(schema);
      }

      const documents = await config?.getDefault().getDocuments();
      vscode.window.showInformationMessage(JSON.stringify(documents));
  
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() { }

