---
title: Button Hollow
description: Component for creating hollowed variant of clickable buttons
group: Components
layout: docs.html
algolia: true
---

Component for creating hollowed variant of clickable buttons.

## Usage

Use `.button-hollow` class for a standard button.

[[example file=components/button-hollow/example/basic.html]]

### Variants

Buttons can take different variants by applying various modifiers. By default, there is a built-in set of 6 color variants.

[[example file=components/button-hollow/example/basic.html]]

Of course, you can customize this set by adding or removing entries from the map in `$button-hollow-variants` variable. Each variant should be entered as a map of declarations in variant's name key.

```scss
$button-hollow-variants: (
  colorful: (
    'color': color(black) color(white),
    'background-color': color(gray-light) color(primary),
  )
);
```

Please, pay attention to the double value of a `color` and `background-color` declarations. A first value is applied to button's initial state when a second one to the `:hover` state.

> A default variant of the `.button` can be set with `$button-variant` variable. Enter there keyword name of a variant from the `$button-hollow-variants` map (e.g. `$button-hollow-variant: colorful;`).

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

[[styleguide file=components/button-hollow/button-hollow.scss]]

## Variables

[[variables file=components/button-hollow/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/button-hollow
```

Import required components files from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/button/button';
@import 'node_modules/@bemoid/button-hollow/button-hollow';
```
