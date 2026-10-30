# Forma dev.12 website release handoff

Prepared in branch `codex/forma-website-dev12`, based on website main `2c1ca64`, including the programming-books mobile-title fix. The main worktree and its unrelated `.DS_Store` changes are untouched. This batch changes no header, menu, transformation film or other media, and does not push or deploy.

## Release and provenance

The release owner supplied the exact accepted installer: `downloads/ui-tool/Forma-0.2.0-dev.12.dmg`, **32,440,052 bytes** (32.4 MB), SHA-256 `04d603bf4ee76d44a978388eb2e9b078719ff4bedb631c275c2c916143c6a86a`. App and DMG both received Accepted notarization, successful staples and Gatekeeper acceptance as Notarized Developer ID. Native bundle version is 0.2.0/build 13. The signed app passed 7 camera/menu, 5 Find, 37 lifecycle, 29 private-clipboard and 13 synthetic .fig checks with empty stderr. Physical Intel runtime acceptance remains pending. The release owner mounted the DMG read-only and confirmed its 312-file app bundle matches the accepted signed archive, with signature and Gatekeeper checks passing.

The public validation document is copied from source `7887d8fc7ee36731fea500f90be4a25a4f050a6d`: 707 core tests, 293 production browser checks, two development-module checks, and 40 MCP tests plus type checking. The MCP tests include an SDK regression against the exact public ZIP. Source `69eb23d` subsequently corrects two guides not bundled here; no runtime or accepted-artifact change follows.

The demo refreshed from clean application commit `a5146fbe622f817db1fa18a6fc86f9e24cae0e4b`, with `sourceDirtySnapshot=false`: 308 files, 50,977,938 bytes. Its unchanged renderer source is `1b64b0a2db18266d865c00fbef04ee11ac95f3b4`. The refresher supports optional `FORMA_EDITOR_SOURCE` for isolated worktrees and preserves its clean-checkpoint/version checks. Only production resources are copied, with dedicated demo local-storage/database names.

## Website changes

- Product and compatible legacy page, guide, privacy copy, current installer and fixed demo now target dev.12. Dev.11 and earlier installers/checksums remain archived unchanged. Historical dev.5 recordings retain their labels.
- Five release cards and guide anchors cover optional scrollbars/schematic minimap, literal text find/replace, partial read-only overflow inspection, default prototype start and partial saved frame export profiles. Local preferences remain separate from saved .oui content. Substantial parity work, schematic rendering and partial interchange/export limits are explicit.
- Final register and commands are copied: 2,022 requirements across 60 categories, 1,075 implemented / 173 partial / 774 planned. Implementation and reference verification remain distinct.
- Exact accepted installer, checksums, MCP ZIP, release manifest, change notes and scoped feature/validation documents are bundled. Existing Figma Bridge ZIP/checksum are retained because this batch does not change its contract.

## Website validation

Run sequentially against the isolated byte-range-aware preview at `http://127.0.0.1:5184`, using the editor's Playwright dependency:

- General QA: **13 groups passed**, no page errors. Includes register filters/counts, guide anchors/download HEADs, demo draw/Undo/Redo/reload recovery and namespace isolation, tutorial controls, legacy redirects, canonical product alias and mobile overflow on seven pages.
- The added thirteenth group exercises actual namespaced-demo Cmd-F, literal query and replacement-field availability, Escape close, and both View navigator toggles on/off. Camera transform, rendered node/selection counts remain unchanged; no `oui-*` storage keys appear. Existing 12 groups remain intact.
- Shared-header QA: **9 groups passed**, no page errors. Covers the unchanged 14-second transformation film, scroll-controlled forward/reverse seeking, pause/skip controls, shared hero structure, mobile controls and reduced-motion fallback.
- Exact installer/MCP hashes and bytes, retained dev.11 hash, demo clean provenance, register totals, local anchors, duplicate IDs, stale staging tokens and whitespace were checked. Desktop/mobile screenshots were visually inspected.

Final logs: `/tmp/forma-dev12-release-website-general.log`, `/tmp/forma-dev12-release-website-header.log`. Screenshots include `/tmp/forma-desktop.png`, `/tmp/forma-mobile.png`, `/tmp/forma-dev12-demo-controls.png`, and the shared-header script's four images.

This commit is ready for release-owner review, merge and deployment. No push has been performed from this worktree.
