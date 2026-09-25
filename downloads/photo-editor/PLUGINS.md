# Plugins

A plugin adds commands to **Window → Plugins…**. It is a folder whose name ends in `.oanaplugin`, placed in `~/Library/Application Support/Oanarina Photo Editor/Plugins/` (the **Show Plugins Folder** button opens it). **Install Plugin…** copies a folder there after checking it.

Plugins are declarative. A command is a script in the app's own script format (see [SCRIPTING.md](SCRIPTING.md)). Plugins cannot run code, read or write files, or use the network. Each step must fall under a capability that the manifest asks for; otherwise the command stops before changing anything.

## manifest.json

```json
{
  "api": 1,
  "id": "com.example.vintage",
  "name": "Vintage Looks",
  "version": "1.0",
  "capabilities": ["pixels", "layers"],
  "commands": [
    { "title": "Warm Fade", "script": "warm-fade.json" }
  ]
}
```

- `api` is the plugin API version. This app provides API **1**. Plugins asking for another version are listed with a message and can't run.
- `capabilities` limits what the scripts can do:

| Capability | Script steps it allows |
|---|---|
| `pixels` | `filter`, `invert`, `fill` |
| `canvas` | `rotateCanvas`, `flipCanvas`, `imageSize`, `flatten` |
| `selection` | `selectAll`, `deselect`, `invertSelection` |
| `layers` | `newLayer`, `duplicateLayer`, `layerOpacity`, `layerStyle` |

- `commands[].script` is a file inside the plugin folder, in the format `oanarina-photo-editor-script/1`.

Each step a plugin runs is an ordinary edit and can be undone one step at a time.
