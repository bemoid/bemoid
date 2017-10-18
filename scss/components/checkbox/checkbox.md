---
title: Checkbox
description: Component for stylizing selectable input fields
group: Components
layout: docs.html
algolia: true
---

Component for stylizing selectable input fields, where user can select multiple choices from a list.

## Usage

The checkbox component was created to be used in tandem with a general field component. The `.checkbox` block should extend it's `.field__control` element.

[[example file=components/checkbox/example/basic.html]]

### Inline

[[example file=components/checkbox/example/inline.html]]

### Sizes

[[example file=components/checkbox/example/sizes.html]]

## Styleguide

[[styleguide file=components/checkbox/checkbox.scss]]

## Variables

[[variables file=components/checkbox/_variables.scss]]

## Standalone installation

Install using NPM:

```bash
$ npm install --save @bemoid/checkbox
```

Import files from the `node_modules` directory:

```scss
@import '~@bemoid/field/field';
@import '~@bemoid/checkbox/checkbox';
```