const vscode = require("vscode")
const cmd = require("node-cmd")

exports.activate = context => {
    context.subscriptions.push(
        vscode.commands.registerCommand("touchbar-command.click", () => {
            cmd.run(vscode.workspace.getConfiguration().get("touchbar-command.command"))
        })
    )
}