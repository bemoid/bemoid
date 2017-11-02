---
title: Tag
description: Small inline components for creating labelized markers.
group: Components
layout: docs.html
algolia: true
---

Small inline components for creating labelized markers.

## Usage

Use `.tag` block class and surround its text in a `.tag__body` element class.

[[example file=components/tag/example/basic.html]]

### Image

Tags can also hold images with `.tag__image` element class. It's recommended to additionaly extend a image component.

[[example file=components/tag/example/image.html]]

### Variants

YOu can make tags more rounded with the `.tag--pilled` modifier class.

[[example file=components/tag/example/variants.html]]

## Styleguide

[[styleguide file=components/tag/tag.scss]]

## Variables

[[variables file=components/tag/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/tag
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/tag/tag';
```