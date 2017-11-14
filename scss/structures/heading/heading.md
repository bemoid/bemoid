---
title: Heading
description: Component for representing six levels of headings.
group: Structures
layout: docs.html
algolia: true
---

Component for representing six levels of headings.

## Usage

The basic task of `.heading` block class is to remove basic margins from a `<h>` HTML tags. It is really helpful when using [spacing](/docs/spacing) or [Lobotomized Owl](//alistapart.com/article/axiomatic-css-and-lobotomized-owls) selector to control spacing bettwen siblings.

[[example file=components/heading/example/basic.html]]

### Sizes

Sizing modifers allow you to apply `<h>` styles to no heading HTML elements.

[[example file=components/heading/example/sizes.html]]

## Styleguide

[[styleguide file=components/heading/heading.scss]]

## Variables

[[variables file=components/heading/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/heading
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/heading/heading';
```

Optionally, import a suggested components.

```scss
@import 'node_modules/@bemoid/field/field';
@import 'node_modules/@bemoid/input/input';
@import 'node_modules/@bemoid/radio/radio';
@import 'node_modules/@bemoid/select/select';
@import 'node_modules/@bemoid/checkbox/checkbox';
```