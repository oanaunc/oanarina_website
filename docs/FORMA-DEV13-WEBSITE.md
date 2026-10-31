# Forma dev.13 website release

Exact accepted installer: `downloads/ui-tool/Forma-0.2.0-dev.13.dmg`, **37,031,664 bytes** (37.0 MB), SHA-256 `fc7f237532397d79f4dbde10d4d36dc6bf62f6e858f208bd3a50b9c19cdd9588`. App and DMG both returned Accepted from Apple notarization, tickets are stapled, and Gatekeeper reports Notarized Developer ID for both. A read-only DMG mount matches the signed bundle across 374 files, and the signed app from that mount passes the smoke and lifecycle (37) checks. Intel runtime is not validated on real hardware.

The release source is application commit `1fa5e3949ea8324b738967e090acd7cba53b5229`; a later documentation-only commit corrects the validation record. The demo refreshed from a clean checkout at `0.2.0-dev.13`, 370 files. Dev.12 and earlier installers and checksums remain archived.

Page, compatible legacy page, guide and privacy copy target dev.13. The register records 2,022 requirements across 60 categories: 1,490 implemented, 332 partial and 200 planned. The page describes Forma as an offline Mac app and states that multiplayer, accounts, hosted publishing and AI generation are not included. Historical dev.5 recordings keep their labels; they are not recaptured, so they do not show the new interface.

Website validation ran against the local byte-range-aware preview: `scripts/verify-forma.mjs` 13 groups and `scripts/verify-forma-header.mjs`, with no page errors.
