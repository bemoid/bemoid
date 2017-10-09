---
title: Button
description: Component for creating standard clickable buttons
group: Components
layout: docs.html
algolia: true
---

## Introduction

The Bemoid button component for creating standard clickable buttons. It's designed to use mainly on `<a>`, `<button>` and `<input>` HTML elements.

## Usage

Use `.button` class for a standard button.

[[example file=components/button/example/basic.html]]

### Variants

[[example file=components/button/example/variants.html]]

### Sizes

[[example file=components/button/example/sizes.html]]

[[example file=components/button/example/behaviours.html]]

### Covers

Adding a `.button__cover` element and the `.button--covered` modifier will cover button's default text with an extra one. For example, it's useful to indicate a currently processing loading state.

[[example file=components/button/example/covered.html]]

Want to achieve the same effect, but only on user `:hover` action? Switch to a `button--covered` modifier.

[[example file=components/button/example/curtained.html]]

### Icons

[[example file=components/button/example/icon.html]]

## Styleguide

[[styleguide file=components/button/button.scss]]

## Variables

[[variables file=components/button/_variables.scss]]

## Standalone installation

Install using NPM:

```bash
$ npm install --save @bemoid/button
```

Import files from the `node_modules` directory:

```scss
@import '~@bemoid/button/button';
```