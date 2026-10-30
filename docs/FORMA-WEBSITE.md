# Forma product page

`forma.html` is the canonical page. `ui-tool.html` retains the full page for old links and fragment bookmarks, with the Forma canonical URL. The site’s shared header, breadcrumb, footer, navigation scripts and visual pattern are retained. The header uses the exact shared Photo Editor / Archi Tool breadcrumb, hero grid/window DOM, and experience.js scroll-timeline engine. Forma and legacy ui-tool entries in motion-manifest.js choose the generated sculptural Forma brand film. Its dark central space keeps the shared white title legible; the shared engine and reference pages are unchanged.

## What visitors can do

- Watch real Design, Whiteboard and Slides captures from the tested 0.2.0-dev.5 browser editor, jump to chapter times, read the step text and download each MP4.
- Scroll the shared pinned breadcrumb to scrub its generated Forma brand film, using the exact Photo Editor / Archi Tool motion engine and layout. Shared Motion on/off and Skip animation controls remain available; reduced motion removes the extra scroll chapter and leaves the static poster. The decorative hero video follows the same global motion preference and pauses offscreen or when hidden. Walkthroughs require explicit playback and have native controls. There is no audio track.
- Load the real editor on demand, open it separately, or fullscreen its frame. On narrow displays the editor has a horizontally scrollable desktop workspace. The outer page remains responsive.
- Download the notarized Forma 0.2.0-dev.12 Mac preview, verify its checksum, use the v0.1.0 archive, read the current register or download the independent local MCP package. Labels distinguish preview versions and historical recordings.
- Find Forma under Algorithms on every shared-header page. Standalone policy/support pages and the WLE tool receive a small scoped discovery menu instead of replacing their custom layout. Vendored font specimen pages and the embedded editor bundle are not marketing pages and are excluded.
- Use old `algorithm.html` / `algorithms.html` bookmarks: both redirect to `apps.html`, preserving query and fragment in JavaScript and providing a meta-refresh/visible-link fallback. The actual `algorithmsbook.html` destination is preserved.

## Current release checkpoint

The preview cards and downloaded register describe 0.2.0-dev.12: 2,022 requirements in 60 categories, with 1,075 implemented, 173 partial and 774 planned. This release adds optional accessible canvas scrollbars and a schematic overview, bounded literal text find/replace, conservative read-only frame overflow inspection, reusable default prototype starting points and saved individual SVG/PNG/JPG frame export profiles. Overflow inspection and advanced export settings remain partial; exact Figma reference verification remains separate. The embedded demo is dev.12, while recordings remain explicitly labeled dev.5 captures. The primary universal Mac installer is Forma 0.2.0-dev.12, 32,440,052 bytes, SHA-256 `04d603bf4ee76d44a978388eb2e9b078719ff4bedb631c275c2c916143c6a86a`. Release-owner evidence confirms app and DMG Accepted, successful staples and Gatekeeper acceptance. Physical Intel runtime validation remains pending. Dev.11, dev.10, dev.8, dev.6 and v0.1.0 archives remain available. Exact metadata is in `downloads/ui-tool/RELEASE-MANIFEST.json`.

## Browser demo provenance and storage

`demo/forma/` is a static snapshot of the tested editor `dist/` at 0.2.0-dev.12. No user projects or Figma reference files are included. The synthetic editable sample ships with the app. Its MIT license, third-party notice and per-family font licenses accompany the bundle. `DEMO-MANIFEST.json` records original asset hashes and the only bundle changes: `oui-` local-storage identifiers become `forma-demo-`; the project/font IndexedDB database names become `forma-website-demo-projects-v1` and `forma-website-demo-fonts-v1`. Document formats and clipboard MIME types remain unchanged.

The demo saves to this website origin’s browser storage, separate from the native app. This is namespace separation, not origin-level isolation; same-origin pages share storage permissions. Projects can be lost when site data is cleared, so the page asks visitors to save portable .oui backups. The browser demo does not provide native Mac file dialogs or installed-font discovery. It may request Google font files when a visitor chooses a family that is not bundled. It has no cloud project synchronization.

The page loads none of the editor assets until Launch or the standalone demo link is chosen. Use `python3 scripts/refresh-forma-demo.py 0.2.0-dev.12` only after a release-owner stable-build checkpoint. For isolated website worktrees set `FORMA_EDITOR_SOURCE` to the explicit clean application checkout. It retains the clean-source/version guards and copies only `dist/`, namespaces identifiers and records original/destination hashes. No private local files are served. The preview server binds to 127.0.0.1.

## Media provenance

The header is an artistic brand film, not an app demonstration. Its source image was generated with the built-in image-generation tool, then animated through Higgsfield Seedance 2.5 at 1080p. The active 14-second transformation revision estimated 224 credits; this is not a billing receipt. The earlier ten-second film is retained at `brand-film.mp4`; active `brand-transformation.mp4` is a browser copy encoded as H.264/yuv420p, BT.709, no audio, with faststart and keyframes every twelve frames (0.5 seconds) for backward and forward scroll seeking. The source image and prompts are preserved in [the media provenance folder](media/forma-brand-film/README.md).

