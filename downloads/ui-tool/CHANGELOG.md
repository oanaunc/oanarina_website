# Forma preview change notes

## 0.2.0-dev.14 — published preview

The dev.14 Mac package is Developer ID-signed, Apple-notarized, stapled and Gatekeeper-checked. Download [Forma 0.2.0-dev.14](Forma-0.2.0-dev.14.dmg) (37,905,913 bytes; 37.9 MB), or check [SHA-256](SHA256SUMS.txt). It is a universal build for macOS 13 or later. Intel runtime validation remains pending.

SHA-256: `9ac5b38374fd58c196337c45ffd477323b9a0970a3bc6de7c2a6c8dfce181ccb`.

**Update from dev.13 or earlier.** Running Forma inside its real Mac shell found defects that browser tests could not show, and all are fixed here:

- Every file picker in the Mac app silently did nothing, including images, PDF, Sketch, fonts, plugins, widgets, audio and brand or slide assets.
- PowerPoint, Markdown, palette, CSS, HTML, Swift, Kotlin and TSX exports failed as unsupported.
- Full screen in Slides and prototypes stayed in the window.
- Restarting from safe mode lost the open file.

This release also adds:

- MP4 and WebM export frame by frame with sound, with shaders animating in preview and export.
- Comments on running prototypes, canvas annotation and measurement, and managed annotation categories.
- Group resizing that gives layers real sizes, automatic section and frame fit, and an action that turns a scale into real values.
- Conversion between sRGB and Display P3 with appearance preserved.
- SwiftUI, UIKit, Compose and XML output, layout-aware shortcuts and interface scale to 150%.
- Shape morphing in Smart animate, nested slots, nested background blur on frames with one solid fill, and shaders that sample layer pixels.
- Fuller vector PDF with embedded fonts and images for simple text and image fills.
- Finder drops, system clipboard text, images and SVG, and installed font faces.

Every area has limits. Read the [validation record](VALIDATION-v0.2-dev14.md). Behavior changes: dragging a group handle now resizes its layers, and rotated Fill children change the next time their page is edited. Files using the newest features are refused by older builds; legacy files open unchanged.

Multiplayer, accounts, hosted publishing and AI generation are not included. Full Figma parity, exact reference verification, binary .fig export and real desktop round trips remain unfinished.

## 0.2.0-dev.13 — archived Mac preview

The dev.13 Mac package is Developer ID-signed, Apple-notarized, stapled and Gatekeeper-checked. Download [Forma 0.2.0-dev.13](Forma-0.2.0-dev.13.dmg) (37,031,664 bytes; 37.0 MB), or check [SHA-256](SHA256SUMS.txt). It is a universal build for macOS 13 or later. Intel runtime validation remains pending.

SHA-256: `fc7f237532397d79f4dbde10d4d36dc6bf62f6e858f208bd3a50b9c19cdd9588`.

Forma is an offline Mac app. This release adds:

- Components: nested instance overrides at any depth, exposed nested properties, swap properties through exposed chains, multi-instance editing and in-place frame and group conversion.
- Libraries and tokens: published variables, linked read-only variables with update review, variable groups, device-wide usage counts and file-level library metadata.
- Drawing: stretch brushes, illustration menus, straight knife, area eraser on filled shapes, curve-aware Shape Builder, corner rounding on curves, square offset joins, width points and taper presets.
- Typography: keyboard lists with Roman and composite numbering, real font table data and variable axes for TTF and OTF, 1,903 emoji with colon completion, and text around closed shapes.
- Layout and prototypes: automatic group bounds, nested baselines, grid row and column insertion, drag reorder in auto layout, nested scroll regions, generic device shells, Smart animate improvements and form control simulation.
- New workspaces: Sites with static export, brand asset templates, shader paints, Display P3 documents, runnable code layers and sandboxed widgets.
- Files and delivery: local branches with three-way merge, PowerPoint interchange, a standalone password-protected prototype player, vector PDF for solid shapes, an export queue, palette exchange and code export.
- Reliability and Mac: crash journal, persisted Undo, corrupt-file recovery, safe mode, renderer restart, multi-window conflict detection, native tabs, print, share and document versions.
- Resources and care: UI kits, illustrations, guides and tutorials, design health audits, a Privacy dashboard, a Romanian interface and an accessibility sweep.

Every area has documented limits. Read the [preview contents](PREVIEW-CONTENTS-dev13.md), [validation record](VALIDATION-v0.2-offline-dev13.md) and [preview guide](../../ui-tool-guide.html#dev13-guide). Behavior changes: installed variable collections are read-only until detached, and a saved auto layout with a rotated or scaled child reflows the next time its page is edited. Files using the newest features are refused by older builds; legacy files open unchanged.

Multiplayer, accounts, hosted publishing and AI generation are not included. Those 183 online-only requirements are now marked retired in the register, leaving 17 planned. Full Figma parity, exact reference verification, binary .fig export and real desktop round trips remain unfinished.

## 0.2.0-dev.12 — archived Mac preview

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

The website browser demo is a fixed dev.14 snapshot with its own local storage/database names. Existing dev.5 recordings retain their original labels. This document does not announce a silent updater or replace older installers.
