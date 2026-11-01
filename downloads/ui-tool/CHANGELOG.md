# Forma change notes

## 1.0.1

Forma 1.0.1 is Developer ID-signed, Apple-notarized, stapled and Gatekeeper-checked. Download [Forma 1.0.1](Forma-1.0.1.dmg) (39,440,512 bytes; 39.4 MB), or check [SHA-256](SHA256SUMS.txt). It is a universal build for macOS 13 or later.

SHA-256: `cf0cc8743c1e3644ae736c6f222607476c6a8bbbbf208eb00d334be42718e142`.

- Spec pages in .fig files now open as a page of editable text inside a frame, with headings, paragraphs, bold text and lists that reflow as you type.
- A mouse wheel now zooms and pans smoothly. Each notch glides, and the canvas no longer flickers in our tests.
- A rebuilt color panel floats beside the inspector, with a large color square, slim hue and alpha sliders, and HEX, RGB, HSL and HSB values.
- Gradients have one bar: drag a stop to move it, click the bar to add one, and edit exact values in the Stops list.
- A missing image is now a plain transparent checkerboard, and it moves and selects like any other layer.

Limits are listed in the [validation record](VALIDATION-v1.0.1.md). Spec pages are verified on one real file holding headings, paragraphs and bullet lists.
