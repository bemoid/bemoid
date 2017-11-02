---
title: Button
description: Component for creating standard clickable buttons
group: Components
layout: docs.html
algolia: true
---

Component for creating standard clickable buttons. It's designed to use mainly on `<a>`, `<button>` and `<input>` HTML elements.

## Usage

Use `.button` class for a standard button.

[[example file=components/button/example/basic.html]]

### Variants

Buttons can take different variants by applying various modifiers. They allow you to control button's colors, dimensions, and sizes.

#### Colors

By default, there is a built-in set of 6 color variants.

[[example file=components/button/example/variants.html]]

Of course, you can customize this set by adding or removing entries from the map in `$button-variants` variable. Each variant should be entered as a map of declarations in variant's name key.

```scss
$button-variants: (
  colorful: (
    'color': color(black) color(white),
    'background-color': color(light-gray) color(primary),
  )
);
```

Please, pay attention to the double value of a `color` and `background-color` declarations. A first value is applied to button's initial state when a second one to the `:hover` state.

> A default variant of the `.button` can be set with `$button-variant` variable. Enter there keyword name of a variant from the `$button-variants` map (e.g. `$button-variant: colorful;`).

```scss
(
  // Button's text will take a `black` color at
  // initial state and `white` color when hovered.
  //
  // ----- :initial ↴  :hover ↴
  'color': color(black) color(white)
)
```

#### Hollowed

Buttons can be also presented in a hollowed version with transparent background.

[[example file=components/button/example/variants-hollowed.html]]

This set of variants is controlled in the same manner as standard variants but with a map defined in the `$button-hollow-variants` variable.

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

Additionally, there are two modifiers to control horizontal expanding of the button. Enlarge horizontal paddings with `.button--wider` modifier or add `.button--expanded` to make a button take the full width of a parent.

[[example file=components/button/example/behaviours.html]]

### Covers

Adding a `.button__cover` element and the `.button--covered` the modifier will cover button's default text with an extra one. For example, it's useful to indicate a currently processing loading state.

[[example file=components/button/example/covered.html]]

Want to achieve the same effect, but only on user `:hover` action? Switch to a `button--curtained` modifier.

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
@import 'node_modules/@bemoid/mixins-declarations/declarations';

@import 'node_modules/@bemoid/button/button';
```
