# Oanarina UI Tool MCP — standalone local server

For current 0.2.0-dev.3 development builds and version-two .oui projects. This download is separate from the public notarized v0.1.0 installer. The server writes version-two documents; compatibility with that older installer is not claimed.

Free MIT-licensed local MCP server. No account, API key or subscription is required by this server. AI hosts/models are separate products with their own terms.

Install Node.js 22 or newer from https://nodejs.org/, unzip this folder, and configure a local stdio MCP host to launch:

```json
{"mcpServers":{"oanarina-ui":{"command":"node","args":["/absolute/path/server.mjs","--project","/absolute/path/My Design.oui"]}}}
```

Use absolute paths. Append `--create` to create the specified .oui file if it does not exist. Existing valid .oui files work without it. No npm install or dependency folder is needed for this download. The process opens no network listener and exposes only the selected project.

Tools: inspect_project, read_nodes, read_document, read_design_system, apply_operations, replace_document, undo_transaction, validate_project, export_svg. Read the current SHA-256 revision before every write; stale revisions are rejected. The server validates complete documents, propagates components/styles/variables, and saves atomically. Undo retains 20 MCP transactions in memory and clears on restart. Documents are limited to 50 MB, responses to 5 MB.

Save changes in the Mac editor first. MCP writes the saved .oui file; reopen it to view edits. Live synchronization with an already open editor is not implemented. Do not edit the same file simultaneously in another app: MCP locks coordinate MCP processes, while other apps do not participate in that lock. A crash can leave <project>.oanarina-mcp.lock; verify no process is using the project before manually removing it.

SVG export supports vector/text pages, refuses images/raster paints, and uses approximate headless font metrics. Review typography in the Mac app. Installed font files are not copied. Direct binary .fig access and Figma cloud control are not included. No user files, credentials or font binaries are bundled.

Source and full operation documentation: https://github.com/oanaunc/oanarina_ui_tool/tree/main/mcp

Original dependency licenses are in THIRD-PARTY-NOTICES.txt.
