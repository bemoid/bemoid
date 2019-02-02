---
title: Message
description: Component for creating emphasized content with a hollowed background
group: Components
layout: docs.html
algolia: true
---

Component for creating emphasized content with a hollowed background. Handy for catching user attention on important information.

## Usage

Enclose your content in a `.callout-hollow` block class.

[[example file=components/callout-hollow/example/basic.html]]

### Variants

You can present different variants of the callout-hollow by applying various modifiers. By default, there is a standard set of 4 color variants.

[[example file=components/callout-hollow/example/variants.html]]

Of course, you can customize this set by adding or removing entries from the map in `$callout-hollow-variants` variable. Each variant should be entered as a map of declarations in variant's name key option.

```scss
$callout-hollow-variants: (
  neutral: (
    'background-color': color(gray-lighter),
    'border-color': color(gray-light),
  ),
);
```

> A default variant of the `.callout-hollow` can be set with `$callout-hollow-variant` variable. Enter there keyword name of a variant from the `$callout-hollow-variants` map (e.g. `$callout-hollow-variant: neutral;`).

## Styleguide

[[styleguide file=components/callout-hollow/callout-hollow.scss]]

## Variables

[[variables file=components/callout-hollow/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/callout-hollow
```

Import required components files from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/callout/callout';
@import 'node_modules/@bemoid/callout-hollow/callout-hollow';
```
