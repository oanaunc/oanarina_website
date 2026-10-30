# Website motion assets

`architectureapps.html` has an architecture-only header featuring Archi Tool, AI Architecture Plan to Video, AI Architecture Plan, AI Home Makeover and AI Architecture Render. Its poster is `images/apps/architecture-apps-header.jpg`; its silent eight-second camera-glide video is `architecture-apps-header.mp4`. The page uses the shared forward/reverse scroll animation, motion toggle and static fallback. `architecture-apps-header-source.json` records the screenshots and local video-render command.

The original 24 local menu pages retain their complete HTML content and original styling. Each adds only the shared motion CSS, manifest, and JavaScript. The original header image remains underneath its generated film, including when motion is disabled or the media cannot load.

`js/motion-manifest.js` maps each page to its film and original header reference. The homepage uses two films for its original two slideshow images. The 3D models and architecture publications pages share a film because their original header image is the same.

Scroll down to move forward through the film; scroll up to reverse it. The header briefly stays in view during this sequence. The existing carousel, navigation, social links, gallery filters, lightboxes and contact form remain in place. The Motion toggle persists locally; reduced-motion preferences and data-saving connections avoid loading the film. Skip animation jumps to the original content below the header.

Films were generated with Higgsfield Seedance 2.5, Google Veo 3.1 Lite, and Wan 2.7. `generations.json` records the plugin job IDs, models and source result URLs. Videos are silent H.264, with fast-start metadata and keyframes every six frames for seeking. Some Veo results contained black side mattes; the recorded crop removes those borders before CSS frames the film over the original background.

Run `python3 scripts/prepare-motion.py` from the repository to retrieve missing completed assets from the generation record. Requires ffmpeg on PATH. Existing output files are skipped. Superseded films were removed from deployment on October 30, 2026 after an exact runtime-reference audit, with local archival copies outside the website. Historical generation metadata remains for provenance. The preparation script restores only current runtime assets and cannot resurrect retired alternatives. See `docs/performance/2026-10-30-retired-videos.json`.

Validation: all 24 pages mount their motion stage and original navigation; no horizontal overflow at the tested desktop size. Forward/reverse scrubbing, skip, gallery filtering, artwork lightbox, mobile navigation and motion-off were checked in the browser. The 24 HTML files match their original content exactly after removing the four new loader lines. The website is deployed through the repository FTP workflow.
