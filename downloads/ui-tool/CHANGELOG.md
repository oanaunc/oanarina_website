# Forma change notes

## 1.0.2

Forma 1.0.2 is Developer ID-signed, Apple-notarized, stapled and Gatekeeper-checked. Download [Forma 1.0.2](Forma-1.0.2.dmg) (39,435,218 bytes; 39.4 MB), or check [SHA-256](SHA256SUMS.txt). It is a universal build for macOS 13 or later.

SHA-256: `b649711ac50d69de3d6533145080f5e1d0e700ac264a502338ab7e22d207cf15`.

- Specs are now their own layer. A spec page in a .fig file imports as a Spec layer, and the Text tool menu makes a new one.
- Write in a spec block by block. Type / for a menu of blocks, or start a line with #, -, 1., >, [], three backticks or --- and it changes as you type.
- Headings, paragraphs, lists, to-dos, quotes, code, dividers, tables and images are all blocks. Drag one to move it, or click its handle for more options.
- Embed a live frame with /frame. Change the frame and the spec shows the change.
- Copy any spec as Markdown, paste Markdown in as blocks, and let a local agent read or write a spec through Forma's MCP server.
- Save a fill as a named color style from the color panel. Find it in the new Styles tab, apply it to other layers, and change it once to update them all.
- Design files import more faithfully: Auto line height, masks, polygons and stars, one-sided strokes, overlays, variant actions, groups and hugging auto layout, and large files import instead of being refused.
- Several selected layers with different values show Mixed. Typing +10, or pressing an arrow key, changes each layer from its own value.

Limits are listed in the [validation record](VALIDATION-v1.0.2.md). Masks, overlays and most new import fixes are confirmed by field name against real files, but neither real file tested uses them.

