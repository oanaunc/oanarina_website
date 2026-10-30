# Forma preview change notes

## 0.2.0-dev.12 — published preview

The dev.12 Mac package is Developer ID-signed, Apple-notarized, stapled and Gatekeeper-checked. Download [Forma 0.2.0-dev.12](Forma-0.2.0-dev.12.dmg) (32,440,052 bytes; 32.4 MB), or check [SHA-256](SHA256SUMS.txt). macOS 13+; universal Apple silicon and Intel build. Physical Intel runtime validation remains pending. Native bundle version: 0.2.0, build 13.

SHA-256: `04d603bf4ee76d44a978388eb2e9b078719ff4bedb631c275c2c916143c6a86a`.

The release adds:

- Optional canvas scrollbars and a schematic overview minimap, with pointer and keyboard navigation, independent local preferences and cancelable live camera gestures. Navigation does not edit artwork or occupy document Undo.
- Literal text find/replace across the page, file or selected layer trees, including cross-page/slide reveal. Editable replacements preserve surrounding rich formatting, use one Undo transaction and remain in saved .oui content. Locked and incompatible managed values have safeguards.
- Read-only frame overflow preview and selection of potential overflowing descendants. This remains **partial**: conservative painted rectangular bounds, nested clips, masks and occlusion limit candidate accuracy.
- Set an eligible selected frame as the default prototype start while preserving existing flows; present from that frame without editing artwork. Default-start edits support Undo and persistence.
- Save up to 20 frame export profiles with SVG/PNG/JPG, 1×–4× scale, suffix, frame/artwork bounds and guide choices; export each row individually. This remains **partial**: batch execution, PDF profiles and advanced color/resolution options are unfinished.

The minimap is schematic rather than a full image rendering. Text search uses bounded literal base text, not regular expressions, complete language-specific word breaking or generated motion-keyframe text. Close Motion before replacement. Frame profiles are local .oui data; profile transfer through Figma Bridge or binary export is not claimed.

Read the [preview guide](../../ui-tool-guide.html#dev12-guide). Full Figma parity, exact reference verification, binary .fig export and cloud collaboration remain unfinished.

## 0.2.0-dev.11 — archived Mac preview

The [dev.11 Mac archive](Forma-0.2.0-dev.11.dmg) remains an accepted Developer ID-signed, Apple-notarized, stapled and Gatekeeper-checked universal preview. Intel runtime validation remains pending. [Current checksums](SHA256SUMS.txt).

This release added bounded camera Back/Forward history, Find selected object including its sampled motion position, independent top-level frame/section name preferences, searchable frame presets, orientation swap, direct-child selection and guarded frame-fit workflows. Substantial parity work remains.

The website browser demo is a fixed dev.12 snapshot with its own local storage/database names. Existing dev.5 recordings retain their original labels. This document does not announce a silent updater or replace older installers.
