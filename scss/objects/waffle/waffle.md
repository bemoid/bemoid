---
title: Waffle
description: Component for providing all-directional gutter around collection of elements
group: Objects
---

Component for providing all-directional gutter around collection of elements.

## Usage

Add `.waffle` block class and `.waffle__cell` to give the elements a gutter.

[[example file=scss/objects/waffle/example/basic.html]]

### Sizes

Sizing modifers allow you to apply diffrent sizes of a gutter.

[[example file=scss/objects/waffle/example/sizes.html]]

Gutters can also take specific sizes from concrete breakpoints. Simply add the `@<breakpoint>` suffix to the standard size modifier class.

[[example file=scss/objects/waffle/example/sizes-responsive.html]]

## Variables

[[variables file=scss/components/waffle/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/waffle
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/waffle/waffle';
```
