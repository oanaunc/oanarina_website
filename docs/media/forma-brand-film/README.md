# Forma sculptural brand film

This is generated artistic brand imagery for the Forma website header. It is not an app recording, an editor feature, or a Figma reference. The Design, Whiteboard and Slides walkthroughs below the header remain actual recordings of synthetic documents in the development editor.

- [Source artwork](source-art.png), generated with the built-in image-generation tool.
- [Image prompt](image-prompt.txt).
- [Image-to-video prompt](video-prompt.txt).
- [Browser film](../../../videos/forma/brand-film.mp4).
- [Static poster](../../../images/apps/forma/brand-film-poster.jpg).
- [Hashes and encoding manifest](../../../videos/forma/MEDIA-MANIFEST.json).

The source image was animated through Higgsfield Seedance 2.5, requesting ten seconds at 1080p. The generation completed successfully. The job estimated 160 credits; this records its estimate, not a billing receipt. No private account or project identifiers are needed to reproduce the art direction.

The original output was 1920 × 1080, 24 fps, 10.041667 seconds, HEVC Main 10 with BT.709 colour and no audio. Its SHA-256 is recorded in the manifest. The public copy is H.264, 8-bit yuv420p, with faststart and a twelve-frame keyframe interval (half a second) to support the shared website scroll timeline. The original download is retained in the release workspace; the optimized public copy is linked above.

The shared Photo Editor / Archi Tool header structure and scroll engine are preserved. Motion on/off, Skip animation and the reduced-motion static poster remain available. The generated backdrop uses a distinct filename, so cached pages using the old app-recording backdrop continue to work.

## Sculptural transformation revision

The current header uses [the transformation film](../../../videos/forma/brand-transformation.mp4), generated from the same source artwork with [this prompt](transformation-prompt.txt). It keeps the starting composition, then unfurls the ribbons across the scene and rebuilds them into a large layered iris/portal. The opening poster remains unchanged. The earlier ten-second film is retained at its original URL for cached pages.

The new Seedance 2.5 generation requested 14 seconds at 1080p with no audio; its preflight estimate was 224 credits, not a billing receipt. The completed original is 1920×1080, 24fps, 14.041667 seconds, HEVC10-bit BT.709. The public H.264 8-bit copy retains half-second keyframes, faststart and no audio for forward/reverse scroll seeking. Exact source/output hashes and encoding are in the media manifest. This is artistic brand imagery, separate from actual app footage.

## Cold seek validation — October 30, 2026

The active Forma and legacy `ui-tool.html` header films use `preload="auto"` after the existing visibility, proximity, reduced-motion and data-saving checks permit loading. Inactive films still have no source; leaving the area, hiding the document or disabling motion releases the decoder.

A live Chromium diagnostic reproduced stalled paused seeks with `preload="none"`, despite correct, fast HTTP byte ranges and the expected film checksum. A controlled activation-only change buffered the 8.79 MB film and completed the same six alternating seeks (60%, 20%, 98%, 5%, 85%, 48%). The unchanged nine header checks, legacy cold seeks, visibility/proximity release, reduced motion and forced data-saving checks passed with that change. Local website checks also passed (12 general and nine header checks). This changes loading of the existing film; no new generation or credits were used.
