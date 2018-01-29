---
title: Image
description: Component for controlling images.
group: Objects
layout: docs.html
algolia: true
---

Component for controlling images.

## Usage

Simply add `.image` block class to `<img>` HTML element.

[[example file=objects/image/example/basic.html]]

The `.image--circle` modifier class may you help to achieve avatar-like images.

[[example file=objects/image/example/circular.html]]

### Aligment

A vertical alignment of the image may be controlled with a positioning modifier classes.

[[example file=objects/image/example/aligment.html]]

## Styleguide

[[styleguide file=objects/image/image.scss]]

## Variables

[[variables file=objects/image/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/image
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/image/image';
```