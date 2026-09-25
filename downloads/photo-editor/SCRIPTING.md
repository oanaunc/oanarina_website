# Scripting Oanarina Photo Editor

Scripts are JSON files that list editing steps, in the same form as recorded actions. To run one, choose File → Automate → Run Script…. To write one, record an action in Window → Actions and choose ⋯ → Export as Script….

## File format

```json
{
  "format": "oanarina-photo-editor-script/1",
  "steps": [
    { "flipCanvas": { "horizontal": true } },
    { "filter": { "kind": "Posterize", "settings": { "posterizeLevels": 3, "…": "…" } } },
    { "invert": {} },
    { "selectAll": {} }
  ]
}
```

The `format` field must be exactly `oanarina-photo-editor-script/1`. Files with any other value are refused.

## Steps

| Step | Arguments | What it does |
| --- | --- | --- |
| `filter` | `kind` (a Filter or Adjustments menu title), `settings` (all filter settings) | Runs that filter on the active layer (or its mask), inside the selection. |
| `rotateCanvas` | `degrees` | Rotates the whole document. Multiples of 90 are lossless. |
| `flipCanvas` | `horizontal` | Mirrors the whole document. |
| `imageSize` | `width`, `height` | Resamples the image. |
| `invert` | — | Inverts the active layer or mask inside the selection. |
| `fill` | `red`, `green`, `blue` (0–1) | Fills the selection, or the layer when nothing is selected. |
| `selectAll`, `deselect`, `invertSelection` | — | Selection commands. |
| `newLayer`, `duplicateLayer`, `flatten` | — | Layer commands. |
| `layerOpacity` | a number from 0 to 1 | Sets the selected layers' opacity. |
| `layerStyle` | layer effects | Replaces the selected layers' effects. |

Filter settings are easiest to get by recording: run the filter once with the settings you want, then export the action. Window → Commands lists every command a script can run, with a short description.

## Errors

A script stops at the first step that fails. The error names the step's number and title and gives the reason, for example "Step 2 (Image Size 0 × 0) failed: …". The steps before it stay applied, and each one can be undone separately.

## Batch

File → Automate → Batch Action… runs a saved action on a set of image files. It writes the results to a folder in a format you choose. When a file with the same name already exists, it can skip that image, overwrite the file, or add a number to the new name. It can also either stop at the first error or keep going and list the failures at the end.
