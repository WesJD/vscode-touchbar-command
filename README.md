# vscode-touchbar-command
Simple Visual Studio Code extension to allow for running a designated command when clicking a button on the macOS touchbar.

## Configuration
In your `settings.json`, put:
```json
"touchbar-command.command": "command"
```

## Building
You are able to grab a default build [here](https://github.com/WesJD/vscode-touchbar-command/releases), but beware that the touchbar button will have the text of `Execute`. Install it with step #3 below.

1. Make sure to have `vsce` installed: `npm install -g vsce`
2. Run `vsce package --baseContentUrl`
3. Run `code touchbar-command-0.0.1.vsix` (or with the file name that was just created)

## Changing the button name
Unfortunately, from what I have found you are unable to have the user define the a command's title name. Therefore, to change the
buttom name, you will need to edit the command `touchbar-command.click` to have the `title` property of your choice.

## License
Licensed under the [Mozilla Public License 2.0](LICENSE).