# Forma change notes

## 1.0.3

Forma 1.0.3 is Developer ID-signed, Apple-notarized, stapled and Gatekeeper-checked. Download [Forma 1.0.3](Forma-1.0.3.dmg) (39,568,700 bytes; 39.6 MB), or check [SHA-256](SHA256SUMS.txt). It is a universal build for Apple silicon and Intel Macs.

SHA-256: `3ddecfb6cbeef6b49ea159a3d95aec89eeb1d1bf0ce9e9916cbee3ef4279725e`.

- Big files open and move far more smoothly. Off-screen layers are skipped one by one, even during a drag, and tiny text and shadows draw simply when you zoom far out.
- The block menu in a spec has a solid background again, so its commands are readable.
- Specs: press D to make one, drop a Markdown file on the canvas, paste a copied layer as a live embed, and drag across blocks to select them. Find and replace now looks inside specs.
- Drag padding, gaps and corner radius right on the canvas, with star and arc handles, and spacing handles for rows and grids of loose layers.
- Arrow keys reorder layers in auto layout, and you can drag a layer into a grid cell. Thin lines are easy to grab, and snapping stays fast on large pages.
- A real font picker, with search, recents, the whole catalog and a live preview on the canvas.
- Text has real Auto line height, whole-pixel lines, line heights under 100%, and wrapping at hyphens, slashes and for Chinese, Japanese and Korean. Hugging text wraps at its max width.
- Number fields take units and percentages, and color fields take OKLCH and CSS color names.
- Strokes can use color styles, gradients can be saved as styles, Paste over selection is in the Edit menu, K scaling writes real values, and the right panel keeps the common sections first.
- Cut, erase and shape builder work on branching vectors and strokes, filled regions can be dragged, and prototype drags follow the finger.
- Imported files come through better: images that fail become placeholders, repeated images are stored once, and library styles, grids, image crops, text lists and variable actions now import.
- Help → Send feedback saves a local report for you to send. Forma sends nothing by itself.

Limits are listed in the [validation record](VALIDATION-v1.0.3.md). Most new import behavior was tested only on files written here.

