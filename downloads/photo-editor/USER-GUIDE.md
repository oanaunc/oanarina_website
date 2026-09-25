# Oanarina Photo Editor guide

## Documents and files

Choose **File → New Canvas** for a preset or custom dimensions. **Open** creates a tab from a supported image or `.comp` project. **Import Images** adds images as layers to the current composition. Use tabs to keep separate projects open.

**Save** stores an editable `.comp` project; **Save As** includes a Format dropdown: Oanarina Project (.comp), JPEG, PNG, and TIFF. JPEG includes a quality slider and uses white for transparent areas. Image formats save a flattened copy without changing the editable project’s saved state. Save this project before exporting if you want to return to its layers. **Export PNG** preserves transparency. **Export TIFF** produces a lossless flattened image with alpha and document resolution. **Export JPEG** has a quality preview and produces a flattened image. JPEG does not support transparency.
**File → Export Selected Layers…** saves each selected layer as its own full-canvas PNG, JPG or TIFF. A selected group exports as one composite; selecting its children as well does not duplicate them. Choose a destination, scale (25%, 50%, 100%, 200% or 400%) and JPG quality in the folder dialog. Enable Trim transparent margins to crop to nonzero alpha before scaling. Faint edge pixels are retained; empty layers keep their canvas bounds. Output is limited to 30,000 pixels per side and 100 megapixels, with document resolution preserved. PNG/TIFF retain transparency; JPG uses white. A fresh folder contains numbered, sanitized layer filenames, so existing exports are preserved. Selected hidden layers are exported, while hidden children inside a selected group stay hidden. Ancestor opacity and masks apply; unrelated artwork and adjustments outside the selected group are excluded. Standalone adjustment layers are skipped. Add an optional filename prefix and check its preview before exporting. A progress sheet shows the current layer and saved-file count. Cancel (or Escape) waits for the current image operation, then removes this batch’s files; existing export folders remain untouched. Name templates and custom bounds are described under Artboards, slices, frames and pattern preview.


The app opens JPEG, PNG, HEIC, TIFF, WebP, GIF, BMP, AVIF, PSD, GIMP XCF, SVG, PDF and multi-page TIFF, camera RAW files (through Develop RAW), and OpenEXR and Radiance HDR files (tone mapped when opened). Layers are 8 bits per channel. Image → Mode changes how the document is shown and exported (CMYK, Lab, Indexed, Bitmap or Duotone), and Blend in Linear Light composites in 16-bit floating point.

## History and undo

Expand **History** in the right panel and click a row to restore that document state. The current row is highlighted. Later grey rows remain available: click one to move forward. Starting a new edit from an earlier state replaces those future rows. Undo and Redo also work with Command-Z and Shift-Command-Z.

History includes layer changes, pixels, geometry and selections. It belongs to the open tab, is limited by memory and entry count, and is not saved inside the project. After older entries are discarded, the first row reads **Oldest Retained State**. Save status follows the current revision, so returning to the saved state removes the modified indicator.

Finish or cancel an open editing panel before switching history states. A pending gradient is discarded by the first Undo.

## Left toolbar

Click a small corner to open that tool's variants; right-click or hold the main button also opens them. The main icon remembers your chosen variant. Tab cycles modes for tools that support it. The toolbar includes move, selections, crop, brush/eraser, healing, clone, blur/smudge/liquify, gradients, shapes, text, eyedropper, hand and zoom.

Hold Space to pan temporarily. Command-0 fits selected layers (or the canvas when no layer is selected); Shift-Command-0 fits the canvas and Command-1 displays actual pixels. Use the View menu for zoom, rulers, grids, guides and snapping.

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

Choose the bucket icon on the left or press **Shift-G**. Click the image to fill similar colors with the foreground color. Tolerance controls color matching; Contiguous limits the fill to connected pixels. Turn it off to fill matching colors throughout the canvas. Sample All Layers reads the visible composite while painting only the selected layer. Opacity sets the fill strength; number keys work as they do for brushes. Existing selections limit the painted area, and Undo reverses the fill. Select a mask thumbnail to fill its grayscale coverage instead: black hides and white reveals. Mask fills use the mask itself for color matching; Sample All Layers applies only to image pixels.

## Copy by dragging

With the Move tool (**V**), hold **Option/Alt** and drag to copy the selected layer or layers. Add **Shift** to keep the copy on the horizontal or vertical axis. Press Option before the first movement; simply clicking with Option does not create a copy. Undo removes the copied layers and their movement together.

## Window panels

Open **Window → Arrange, Character, Paragraph, Color, Brushes, Layers, History, Navigator, Histogram, or Info**. Panels open as tabs beside the canvas. Drag a panel tab to the left or right dock, or onto another tab to reorder it. The arrow button detaches the selected panel into a floating window; use Dock Left or Dock Right to return it. Floating panels stay above the editor while the app is active. Use the plus menu to add a panel, the panel’s × button to hide it, and **Window → Reset Workspace** to return to Layers and History on the right. Panel placement and the selected tabs are remembered when you reopen the app. Collapse a dock with its sidebar button; its compact tabs expand it again. Window → Workspaces saves, applies, renames and deletes named layouts. Floating positions restore within the available displays.

- Arrange aligns one layer to the canvas or several layers to their combined bounds. Distribution needs at least three layers. Flip and Duplicate Selected Layers are also available.
- Character controls the font face, size, tracking, leading and text color. Paragraph controls alignment and leading. Select editable text to change it, then Apply or Cancel; with no text selected the controls set defaults for new text.
- Color opens the foreground/background color pickers. Brushes provides diameter, hardness and opacity.
- Layers exposes the normal layer list and its context menu. Click a History entry to move backward or forward through edits.


## Inspection panels and utility filters

**Navigator** shows a thumbnail and viewport outline. Drag in the thumbnail to pan; use its zoom field, slider, Fit Canvas, Fit Layers or 100% buttons. **Histogram** shows luminance or an individual RGB channel, optionally limited to the selection. It explicitly reports the sampled preview resolution (up to 512 pixels on the longest side), rather than claiming a full-resolution pixel count. **Info** reports image coordinates, RGB and alpha from the composite. Choose a point sample or a 3, 5, 11 or 31-pixel square average; averages clip at canvas edges and weight color by alpha.

**Image → Threshold** converts the selected image layer to black and white at an adjustable threshold. **Filter → High Pass**, **Median** and **Noise Reduction** provide live preview, reset, cancel and one-step undo. Median has radius and percentile controls (see below); Noise Reduction exposes noise level and sharpness. These are pixel edits, respect selections and retain alpha and existing layer effects.

## Additional selection and document commands

The Marquee corner includes **Single Row** and **Single Column**. Click or drag to choose a one-pixel strip spanning the canvas. **Select → Border** selects a band centered on the current outline at the entered total width, clipped to the canvas. **Shift-Command-D** reselects the last deselected selection, including its feathering.

**Layer → Distribute Gaps** spaces three or more selected layers evenly edge to edge; the Arrange panel offers the same controls.

**File → New from Clipboard** creates an sRGB document with the clipboard image's pixel dimensions. **Save a Copy** writes a separate project or flattened image while keeping the active project's path and unsaved state. **Revert to Saved** confirms before replacing the current project and clearing its session history.

## Recovery copies

Changed, idle documents are checkpointed every 30 seconds in the app's Application Support recovery folder. Checkpoints never overwrite an explicit save. After an interrupted session, the editor offers to open recovered copies as unsaved documents; **File → Recover Documents** offers them again if you chose Later. A running editor's checkpoints are excluded. Saving or deliberately closing a document clears its checkpoint; a cancelled Quit retains it.

Recovery retains the latest completed project checkpoint, not the undo history, temporary selections or uncommitted previews. Edits since that checkpoint can be lost. Keep using Save for work you need to retain.


## Saved selections and smoothing

