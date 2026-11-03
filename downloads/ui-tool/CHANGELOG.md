# Forma change notes

## 1.0.5

Forma 1.0.5 is Developer ID-signed, Apple-notarized, stapled and Gatekeeper-checked. Download [Forma 1.0.5](Forma-1.0.5.dmg) (40,508,767 bytes; 40.5 MB), or check [SHA-256](SHA256SUMS.txt). It is a universal build for Apple silicon and Intel Macs.

SHA-256: `4d9bfb9459f610fa0c4a936f96dcfa449618349ed84bfd90e9f9de0bae4d4da8`.

- Numbers you type in the inspector no longer vanish when a font finishes loading just after a file opens.
- Any vector can have corner radius and smoothing, set in the inspector or by dragging a corner dot, and it stays editable. Bake turns it into a plain outline. Imported vectors keep rounded corners live when the rebuilt shape matches the original.
- Move to page brings comments and prototype connections along, and lists anything it couldn't keep instead of refusing the move.
- SVG import no longer refuses files a browser can open. Of 1,600 real SVGs tried, none are refused now, and 1,517 match the browser.
- Outline text and Booleans on text work with OTF, variable and WOFF2 fonts, and with scripts that use one glyph per character.
- Elliptical gradients stay elliptical in PDF and website export.
- Plugin interfaces can use DOMParser, custom elements and Shadow DOM, and parameter forms can suggest values as you type. Widgets can respond to hover and timers, and a widget resize undoes as one step.
- The component playground can try slot content and run click interactions.
- Code mappings can be saved to and loaded from a file, and local agents can read and change them.
- Layers can pin to layout guides with alignment and offsets, bind to an ancestor frame's tracks, and export as grid CSS.

Polygons and stars with smoothing change shape slightly, and a very large radius on a strongly curved side can land differently than before. Past 128 curved corners on one layer, a simpler curve is used. SVG files that used to be refused now import with a report of what was left out.

Limits are listed in the [validation record](VALIDATION-v1.0.5.md). Rounded corners on imported vectors were tested only on files written here.
