# Forma dev.14 website release

Exact accepted installer: `downloads/ui-tool/Forma-0.2.0-dev.14.dmg`, **37,905,913 bytes** (37.9 MB), SHA-256 `9ac5b38374fd58c196337c45ffd477323b9a0970a3bc6de7c2a6c8dfce181ccb`. App and DMG both returned Accepted from Apple notarization, tickets are stapled, and Gatekeeper reports Notarized Developer ID for both. A read-only DMG mount matches the signed bundle across 374 files. The signed app from that mount passes lifecycle (37) and native acceptance (85) checks. Its smoke check failed once with output not captured, during a moment of system strain, and passed three reruns. Intel runtime is not validated on real hardware.

Release source is application commit `51d4a1195bfbc2fe2791a2d7ad00a64bee9a6fe5`. Dev.13 and earlier installers and checksums remain archived. Historical dev.5 recordings keep their labels and do not show the current interface.

The register records 1,538 implemented, 287 partial, 13 planned and 184 retired requirements.