Open **Select → Saved Selections** or **Window → Selections**. Enter a name and choose **Save Current Selection**. Load restores the outline and feathering; Combine offers Add, Subtract and Intersect. The Edit menu replaces a saved region with the current selection, renames it using the name field, or deletes it. Each change is undoable. Names are unique within the document; up to 64 selections fit within the combined 1 MB selection-data budget.

Saved regions follow canvas rotation, flips, crop offsets and resizing, and are copied by Duplicate Document. Loading clips an outline to the current canvas. Nonuniform image resizing scales feathering by the geometric mean of the horizontal and vertical scale factors. Combining uses outline geometry, the selection tool's current antialias setting and zero feather; Load by itself preserves the saved feather.

**Select → Smooth** rounds sharp outer corners and removes narrow protrusions or islands using the entered radius. It never extends beyond the original outline; a radius larger than a small region can leave an empty selection. Undo restores the original outline. Intersect is also available directly in the selection tool's Mode controls; it keeps only overlap with the current selection.

**Layer → New Adjustment Layer → Threshold** creates an editable threshold adjustment with opacity and masks. Reopen its settings to change the threshold; the panel shows a sampled source histogram and threshold marker. The histogram covers the full source before selection/mask clipping. The Image-menu Threshold remains a pixel edit.

Saved selections and Threshold adjustment layers require at least `.comp` version 9; Channel Mixer layers require version 10. Earlier project versions still open. Projects without these resources continue to save as version 8. Named selections are included in recovery checkpoints. Canvas size and crop operations retain editable text, shapes and layer-effect metadata; Image Size still rasterizes transformed text/shapes, while retaining effect settings in pixel units.

## Named History snapshots

Use **Edit → New History Snapshot** for an automatically named checkpoint, or **Window → History** to enter a name and click the camera. A checkpoint captures the document's layers, masks, adjustments, canvas settings, guides and selection. It stays available after new edits discard a redo branch or normal history trims older edits.

Click a snapshot to restore it. This adds one history edit, so Undo returns to the document you had just before restoring. Enter a new name in the snapshot name field and use that snapshot's ellipsis menu to rename it; the same menu can delete it. Capturing, renaming and deleting checkpoints do not change the artwork or its saved state. A restore that changes artwork marks it modified; a restore of identical artwork leaves redo intact.

Snapshots are temporary: closing or replacing the document clears them. They are not written to `.comp` or crash-recovery packages. Use Save a Copy to retain a permanent version. Up to 20 checkpoints share an independent 256 MB image budget; shared image instances count once. If the budget is exceeded, creation reports an error and keeps existing snapshots. Sequential undo has its own separate memory budget. Snapshot operations are unavailable during unfinished edits.

## Swatch libraries

Open **Window → Swatches**. The panel docks or floats like the other panels. The starter Studio palette includes pink, blue, turquoise and neutral colors. Click a swatch to set the foreground; its ellipsis menu also sets the background. Color swatches are disabled when targeting a mask, whose painting controls remain black and white.

Enter a library name and choose New Library. Enter a color name and choose Save Foreground Color. To rename a library or color, enter the new name in its field and use the corresponding menu's Rename command. The menus also delete colors or whole libraries; deleting a library asks for confirmation. Library changes are preferences, separate from document undo.

Libraries and the selected library are saved on this Mac and shared across document tabs. The Library menu imports and exports **Oanarina swatch JSON version 1**, containing one named library with named, six-digit sRGB hexadecimal colors. Importing creates a separate library and adds a numerical suffix for a duplicate library name. Import validates the whole file before changing any library. Limits are 32 libraries, 256 colors per library, 80 characters per name and 256 KB per imported file. ASE, ACO and GIMP palette formats are not currently supported. Colors use the app's 8-bit sRGB workflow, not spot or high-precision colors.

## Grow and Similar selections

Make a selection around colors you want to include, then use **Select → Grow…** or **Select → Similar…**. Grow adds matching pixels connected to the current selection by horizontal or vertical neighbors. Similar adds matching pixels anywhere on the canvas, including disconnected regions. Both retain the original selection.

Tolerance runs from 0 (exact matching) to 255 (all colors). These commands match against every color originally inside the selection, not an average or a reduced palette. Newly added colors do not become reference colors during the same operation, so a low tolerance does not progressively drift across a gradient. Transparency participates in matching. Specifically, each premultiplied sRGB RGBA byte must be within the tolerance of the corresponding byte of at least one original selected color, consistent with the current Magic Wand engine.

Enable **Sample All Layers** to read the visible composite. With it off, the active layer's pixels are sampled in canvas coordinates without its mask; an empty layer or group samples as transparent. These options share the Magic Wand's tolerance and Sample All Layers settings. Select a pixel layer or enable Sample All Layers when an empty active layer would give unwanted results.

The reference region is the unfeathered selection outline, rasterized at pixel centers. Existing vector edges, antialiasing and feather settings are retained when adding the new pixels. A selection too small to enclose a pixel center adds nothing. Successful changes are one undo step; no-op matching preserves redo. Cancel closes the dialog without changing artwork. Matching runs off the main thread after the sample is rendered. There is no live preview or mid-calculation cancel control.

The current implementation supports canvases up to **16 million pixels**, bounding its temporary raster buffers, exact color index and flood queue. Larger canvases report an error without changing the selection. Extremely detailed results may also be refused by the existing outline complexity limit. This implementation does not yet provide Color Range's sampled-color/fuzziness preview workflow.

## Properties and object guides

Open Window → Properties; dock or float it like other panels. Selection shows layer name, visibility, blend/opacity, mask controls and numeric position, dimensions and clockwise rotation. Multiple selected pixel layers transform together. Width and height are independent. Apply Geometry creates one undo step; unlinked masks transform separately, while linked masks follow their layer. Group-mask geometry is unavailable here.

Editable shapes expose fill hex and rectangle corner radius. Apply Shape changes the entire object, preserving its placement, masks and effects, regardless of the pixel selection. Painting or filtering retires the editable shape. Text and adjustment layers provide buttons to their existing editors.

Choose Document for pixel dimensions, print size and resolution (1–9600 ppi). Apply Resolution updates print metadata without resampling pixels and is undoable.

Create Guides, or View → Guides from Selected Layers, offers Edges, Centers, or both. Guides use axis-aligned transformed object bounds, including hidden children of selected groups; they do not trim transparent pixels or include effect extents. Duplicate positions are skipped, off-canvas coordinates omitted, and locked guides prevent creation. Exceeding 1000 guides rejects the operation without partial changes. Creation is a single undo step; repeating it without new positions adds no history entry.

## Multi-stop gradients

Window → Gradients opens the dockable preset library. Choose a preset, or edit its name, color stops and interpolation in the draft. Each stop has a position, RGB hex color and opacity. Endpoints remain at 0% and 100%; Add Stop splits the widest gap and Remove deletes an interior stop. Enter changes and click Update Stop before using or saving them. Linear interpolates evenly; Smooth eases each transition (sampled smoothstep). The checkerboard preview shows transparency.

Use Gradient selects the existing Gradient tool and copies the draft into its settings. Drag on the canvas and choose Apply in the options bar; Cancel discards the preview. Using another draft while a gradient is pending replaces its colors without accumulating paint. Linear/radial shape, Reverse and overall Opacity remain in the options bar. Reversal mirrors both colors and stop positions. Masks use Rec. 709 luminance for RGB stops. The gradient respects the current selection and the existing layer/mask painting constraints. Applying creates one undo step and rasterizes the result; reopening its gradient geometry afterward is not yet supported.

Save New creates a named preset; Update Preset replaces the selected one. Library → Import/Export exchanges the entire library as version-1 Oanarina JSON. Imports append independent copies and suffix duplicate names, never overwrite existing presets. Libraries allow 128 presets with 2–16 distinct stops each, and imports are limited to 512 KB. Presets persist locally across documents and relaunches, separately from .comp projects. Drafts reset when choosing another preset or rebuilding the panel; save changes before switching. Adobe GRD files are not supported.

## Channel Mixer

