---
title: Radio
description: Component for stylizing choosable field inputs.
group: Components
layout: docs.html
algolia: true
---

Component for stylizing choosable field inputs, where the user can choose one of multiple choices from a list.

## Usage

The radio component was created to be used in tandem with a general field component. The `.radio` block should extend it's `.field__control` element.

[[example file=components/radio/example/basic.html]]

### Inline

Radios can be presented horizontally by adding `.field--inline` modifier class.

[[example file=components/radio/example/inline.html]]

### Sizes

Radios also respecting a standard sizing controlling with size modifiers.

[[example file=components/radio/example/sizes.html]]

## Styleguide

[[styleguide file=components/radio/radio.scss]]

## Variables

[[variables file=components/radio/_variables.scss]]

## Standalone installation

Install using NPM:

```bash
$ npm install --save @bemoid/radio
```

Import files from the `node_modules` directory:

```scss
@import '~@bemoid/field/field';
@import '~@bemoid/radio/radio';
```