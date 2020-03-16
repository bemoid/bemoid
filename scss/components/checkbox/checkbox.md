---
title: Checkbox
description: Component for creating selectable input fields
group: Components
layout: docs.html
algolia: true
---

Component for creating selectable input fields, where the user can select multiple choices from a list.

## Usage

The checkbox component was created to be used in tandem with a general field component. The `.checkbox` block should extend it's `.field__control` element.

[[example file=components/checkbox/example/basic.html]]

### Inline

Checkboxes can be presented horizontally by adding `.field--inline` modifier class.

[[example file=components/checkbox/example/inline.html]]

### Sizes

Checkboxes also respecting a standard sizing controlling with size modifiers.

[[example file=components/checkbox/example/sizes.html]]

## Styleguide

[[styleguide file=components/checkbox/checkbox.scss]]

## Variables

[[variables file=components/checkbox/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/checkbox
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/checkbox/checkbox';
```

Optionally, import a suggested components.

```scss
@import 'node_modules/@bemoid/field/field';
```