Image → Channel Mixer edits the active image layer, respecting the pixel selection. Select an output channel (Red, Green or Blue), then set its red/green/blue source contributions and Constant from −200% to 200%. Total shows the sum of source contributions: 100% with zero Constant preserves neutral brightness; other totals brighten or darken it. Values are clipped to the displayable range and alpha stays unchanged.

Monochrome uses an independent set of weights for all three output channels. Switching modes retains the RGB and monochrome settings within this edit. Reset Channel resets the visible row; Reset All restores identity RGB and default grayscale weights. Quick presets swap red/blue or isolate a source channel in monochrome. Preview compares with the original; Cancel discards changes and OK creates one undo step.

Layer → New Adjustment Layer → Channel Mixer (or the Layers panel adjustment button) creates an editable layer affecting the composite below it. Its mask, opacity and blend mode use the existing adjustment-layer behavior. Double-click the layer thumbnail to reopen its settings. The pixel selection restricts a direct image adjustment; use a layer mask to restrict an adjustment layer.

Projects containing Channel Mixer adjustment layers use .comp version 10 and require this build or newer. Versions 1–9 still open; projects without this adjustment keep the earlier applicable format. JPG/PNG exports contain the rendered result. Mixing uses the app's 8-bit sRGB workflow, not high-bit-depth or CMYK channels.

## Offset

Filter → Offset shifts the active image layer's pixels by whole layer pixels: positive Horizontal values move them right, positive Vertical values move them down. Edges chooses what fills the uncovered side: Wrap Around brings the pixels that leave one edge back in at the opposite edge, Transparent leaves the gap clear, and Repeat Edge Pixels stretches the last row or column. Half Width / Height moves the original edges to the center, which is useful for checking and retouching seamless textures.

The preview is rendered at full resolution, so it matches the committed result exactly. Offset respects the pixel selection, keeps the layer's placement and alpha, and creates one undo step on OK; Cancel restores the original pixels.

## Dilate, Erode and Emboss

Filter → Dilate and Filter → Erode set each red, green and blue value to the brightest (Dilate) or darkest (Erode) value within a square Radius of 1–50 layer pixels. Dilate widens light areas and thins dark lines; Erode does the opposite. Both work on unpremultiplied color, ignore fully transparent neighbors so a cutout's surroundings don't bleed in, and keep every pixel's alpha, so the layer's outline doesn't change.

Filter → Emboss treats the layer's brightness as a relief and lights it. Azimuth sets the light's direction (0° from the right, 90° from the top), Elevation its height above the canvas and Depth the relief's steepness. Emboss replaces the colors with gray shading; Bump Map keeps them and shades the slopes, leaving flat areas unchanged. Transparent edges count as low ground, so cutout outlines stand out. Alpha is preserved.

All three render their preview at full resolution, respect the pixel selection, and create one undo step on OK; Cancel restores the original pixels. Large radii on very large layers can take a few seconds.

## Color to Alpha and Tile Seamless

Filter → Color to Alpha turns a color into transparency. Choose it with the color well, or with White, Black, Foreground or Background. Pixels of exactly that color become fully transparent; blended pixels keep only the part that differs from it, so the layer placed over a fill of that color looks unchanged. This removes a white paper or black background from line art and glows without leaving a halo. Existing transparency is kept.

Filter → Tile Seamless blends the layer with a copy offset by half its width and height. The copy fully replaces the border pixels and fades out toward the center lines where its own seams lie, so the result repeats without visible edges. Check it with Filter → Offset → Half Width / Height, using Wrap Around. Both filters respect the pixel selection and create one undo step on OK.

## Reverse Layer Order

Select two or more layers in the same folder and choose Layer → Reverse Layer Order, or Arrange → Reverse Layer Order in the layer context menu. The selected layers swap into each other's positions in reverse; unselected layers stay where they are, and selected folders move with their contents. When a selection spans several folders, each folder's selected layers reverse among themselves. A clipped layer that no longer sits directly above its base is released from its clipping mask, as when dragging. Undo restores the original order.

## Equalize and Ripple

Image → Equalize redistributes each red, green and blue channel so its values spread evenly from black to white, based on the active layer's own histogram. It brings out detail in flat, low-contrast images; channels that contain one value are left unchanged. Transparent pixels are ignored and alpha is preserved. With a selection, only the selected pixels change, but the histogram still comes from the whole layer.

Filter → Ripple moves pixels along a sine wave. Horizontal ripples run across the layer and move pixels up and down; Vertical ripples run down it and move pixels sideways. Amplitude is the wave's height and Period its length in layer pixels; Phase shifts the wave along. Edges chooses what fills areas the wave pulls in from outside the layer: Wrap Around, Transparent or Repeat Edge Pixels. The preview renders at full resolution.

Both respect the pixel selection and create one undo step on OK.

## Distortion filters

Filter → Whirl and Pinch twists the pixels inside a circle centered on the layer. Whirl sets the rotation at the center (up to ±720°); the twist fades to nothing at the circle's edge. Pinch pulls pixels toward the center (positive) or pushes them outward (negative). Radius 1 makes the circle touch the edges of the layer's shorter side. Pixels outside the circle don't move.

Filter → Waves adds concentric ripples around the layer's center. Amplitude is how far pixels move, Wavelength the distance between crests and Phase shifts the rings in or out. Filter → Ripple (above) makes straight rather than circular waves.

Filter → Polar Coordinates, Rectangular to Polar, wraps the layer into a disc: its top edge becomes the center, its bottom edge the rim, and left to right runs clockwise from the top. Rotation sets where the seam starts. Polar to Rectangular performs the exact inverse, which unrolls a circular image into a strip. Use it with Filter → Offset or Tile Seamless to make circular patterns.

Filter → Spherize bulges (positive Amount) or pinches (negative Amount) the ellipse inscribed in the layer, as if the image were wrapped on a sphere. At ±100% the center appears at twice or half its size. Horizontal Only and Vertical Only distort in one direction.

These filters sample between pixels bilinearly, render the preview at full resolution, respect the pixel selection and create one undo step on OK.

## Trim

Image → Trim crops the canvas to its content. Based On chooses what counts as empty border: Transparent Pixels, or the exact color of the Top Left or Bottom Right pixel (for scans and screenshots on a solid background). Trim Away limits the crop to chosen sides. Trimming looks at the visible composite; layers keep any pixels that fall outside the new canvas, as with Crop. If nothing matches on the chosen sides, the canvas is left alone and the app says so. Undo restores the original size.

## Photo Filter

Image → Photo Filter tints the active layer like a colored lens gel. Pick a color or use a preset (Warming 85, Warming LBA, Cooling 80, Cooling 82, Sepia), and set Density for the tint's strength. With Preserve Luminosity on, each pixel keeps its original brightness, so the image is tinted without darkening. It respects the pixel selection, keeps alpha and creates one undo step. Photo Filter is a direct pixel adjustment; an editable Photo Filter adjustment layer isn't available yet.

## Utility color filters

Image → Color Enhance stretches saturation so the most saturated color in the layer becomes fully saturated, keeping each pixel's hue and brightness. Grays stay gray; a layer that already contains a fully saturated color is left unchanged, and no undo step is added.

Filter → Semi-Flatten blends partly transparent pixels, such as antialiased edges and soft shadows, onto a chosen color and makes them opaque. Fully transparent pixels stay clear. Use it to prepare artwork for formats and backgrounds that only support on/off transparency.

Filter → RGB Clip limits every red, green and blue value to the Low–High range (0–255).

Filter → Extract Component shows one component of the color as gray: Red, Green, Blue, Alpha, Hue, Saturation, Value, Luminance or Lightness. Invert flips the result. Alpha produces an opaque gray image of the layer's transparency; the other components keep it.

Filter → Deinterlace removes the comb pattern of interlaced video frames. It keeps the even or odd rows (or columns) and replaces the others with the average of the kept lines on either side.

All five respect the pixel selection and create one undo step on OK.

## Checkerboard, Grid and Kaleidoscope

