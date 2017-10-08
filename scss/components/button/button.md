---
title: Button
description: Component for creating standard clickable buttons
group: Components
layout: docs.html
algolia: true
---

## Introduction

The Bemoid button component for creating standard clickable buttons.

## Usage

Use `button` class for a standard button.

```html
<button class="button">Button</button>
```

Adding a `button__cover` element and the `button--covered` modifier will cover button's default text with an extra one. For example, it's useful to indicate a currently processing loading state.

```html
<button class="button button--covered">
  <span>Button</span>

  <span class="button__cover">Loading...</span>
</button>
```

Want to achieve the same effect, but only on user `:hover` action? Switch to a `button--covered` modifier.

```html
<button class="button button--curtained">
  <span>Button</span>

  <span class="button__cover">Action</span>
</button>
```

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