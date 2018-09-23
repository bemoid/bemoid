---
title: Heading
description: Component for representing six levels of headings.
group: Objects
layout: docs.html
algolia: true
---

Component for representing six levels of headings.

## Usage

The basic task of `.heading` block class is to remove basic margins from a `<h>` HTML tags. It is really helpful when using [spacing](/docs/spacing) utility classes or [Lobotomized Owl](//alistapart.com/article/axiomatic-css-and-lobotomized-owls) selector to control spacing bettwen siblings.

[[example file=objects/heading/example/basic.html]]

### Sizes

Sizing modifers allow you to apply `<h>` styles to no heading HTML elements.

[[example file=objects/heading/example/sizes.html]]

## Styleguide

[[styleguide file=objects/heading/heading.scss]]

## Variables

[[variables file=objects/heading/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/heading
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/heading/heading';
```
