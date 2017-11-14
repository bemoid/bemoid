---
title: Paragraph
description: Component for representing a block of text.
group: Structures
layout: docs.html
algolia: true
---

Component for representing a block of text.

## Usage

The basic job of the `.paragraph` block class is to remove basic margins from a `<p>` HTML tags. It is really helpful when using [spacing](/docs/spacing) utility classes or [Lobotomized Owl](//alistapart.com/article/axiomatic-css-and-lobotomized-owls) selector to control spacing bettwen siblings.

[[example file=components/paragraph/example/basic.html]]

## Styleguide

[[styleguide file=components/paragraph/paragraph.scss]]

## Variables

[[variables file=components/paragraph/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/paragraph
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/paragraph/paragraph';
```

Optionally, import a suggested components.

```scss
@import 'node_modules/@bemoid/field/field';
@import 'node_modules/@bemoid/input/input';
@import 'node_modules/@bemoid/radio/radio';
@import 'node_modules/@bemoid/select/select';
@import 'node_modules/@bemoid/checkbox/checkbox';
```