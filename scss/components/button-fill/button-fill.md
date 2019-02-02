---
title: Button Fill
description: Component for creating standard clickable buttons
group: Components
layout: docs.html
algolia: true
---

Component for creating standard clickable buttons.

## Usage

Use `.button-fill` class for a standard button.

[[example file=components/button-fill/example/basic.html]]

### Variants

Buttons can take different variants by applying various modifiers. By default, there is a built-in set of 6 color variants.

[[example file=components/button-fill/example/basic.html]]

Of course, you can customize this set by adding or removing entries from the map in `$button-fill-variants` variable. Each variant should be entered as a map of declarations in variant's name key.

```scss
$button-fill-variants: (
  colorful: (
    'color': color(black) color(white),
    'background-color': color(gray-light) color(primary),
  )
);
```

Please, pay attention to the double value of a `color` and `background-color` declarations. A first value is applied to button's initial state when a second one to the `:hover` state.

> A default variant of the `.button` can be set with `$button-variant` variable. Enter there keyword name of a variant from the `$button-fill-variants` map (e.g. `$button-fill-variant: colorful;`).

```scss
(
  // Button's text will take a `black` color at
  // initial state and `white` color when hovered.
  //
  // ----- :initial ↴  :hover ↴
  'color': color(black) color(white)
)
```

## Styleguide

[[styleguide file=components/button-fill/button-fill.scss]]

## Variables

[[variables file=components/button-fill/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/button-fill
```

Import required components files from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/button/button';
@import 'node_modules/@bemoid/button-fill/button-fill';
```
