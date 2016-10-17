import { ExtensionContext, commands, window } from 'vscode';
import { AddFiles } from './add-files';
import { AddFilesExtended } from './add-files-extended';

export function activate(context: ExtensionContext) {
  console.log('Congratulations, your extension is now active!');

  var addAngularNativeFiles = commands.registerCommand('extension.addAngularNativeFiles', (args) => {
    const addFiles: AddFiles = new AddFiles();
    addFiles.showFileNameDialog(args)
      .then(addFiles.createFolder)
      .then(addFiles.createFiles)
      .then(addFiles.openFileInEditor)
      .catch((err) => {
        if (err) {
          window.showErrorMessage(err);
        }
      });
  });

  var addAngularNativeFilesExtended = commands.registerCommand('extension.addAngularNativeFilesExtended', (args) => {
    const addFilesExtended: AddFilesExtended = new AddFilesExtended();
    addFilesExtended.showFileNameDialog(args)
      .then(addFilesExtended.createFolder)
      .then(addFilesExtended.createFiles)
      .then(addFilesExtended.openFileInEditor)
      .catch((err) => {
        if (err) {
          window.showErrorMessage(err);
        }
      });
  });

  context.subscriptions.push(addAngularNativeFiles);
  context.subscriptions.push(addAngularNativeFilesExtended);
}