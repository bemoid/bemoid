---
title: Badge
description: Small inline components for creating labeled markers.
group: Components
layout: docs.html
algolia: true
---

Small inline components for creating labeled markers.

## Usage

Use `.badge` block class and surround its text in a `.badge__body` element class.

[[example file=components/badge/example/basic.html]]

### Image

Badges can also hold images with `.badge__image` element class. It's recommended to additionally extend an image component.

[[example file=components/badge/example/image.html]]

### Variants

YOu can make badges more rounded with the `.badge--pill` modifier class.

[[example file=components/badge/example/variants.html]]

## Styleguide

[[styleguide file=components/badge/badge.scss]]

## Variables

[[variables file=components/badge/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/badge
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/badge/badge';
```