Filter → Checkerboard replaces the active layer's pixels with opaque squares. Size sets the square width in layer pixels, Offset X/Y shifts the pattern, and each color can be picked or set to white, black, the foreground or the background color. Filter → Grid draws opaque lines over the existing pixels, with separate horizontal and vertical Spacing, Line width, Offset and color. Apply either to a new blank layer to keep them editable separately, or use a selection to fill only part of a layer.

Filter → Kaleidoscope mirrors one wedge of the image around the layer's center into the chosen number of Segments. Rotation picks the part of the image that is repeated.

All three render their preview at full resolution, respect the pixel selection and create one undo step on OK.

## Convolution Matrix

Filter → Convolution Matrix computes each pixel as a weighted sum of its 5 × 5 neighborhood. Type weights into the grid, or start from a preset: Identity, Sharpen, Box Blur, Edge Detect or Emboss. The sum is divided by Divisor and then Offset (on the 0–255 scale) is added. Normalize divides by the sum of the weights instead; when the weights add up to zero, as in edge detection, it adds a mid-gray offset of 128 so negative and positive responses both show.

Preserve alpha (on by default) filters only the color and keeps the layer's transparency. Transparent neighbors borrow the center pixel's color, so edges don't darken. Turn it off to filter the alpha channel too, which lets a blur soften a cutout's outline. Borders chooses what lies beyond the layer's edge: Wrap Around, Transparent or Repeat Edge Pixels. The preview renders at full resolution; OK creates one undo step.

## Oilify, Symmetric Nearest Neighbor and Wind

Filter → Oilify makes an image look painted. For each pixel it looks at the neighbors within Radius, finds the most common brightness among them (split into Levels steps) and uses the average color of those neighbors, which flattens detail into patches. Larger radii take longer on big layers.

Filter → Symmetric Nearest Neighbor smooths noise and fine texture while keeping edges crisp. For every pair of neighbors on opposite sides of a pixel, it keeps the one closer in color to that pixel and averages the kept neighbors. Increase Radius for stronger smoothing.

Filter → Wind adds streaks as if wind blew across the image. Wherever brightness changes by more than Threshold, the edge color is smeared downwind for up to Strength pixels, with slightly different lengths on each line. Direction sets where the wind comes from; Blast streaks fade more slowly than Wind.

All three keep the layer's transparency, render their preview at full resolution, respect the pixel selection and create one undo step on OK.

## Dither, Bayer Matrix and Linear Sinusoid

Filter → Dither reduces each red, green and blue channel to the chosen number of Levels. Floyd–Steinberg spreads each pixel's rounding error to its neighbors for the smoothest look; Ordered (Bayer) uses a regular 8 × 8 pattern that suits retro and print-style graphics; Random adds noise before rounding; None simply rounds and shows banding. Transparent pixels are skipped and alpha is kept.

Filter → Bayer Matrix replaces the layer with the gray threshold pattern used by ordered dithering. Subdivisions sets the pattern's side (2 to 64 cells), Cell size enlarges each cell and Offset shifts it. Use it as a texture, or as a blend layer for custom screening effects.

Filter → Linear Sinusoid replaces the layer with smooth bands that alternate between two colors. Period is the band spacing, Angle its direction and Phase shifts the bands.

All three render their preview at full resolution, respect the pixel selection and create one undo step on OK.

## Image Gradient, Normal Map and Long Shadow

Filter → Image Gradient shows where and how brightness changes. Magnitude makes edges light and flat areas black; Direction shows the edge direction as a shade of gray; Both colors each edge by its direction and brightens it by its strength.

Filter → Normal Map turns the layer into a normal map for 3D and game engines, treating brighter pixels as higher. Scale sets how steep the surface is. Flat areas become the standard light blue (128, 128, 255). Turn on Invert Y for engines that use the opposite green-channel convention.

Filter → Long Shadow gives the layer's shapes a flat shadow that stretches away from them, a common style for icons and titles. Angle sets the shadow's direction (0° to the right, 90° up), Length how far it reaches and Shadow color its color. Shadow Plus Image keeps the artwork on top; Shadow Only leaves only the shadow. The layer grows to hold a shadow that extends past its edge, and a transparent margin is trimmed away afterwards.

All three render their preview at full resolution, respect the pixel selection and create one undo step on OK.

## Median, Alien Map, Antialias, Color to Gray, Stress, Value Propagate and Shift

Filter → Median now has a Radius (1–20 pixels) and a Percentile. At 50% each channel takes the median of its square neighborhood, which removes speckles and dust while keeping edges; lower percentiles darken like Erode and higher ones lighten like Dilate. Transparent neighbors are ignored.

Filter → Alien Map remaps red, green and blue through sine waves. Frequency sets how many times each channel's tones fold over and Phase shifts them, for psychedelic false color.

Filter → Antialias smooths the stair-stepped edges of pixel art and aliased graphics without blurring flat areas.

Image → Color to Gray converts to grayscale from local color differences, so a red and a teal of the same brightness become different grays. Filter → Stress uses the same sampling to stretch each channel between the darkest and brightest nearby values, strongly boosting local contrast. For both, Radius sets how far samples reach, and more Samples and Iterations give a smoother result.

Filter → Value Propagate spreads light (More White) or dark (More Black) colors into neighboring pixels, one pixel per iteration. Threshold ignores small brightness differences.

Filter → Shift moves every row, or every column, by its own random amount up to Amount pixels, wrapping around, for a glitch look. Reopening the panel picks a new random pattern.

All respect the pixel selection and create one undo step on OK.

## Cartoon, Photocopy, Engrave and Newsprint

Filter → Cartoon outlines the image in black: pixels darker than the blurred area around them are inked, while the rest keeps its color. Mask radius sets how wide an area counts as the surroundings, and Darkness how much darker a pixel must be to turn fully black. Filter → Photocopy uses the same test but outputs black toner on white paper; Sharpness makes the toner edges harder.

Filter → Engrave turns the image into horizontal black lines, like a banknote engraving. In each band of Line height rows, the line is as thick as the band is dark.

Filter → Newsprint prints the image as a halftone. Black Ink uses one screen of black dots at 45°; RGB uses red, green and blue screens at different angles. Choose round dots, lines or diamonds, the Cell size, and Oversample to smooth the dot edges.

All four keep the layer's transparency, render their preview at full resolution, respect the pixel selection and create one undo step on OK.

## Mosaic, Cubism, Video Degradation, Paper Tile and Glass Tile

Filter → Mosaic rebuilds the layer from square tiles. Each tile takes the average color of the pixels it covers; Grout width and Grout color set the lines between tiles, and Bevel lights each tile from the top left.

Filter → Cubism repaints the image with overlapping squares, each rotated at random and colored from the image under its center, over a Background color. Scatter controls how far the squares stray from a regular grid.

Filter → Video Degradation imitates the red, green and blue phosphors of an old screen. Each pixel keeps one channel according to the Pattern; Other channels sets how much of the remaining channels shows through. Rotated turns the pattern sideways.

Filter → Paper Tile cuts the layer into square tiles and scatters them, as if pinned up by hand. Movement is the largest shift as a share of the tile size; gaps can stay transparent or show a background color.

Filter → Glass Tile turns the layer into a grid of glass blocks, each showing its surroundings reduced and flipped.

Cubism and Paper Tile choose a new random arrangement each time the panel opens. All five render their preview at full resolution, respect the pixel selection and create one undo step on OK.

## Little Planet, Panorama Projection, Apply Lens, Fractal Trace, Illusion and Recursive Transform

Filter → Little Planet turns a 360° × 180° panorama (equirectangular, with the horizon across the middle) into a tiny planet: the ground wraps into a ball at the center and the sky surrounds it. Zoom sets the planet's size, Rotation turns it, and Tunnel puts the sky in the center instead.

Filter → Panorama Projection shows a normal flat view into the same kind of panorama. Pan turns left and right, Tilt looks up and down, and Field of view zooms. Run it on a copy of the panorama to extract several views.

Filter → Apply Lens places a glass ball over the image and bends the picture through it like a real lens. Refraction index sets how strongly the glass magnifies; the area outside the ball can stay or become transparent.

