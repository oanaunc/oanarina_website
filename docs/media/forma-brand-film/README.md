# Forma sculptural brand film

This is generated artistic brand imagery for the Forma website header. It is not an app recording, an editor feature, or a Figma reference. The Design, Whiteboard and Slides walkthroughs below the header remain actual recordings of synthetic documents in the development editor.

- [Source artwork](source-art.png), generated with the built-in image-generation tool.
- [Image prompt](image-prompt.txt).
- [Image-to-video prompt](video-prompt.txt).
- Earlier browser film: `brand-film.mp4` (now archived outside deployment).
- [Static poster](../../../images/apps/forma/brand-film-poster.jpg).
- [Hashes and encoding manifest](../../../videos/forma/MEDIA-MANIFEST.json).

The source image was animated through Higgsfield Seedance 2.5, requesting ten seconds at 1080p. The generation completed successfully. The job estimated 160 credits; this records its estimate, not a billing receipt. No private account or project identifiers are needed to reproduce the art direction.

The original output was 1920 × 1080, 24 fps, 10.041667 seconds, HEVC Main 10 with BT.709 colour and no audio. Its SHA-256 is recorded in the manifest. The public copy is H.264, 8-bit yuv420p, with faststart and a twelve-frame keyframe interval (half a second) to support the shared website scroll timeline. The original download is retained in the release workspace; the optimized public copy is linked above.

The shared Photo Editor / Archi Tool header structure and scroll engine are preserved. Motion on/off, Skip animation and the reduced-motion static poster remain available. The generated backdrop uses a distinct filename, so cached pages using the old app-recording backdrop continue to work.

## Sculptural transformation revision

The current header uses [the optimized transformation film](../../../videos/forma/brand-transformation-web.mp4), generated from the same source artwork with [this prompt](transformation-prompt.txt). It keeps the starting composition, then unfurls the ribbons across the scene and rebuilds them into a large layered iris/portal. The opening poster remains unchanged. Superseded ten-second and 1080p film files were archived outside deployment on October 30, 2026.

The new Seedance 2.5 generation requested 14 seconds at 1080p with no audio; its preflight estimate was 224 credits, not a billing receipt. The completed original is 1920×1080, 24fps, 14.041667 seconds, HEVC10-bit BT.709. The public H.264 8-bit copy retains half-second keyframes, faststart and no audio for forward/reverse scroll seeking. Exact source/output hashes and encoding are in the media manifest. This is artistic brand imagery, separate from actual app footage.

## Cold seek validation — October 30, 2026

The active Forma and legacy `ui-tool.html` header films use `preload="auto"` after the existing visibility, proximity, reduced-motion and data-saving checks permit loading. Inactive films still have no source; leaving the area, hiding the document or disabling motion releases the decoder.

A live Chromium diagnostic reproduced stalled paused seeks with `preload="none"`, despite correct, fast HTTP byte ranges and the expected film checksum. A controlled activation-only change buffered the 8.79 MB film and completed the same six alternating seeks (60%, 20%, 98%, 5%, 85%, 48%). The unchanged nine header checks, legacy cold seeks, visibility/proximity release, reduced motion and forced data-saving checks passed with that change. Local website checks also passed (12 general and nine header checks). This changes loading of the existing film; no new generation or credits were used.


## Lighter website delivery — October 30, 2026

Forma and the legacy UI Tool page now use `videos/forma/brand-transformation-web.mp4`: the same 14.041667-second scene, encoded at 1280×720, H.264/yuv420p, 24fps, CRF 25, no audio, faststart and six-frame keyframes (quarter-second seeking). The file is 4,064,679 bytes versus 8,788,956 bytes for the archived 1080p version, a 53.8% transfer reduction and 55.6% fewer pixels per decoded frame. Activation-only prebuffering remains in place to preserve reliable paused seeks.

The walkthrough clips now have no source until near their section and release it when offscreen or the page is hidden/left. A viewed walkthrough retains its playback position for returning to the section. The feature register initializes only near its section, renders 100 matching requirements at a time, and keeps full-list search and filters. This reduced initial Forma DOM elements from 12,810 to 650 in the browser check. The new static web icon is 256×256 instead of decoding the 1254×1254 app asset for small website icons.

## Retired assets — October 30, 2026

The unused original WebM captures, old recorded header, earlier generated brand film and larger transformation copy were archived outside the website and removed from deployment. The three active MP4 walkthroughs and optimized transformation header remain. Historical manifest records explicitly mark retired files; their hashes are preserved.
