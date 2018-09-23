---
title: Paragraph
description: Component for representing a block of text.
group: Objects
layout: docs.html
algolia: true
---

Component for representing a block of text.

## Usage

The basic job of the `.paragraph` block class is to remove basic margins from a `<p>` HTML tags. It is really helpful when using [spacing](/docs/spacing) utility classes or [Lobotomized Owl](//alistapart.com/article/axiomatic-css-and-lobotomized-owls) selector to control spacing bettwen siblings.

[[example file=objects/paragraph/example/basic.html]]

## Styleguide

[[styleguide file=objects/paragraph/paragraph.scss]]

## Variables

[[variables file=objects/paragraph/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/paragraph
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/paragraph/paragraph';
```
