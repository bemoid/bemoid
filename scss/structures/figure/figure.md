---
title: Figure
description: Component for representing graphics, frequently with a caption.
group: Structures
layout: docs.html
algolia: true
---

Component for representing graphics, frequently with a caption.

## Usage

Add `.figure` block class to the `<figure>` HTML tag. Mark images with a `.figure__image` and caption with `.figure__caption` element class.

[[example file=structures/figure/example/basic.html]]

Of course, one figure can contain multiple images.

[[example file=structures/figure/example/multiple.html]]

## Styleguide

[[styleguide file=structures/figure/figure.scss]]

## Variables

[[variables file=structures/figure/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/figure
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/figure/figure';
```