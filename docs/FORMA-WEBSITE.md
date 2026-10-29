# Forma product page

`forma.html` is the canonical page. `ui-tool.html` retains the full page for old links and fragment bookmarks, with the Forma canonical URL. The site’s shared header, breadcrumb, footer, navigation scripts and visual pattern are retained. The page borrows the existing Photo Editor / Archi Tool tutorial-player and scrolling-gallery approach.

## What visitors can do

- Watch real Design, Whiteboard and Slides captures from the tested 0.2.0-dev.5 browser editor, jump to chapter times, read the step text and download each MP4.
- Pause both ambient videos with the header control. Reduced-motion preference leaves their posters in place until explicit playback. Ambient clips pause offscreen and when the page is hidden. Walkthroughs require explicit playback and have native controls. There is no audio track.
- Load the real editor on demand, open it separately, or fullscreen its frame. On narrow displays the editor has a horizontally scrollable desktop workspace. The outer page remains responsive.
- Download the notarized Forma 0.2.0-dev.6 Mac preview, verify its checksum, use the v0.1.0 archive, read the current source/register or download the independent local MCP package. Labels distinguish preview versions and historical recordings.
- Find Forma under Algorithms on every shared-header page. Standalone policy/support pages and the WLE tool receive a small scoped discovery menu instead of replacing their custom layout. Vendored font specimen pages and the embedded editor bundle are not marketing pages and are excluded.
- Use old `algorithm.html` / `algorithms.html` bookmarks: both redirect to `apps.html`, preserving query and fragment in JavaScript and providing a meta-refresh/visible-link fallback. The actual `algorithmsbook.html` destination is preserved.

## Current release checkpoint

The development-source cards and downloaded register describe 0.2.0-dev.6: 2,018 requirements in 60 categories, with 1,042 implemented, 161 partial and 815 planned. Source additions include grid tracks and spans, local Home organization and Mac document windows. The current embedded demo is dev.6, while the recordings remain explicitly labeled dev.5 captures. The primary public installer is Forma 0.2.0-dev.6, 32,540,501 bytes, with SHA-256 `037b9305fcf23aaa55bee01f60c06c5e6521ac321efddcf7d2ff23914f9c698a`. Release-owner evidence confirms app and DMG Accepted notarization, stapling and Gatekeeper validation. The v0.1.0 archive remains available.

## Browser demo provenance and storage

`demo/forma/` is a static snapshot of the tested editor `dist/` at 0.2.0-dev.6. No user projects or Figma reference files are included. The synthetic editable sample ships with the app. Its MIT license, third-party notice and per-family font licenses accompany the bundle. `DEMO-MANIFEST.json` records original asset hashes and the only bundle changes: `oui-` local-storage identifiers become `forma-demo-`; the project/font IndexedDB database names become `forma-website-demo-projects-v1` and `forma-website-demo-fonts-v1`. Document formats and clipboard MIME types remain unchanged.

The demo saves to this website origin’s browser storage, separate from the native app. This is namespace separation, not origin-level isolation; same-origin pages share storage permissions. Projects can be lost when site data is cleared, so the page asks visitors to save portable .oui backups. The browser demo does not provide native Mac file dialogs or installed-font discovery. It may request Google font files when a visitor chooses a family that is not bundled. It has no cloud project synchronization.

The page loads none of the editor assets until Launch or the standalone demo link is chosen. Use `python3 scripts/refresh-forma-demo.py 0.2.0-dev.6` only after a release-owner stable-build checkpoint. It copies only `dist/`, namespaces identifiers and records original/destination hashes. No private local files are served. The preview server binds to 127.0.0.1.

## Media provenance

The four MP4s in `videos/forma` are compressed H.264/yuv420p with faststart for browser playback. Original WebM captures are retained alongside them. `header.mp4` crops actual design footage for the breadcrumb backdrop. No generated or simulated editor interface is shown. Capture work uses a fresh Playwright browser context and synthetic artwork only; image assets are actual editor screenshots. `MEDIA-MANIFEST.json` records hashes and durations. No Higgsfield credits were used.

## Validation

From this repository, with the sibling editor’s Playwright dependency available:

```sh
python3 scripts/serve-preview.py 5182
node scripts/verify-forma.mjs
```

Use a byte-range-aware server for the chapter-seeking check; Python’s standard `http.server` does not implement range requests and is insufficient for that check. `FORMA_TEST_URL` overrides the test origin. `FORMA_PLAYWRIGHT_PACKAGE` can point to another package.json with Playwright installed.

The browser check covers real launch/draw/undo/redo/reload persistence, isolated storage keys, all register statuses/categories, keyword filtering, media controls/reduced motion, keyboard tabs, chapter seeking, download responses, compatible legacy page and redirects, and 390px layout. Screenshots are written to `/tmp/forma-desktop.png` and `/tmp/forma-mobile.png`. `scripts/update-forma-navigation.py` updates static menus idempotently; it intentionally avoids bundled/vendored HTML.

The public v0.1.0 DMG and its checksum are preserved. No newer installer should be called notarized until the release owner supplies Accepted notarization, stapling and Gatekeeper evidence for that artifact. The page describes an independent work in progress, not a finished Figma clone, and retains binary .fig, plugin round-trip and collaboration limits.

## Download upgrade note prepared for final release handoff

The new bundle is `Forma.app`, replacing the former product name `Oanarina UI Tool.app`. Tell users to quit the old app, copy Forma to Applications, then optionally remove only the old application bundle. Keep .oui projects, exported backups and app data. The same bundle ID preserves compatible local data. The different app filename does not automatically replace the old bundle, and there is no silent updater. No installed app is removed by the agent. This guidance is published beside the dev6 download and at the start of the guide.

Mac WebKit manual acceptance: after Play walkthrough, the visible in-app browser reported currentTime 2.9, paused false, readyState 4 and no media error. Header and inline ambient videos also decoded with readyState 4 and no errors, and paused offscreen. Tutorial metadata now loads on tab selection to avoid an empty-source media error before playback.
