---
title: Equipment
header_image:
---

Our lab equipment includes: 3D printers, lasercutters, sewing machines, electronic (vinyl) cutter, CNC mill, and more. Get all the details of our equipment to better understand material and size limitations.<br>&nbsp;

## Lasercutting

![](/uploads/equipment/full-spectrum-laser-h-series-20-x-12-laser-cutter-orig.jpg){: width="500" height="281"}

* **Full Spectrum 45W CO2 H-Series Engraver/Cutter (5th gen)**
  * Bed Size: 20" x 12" (in practice, usable area is closer to 19.5" x 11.5")
  * Machine Software: [RetinaEngrave](http://laser101.fslaser.com/RetinaEngrave){: target="_blank" rel="noopener"}
  * Design Software: [Inkscape](http://inkscape.org){: target="_blank" rel="noopener"}
  * Modes: [Vector Cut, Vector Engrave, Raster Fill](https://lasercuttingsheffield.wordpress.com/engraving-and-cutting/){: target="_blank" rel="noopener"}
  * Materials: Most wood/acrylic up to 1/4" thick. [See the approved materials list](materials#approved-lasercutter-materials) and [suggested lasercutter settings](materials#suggested-lasercutter-settings).
  * [Download Inkscape (v.92) Lasercut Design Template (SVG)](https://raw.githubusercontent.com/cplmakerlab/general/master/templates/cplmakerlab-lasercut-template-inkscape-v92.svg){: target="_blank" rel="noopener"}
  * **DESIGN FILE PREPARATION**
    * File Format: SVG (file must open in [Inkscape](http://inkscape.org/){: target="_blank" rel="noopener"})
    * VECTOR CUT: Stroke paint is 100% RED \[RGBA(255,0,0,255) or 000000ff\]. Stroke width is .003 inches.
    * VECTOR ENGRAVE: Stroke paint is 100% BLACK \[RGBA(0,0,0,255) or 000000ff\]. Stroke width is .003 inches.
    * RASTER FILL: Fill color is 100% BLACK \[RGBA(0,0,0,255) or 000000ff\]. No stroke.
    * For all strokes and fills, alpha transparency is 100% and opacity is 100%
    * No special shapes or text. All texts and shapes must be paths (Path -&gt; Object to Path)
    * Everything is ungrouped (CTRL+A to select all, CTRL + SHIFT + G to ungroup)
    * File opens in RetinaEngrave without errors, no missing sections or parts. Time estimate must not exceed Maker Lab time limit.&nbsp;

## 3D Printing

![](/uploads/equipment/makerbot-replicator-2-2-0.jpg){: width="354" height="319"}

* **Makerbot Replicator 2**
  * Build Volume: 6.0 in x 6.1 in x 11.2 in (410 cubic inches)
  * Machine Software: [Makerbot Desktop (slicer software)](https://support.makerbot.com/troubleshooting/makerbot-desktop-software/software-download/download_12190){: target="_blank" rel="noopener"}
  * Design software: [Tinkercad](http://tinkercad.com){: target="_blank" rel="noopener"}, [Fusion 360](https://www.autodesk.com/products/fusion-360/personal){: target="_blank" rel="noopener"} (any 3D cad software that can output OBJ or STL)
  * Material: [PLA filament](materials)
  * [Download example STL file](https://cdn.thingiverse.com/assets/94/00/bf/48/20/Harold-Washington-CPLMakerLab.stl){: target="_blank" rel="noopener"}
  * **DESIGN FILE PREPARATION**
    * File Format: STL or OBJ
    * File opens in machine software without errors.
    * Check object orientation in machine software to minimize the need for rafts & supports.
    * Check if size looks correct (not too big or small). Fine details may not print well at smaller sizes.
    * In machine software, check time estimate using desired print settings. Typical layer height is .3mm. Print time must not exceed Maker Lab time limit.&nbsp;

![](/uploads/equipment/ultimaker-s3-front.jpg){: width="2831" height="2385"}

* **Ultimaker S3**
  * Build Volume: 7.4 in x 7.9 in x 9 in (526 cubic inches)
  * Machine Software: [Ultimaker Cura (slicer software)](https://ultimaker.com/software/ultimaker-cura){: target="_blank" rel="noopener"}
  * Design software: [Tinkercad](http://tinkercad.com){: target="_blank" rel="noopener"}, [Fusion 360](https://www.autodesk.com/products/fusion-360/personal){: target="_blank" rel="noopener"} (any 3D cad software that can output OBJ or STL)
  * Material: [PLA filament](materials)
  * [Download example STL file](https://cdn.thingiverse.com/assets/94/00/bf/48/20/Harold-Washington-CPLMakerLab.stl){: target="_blank" rel="noopener"}
  * **DESIGN FILE PREPARATION**
    * File Format: STL or OBJ (with units set to mm). If you use inches, please note expected size when sending your file.
    * File opens in machine software without errors.
    * Check object orientation in machine software to minimize the need for rafts & supports.
    * Check if size looks correct (not too big or small). Fine details may not print well at smaller sizes.
    * In machine software, check time estimate using desired print settings. Typical layer height is .3mm. Print time must not exceed Maker Lab time limit.&nbsp;

## CNC Mill

![](/uploads/equipment/carvey.jpg){: width="1200" height="940"}

* **[Inventables Carvey](https://www.inventables.com/technologies/carvey){: target="_blank" rel="noopener"} CNC Mill**
  * Work Area
    * Width (X-axis): 11.6 inches (29 cm)
    * Depth (Y-axis): 8 inches (20 cm)
    * Height (Z-axis): 2.75 inches (7 cm)
  * Assortment of bits from 1/32" to 1/8"
  * Smart corner clamp with auto z-zero
  * Side clamp system with three lengths of clamps and two heights of clamp bases. Clamps work on material up to 3/4″ thick
  * Machine Software: [Easel](https://easel.inventables.com){: target="_blank" rel="noopener"}
  * Design Software: Easel, Inkscape
  * Materials: Wood, Plastic. [See approved materials list](materials).
  * **DESIGN FILE PREPARATION**
    * File format: SVG or Easel
    * File must be imported into Easel
    * In Easel, set machine type to Carvey. Enter material type, dimensions, and thickness and select the bit size (smaller bit sizes carve slower but are more precise)
    * In Easel, adjust cut depth of lines and fills
    * Design must fit within the Carvey work area
    * Design must have enough clearance for smart clamps and side clamps
    * Carve time estimate must not exceed Maker Lab limit.

## Electronic Cutter

![](/uploads/equipment/cricut-maker.jpg){: width="556" height="308"}

* **Cricut Maker**
  * Work Area: 12” wide x 24"
  * Design software: [Inkscape](http://inkscape.org){: target="_blank" rel="noopener"}, [Cricut Design Space](http://design.cricut.com){: target="_blank" rel="noopener"}
  * Machine software: [Cricut Design Space](http://design.cricut.com){: target="_blank" rel="noopener"}
  * Tools: knife blade, rotary blade, pens & markers
  * Materials: Paper, thin fabrics, vinyl, heat transfer. [See approved materials list.](materials)
  * **DESIGN FILE PREPARATION**
    * File format: Inkscape SVG or Cricut (design.cricut.com)
    * File can open in Cricut without errors, no missing sections or parts. If things appear out of order when previewing the cut, the paths may need to be combined in Inkscape (Path -&gt; Combine) or Cricut (Weld)
    * Check for problematic regions. Sharp corners and highly detailed areas may not cut well.
    * Design uses solid fill colors to indicate areas intended to be cut or not cut
    * Design must fit within the work area
    * Cut time must not exceed Maker Lab time limit
    * Inkscape SVG: Everything is ungrouped (CTRL+A to select all, CTRL + SHIFT + G to ungroup)
    * Inkscape SVG: No special shapes or text. All texts and shapes must be paths (Path -&gt; Object to Path)

## Sewing & Embroidery

![](/uploads/equipment/brother-sewing-machine-xr9550prw.jpg){: width="1000" height="1000"}

* **Brother Sewing Machine (BROTHER XR9550PRW)**
  * Computerized stitch selection (165 built-in stitches)
  * Adjustable speed control
  * Quick-change presser feet

&nbsp;

* **Husqvarna Viking Designer Diamond Embroidery Machine**
  * Design software: [Inkstitch](https://inkstitch.org/){: target="_blank" rel="noopener"} (plug-in for Inkscape)
  * Machine software: Built-in touch panel
  * File Formats: SVG, VP3
  * **DESIGN FILE PREPARATION**
    * Inkscape SVG: Everything is ungrouped (CTRL+A to select all, CTRL + SHIFT + G to ungroup)
    * Inkscape SVG: No special shapes or text. All texts and shapes must be paths (Path -&gt; Object to Path)
    * Different colors should be used to represent different spools of thread or separate sections (the machine will stop and wait for a new spool to be loaded)
    * Design is not too big or small, and fits within an available machine hoop size
    * &nbsp;Inkscape SVG converts cleanly to a VP3 file without errors using Inkscape: Extensions &gt; Ink/Stitch &gt; Embroider. Inkscape: Extensions &gt; Ink/Stitch &gt; Troubleshoot Objects can help resolve errors. Removing extra nodes, avoiding overlapping areas, simplifying paths, and joining multiple nodes together can help.
    * When the VP3 file is copied to a USB thumb drive, the file can be successfully loaded into the machine.
    * Sewing time must not exceed Maker Lab time limit

## 3D Scanner

* Kinect (via Skanect/ReconstructMe)

## Electronics

* BBC Micro:bit
* Arduino microcontroller
* Littlebits

## Audio

* Zoom H6 Audio Recorder
* Headphones

## Crafts

* Basic crafting tools (scissors, paper, fabric, tape, glue, etc)
