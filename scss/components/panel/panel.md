---
title: Panel
description: Encloses content in visualy separated sections
group: Components
layout: docs.html
algolia: true
---

Encloses content in visualy separated sections. Helpful for drawing clearly separated blocks of content.

## Usage

Panel content has to be divided into segments. Each section should receive `.panel__segment` element class.

[[example file=components/panel/example/basic.html]]

If your you can make panel scrollable with `panel--scrollable` modifier class.

[[example file=components/panel/example/scrollable.html]]

Of course, there is equivalent of this modifier for a single panel's segment.

[[example file=components/panel/example/scrollable-segment.html]]

### Sizes

Control padding of panel sections with the [segment]() component and its modifiers.

[[example file=components/panel/example/sizes.html]]

## Styleguide

[[styleguide file=components/panel/panel.scss]]

## Variables

[[variables file=components/panel/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/panel
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/panel/panel';
```

Optionally, import a suggested components.

```scss
@import 'node_modules/@bemoid/segment/segment';
```
