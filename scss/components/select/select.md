---
title: Message
description: Component for creating selectable field inputs
group: Components
layout: docs.html
algolia: true
---

Component for creating selectable field inputs.

## Usage

The select component was created to be used in pair with a general field and input components. The `.select` block class should extend `.field__input` element and `.input` block classes.

[[example file=components/select/example/basic.html]]

### Sizes

Select also respecting a standard sizing controlling with size modifiers.

[[example file=components/select/example/sizes.html]]

## Styleguide

[[styleguide file=components/select/select.scss]]

## Variables

[[variables file=components/select/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/select
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/select/select';
```

Optionally, import a suggested components.

```scss
@import 'node_modules/@bemoid/field/field';
@import 'node_modules/@bemoid/input/input';
```
