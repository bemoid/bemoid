---
title: Divider
description: Component for dividing group elements with space and centered, labeled badge.
group: Components
layout: docs.html
algolia: true
---

Component for dividing group of elements with space and centered, labeled badge.

## Usage

Use `.divider` class along with `.group__divider` element class.

> Note that the content of a divider can be simply precised with `data-text` attribute.

[[example file=components/divider/example/basic.html]]

Of course, dividers adjuses on stacked groups.

[[example file=components/divider/example/stacked.html]]

### Sizes

You can output a various sizes of the badges by using the sizing modifiers.

[[example file=components/divider/example/sizes.html]]

Control produced sizes with a map in the `$divider-badge-sizes` variable.

> Remember to setup a default size of the divider in `$divider-badge-size` variable. It will be used as initial size for `.divider` block (e.g. `$divider-badge-size: big;`).

```scss
$divider-badge-sizes: (
  big: (
    'width': 2rem,
    'height': 2rem,
    'font-size': em(16px)
  )
);
```

## Styleguide

[[styleguide file=components/divider/divider.scss]]

## Variables

[[variables file=components/divider/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/divider
```

Import required mixins along with a component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/mixins-declarations/declarations';

@import 'node_modules/@bemoid/divider/divider';
```

Optionally, import a suggested components.

```scss
@import 'node_modules/@bemoid/group/group';
```
