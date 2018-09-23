---
title: Wrapper
description: Component for providing a horizontal visual inner space for the element.
group: Objects
layout: docs.html
algolia: true
---

Component for providing a horizontal visual inner space for the element.

## Usage

Add `.wrapper` block class to give the element an horizontal padding.

[[example file=objects/wrapper/example/basic.html]]

### Sizes

Sizing modifers allow you to apply diffrent sizes of a padding.

[[example file=objects/wrapper/example/sizes.html]]

Wrapper can also take specific sizes from concrete breakpoints. Simply add the `@<breakpoint>` suffix to the standard size modifier class.

[[example file=objects/wrapper/example/sizes-responsive.html]]

## Styleguide

[[styleguide file=objects/wrapper/wrapper.scss]]

## Variables

[[variables file=components/wrapper/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/wrapper
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/wrapper/wrapper';
```
