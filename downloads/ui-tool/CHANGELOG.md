# Forma change notes

## 1.0.4

Forma 1.0.4 is Developer ID-signed, Apple-notarized, stapled and Gatekeeper-checked. Download [Forma 1.0.4](Forma-1.0.4.dmg) (39,762,356 bytes; 39.8 MB), or check [SHA-256](SHA256SUMS.txt). It is a universal build for Apple silicon and Intel Macs.

SHA-256: `e723b72a761abc5a898862b634b1db27cc6c0f42d92ca1b8a4b2ae38b5eb44dd`.

- Panning and zooming big files is smoother. Panning moves an already painted canvas, a zoom shows a scaled copy until it stops, shadows stay light while the view moves, and the canvas no longer goes blank during a fast move.
- Clicking and nudging on big files are faster, because only the layers that changed are touched.
- Background blur works anywhere: several on a page, on any shape or frame, inside groups and under masks, in prototypes, Motion and exports, and imports keep them.
- PDFs keep far more as real objects: blends, group opacity, all mask modes, every gradient, rich text, and Greek, Cyrillic and CJK text. A PDF exported right after opening a file no longer turns text into a picture.
- Library updates have a changed-values table, a visual compare and Merge both. You can choose which assets to publish, and renamed variables update inside prototype expressions.
- Specs have collapsible toggle blocks with /toggle, and lines no longer shift when you open a spec.
- Letter case is a live setting on text and ranges, and the Text menu commands turn it on and off. Checklists and hanging punctuation are in too.
- K scaling writes real values on instances, main components, Booleans and animated layers. A block of layers can move inside a grid, and arrow keys step it.
- Color styles can hold several paints, images and shaders, with a Paints list in the edit panel.
- Imports keep variable bindings on line height, borders, effects and gradient stops, keep multi-color vectors editable, and keep arrowheads on every open path.
- PNG exports can embed your own RGB ICC profile.

The Text menu's letter case commands now toggle a setting instead of changing your text. Hanging quotes now also apply in lists, and constraints now scale the contents of groups, so some existing layouts can shift. Files with several background blurs on a page, or specs with toggle blocks, need 1.0.4 or later.

Limits are listed in the [validation record](VALIDATION-v1.0.4.md). Imported bindings, checklists and arrowheads were tested only on files written here.

