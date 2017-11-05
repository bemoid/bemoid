---
title: Dropdown
description: Component for creating interacive hidden panels.
group: Objects
layout: docs.html
algolia: true
---

> Important! Bemoid does not include any JavaScript for dropdown interaction. You have to take care of this yourself.

Component for creating interactive hidden panels.

## Usage

Warp your desired dropdown trigger and content within a `.dropdown` block class. Use `.dropdown--active` modifer class to show up content defined in `.dropdown__content` element class.

[[example file=components/dropdown/example/basic.html]]

You can also use a `dropdown--hoverable` modifier class, so visibility of the content will be toggled on `:hover` action.

[[example file=components/dropdown/example/hoverable.html]]

### Positioning

Position of the dropdown content may be floated to the right with a `.dropdown--right` modifier class.

[[example file=components/dropdown/example/positioning.html]]

## Styleguide

[[styleguide file=components/dropdown/dropdown.scss]]

## Variables

[[variables file=components/dropdown/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/dropdown
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/dropdown/dropdown';
```

Optionally, import a suggested components.

```scss
@import 'node_modules/@bemoid/segment/segment';
@import 'node_modules/@bemoid/panel/panel';
```