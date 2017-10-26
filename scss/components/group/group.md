---
title: Group
description: Component for grouping together other components into single interface.
group: Components
layout: docs.html
algolia: true
---

Component for grouping together other components into single interface. It manages the items positioning and radius, so they can create uniform interface.

## Usage

Wrap elements you want to group within a `.group` block class and add to its direct childrean the `.group__item` element class.

[[example file=components/group/example/basic.html]]

### Overlaping items

As you can see in basic example, borders of the items stack next to each other and don't create a coherent interface. Use `.group--overlaped` modifier class to resolve this problem.

> Your grouped items have thicker border? You can control the size of the overlap with a `$group-overlap` variable.

[[example file=components/group/example/overlaped.html]]

### Expanding items

Do you want to expand items to all available width? Leverage the `.group--expanded` modifier class.

[[example file=components/group/example/expanded.html]]

### Stacking items

You can also tell a group to stack its items on top of each other with the `.group--stacked` modifier class.

[[example file=components/group/example/stacked.html]]

There is also a `.group--stackable` modifier class with which the group's items intrinsically move to stacked state on a specific breakpoint.

> The breakpoint behind which elements have to stack can be setup with `$group-stackable` variable.

[[example file=components/group/example/stackable.html]]

## Styleguide

[[styleguide file=components/group/group.scss]]

## Variables

[[variables file=components/group/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/group
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/group/group';
```