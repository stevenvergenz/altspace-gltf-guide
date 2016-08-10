# Using glTF Models In AltspaceVR

This guide will walk you through the process of converting your 3d models from [Collada (.dae)](https://en.wikipedia.org/wiki/COLLADA) to [glTF](https://github.com/KhronosGroup/glTF), optimizing those models for viewing in [AltspaceVR](https://altvr.com), and loading them into [Three.js](http://threejs.org/).

## Overview

* [Why use glTF?](#why)
* Step 1: [Export your model as a Collada file](#export)
* Step 2: [Convert the model into glTF](#convert)
* Step 3: [Optimize your glTF file for use in Altspace](#optimize)
* Step 4: [Load your model into Three.js](#load)
* [Resources](#resources)


## <a id="why"/>Why use glTF?

**TL;DR: It's faster at run time.**

1. It requires less processing.

	Most of the model formats you'll use for web-based 3d rendering, like OBJ/MTL and Collada, are text-based. This means that the number `0.678207` is being literally stored as the string `"0.678207"`, which has to be parsed into binary on load, then fed into the GPU for processing. By contrast, glTF stores all its geometry in a binary buffer from the beginning, so it can be fed directly into the GPU without additional parsing.

2. It produces a smaller model file, which means less bandwidth used and shorter load times.

	Another benefit of storing things in binary is compactness. Remember that number `0.678207` from before? Stored as a string, it looks like this in memory: `30 2e 36 37 38 32 30 37` (8 bytes). That same number in [binary](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) looks like `3f 2d 9e f9` (only 4 bytes). Since each vertex in your model is stored as a minimum of three numbers like the above, that means you're saving at least 12 bytes per vertex, or 1.2MB on a 100k vertex model. After normals and UV coordinates, your typical savings will be 2-5 times larger than this minimum example, so that's a huge savings!
	

## <a id="export"/>Export your model as a COLLADA file

This process will vary depending on your modeling tool, but virtually all tools support Collada to some extent.

* [Guide for Maya](https://knowledge.autodesk.com/support/maya/learn-explore/caas/CloudHelp/cloudhelp/2016/ENU/Maya/files/GUID-63ED25EB-C65D-4115-9766-C6C366C04AA5-htm.html)
* [Guide for 3DS Max](http://create.bluemars.com/wiki/index.php/3ds_Max_-_Basic_Guide_to_Exporting_.DAE_File)

If you're using Blender, it's under *File* > *Export* > *Collada (.dae)*. Make sure you're only exporting the mesh you want by checking *Selection only*, and leave the other options default.

Once you've exported, I recommend loading the Collada version into Altspace to test. If you don't already have a test app, you can use the stub [A-Frame](https://aframe.io/) app listed in the [Resources](#resources) section. A-Frame is also an option for displaying your final glTF model, but that is not discussed in this guide.


## <a id="convert"/>Convert the model into glTF


## <a id="optimize"/>Optimize your glTF file for use in Altspace.


## <a id="load"/>Load your model into Three.js


## <a id="resources"/>Resources

### A-Frame Model Viewer

```html
<html>
  <head>
    <title>A-Frame Model Viewer</title>
    <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
    <script src="https://cdn.rawgit.com/AltspaceVR/aframe-altspace-component/v0.2.2/dist/aframe-altspace-component.min.js"></script>
  </head>
  <body>
    <a-scene altspace="usePixelScale: false" scale="1 1 1">
      <a-assets>
        <a-asset-item id="test" src="YOUR URL HERE"></a-asset-item>
      </a-assets>
      <a-collada-model src="#test" position="0 0 0" rotation="0 0 0" scale="1 1 1"></a-collada-model>
    </a-scene>
  </body>
</html>
```
