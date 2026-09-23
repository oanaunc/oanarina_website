# Oanarina Photo Editor guide

## Documents and files

Choose **File → New Canvas** for a preset or custom dimensions. **Open** creates a tab from a supported image or `.comp` project. **Import Images** adds images as layers to the current composition. Use tabs to keep separate projects open.

**Save** stores an editable `.comp` project; **Save As** includes a Format dropdown: Oanarina Project (.comp), JPEG, PNG, and TIFF. JPEG includes a quality slider and uses white for transparent areas. Image formats save a flattened copy without changing the editable project’s saved state. Save this project before exporting if you want to return to its layers. **Export PNG** preserves transparency. **Export TIFF** produces a lossless flattened image with alpha and document resolution. **Export JPEG** has a quality preview and produces a flattened image. JPEG does not support transparency.

The app imports JPEG, PNG, HEIC and TIFF. It uses an 8-bit sRGB workflow. PSD interchange, RAW development and CMYK/Lab editing are not supported in this version.

## History and undo

Expand **History** in the right panel and click a row to restore that document state. The current row is highlighted. Later grey rows remain available: click one to move forward. Starting a new edit from an earlier state replaces those future rows. Undo and Redo also work with Command-Z and Shift-Command-Z.

History includes layer changes, pixels, geometry and selections. It belongs to the open tab, is limited by memory and entry count, and is not saved inside the project. After older entries are discarded, the first row reads **Oldest Retained State**. Save status follows the current revision, so returning to the saved state removes the modified indicator.

Finish or cancel an open editing panel before switching history states. A pending gradient is discarded by the first Undo.

## Left toolbar

Click a small corner to open that tool's variants; right-click or hold the main button also opens them. The main icon remembers your chosen variant. Tab cycles modes for tools that support it. The toolbar includes move, selections, crop, brush/eraser, healing, clone, blur/smudge/liquify, gradients, shapes, text, eyedropper, hand and zoom.

Hold Space to pan temporarily. Command-0 fits the canvas and Command-1 displays actual pixels. Use the View menu for zoom, rulers, grids, guides and snapping.

## Layers, masks and effects

Importing an image creates a layer. Select layers in the right panel, drag to reorder, or use **Layer → Move Layer Up/Down**. Change opacity and blending above the stack. Group selected layers to organize a composition. A clipping mask uses another layer's coverage; a layer mask hides portions of its own layer.

**Layer → Layer Mask** offers:

- **Reveal All:** a white mask; paint black to hide pixels.
- **Hide All:** a black mask; paint white to reveal pixels.
- **Reveal Selection:** white inside the selection and black outside.
- **Hide Selection:** black inside the selection and white outside.
- **Disable/Enable Mask:** compare the unmasked and masked layer without deleting the mask.
- **Delete Mask:** remove the mask; Undo restores it.

Selection-based masks consume the selection in the same history step. Mask editing and image editing are separate targets in the Layers panel. Linked masks follow layer movement; unlinked masks stay independently positioned.

**Layer → Layer Effects** opens Stroke, Drop Shadow, Color Overlay and Inner Shadow. Adjust the effect, then accept or cancel its panel. Effects stay editable and survive saving the project.

**Merge** combines the applicable selected layers. **Flatten Image** replaces the entire stack, including hidden layers, with the visible composite. Transparency remains. Undo restores the stack.

## Arrange and transform

With one individual layer selected, **Layer → Align** aligns its transformed bounds to the canvas. With multiple individual layers selected, alignment uses their combined bounds. Choose left, center, right, top, middle or bottom. Rotated layers align by their displayed bounds.

**Distribute** requires at least three selected individual layers. It spaces horizontal or vertical centers evenly between the two outermost centers. Stack order does not change. Select individual layers rather than folders for alignment and distribution. Each operation is one undo step.

Use **Transform Layer** to move, scale or rotate; when the applicable pixel selection is active, the command becomes **Transform Selection**. Layer flips change selected content. Canvas flips and **Image Rotation** change the whole composition, including masks, selection and guides.

**Canvas Size** changes the document bounds using an anchor; **Image Size** changes image dimensions/resolution through the resize dialog. **Duplicate Document** opens an independent unsaved copy in a new tab.

## Crop and perspective

The Crop tool trims ordinary rectangular compositions. For a photographed page, poster or other flat surface, choose **Image → Perspective Crop**. Position its four corners around the surface, check the preview and choose automatic or explicit output dimensions. **Create Corrected Copy** opens a flattened corrected image in another tab, preserving the original layered document. Crossed or collapsed quadrilaterals and invalid dimensions are rejected.

## Selection and retouching

Use rectangular/elliptical marquee, lasso or magic selection tools. Hold Shift to add and Option to subtract. **Select → All, Deselect, Inverse** manage coverage. Load the active layer's pixels or a mask's black areas as a selection. **Expand, Contract and Feather** adjust its boundary. Painting and pixel adjustments respect the selection.

