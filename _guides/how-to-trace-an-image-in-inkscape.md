---
title: How to Trace an Image in Inkscape
categories:
  - 2D design
tags:
  - Inkscape
example_image:
difficulty: Easy
time_required: 5-10 minutes
file_attachment_path:
---

[Inkscape](http://inkscape.org){: target="_blank" rel="noopener"} is a free vector drawing program that can be used for creating design files for CNC (Computer Numerically Controlled) machines such as a lasercutter, electronic (vinyl) cutter, milling machine and more.

In this how-to we will show you how to trace a bitmap image in Inkscape to create a vector image. This will convert the pixels of the bitmap into line paths that a machine (like a lasercutter) can follow.

### 1\. Open Inkscape

If you haven't yet installed [Inkscape](http://inkscape.org){: target="_blank" rel="noopener"}, [download it](https://inkscape.org/release/inkscape-1.0.1/){: target="_blank" rel="noopener"} for free (Mac, Windows, or Linux) and then run the installer.

### 2\. Find an image you’d like to trace

High contrast images work best such as black and white line drawings, outlines, and silhouettes. You can [search for images online](http://images.google.com){: target="_blank" rel="noopener"} or take a digital photo of a line drawing you made. The image should be saved as a .bmp, .jpg, or .png.

### 3\. Import image into Inkscape

In Inkscape, click *File &gt; Import* and locate the image you just saved. An import dialog will pop-up, click OK to accept the defaults.

### 4\. Trace the image

With the newly imported image selected, click *Path &gt; Trace Bitmap*.

A dialog window will appear. Select the Grays option, set the number of scans to 2, and check the box for Remove Background.

Click the Update button in the preview to see a rough preview (the end result will be higher quality). If you see some details missing, increase the number of scans and update the preview again.

Once you are done, click OK once to execute the scan. The scanned image will be output exactly on top of the original, so it may not look like anything happened, but we will soon find out in the next step. Manually close the scan dialog window since you are done with it.

### 5\. Remove the original image

Now use the mouse to drag the scanned image off of the original.&nbsp; If you have trouble figuring out which is the original, try double clicking on one and if you see a bunch of squares and lines, that is the vector. Delete the original bitmap image.

### 6\. Save the vector image

*File &gt; Save* and select Inkscape SVG to save the image as a vector. There are some other formats you can export to as well, such as PDF and EPS.