Filter → Fractal Trace folds the image through the Mandelbrot formula. Left, Right, Top and Bottom choose the part of the fractal plane the layer covers, and Depth adds more folds; Outside chooses how pixels that leave the image are filled.

Filter → Illusion blends several copies of the image rotated evenly around its center. Filter → Recursive Transform draws smaller, rotated copies of the layer inside itself, again and again, like a picture of a picture.

All six respect the pixel selection and create one undo step on OK.

## Plasma, Diffraction Patterns, Maze, Sinus, Spiral, Supernova and Lens Flare

These effects paint new content. Plasma, Diffraction Patterns, Maze, Sinus and Spiral replace the layer's pixels, so apply them to a new blank layer or inside a selection; Supernova and Lens Flare add light on top of the existing image.

Filter → Plasma paints colorful cloud-like noise. Scale sets the size of the largest blobs, and Roughness how much fine detail is added. Filter → Diffraction Patterns paints rings of interference color; set a frequency for each channel, Contours to bend the rings and Sharpness to narrow the bands.

Filter → Maze draws a random maze with walls and paths one Cell size wide, in the colors you choose. Every part of the maze can be reached, by exactly one route.

Filter → Sinus paints smooth, flowing waves between two colors; X scale and Y scale set the wave sizes, Complexity how much they twist, and Exponent favors one color. Filter → Spiral paints two-color spiral arms around the center, evenly spaced or growing outward (Logarithmic), in either direction.

Filter → Supernova adds a bright star with glowing spokes at the chosen position. Filter → Lens Flare adds the glow, ring and colored reflections a camera lens makes when pointed at a light. Positions are fractions of the layer's width and height.

Plasma, Maze, Sinus and Supernova choose new random details each time the panel opens. All respect the pixel selection and create one undo step on OK.

## Bump Map, Displace, Apply Canvas and Distance Map

Filter → Bump Map and Filter → Displace take their shape from a map: choose any other image layer in the Map menu, or leave it on This layer. The map's brightness is stretched over the filtered layer.

Bump Map lights the layer as if the map were its surface relief: bright parts of the map stand up and dark parts sink. Azimuth, Elevation and Depth work as in Emboss; Invert swaps high and low, and Compensate for darkening keeps flat areas at their original brightness.

Displace moves each pixel according to the map: 50% gray stays in place, white moves it by the full Horizontal and Vertical amounts, and black moves it the opposite way. Edges chooses what fills areas pulled in from outside the layer. A blurred map gives smooth warps, like the view through rippled glass.

Filter → Apply Canvas gives the image the woven texture of artist's canvas, lit from the chosen corner. Depth sets how strong the texture is and Weave the thread spacing.

Filter → Distance Map turns the image into a gradient: pixels brighter than Threshold become gray according to their distance from the nearest darker pixel, with the farthest pixel white. Choose Euclidean (round), Manhattan (diamond) or Chebyshev (square) distance. Use it on a white shape on black to make smooth bevels and glows.

All four respect the pixel selection and create one undo step on OK.

## Focus Blur, Variable Blur, Lens Blur and Mean Curvature Blur

Filter → Focus Blur keeps part of the image sharp and blurs the rest, like a shallow depth of field or a tilt-shift miniature. Circle keeps a round area sharp; Linear keeps a horizontal band sharp. Set the Blur strength, the focus position, Focus size and how gradual the Transition is.

Filter → Variable Blur uses a map layer (or the layer itself) to decide where to blur: black stays sharp, white gets the Maximum blur, and grays fall in between. Paint a gradient on a separate layer to control it precisely.

Filter → Lens Blur imitates an out-of-focus lens: detail spreads into even discs instead of a soft Gaussian haze. Highlights makes bright points bloom into visible bokeh circles.

Filter → Mean Curvature Blur smooths noise and rounds off small corners while keeping long edges sharp. Increase Iterations for a stronger effect; large layers take longer.

All four respect the pixel selection and create one undo step on OK. These blurs repeat the edge pixels at the layer's border rather than spreading beyond it.

## Tone mapping and superpixels

The Filter menu has three tone mappers that squeeze a wide brightness range into the visible one, bringing out detail in both shadows and highlights. They work on the layer's 8-bit colors, so they rebalance an existing photo rather than recover detail that was never captured.

Tone Map: Reinhard 2005 imitates how the eye adapts. Intensity brightens or darkens overall, Contrast sets the response curve, Light adaptation chooses between adapting to each pixel and to the whole image, and Chromatic adaptation between adapting each color channel separately and luminance only.

Tone Map: Fattal 2002 flattens large brightness differences while keeping small ones, which gives a strong, detailed HDR look. Lower Compression flattens more. Tone Map: Mantiuk 2006 compresses coarse contrast most and fine contrast least; Detail boosts the finest texture. Saturation restores color for both.

Filter → Superpixels (SLIC) and Filter → Waterpixels split the image into small regions of similar color and fill each with its average, a flat, stained-glass or low-poly look. Region size sets how big the regions are; Compactness (SLIC) or Regularity (Waterpixels) trades following edges for more regular shapes.

All five respect the pixel selection and create one undo step on OK.

## Filter menu organization

The Filter menu groups its effects into submenus: Blur, Noise, Sharpen & Enhance, Distort, Light & Shadow, Artistic, Edges & Maps, Color, Tone Mapping, Render and Other. Effects are listed alphabetically within each submenu. Color adjustments stay in the Image menu.

## More color adjustments

Color adjustments are now under Image → Adjustments, alphabetically; Curves, Levels and Hue/Saturation keep their shortcuts at the top of the Image menu.

Selective Color changes one family of colors at a time. Choose Reds, Yellows, Greens, Cyans, Blues, Magentas, Whites, Neutrals or Blacks, then add or remove cyan, magenta, yellow and black ink. Relative changes the ink already present by that percentage; Absolute adds it directly.

Replace Color changes colors close to a chosen color: pick it, set Fuzziness for how far the match reaches, then shift Hue, Saturation and Lightness.

Match Color makes this layer's colors resemble another layer's: choose it as Source. Luminance and Color intensity scale the result and Fade blends back to the original. Neutralize removes a color cast, with or without a source.

Color Lookup applies a 3D lookup table: click Load .cube… and choose a .cube file from a camera maker, film emulation pack or color-grading app; Intensity blends it in. The table is used while the panel is open and isn't saved in the project.

Image → Auto Tone, Auto Contrast and Auto Color fix a flat or tinted image automatically: Auto Tone stretches each channel, Auto Contrast stretches them together to keep color balance, and Auto Color also balances midtones to remove casts. Clip ignores that share of the darkest and brightest pixels.

Image → Apply Image blends another layer into this one's pixels, as the layers sit on the canvas, with a blend mode, opacity and optional inversion.

The filters that use a second layer (Bump Map, Displace, Variable Blur, Match Color and Apply Image) now read it aligned as it sits on the canvas rather than stretched.

## Organizing layers: labels, search, locks and links