For retouching, choose Brush, Eraser, Healing or Clone Stamp. Option-click establishes the clone source. Bracket keys change brush size; X exchanges foreground/background colors. Use the tool header for brush strength and other options. **Content-Aware Fill** fills a selection from surrounding pixels on the active layer. **Remove Background** creates a mask; its Advanced mode provides edge refinement, contrast and edge shift.

## Color and finishing

Image-menu adjustments change the selected visible image layer. For changes that remain editable, choose one of fourteen **New Adjustment Layer** types and reopen its settings later. An adjustment layer's opacity and mask control its effect.

Filter panels offer exact numeric fields, a preview toggle, Reset, Cancel and OK. Wait for automatic previews to finish before accepting. Spatial settings such as blur radius refer to image pixels, with preview scaling handled by the app.

| Control | What to adjust |
| --- | --- |
| Curves / Levels | Tonal shape, black/white points and midtones |
| Hue/Saturation | Color and saturation of the active image |
| Exposure | Exposure, offset and gamma |
| Brightness / Contrast | Overall brightness and tonal separation |
| White Balance | Temperature (2000–12000 K) and tint; reset is 6500 K, zero tint |
| Shadows / Highlights | Raise Shadows from zero to lift dark areas; reduce Highlights from one to recover bright areas |
| Color Balance | Cyan/red, magenta/green and yellow/blue shifts |
| Vibrance | Color intensity, from −1 to 1 |
| Black & White / Sepia | Conversion strength |
| Posterize | Number of tonal levels, from 2 to 30 |
| Gradient Map | Map shadows and highlights to selected colors; optionally reverse |
| Gaussian / Motion Blur | Softness, or streak angle and distance |
| Unsharp Mask | Sharpening radius and intensity |
| Grain / Add Noise | Texture; noise supports uniform/Gaussian and monochromatic modes |
| Lens Correction | Positive corrects barrel distortion; negative corrects pincushion distortion |
| Bloom | Light glow radius and intensity |
| Vignette | Edge darkening intensity and radius |
| Pixelate | Mosaic cell size |
| Find Edges | Outline intensity |

## Type and shapes

**Type → New Text Layer** starts text inside the current canvas. **Edit Text** reopens the selected editable text layer. The tool header controls font, size, spacing and alignment. The shape flyout contains rectangles, ellipses, lines, triangles, hexagons and stars.

**Rasterize Layer/Text** retains the existing full-resolution appearance, placement, effects and mask while removing editable text/shape metadata. Undo restores editability. Use it when you intentionally want to continue with pixel editing.

## When a command is grey

Commands require the relevant target: a document, an individual image layer, editable text, a mask, a selection or multiple layers. Open editing panels and operations in progress also disable conflicting commands. Accept or cancel the panel, then select the intended target. For color adjustments, select one visible image layer rather than its mask or a folder.

### Layer right-click menu

Right-click a layer row to open its commands. Right-clicking a layer already in a selection preserves that selection; right-clicking another row selects that layer. Merge Layers combines the selection, Merge Down combines a single layer with the layer beneath it, and Merge Group combines a folder’s contents. Undo restores the original layers.

The menu also includes batch duplicate/delete/show/hide, grouping, masks and clipping, layer effects, editable text/adjustments, rasterizing, arranging, alignment, distribution, transforms and flattening. Commands that do not apply to the selection are disabled. Duplicating selected groups includes their children once and preserves clipping relationships between copied layers.

## Paint Bucket

Choose the bucket icon on the left or press **Shift-G**. Click the image to fill similar colors with the foreground color. Tolerance controls color matching; Contiguous limits the fill to connected pixels. Turn it off to fill matching colors throughout the canvas. Sample All Layers reads the visible composite while painting only the selected layer. Opacity sets the fill strength; number keys work as they do for brushes. Existing selections limit the painted area, and Undo reverses the fill. Select the image thumbnail, not a layer mask, to use this tool.

## Copy by dragging

With the Move tool (**V**), hold **Option/Alt** and drag to copy the selected layer or layers. Add **Shift** to keep the copy on the horizontal or vertical axis. Press Option before the first movement; simply clicking with Option does not create a copy. Undo removes the copied layers and their movement together.

## Window panels

Open **Window → Arrange, Character, Paragraph, Color, Brushes, Layers, or History**. These movable panels stay above the editing window while the app is active.

- Arrange aligns one layer to the canvas or several layers to their combined bounds. Distribution needs at least three layers. Flip and Duplicate Selected Layers are also available.
- Character controls the font face, size, tracking, leading and text color. Paragraph controls alignment and leading. Select editable text to change it, then Apply or Cancel; with no text selected the controls set defaults for new text.
- Color opens the foreground/background color pickers. Brushes provides diameter, hardness and opacity.
- Layers exposes the normal layer list and its context menu. Click a History entry to move backward or forward through edits.
