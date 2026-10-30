# Website loading and background-work audit

The reported symptoms were pages stalling when opened, particularly Forma and the home-page flying app cards. The live Forma baseline eagerly built 2,022 feature rows (12,810 DOM elements) and loaded a walkthrough before its section was visible, alongside the active 8.79MB 1080p header.

## Changes

- The Algorithms menu Aetherfold 4D link opens a separate tab with `rel="noopener"` on all 96 pages containing that menu. The navigation maintenance script preserves this behavior.
- The same Forma header scene has a 4,064,679-byte 720p derivative, quarter-second keyframes, faststart and no audio. Both Forma entry pages reference it. The 1080p asset is retained for cached pages. Its byte count and hash are recorded in the media manifest.
- Forma's ambient walkthrough and tutorial release media sources offscreen, on pagehide and while hidden. A requested tutorial restores its previous position when revisited. The editor iframe still loads only on explicit launch.
- The register waits until it is near view, adds 100 rows at a time via a fragment, and searches/filters all 2,022 requirements. Show more explicitly adds the next 100. The tested initial DOM shrank from 12,810 elements to 650.
- The home-page app chapter contains a fixed 16 DOM cards, not a WebGL scene. It already canceled its animation callback offscreen. It now also clears offscreen 3D transforms and layer hints, guards page lifecycle state, and limits visual updates to 30fps. Resizing offscreen no longer repaints cards. Its two wide app screenshots use 520px thumbnails rather than 1381px/2000px originals.
- Other home-page carousels stop autoplay offscreen, while the document is hidden, on pagehide and with motion disabled. The shared hero engine continues managing its own carousel.
- The home-page Jotform embed previously blocked the HTML parser before the final site scripts. It is now injected asynchronously only near the contact section, with a direct form link available while loading or on failure. The form remains mounted after loading to preserve unsent entries.

## Verification

Browser checks through the connected browser confirmed: initial Forma rows 0, total elements 650; 720p header decoded; other video sources absent; reaching the register creates 100 rows; Show more creates 200; searching the final entry UI-60-027 returns it; leaving the walkthrough releases all three Forma video sources. Playing the deferred tutorial works. The home chapter has 16 cards, active transforms and layer hints only while visible, none offscreen; header video sources also clear offscreen. Leaving and returning restores the same 16 cards without accumulation. The global motion-off control returns the cards to their static layout. All 96 external menu targets were parsed and checked. JavaScript syntax, full MP4 decoding, faststart and transfer-size checks passed.

Existing browser automation checks were updated for lazy register rows and the new film URL. They were not run outside the connected browser. This audit identifies avoidable work and resource retention; it is not a whole-browser heap profile or proof of a single universal cause for every stalled navigation.

The offscreen album carousel retained exactly the same transform across a period longer than its autoplay interval. The contact script and iframe were absent on initial entry; reaching Contact created one script and then one iframe, with the page preloader removed and no console errors.
