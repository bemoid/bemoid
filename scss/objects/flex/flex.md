---
title: Flex
description: Grid system based on flexbox for building complex layouts.
group: Objects
layout: docs.html
algolia: true
---

Flex system based on flexbox for building complex layouts.

## Usage

Just place a `.flex__column` element classes as direct children of the `.flex` block class. Each column will have an equal width.

[[example file=objects/flex/example/basic.html]]

You may also unlimitedly nest further flexs.

[[example file=objects/flex/example/nested.html]]

Of course, you can control the width of the columns with a sizes modifiers. Each modifier class represents how many columns you want out of defined maximum.

> Maximum number of columns in a single row can be defined in `$flex-columns` variable. By default, component ships with a 12-column flex system.

[[example file=objects/flex/example/sizes.html]]

Columns width can also adjust to its content with a `.flex__column--shrink` modifier class.

[[example file=objects/flex/example/shrinking.html]]

### Responsive

Columns can also take specific sizes from concrete breakpoints. Simply add the `@<breakpoint>` suffix to the standard size modifier class. For example, if you want to have column to occupy 4 spaces from a medium breakpoint use `.flex__column--4@medium` modifier class.

[[example file=objects/flex/example/sizes-responsive.html]]

You can control responsive points of the flex with a map in the `$flex-sizes` variable.

> It's recommended to define sizes based on breakpoints to coincide with the points where layout changes take place.

```scss
$flex-sizes: (
  medium: breakpoint(medium)
)
```

### Alignment

Horizontal distribution of the flex columns can be adjusted with alignment modifier classes.

[[example file=objects/flex/example/alignment-horizontally.html]]

Same goes for a vertical placement.

[[example file=objects/flex/example/alignment-vertically.html]]

Columns can evenly align vertically themselves.

[[example file=objects/flex/example/alignment-columns.html]]

### Reordering

To avoid unnecessary bloat, flex component does not provide any ordering classes. You should maintain it with `order` property inside your stylesheets.

#### Reversing

Flex can reverse order of its columns with the `.flex--reverse` modifier class.

[[example file=objects/flex/example/reverse.html]]

The `.flex--reverse` modifier class also accepts breakpoints behind which columns have to revese its order.

[[example file=objects/flex/example/reverse-responsive.html]]

#### Stacking

You can also tell a flex to stack its columns on top of each other with the `.flex--stack` modifier class.

[[example file=objects/flex/example/stacked.html]]

Additionaly, there is a `.flex--nowrap` modifier class for forcing columns to stay in single row. Even if thier width are larger than available space.

[[example file=objects/flex/example/nowrap.html]]

### Gutter

In order to add gaps between columns you have to use an additional module - the [gutter](/docs/gutter).

[[example file=objects/flex/example/guttered.html]]

By default, gutters are added only horizontally. However, there is an [`waffle`](/docs/waffle) module which adds gutter on all sides of the columns, so you don't have to think about spacing between rows when columns stacks.

[[example file=objects/flex/example/waffled.html]]

## Styleguide

[[styleguide file=objects/flex/flex.scss]]

## Variables

[[variables file=objects/flex/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/flex
```

Import required mixins along with a component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/mixins-breakpoints/breakpoints';

@import 'node_modules/@bemoid/flex/flex';
```
