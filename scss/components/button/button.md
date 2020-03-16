---
title: Button
description: Extendable component for creating clickable buttons
group: Components
layout: docs.html
algolia: true
---

Extendable component for creating clickable buttons.

## Usage

Use `.button` class for a standard button.

[[example file=components/button/example/basic.html]]

### Sizes

Need smaller or larger buttons?

[[example file=components/button/example/sizes.html]]

As earlier, you are free to create as many sizes you need with map defined in `$button-sizes` variable.

> Don't forget to setup a default size in `$button-size` variable. Variant defined in this variable will be used as initial size for `.button` block (e.g. `$button-size: big;`).

```scss
$button-sizes: (
  big: (
    'font-size': em(12px)
  )
);
```

Additionally, there are two modifiers to control horizontal expanding of the button. Enlarge horizontal paddings with `.button--wider` modifier or add `.button--expand` to make a button take the full width of a parent.

[[example file=components/button/example/wider.html]]

[[example file=components/button/example/expanded.html]]

### Covers

Adding a `.button__cover` element and the `.button--cover` the modifier will cover button's default text with an extra one. For example, it's useful to indicate a currently processing loading state.

[[example file=components/button/example/covered.html]]

Want to achieve the same effect, but only on user `:hover` action? Switch to a `button--curtain` modifier.

[[example file=components/button/example/curtained.html]]

### Icons

Button also has a special element for presenting icons.

[[example file=components/button/example/icon.html]]

## Styleguide

[[styleguide file=components/button/button.scss]]

## Variables

[[variables file=components/button/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/button
```

Import required mixins along with a component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/button/button';
```
