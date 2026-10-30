# Open a local Figma Design file in Forma

Forma 0.2.0-dev.10 is a development preview. Binary `.fig` import supports a bounded subset of Figma Design; it is not a claim of complete appearance, editing or round-trip parity.

1. Choose **File → Open project…** in Forma for Mac or the browser editor and select a supported `.fig` file. The Mac Open panel and Finder **Open With → Forma** use the same importer.
2. Review **Figma import report** after opening. Known reductions are reported; unsupported or malformed files can be refused before replacing the active artwork.
3. Edit the converted artwork and save a `.oui` copy. Imported Mac files start as unsaved projects. The source `.fig` is never a save destination, and cancelling Save leaves the import open and unsaved.

The importer decodes the selected archive locally in a bounded worker. It does not upload the source file, serve it through the native resource server, or use its thumbnail as a substitute for the artwork. Optional font downloads follow the existing font-library settings separately.

## Supported artwork and reductions

- Public Design pages, supported shapes, frames, groups, local transforms, ordering, opacity, visibility, paints, strokes and effects become editable Forma artwork.
- Referenced embedded static PNG/JPEG assets retain their pixels after bounded validation and actual pixel decoding. Corrupt, unsupported or excessively large assets can refuse the import.
- Text retains its characters and supported font/paragraph properties. Where supported source glyph geometry is available, an additional saved outline preserves untouched text appearance even when the source font is unavailable. Editing text, typography, character styling or layout falls back to ordinary editable text using available fonts. Undo can restore the original outline. Moving, rotating or changing the overall text color/opacity remain ordinary edits.
- Main components and instances can become detached editable frames with supported current properties and slot content. Live library links and complete override semantics are not retained.
- Supported native rich-document annotation blocks can retain their own embedded visual snapshots as image layers. Their native annotation text and CRDT editing are not equivalently editable.
- Supported variable and local-style references resolve saved current values. Complete mode inheritance and live published-library bindings are not retained.
- Auto-layout uses stored positions. Complete prototype behavior, advanced paint/text/vector semantics, every possible override and the other Figma products are outside this import subset.

The report identifies known reductions; it cannot certify complete visual parity. The source thumbnail is never used to conceal missing editable artwork. Saved glyph paths are project geometry, not bundled proprietary fonts.

## Limits and cancellation

The source file and converted `.oui` project must each be smaller than 50 MB. Hierarchies are limited to 256 levels and expanded output to 20,000 layers. Each referenced raster has a 20 MB encoded limit, an 8,192-pixel edge limit and a 16-million-pixel surface limit. All distinct fill/stroke image data together is limited to 64 million pixels before browser image allocation; repeated use of identical data counts once. This route admits static PNG/JPEG, not remote image URLs or arbitrary image types. Other container, reference and processing limits can refuse complex files safely.

A new File Open supersedes the prior operation. Editing or changing the active browser document/page cancels a pending import. Failed or cancelled imports must not replace the active document's recovery identity. Keep a portable `.oui` backup rather than relying only on local browser recovery.

## Return transfers

Binary `.fig` export is not implemented. Use `.oui` for Forma projects, the documented [Figma Bridge subset](https://www.oanarinaldi.com/downloads/ui-tool/FIGMA-BRIDGE-README.md) for supported editable return transfers, or SVG for visual exchange. Importing a `.fig` successfully does not establish a full-fidelity Figma round trip.

Read the [Forma guide](https://www.oanarinaldi.com/ui-tool-guide.html#fig-import) and [current feature register](https://www.oanarinaldi.com/forma.html#roadmap) for the rest of the preview's scope.