Layer → Color Label (also in the layer's right-click menu) tints the selected rows red, orange, yellow, green, blue, violet or gray, to group related layers at a glance.

The search field at the top of the Layers panel lists only layers whose names contain the text; the menu beside it shows only one kind: pixel, adjustment, text, shape, folders, visible, hidden, locked, linked or color-labeled layers. Matching layers inside collapsed folders are listed too. Click × to show everything again.

Layer → Lock sets independent locks on the selected layers. Lock Transparent Pixels lets you paint and filter while keeping the layer's exact transparency, which is handy for recoloring a shape. Lock Image Pixels prevents painting, fills, filters and adjustments. Lock Position prevents moving and transforming. Lock All combines them. Locked rows say so under the layer name.

Layer → Link Layers joins the selected layers into a link set: selecting any one of them and moving or transforming it moves the whole set, without putting them in a folder. Layer → Unlink Layers removes the selected layers from their set.

Labels, locks and links are saved in projects. Older versions of the app open these projects and ignore them.

## Canvas rotation, Reveal All, guide layouts, Stroke, Fade and Matting

Image → Image Rotation → Arbitrary… rotates the whole canvas by any angle. The canvas grows so nothing is cut off, and the new corners are transparent. Layers keep their pixels (they simply become rotated), so text and shapes stay editable. Guides are kept only for multiples of 90°.

Image → Reveal All enlarges the canvas to include any part of a layer that hangs past its edges.

View → Guides → New Guide Layout… adds guides for a grid: a number of columns and rows with gutters between them, and optional margins. Clear existing guides replaces the current guides.

Edit → Stroke… draws a line along the selection's outline. Choose the width, color, whether the line sits inside, centered on or outside the outline, and its opacity. By default the stroke goes on a new layer so it stays separate; turn that off to paint it onto the active layer.

Edit → Fade (⇧⌘F) softens the most recent filter, adjustment or brush stroke. Choose how strongly the result shows over the pixels from before it, and a blend mode. It is available until the layer is changed again.

Layer → Matting fixes the edges of cut-out images. Defringe replaces the colors of semi-transparent edge pixels with the nearest solid color, removing a fringe left by the old background. Remove Matte removes the white or black that antialiased edges were blended with.

## Export As and File Info

File → Export As… (⌥⇧⌘W) saves a flattened copy in PNG, JPEG, TIFF, HEIC, AVIF, GIF or PDF. Formats this Mac can't write are labeled and can't be chosen; WebP is not written by macOS itself. Choose the Quality for JPEG, HEIC and AVIF, and a Scale to export larger or smaller (the resulting size is shown). JPEG has no transparency, so pick the background color for transparent areas. GIF uses at most 256 colors: set the number of colors and whether to dither; pixels less than half opaque become transparent. PDF produces one page sized to the document at its resolution.

Save the current choices as a named preset to reuse them; choosing a preset fills in every setting, and saving under an existing name replaces it. Presets are shared by all documents.

File → File Info… (⌥⇧⌘I) stores a title, author, copyright notice, description and keywords with the project. Export As writes them into the file (as TIFF, IPTC or PNG text fields, or PDF document info) when Include File Info is on. The app never keeps location data, so exported files never contain it.

### WebP

Export As now writes WebP files with the app's own encoder, because macOS doesn't provide one. WebP export is lossless: colors and transparency are kept exactly, and files are usually smaller than PNG only for flat artwork. Lossy WebP is not available.

## Photoshop files

File → Open now opens Photoshop documents (.psd) as new untitled documents with their layers: names, folders, layer masks, clipping masks, blend modes, opacity, visibility and resolution are kept. Text, smart objects and layers with effects keep their pixels, but not their editability or effects. Adjustment and fill layers, vector masks and unknown blend modes can't be represented, so after opening, a note lists anything that was left out or changed. Only 8-bit RGB and grayscale files are supported; 16- or 32-bit, CMYK, Lab, indexed and large-document (.psb) files show an explanation instead. Save the result as a project to keep working on it.

File → Export PSD… writes your layers to a Photoshop file with the same properties. Choose whether layer effects (stroke and drop shadow) are baked into their layers' pixels; otherwise they're left out. Adjustment layers can't be written as layers, so they're omitted and listed, although the flattened preview image inside the file includes their effect. Editable text and shapes are written as pixels.

## Combine layers, RAW files and multi-page documents

Layer → Combine Layers merges the selected layers into a new layer, pixel by pixel, keeping the originals. Median removes moving people or noise from a series of photos taken from a tripod; Mean averages noise away; Minimum and Maximum keep the darkest or brightest value (useful for star trails); Range and Variance show where the images differ. Only layers that cover a pixel count toward it.

Opening a camera RAW file (such as .dng, .cr2, .nef or .arw) shows Develop RAW first. Adjust exposure, white balance (starting from the camera's as-shot values), the tone curve, noise reduction, sharpness and lens correction while watching the preview, then click Open. The developed image becomes an ordinary document.

Opening a PDF or a multi-page TIFF asks which pages to open. For PDFs, choose the resolution to render them at. Pages can become layers of one document, or separate documents.

## Versions, printing and automation

Each time you save over a project, the previous version is kept (up to 20 per project). File → Browse Versions… lists them by date: open one as a separate document to compare, or Restore it to replace the current content. Unsaved changes are replaced when you restore, so save first if you want to keep the current state as a version.

File → Print… (⌘P) prints the flattened image. Leave Scale to fit page on to fill the page, or turn it off to print at the document's size; the macOS print dialog sets the paper, orientation and preview.

File → Automate → Batch… converts a set of images: optionally fit them within a size (smaller images are never enlarged), choose the format and quality, add a name suffix such as -web, and choose the destination folder. Existing files are skipped unless you allow replacing them, and your originals are never changed.

File → Automate → Contact Sheet… arranges chosen images as thumbnails in a grid with optional file-name captions. Choose columns, rows, thumbnail size and spacing; extra images continue on new pages, each opened as a document.

## More layer effects and layer styles

Layer → Layer Effects now also offers Outer Glow, Satin, Gradient Overlay, Pattern Overlay and Bevel & Emboss, next to Stroke, Drop Shadow, Inner Shadow and Color Overlay. Each has its own panel; changes preview on the canvas, OK keeps them and Cancel puts them back.

- Outer Glow spreads a soft color out from the edges. Spread makes part of it solid; Contour changes how it fades.
- Satin adds silky shading inside the shape. Try different angles, distances and contours; Invert swaps the light and dark bands.
- Gradient Overlay fills the layer's shape with a gradient from your gradient library. Choose the style, angle and scale; Align with Layer fits it to the visible pixels.
- Pattern Overlay fills the shape with a repeating pattern. Use Scale and the offsets to line it up.
- Bevel & Emboss makes the layer look raised or pressed in. Choose the style, depth, size, softening and light direction, set the highlight and shadow colors, and optionally press a pattern texture into the surface.

Drop shadows, inner shadows and bevels can use the global light. Layer → Layer Style → Global Light… sets one angle (and altitude) for all of them at once, and changing the angle in any of their panels moves the rest.

Layer → Layer Style also has:

- Copy, Paste and Clear Layer Style, which work between documents and on several selected layers at once.
- Scale Effects…, which makes every effect bigger or smaller after you resize artwork.
- Convert Effects to Layers, which turns each effect into ordinary pixels on its own layer so you can paint on it.
- New Style…, which saves the effects so you can reapply them from Apply Style in any document.

Edit → Define Pattern… saves the selected area of the image (merged, up to 1024 × 1024 pixels) as a pattern for Pattern Overlay and bevel textures.

## Fill layers and pattern fills

Layer → New Fill Layer adds a layer filled with a solid color, a gradient or a pattern across the whole canvas. If there is a selection, the new layer gets a mask that shows only the selected area. A preview in the dialog shows the result. To change the fill later, choose Layer → Edit Fill Layer…. This works as long as you haven't painted on the layer or changed its pixels another way; after that it is an ordinary pixel layer.

To fill with a pattern instead of a color, choose Edit → Fill with Pattern, or pick a pattern from the Paint Bucket's Fill menu in its options bar. Patterns start at the top-left corner of the document, so separate fills line up with each other.

## Pencil, Color Replacement, History Brush and toning

The Brush tool's mode menu now also offers:

- Pencil draws crisp, hard-edged lines that aren't smoothed, which is useful for pixel art. Painting back over the same spot in one stroke doesn't build up past the opacity you set.
- Color Replace recolors what you brush over. It samples the color under your first click, and only similar pixels (within the Tolerance) take the foreground color's hue and saturation. Their light and dark detail is kept.
- History paints the layer back as it was in an earlier history state. Choose the state in the Source menu.

Use Smoothing in the options bar to steady Brush, Eraser and Pencil lines. The stroke trails behind the pointer and catches up when you let go.

The Smear tool's mode menu (R) now also includes:

- Dodge lightens and Burn darkens the Shadows, Midtones or Highlights. Strength sets how much.
- Sponge desaturates or saturates.
- Red Eye fixes red pupils: click on the eye with a brush about the pupil's size. Only clearly red pixels change.

These work on a layer's pixels, not on masks.

## Color Range, Sky, Quick Mask and mask properties

Select → Color Range… selects by color from the whole image as you see it:

- Choose Sampled Color, then pick the color and set Fuzziness for how close pixels must be.
- Or choose a color family (Reds, Blues…) or a tonal range (Highlights, Midtones, Shadows).

The preview shows the selection in white. Invert selects everything else.

Select → Sky selects the sky: sky-colored areas that touch the top of the picture. It works from color alone, so check the edges and refine them with the other selection tools where needed.

Select → Edit in Quick Mask Mode shows everything that isn't selected under a red overlay. Paint with the Brush to cover more, or use the Eraser to uncover. Then choose Exit Quick Mask Mode to turn the uncovered area back into the selection.

Layer → Layer Mask → Mask Properties… softens a mask without changing its pixels. Density weakens what it hides; Feather blurs its edges. You can change or remove both at any time. The same menu can also Add, Subtract, Intersect or Exclude the current selection with the mask.

Two more ways to erase:

- In the Paint Bucket's Fill menu, choose Transparent (Magic Eraser); clicking then clears the similar area.
- Brush → Background Eraser clears colors similar to the one under the brush, with Tolerance, Continuous sampling and Protect Foreground options.

## Layer comps, notes and measurements

Window → Layer Comps saves snapshots of how your layers are set up: which are visible, where they sit, and how they look. Click a comp to switch to it. To save a new version of a design, change the layers and choose Edit → Update from Document. File → Export Layer Comps to Files… saves every comp as a PNG.

The Eyedropper tool (I) has more modes:

- Color Sampler pins up to 10 points whose colors are shown in Window → Measurement. You can average 3 × 3 or 5 × 5 pixels. Option-click a sampler to remove it.
- Ruler measures distance and angle as you drag; hold Shift to snap to 45°.
- Note places a note marker on the canvas. Write and edit notes in Window → Notes.
- Count numbers each click, which is handy for counting objects. Option-click a mark to remove it.

In Window → Measurement you can set a scale, for example 100 px = 2 cm, so lengths show in real units. Record Measurement adds the current ruler to a log, which you can export as a CSV file.

Window → Patterns shows every pattern. Import an image as a new pattern, or right-click a pattern to fill the selection with it or use it for the Paint Bucket.

Notes, samplers, counts, the scale and layer comps are all saved with the project.

## Color profiles and soft proofing

Documents work in sRGB by default. There are two ways to use a different RGB profile:

- Edit → Assign Profile… keeps the pixel numbers but reads them in the chosen profile. Use it for an image that was made in, say, Display P3 or Adobe RGB but opened without its profile.
- Edit → Convert to Profile… recalculates the pixels so the image looks the same in the new profile. You choose a rendering intent and whether to use black point compensation.

Either way, the canvas shows colors correctly, exported files carry the profile, and the profile is saved with the project.

To preview printing, choose a profile in View → Proof Setup (Generic CMYK or a printer profile installed on your Mac), then turn on View → Proof Colors (⌘Y). Simulate Paper Color also shows the paper's white. View → Gamut Warning (⇧⌘Y) shows in gray the colors the proof profile can't reproduce. Proofing only changes what you see, never the pixels.

## Blend If

Layer → Blending Options… shows a layer only where its own pixels, or the pixels underneath it, fall within a range. For example, drag This Layer's black slider up to drop out dark parts of a texture, or raise the Underlying Layer's black slider to show clouds only over light sky. Split a pair (black and black split, or white and white split) to fade the edge instead of cutting it. Choose Gray to judge by brightness, or a single color channel.

## Align, blend, HDR, focus stacking and panoramas

- Edit → Auto-Align Layers lines up the selected layers with the bottom one. It is useful for handheld brackets, focus stacks or group shots. Reposition Only just moves layers; Auto (Perspective) also corrects perspective.
- Edit → Auto-Blend Layers adds masks so aligned layers combine: Panorama hides the overlaps with soft seams, and Stack Images shows the sharpest layer at every point. The layers' pixels aren't changed, so you can adjust the masks later.
- File → Automate → Merge Selected Layers to HDR combines darker and lighter exposures of the same scene into one layer with detail in both the highlights and the shadows.
- File → Automate → Focus Stack Selected Layers combines shots focused at different distances into one sharp layer.
- File → Automate → Photomerge… stitches several overlapping photos into a panorama in a new document. Photos should overlap by about a third.

Align the layers first (Auto-Align) before merging or stacking.

## GIMP, SVG, OpenEXR and camera data

Opening a GIMP .xcf file brings in its layers, layer groups, masks, opacity, visibility and blend modes. Anything that couldn't be brought over, such as saved channels or paths, is listed afterwards.

SVG files work three ways:

- Opening one makes a new document of its size with the artwork on a layer.
- File → Place SVG… adds SVG artwork to the current document as a layer.
- Select → Load SVG Outline… turns the SVG's shapes into an exact selection.

File → Export Selection as SVG… saves the selection outline as SVG, for use in vector apps.

OpenEXR (.exr) and Radiance (.hdr) images open too, alongside GIF, BMP, WebP and AVIF. Documents are 8 bits per channel, so values brighter than white are clipped. Export As can also save OpenEXR.

When you open a photo, its camera data (camera, lens, exposure, aperture, ISO, date and location) is kept. File → File Info… shows it, and exported files include it unless you turn that off or remove it.

New from Clipboard keeps the color profile of images copied from other apps.

## Pen tool and paths

The Pen tool (P) draws vector paths.

- **Pen:** click to place corner points, or click and drag to make a smooth curve (Option-drag bends only one side). Click the first point to close the shape; Enter or Escape stops drawing an open path. On an existing path, clicking a segment adds a point, clicking a point deletes it, and Option-clicking a point switches it between smooth and corner.
- **Freeform Pen:** drag as if drawing with a pencil. The line becomes a smooth path.
- **Curvature Pen:** just click points; the path curves smoothly through them.
- **Path Selection:** click a path to select it, and drag to move it.
- **Direct Selection:** drag single points or their handles. Delete removes the selected point.

Window → Paths lists every path in the document, and they are saved with the project. From there you can:

- load a path as a selection;
- turn the current selection into a path;
- fill or stroke the path with the foreground color, with a width, inside/center/outside alignment and optional dashes;
- combine the shapes inside a path (unite, subtract, intersect, exclude).

The Shapes section adds ready-made shapes (heart, arrow, speech bubble and more) as paths. Save any path as your own shape with Save as Custom Shape.

Layer → Layer Mask → Add Vector Mask from Active Path masks a layer with a crisp vector shape. To change it later, choose Edit Vector Mask Path, reshape the path, and add the vector mask again.

## Rich text and typography

While editing text, select some letters and change the font, size, color or tracking; only those letters change. With nothing selected, changes apply to the whole text layer.

The Character panel adds OpenType options: ligatures, small caps, oldstyle or tabular figures, fractions and stylistic alternates. Each works only when the font includes it.

The Paragraph panel adds:

- justified alignment, indents (first line, left, right) and space before or after;
- hyphenation;
- text direction, including right-to-left for Arabic or Hebrew, and a language for each text layer.

Save formatting you reuse as a character or paragraph style in those panels, then click a style to apply it.

The Type menu has:

- Find and Replace Text…, which works across every text layer;
- Check Spelling…, which suggests corrections;
- Replace Missing Fonts…. When a project uses fonts this Mac doesn't have, you'll be asked to pick replacements when you open it, or later from this command.

## Vertical text, text on a path, warps and glyphs

The Type menu can:

- make a text layer Vertical;
- set new text along the active path (Type on Active Path);
- bend text with Warp Text…. Choose from styles such as Arc, Flag, Wave or Inflate; the text stays editable and you can remove the warp later.
- turn text into an editable path (Convert Text to Path);
- select the shapes of the letters (Load Text as Selection).

Turn on Type → Type Mask to type a selection instead of a text layer: finish the text and its letters become the selection.

Window → Glyphs shows every character in the current font. Search by name, such as arrow, heart or euro, and click one to insert it where you are typing.

## Actions, scripts, templates and preflight

Window → Actions records what you do so you can repeat it. Click Record, make your edits (filters with their settings, rotating or flipping the canvas, image size, invert, fill, selections, new or duplicate layers, flatten, opacity and layer styles), then click Stop and Save. Use the play button to run an action on any document. Actions can be grouped into sets and exported as scripts.

File → Automate → Batch Action… runs an action on many photos at once and saves the results to a folder. You choose the file format, what to do when a file already exists, and whether to stop on errors. File → Automate → Run Script… runs a script file; docs/SCRIPTING.md describes the format. Window → Commands lists every command a script can use.

File → New from Template starts a document at a ready-made size, such as A4, Letter, social posts or HD video. Save as Template… adds your own, keeping the size, resolution, color profile and guides.

File → Preflight… checks a document before printing or delivery: low resolution, color profile, hidden layers, missing fonts, very small text, transparency, and colors that won't print.

Window → Performance shows memory use and how long the canvas takes to draw.

## Brush tips, dynamics and symmetry

The Brush's tip menu picks the shape it paints with: the round tip, a built-in tip such as Chalk or Star, or one of your own. Import Brushes… adds GIMP .gbr brushes or images, and Edit → Define Brush Preset… makes a tip from the selection (dark areas paint). Dynamics adds jitter, scatter and pen-tablet pressure and tilt. Symmetry repeats each stroke mirrored, around the center or in tiles. Presets save everything about the current brush.

The Brush's mode menu also offers Pattern Stamp (paints a pattern), Mixer Brush (smears and mixes the colors on the canvas) and Art History (paints loose strokes in the colors of an earlier state).

## Quick Selection, Selection Brush, Magnetic Lasso and Focus Area

The Magic tool has two more modes. Quick drags over part of an object and the selection grows to its edges. Brush paints the selection directly. Hold Option to subtract with either. The Lasso's Magnetic mode snaps the outline to edges as you drag; press Delete to step back. Select → Focus Area… selects what is sharp in the photo.

## Patch, Content-Aware Move and the Clone Source panel

The Healing tool's menu adds Patch and Content-Aware Move. Select an area first, then drag inside it. Patch fills the selection from where you drag to, matching its tone. Content-Aware Move moves the content and fills the hole it leaves. The Clone Stamp's Heal option makes it a Healing Brush. Its Source button opens five clone sources, each with its own rotation, scale and flips.

## Mesh, Puppet and Perspective Warp, Content-Aware Scale and Liquify tools

Edit → Warp holds four ways to reshape a layer. Each opens a preview where you drag handles, and Apply commits the result as one step you can undo.

- **Mesh Warp** puts a grid over the layer; drag its points to bend the image smoothly.
- **Puppet Warp** lets you click to place pins on the layer and drag them. The other pins hold their place, so you can bend an arm without moving the body.
- **Perspective Warp** starts in Layout: drag a plane's corners to match a surface in the photo, and add joined planes for a second wall. Switch to Warp and move the corners to change the viewpoint; Straighten turns the selected plane into a rectangle.
- **Content-Aware Scale** makes a layer narrower or wider (or shorter or taller) by removing or repeating plain areas, so the subject keeps its shape. It can protect the selection and skin tones.

The Smear tool's Liquify mode now has Twirl, Pucker, Bloat and Reconstruct as well as Forward Warp. Freeze Mask paints areas Liquify must not touch, and Thaw Mask releases them. The Frozen Areas menu can also freeze the selection, invert the frozen areas or thaw them all.

## Smart objects and smart filters

Layer → Smart Objects → Convert to Smart Object protects a layer's pixels. Filters you then apply from the Filter menu are kept in a list instead of changing the pixels. Smart Filters… shows that list: switch filters off, change their order, click Edit… to change a filter's settings, or delete it. A selection made before the first filter becomes a filter mask, so the filters only show there. The same window can make a new filter mask from the selection or remove it.

Duplicating a smart object keeps both copies tied to the same contents: Replace Contents… changes them all. New Smart Object via Copy makes a copy with its own contents. Export Contents… saves the original pixels as a PNG, and Rasterize turns the layer back into ordinary pixels. Painting and retouching tools are disabled on smart objects; rasterize first.

Place Linked… adds an image that stays linked to its file on your Mac. When you open the project and the file has changed, the app offers to update it; if the file has moved, use Relink…. Embed Linked keeps the pixels in the project and forgets the file.

## Artboards, slices, frames and pattern preview

Layer → Artboards and Slices → New Artboard turns the selection (or the whole canvas) into a named artboard: a page or screen of a design. Artboards are outlined in pink with their names, and each has its own export format, scale and optional white background. The Artboards and Slices… window renames, moves and resizes them. File → Export Artboards… saves each one as its own file, named from a template such as {document}-{name}.

Slices work the same way for parts of a single design: New Slice from the selection, or Slices from Guides to cut along your guides. File → Export Slices… saves them all.

Layer → Frames → New Rectangle Frame or New Ellipse Frame adds an empty frame. Place Image in Frame… fills it with a photo, cropped to the frame's shape, and Frame Content… changes the zoom and which part shows. Placing another image replaces the first.

Layer → Blending Options adds Fill Opacity and Knockout: a knockout layer cuts through the layers below it in its folder.

View → Pattern Preview shows copies of the document around it, so you can see where a pattern's edges don't meet.

Export Selected Layers can now name files from a template and export a fixed area of the canvas.

## Color modes, channels and calculations

Image → Mode chooses how the document is shown and saved: RGB Color, CMYK Color (pick a profile), Lab Color, Indexed Color, Bitmap or Duotone. You keep editing normally; the canvas and exports follow the mode. Color Table edits an indexed document's colors. CMYK documents save as TIFF, JPEG or PDF in CMYK.

Image → Channels shows each channel. Click an eye to hide a channel; with one channel left it shows in gray. Check Edit on channels to limit painting and filters to them. Saved selections appear as alpha channels.

Image → Calculations blends two channels into a new selection, alpha channel or layer.

Image → Blend in Linear Light makes opacity and blend modes mix like real light.

Opening an OpenEXR or Radiance HDR file shows a dialog to set exposure and how highlights are kept before the image opens.

## Workspace

Each panel dock can hold two groups: use the dock's + menu → Add Panel Below, or drop a tab on the split icon. Drag the bar between the groups to resize them. Drop a tab on the canvas to float it.

View → Screen Mode hides the panels or fills the screen. View → Rotate View turns the canvas. Window → Arrange → Tile All Documents shows your open documents side by side, and Match Zoom and Location lines them up. Window → Second View of Document opens another view of the same image at its own zoom.

Edit → Toolbar… and Edit → Menus… let you reorder and hide tools, and hide or highlight menu commands.

## Timeline, video and data sets

Window → Timeline… makes frame animations. Set up your layers, click New Frame, change them, add another frame, and Tween to Next to fill in the movement. Play previews it; Export saves an animated GIF, an animated PNG or a movie (H.264, HEVC or ProRes).

File → Import Video Frames to Layers… turns part of a movie into layers with a frame each.

Image → Variables… links layers to columns of a CSV file (text, a replacement image, or visibility). File → Export Data Sets as Files… then makes one image per row.

## Plugins and resources

Window → Plugins… runs plugins: folders of script steps described in docs/PLUGINS.md. A plugin can only change what its manifest allows. Window → Resources… manages brushes, gradients, patterns, swatches, styles and presets, and exports or imports them all in one file.

## Editable gradients and Select and Mask

Turn on Editable in the Gradient tool's options to draw the gradient on its own layer. With the Gradient tool, drag the line's ends again at any time.

Select → Select and Mask… refines a selection's edge against the photo. Edge Radius finds the real edge within that distance. Choose a view to check it, then output a selection, a layer mask, or a new layer with Decontaminate Colors to remove the old background's tint from the edge.
