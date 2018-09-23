---
title: Figure
description: Component for representing graphics, frequently with a caption.
group: Components
layout: docs.html
algolia: true
---

Component for representing graphics, frequently with a caption.

## Usage

Add `.figure` block class to the `<figure>` HTML tag. Mark images with a `.figure__image` and caption with `.figure__caption` element class.

[[example file=components/figure/example/basic.html]]

Of course, one figure can contain multiple images.

[[example file=components/figure/example/multiple.html]]

## Styleguide

[[styleguide file=components/figure/figure.scss]]

## Variables

[[variables file=components/figure/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/figure
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/figure/figure';
```
