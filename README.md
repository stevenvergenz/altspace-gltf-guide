# Using glTF Models In AltspaceVR

This guide will walk you through the process of converting your 3d models from Collada to glTF, optimizing those models for viewing in AltspaceVR, and finally actually loading them.

## Why use glTF?

**TL;DR: It's faster at run time.**

1. It requires less processing.

	Most of the model formats you'll use for web-based 3d rendering, like OBJ/MTL and COLLADA, are text-based. This means that the number `0.678207` is being literally stored as the string `"0.678207"`, which has to be parsed into binary on load, then fed into the GPU for processing. By contrast, glTF stores all its geometry in a binary buffer from the beginning, so it can be fed directly into the GPU without additional parsing.

2. It produces a smaller model file, which means less bandwidth used and shorter load times.

	Another benefit of storing things in binary is compactness. Remember that number `0.678207` from before? Stored as a string, it looks like this in memory: `30 2e 36 37 38 32 30 37` (8 bytes). That same number in [binary](https://en.wikipedia.org/wiki/Single-precision_floating-point_format) looks like `3f 2d 9e f9` (4 bytes). Since each vertex in your model is stored as a minimum of three numbers like the above, that means you're saving at least 12 bytes per vertex, or 1.2MB on a 100k vertex model. After normals and UV coordinates, your typical savings will be 3-5 times larger than this minimum example, so that's a huge savings!


## Overview

1. Export your model as a COLLADA file
2. Convert the model into glTF
3. Optimize your glTF file for use in Altspace
4. Load your model into three.js

## Export your model as a COLLADA file


## Convert the model into glTF


## Optimize your glTF file for use in Altspace.


## Load your model into Three.js