# One Last Kiss drawing header

The Drawings header starts with Oana Rinaldi's supplied 2025 ink drawing, then gently unwinds its dense shading and hair into spare outlines of the two kissing profiles. The composition remains monochrome. Higgsfield Seedance 2.5 generated the ten-second animation using the original drawing as the starting image. The 70-credit preflight estimate is not a billing receipt.

The deployed film is `media/motion/drawings-one-last-kiss.mp4`: 2,115,762 bytes, 1280×720, 24fps, 10.041667 seconds, H.264/yuv420p, CRF 27, no audio, faststart and twelve-frame keyframes for half-second random access. Its matching first-frame poster is 168,161 bytes. The original drawing and original generated download remain outside the deployed website. The prompt and hashes are preserved here.

The shared engine buffers this short film only when its header is near view, motion is allowed, the page is visible and data saving is off. It releases its media source and decoder offscreen, on pagehide, while hidden and when motion is disabled. The title and existing artwork-store links sit below the kiss. Static and mobile layouts retain the artwork, and Skip animation remains available.

Browser checks confirmed 720p decoding, forward and reverse seeking, source removal with readyState 0 offscreen, motion-off release and static fallback. There is no horizontal overflow in the tested mobile viewport. Full FFmpeg decoding, faststart, the size budget and runtime asset references were checked separately.

Superseded headers and unused Forma capture originals were archived outside the website and removed from deployment: 22 videos, 82,023,368 bytes. `docs/performance/2026-10-30-retired-videos.json` preserves their hashes and reasons. Active galleries, tutorials and the contact backdrop were retained. `scripts/prepare-motion.py` now restores only runtime-referenced films, so historical generation records cannot recreate retired alternatives. All motion-manifest script URLs were versioned to refresh current pages.
