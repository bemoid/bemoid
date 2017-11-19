---
title: Media
description: Component for displaying a side element alongside with the content.
group: Objects
layout: docs.html
algolia: true
---

Component for displaying a side element alongside with the content.

## Usage

The media object helps build a repetitive and nestable content where some media is positioned alongside. Place your main content inside the `.media__body` element class and a media in `.media__side` element class.

[[example file=objects/media/example/basic.html]]

Of course, the `.media__side` can be positioned on both sides of the content.

[[example file=objects/media/example/sided.html]]

You may also unlimitedly nest further media objects. It's really helpfull when creating disscusion or list of comments.

[[example file=objects/media/example/nested.html]]

### Alignment

Vertical distribution of the `.media__side` element can be adjusted with a alignment modifier classes.

[[example file=objects/media/example/alignment.html]]

### Reordering

There is a `.media--reversed` modifier class to reverse an order of the columns within the media.

[[example file=objects/media/example/reversed.html]]

#### Stacking

You can also tell side and content to stack on top of each other with the `.media--stacked` modifier class.

[[example file=objects/media/example/stacked.html]]

There is also a `.media--stackable` modifier class with which columns intrinsically move to the stacked state on a specific breakpoint.

> The breakpoint behind which elements have to stack can be set up with `$media-stackable` variable.

[[example file=objects/media/example/stackable.html]]

### Gutter

Gaps between side and content may be set up with a map in `$media-gutters` variable. Gutters are responsive and can change its value on specified breakpoints.

> Enter a `key: value` pairs, where a key is a name of the breakpoint from which the given value has to be active.

```scss
$media-gutters: (
  xsmall: space(medium),
  large: space(large),
);
```

## Styleguide

[[styleguide file=objects/media/media.scss]]

## Variables

[[variables file=objects/media/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/media
```

Import required functions and mixins along with a component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/functions-getters/getters';
@import 'node_modules/@bemoid/mixins-breakpoints/breakpoints';

@import 'node_modules/@bemoid/media/media';
```
