---
title: Container
description: Component for limiting spreading of the internal components to a certain width.
group: Components
layout: docs.html
algolia: true
---

Component for limiting spreading of the internal components to a certain width. Its purpose is to be used as a wrapper for other components.

## Usage

By default, a `.container` block class causes expanding of an element to all available space on the width.

[[example file=components/container/example/basic.html]]

### Sizes

Of course, containers may take different sizes with modifiers.

[[example file=components/field/example/sizes.html]]

You can control needed sizes with a map in the `$container-sizes` variable. It's recommended to define sizes based on breakpoints to coincide with the points where layout changes take place.

> A default size can be setup in `$container-size` variable. It will be used as initial size for `.container` block (e.g. `$container-size: medium;`).

```scss
$container-sizes: (
  medium: breakpoint(medium)
)
```

### Centering

By default, container float to the left. Use a `.container--centered` modifier class to make it centered.

[[example file=components/container/example/centered.html]]

## Styleguide

[[styleguide file=components/container/container.scss]]

## Variables

[[variables file=components/container/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/container
```

Import required mixins along with a component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/mixins-breakpoints/breakpoints';

@import 'node_modules/@bemoid/container/container';
```
