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

[[example file=components/image/example/basic.html]]

The `.image--circular` modifier class may you help to achieve avatar-like images.

[[example file=components/image/example/circular.html]]

### Aligment

A vertical alignment of the image may be controlled with a positioning modifier classes.

[[example file=components/image/example/aligment.html]]

## Styleguide

[[styleguide file=components/image/image.scss]]

## Variables

[[variables file=components/image/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/image
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/image/image';
```