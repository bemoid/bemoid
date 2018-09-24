---
title: Waffle
description: Component for providing gutter around collection of elements.
group: Objects
layout: docs.html
algolia: true
---

Component for providing gutter around collection of elements.

## Usage

Add `.waffle` block class and `.waffle__cell` to give the elements a gutter.

[[example file=objects/waffle/example/basic.html]]

### Sizes

Sizing modifers allow you to apply diffrent sizes of a gutter.

[[example file=objects/waffle/example/sizes.html]]

Gutters can also take specific sizes from concrete breakpoints. Simply add the `@<breakpoint>` suffix to the standard size modifier class.

[[example file=objects/waffle/example/sizes-responsive.html]]

## Styleguide

[[styleguide file=objects/waffle/waffle.scss]]

## Variables

[[variables file=components/waffle/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/waffle
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/waffle/waffle';
```
