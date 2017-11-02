---
title: Group
description: Component for grouping together other components into a single interface.
group: Components
layout: docs.html
algolia: true
---

Component for grouping together other components into a single interface. It manages the items positioning and radius, so they can create a uniform interface.

## Usage

Wrap elements you want to group within a `.group` block class and add to its direct children the `.group__item` element class.

[[example file=components/group/example/basic.html]]

### Overlapping items

As you can see in the basic example, borders of the items stack next to each other and don't create a coherent interface. Use `.group--overlapped` modifier class to resolve this problem.

> Your grouped items have a thicker border? You can control the size of the overlap with a `$group-overlap` variable.

[[example file=components/group/example/overlaped.html]]

### Expanding items

Do you want to expand items to all available width? Leverage the `.group--expanded` modifier class.

[[example file=components/group/example/expanded.html]]

### Stacking items

You can also tell a group to stack its items on top of each other with the `.group--stacked` modifier class.

[[example file=components/group/example/stacked.html]]

There is also a `.group--stackable` modifier class with which the group's items intrinsically move to the stacked state on a specific breakpoint.

> The breakpoint behind which elements have to stack can be set up with `$group-stackable` variable.

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

Import required mixins along with a component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/mixins-breakpoints/breakpoints';

@import 'node_modules/@bemoid/group/group';
```