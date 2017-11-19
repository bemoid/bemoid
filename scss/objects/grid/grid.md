---
title: Grid
description: Grid system based on flexbox for building complex layouts.
group: Objects
layout: docs.html
algolia: true
---

Grid system based on flexbox for building complex layouts.

## Usage

Just place a `.grid__column` element classes as direct children of the `.grid` block class. Each column will have an equal width.

[[example file=objects/grid/example/basic.html]]

You may also unlimitedly nest further grids.

[[example file=objects/grid/example/nested.html]]

Of course, you can control the width of the columns with a sizes modifiers. Each modifier class represents how many columns you want out of defined maximum.

> Maximum number of columns in a single row can be defined in `$grid-columns` variable. By default, component ships with a 12-column grid system.

[[example file=objects/grid/example/sizes.html]]

Columns width can also adjust to its content with a `.grid__column--shrink` modifier class.

[[example file=objects/grid/example/shrinking.html]]

### Responsive

Columns can also take specific sizes from concrete breakpoints. Simply add the `@<breakpoint>` suffix to the standard size modifier class. For example, if you want to have column to occupy 4 spaces from a medium breakpoint use `.grid__column--4@medium` modifier class.

[[example file=objects/grid/example/sizes-responsive.html]]

You can control responsive points of the grid with a map in the `$grid-sizes` variable.

> It's recommended to define sizes based on breakpoints to coincide with the points where layout changes take place.

```scss
$grid-sizes: (
  medium: breakpoint(medium)
)
```

### Alignment

Horizontal distribution of the grid columns can be adjusted with alignment modifier classes.

[[example file=objects/grid/example/alignment-horizontally.html]]

Same goes for a vertical placement.

[[example file=objects/grid/example/alignment-vertically.html]]

Columns can evenly align vertically themselves.

[[example file=objects/grid/example/alignment-columns.html]]

### Reordering

To avoid unnecessary bloat, grid component does not provide any ordering classes. You should maintain it with `order` property inside your stylesheets. However, there is a `.grid--reversed` modifier class to reverse an order of the columns within the grid.

[[example file=objects/grid/example/reversed.html]]

#### Stacking

You can also tell a grid to stack its columns on top of each other with the `.grid--stacked` modifier class.

[[example file=objects/grid/example/stacked.html]]

There is also a `.grid--stackable` modifier class with which columns intrinsically move to the stacked state on a specific breakpoint.

> The breakpoint behind which elements have to stack can be set up with `$grid-stackable` variable.

[[example file=objects/grid/example/stackable.html]]

### Gutter

Gaps between columns may be set up with a map in `$grid-gutters` variable. Gutters are responsive and can change its value on specified breakpoints.

> Enter a `key: value` pairs, where a key is a name of the breakpoint from which the given value has to be active.

```scss
$grid-gutters: (
  xsmall: space(medium),
  large: space(large),
);
```

By default, gutters are added only horizontally. However, there is a special `.grid--waffled` modifier which adds gutter on all sides of the columns, so you don't have to think about spacing between rows.

[[example file=objects/grid/example/waffled.html]]

You may also remove spacing between columns entirely with `.grid--gapless` modifier class.

[[example file=objects/grid/example/gapless.html]]

## Styleguide

[[styleguide file=objects/grid/grid.scss]]

## Variables

[[variables file=objects/grid/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/grid
```

Import required mixins along with a component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/mixins-breakpoints/breakpoints';

@import 'node_modules/@bemoid/grid/grid';
```
