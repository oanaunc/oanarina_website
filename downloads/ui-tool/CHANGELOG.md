# Forma change notes

## 1.0.0

Forma 1.0.0 is Developer ID-signed, Apple-notarized, stapled and Gatekeeper-checked. Download [Forma 1.0.0](Forma-1.0.0.dmg) (39,437,723 bytes; 39.4 MB), or check [SHA-256](SHA256SUMS.txt). It is a universal build for macOS 13 or later. Intel runtime validation remains pending.

SHA-256: `ac38d7bfa50cf1d1a1dc3ffc1a73a20ca60e81b25911a5e4d40ea0272ae57472`.

**New in version 1**

- A rebuilt right panel with Position, Layout, Appearance, Typography, Fill, Stroke, Effects and Export.
- Blue selection, frame labels, default shortcuts, the toolbar and the left panel follow the conventions designers already know.
- A click reaches the object on a frame, and hovering a row in Layers outlines it on the canvas.
- Pressing F or choosing the Frame tool lists sizes for phones, tablets, desktops, presentations, watches, paper and social media.
- Zoom and pan stay smooth, and a mouse wheel moves a clear step.
- Text sits properly in its line height, double-click puts the caret where you click, and mixed styles stay visible while editing.
- Option-drag copies, and dragging moves layers into and out of frames.
- Quick Look previews and Spotlight search for .oui files.
- Deeper import, drawing, typography, design systems, plugins, prototypes, slides and sites.
- Fixes a redone edit being lost if the app reloaded or quit right after Redo.

Limits are listed in the [validation record](VALIDATION-v1.0.md). Importing .fig and Sketch files is tested on self-authored files only, so some content may arrive reduced or as an image, and the import report says what happened. Binary .fig export is not available. A saved file with a tile offset paints differently, because offsets now shift the whole repeat.

Multiplayer, accounts, hosted publishing and AI generation are not included.
