---
title: Input
description: Provides a visual look to the field inputs.
group: Components
layout: docs.html
algolia: true
---

Provides a visual look to the field inputs.

## Usage

Simply add the `.input` block class to your `<input>` or `<textarea>` markup.

> The input component only manages appearance. Use in cooperation with a [field component]() in order to get fully styled inputs.

[[example file=components/input/example/basic.html]]

[[example file=components/input/example/textarea.html]]

## Styleguide

[[styleguide file=components/input/input.scss]]

## Variables

[[variables file=components/input/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/input
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/input/input';
```

Optionally, import a suggested components.

```scss
@import 'node_modules/@bemoid/field/field';
```