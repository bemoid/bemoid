---
title: Gutter
description: Component for providing horizontal gutter around collection of elements
group: Objects
layout: docs.html
algolia: true
---

Component for providing horizontal gutter around collection of elements.

## Usage

Add `.gutter` block class and `.gutter__cell` to give the elements a gutter.

[[example file=objects/gutter/example/basic.html]]

### Sizes

Sizing modifers allow you to apply diffrent sizes of a gutter.

[[example file=objects/gutter/example/sizes.html]]

Gutters can also take specific sizes from concrete breakpoints. Simply add the `@<breakpoint>` suffix to the standard size modifier class.

[[example file=objects/gutter/example/sizes-responsive.html]]

## Styleguide

[[styleguide file=objects/gutter/gutter.scss]]

## Variables

[[variables file=components/gutter/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/gutter
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/gutter/gutter';
```