The Design, Whiteboard and Slides walkthroughs and decorative editor window remain actual dev.5 app captures, using a fresh Playwright browser context and synthetic example artwork only. Original WebM captures are retained alongside their H.264 MP4 copies. The old `header.mp4` recording remains available for cached pages; the current motion manifest selects the distinct generated film. App screenshots remain actual editor output. `MEDIA-MANIFEST.json` distinguishes generated artwork from recorded workflows and records hashes and durations. No user projects or private Figma reference content are included.

## Validation

From this repository, with the sibling editor’s Playwright dependency available:

```sh
python3 scripts/serve-preview.py 5182
node scripts/verify-forma.mjs
node scripts/verify-forma-header.mjs
```

Use a byte-range-aware server for the chapter-seeking check; Python’s standard `http.server` does not implement range requests and is insufficient for that check. `FORMA_TEST_URL` overrides the test origin. `FORMA_PLAYWRIGHT_PACKAGE` can point to another package.json with Playwright installed.

The browser check covers real launch/draw/undo/redo/reload persistence, isolated storage keys, all register statuses/categories, keyword filtering, media controls/reduced motion, keyboard tabs, chapter seeking, download responses, compatible legacy page and redirects, and 390px layout. Screenshots are written to `/tmp/forma-desktop.png` and `/tmp/forma-mobile.png`. `scripts/update-forma-navigation.py` updates static menus idempotently; it intentionally avoids bundled/vendored HTML.

The public v0.1.0 DMG and its checksum are preserved. No newer installer should be called notarized until the release owner supplies Accepted notarization, stapling and Gatekeeper evidence for that artifact. The page describes an independent work in progress, not a finished Figma clone, and retains binary .fig, plugin round-trip and collaboration limits.

## Download upgrade note prepared for final release handoff

The new bundle is `Forma.app`, replacing the former product name `Oanarina UI Tool.app`. Tell users to quit the old app, copy Forma to Applications, then optionally remove only the old application bundle. Keep .oui projects, exported backups and app data. The same bundle ID preserves compatible local data. The different app filename does not automatically replace the old bundle, and there is no silent updater. No installed app is removed by the agent. This guidance is published beside the dev.12 download and at the start of the guide.

Mac WebKit manual acceptance: after Play walkthrough, the visible in-app browser reported currentTime 2.9, paused false, readyState 4 and no media error. Header and inline ambient videos also decoded with readyState 4 and no errors, and paused offscreen. Tutorial metadata now loads on tab selection to avoid an empty-source media error before playback.

The header-specific checks cover the shared DOM structure, full-viewport desktop/mobile pinning, forward/backward timeline seeks while paused, global Motion off/on, Skip animation, original hero icon/type/grid dimensions, reduced-motion static fallback and no horizontal overflow. The narrow cover crop keeps a sculptural edge visible while matching its static poster position. Forma-only back-to-top positioning clears the fixed Motion/Skip toolbar; the mobile check verifies non-overlapping bounds, unobscured hit targets, unclipped labels and a real back-to-top click. Header screenshots use `/tmp/forma-shared-header-desktop.png`, `/tmp/forma-shared-hero-desktop.png`, `/tmp/forma-shared-header-mobile.png` and `/tmp/forma-shared-header-reduced-motion.png`.

## Public links and repository availability

Anonymous access to the application repository currently returns 404. Forma marketing pages therefore do not advertise a public source checkout or link visitors to that repository. Source-document links point to the actual public guide sections, and the feature register and separate MCP/bridge downloads remain public. This does not change repository visibility or publish an application-source archive. Forma is described as free local software; the unrelated architecture product’s existing source claims remain unchanged.

## Dev8 publication checkpoint

The clean application release commit is `47df7b52b7af730031401d2fd36be7b684166a96`, version `0.2.0-dev.8`, native bundle build 9. The release-owner report records 535 core tests, 182 production-browser checks plus 2 development-module checks, 27 MCP tests/type checking, standard native smoke, 15 actual native clipboard checks and 37 native lifecycle checks. App and DMG received Accepted notarization, successful stapling and Gatekeeper acceptance. Runtime acceptance used Apple silicon; Intel hardware remains untested. These application gates are separate from this website’s checks.

The dev8 DMG is 31,747,674 bytes, SHA-256 `9d6ec589ee35058b1e7b55aa87214dd6d6cc7a390459aa06405a9e23dd90a716`. The bridge ZIP is 28,708 bytes, SHA-256 `062cb2e6886a5f983d80beea20ec6f4603c80b5c7ef23dbfc75d9522f1d91337`; the MCP ZIP is 469,687 bytes, SHA-256 `a080dff8f70b3f6be56406fdc8ba132e68a14a4a90c65ca846fa5fcae34c7462`. Download archives are copied unchanged. The separate public MCP notes replace an optional repository-doc link with the public guide; the ZIP’s original optional repository link still requires repository access and is not needed to start the server. The old bridge used by the archived v0.1 guide is retained under a distinct versioned filename.
