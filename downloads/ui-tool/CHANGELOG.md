# Forma preview change notes

## 0.2.0-dev.15 — published preview

The dev.15 Mac package is Developer ID-signed, Apple-notarized, stapled and Gatekeeper-checked. Download [Forma 0.2.0-dev.15](Forma-0.2.0-dev.15.dmg) (38,784,279 bytes; 38.8 MB), or check [SHA-256](SHA256SUMS.txt). It is a universal build for macOS 13 or later. Intel runtime validation remains pending.

SHA-256: `1c1391ec11ef1e3147f4d58c26e025c16eb6d8bf7327ef28b1e193b8b4d03ad2`.

**Update from dev.14 or earlier.** A redone edit could be lost if the app reloaded or quit within about a second of Redo, longer on a large file. This release fixes it.

This release also comes from building real screens in Forma and fixing what got in the way:

- A click now reaches objects on a page-level frame, as on an artboard. The frame's empty area and name still select it.
- Option-drag copies layers, and dragging moves layers into and out of frames, with one Undo.
- X and Y read relative to the parent frame. Undo keeps your selection. Copy and paste properties and alignment keys are in.
- Text types where it will land, and new text is legible on the dark canvas.
- Shift-A reads direction and gap from what you drew, with a nine-point align grid.
- The inspector is about half as tall, with the color picker folded to one row. The Mac menus use the same tidy order as the in-app menus.

And deeper work underneath:

- SVG, Sketch, PDF and .fig import keep much more live structure. PDF pages open as editable shapes, images and text.
- Vector networks gain faces and holes, and strokes run on curves and closed contours.
- Plugins and code layers run in a worker, so a runaway script can be stopped instead of freezing Forma. A guest canvas cannot read itself synchronously or draw an image element.

Every area has limits. Read the [validation record](VALIDATION-v0.2-dev15.md). `.fig` and Sketch import are tested on self-authored fixtures only, not on files from those apps. Behavior changes: a canvas click now selects an object on a page-level frame instead of the frame, and nested frame labels are off by default, with a toggle in View.

Multiplayer, accounts, hosted publishing and AI generation are not included. Full Figma parity, exact reference verification, binary .fig export and real desktop round trips remain unfinished.
