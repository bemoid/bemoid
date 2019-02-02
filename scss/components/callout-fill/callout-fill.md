---
title: Callout Fill
description: Component for creating standard content with a filled background
group: Components
layout: docs.html
algolia: true
---

Component for creating standard content with a filled background. Handy for catching user attention on important information.

## Usage

Enclose your callout-fill text in a `.callout-fill` block class.

[[example file=components/callout-fill/example/basic.html]]

### Variants

You can present different variants of the callout-fill by applying various modifiers. By default, there is a standard set of 4 color variants.

[[example file=components/callout-fill/example/variants.html]]

Of course, you can customize this set by adding or removing entries from the map in `$callout-fill-variants` variable. Each variant should be entered as a map of declarations in variant's name key option.

```scss
$callout-fill-variants: (
  neutral: (
    'background-color': color(gray-lighter),
    'border-color': color(gray-light),
  ),
);
```

> A default variant of the `.callout-fill` can be set with `$callout-fill-variant` variable. Enter there keyword name of a variant from the `$callout-fill-variants` map (e.g. `$callout-fill-variant: neutral;`).

## Styleguide

[[styleguide file=components/callout-fill/callout-fill.scss]]

## Variables

[[variables file=components/callout-fill/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/callout-fill
```

Import required components files from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/callout/callout';
@import 'node_modules/@bemoid/callout-fill/callout-fill';
```
