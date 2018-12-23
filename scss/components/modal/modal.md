---
title: Modal
description: Component for large dialog prompts which temporary covers entire viewport
group: Components
layout: docs.html
algolia: true
---

Component for large dialog prompts which temporary covers entire viewport. Useful for displaying content which user should focus on.

## Usage

The modal is hight-level component which is composed from low-level components. The combination of [`.container`](/docs/container), [`.panel`](/docs/panel), [`.segment`](/docs/segment) and [`.overlay`](/docs/overlay) allows you to build structurally flexible modals.

[[example file=components/modal/example/basic.html]]

### Overlay

Use `.modal__overlay` element class with `.overlay` block class to curtain an underneath content with a semi-transparent panel. Modal will be visually cut out from the contents below.

[[example file=components/modal/example/overlay.html]]

### Segments

You can add additional segments to the modal's panel to introduce header and footer sections.

[[example file=components/modal/example/segments.html]]

### Sizes

A horizontal sizing of a modal can be controlled with modifiers of the `.container` block class (like `.container--small`).

[[example file=components/modal/example/sizes.html]]

## Styleguide

[[styleguide file=components/modal/modal.scss]]

## Variables

[[variables file=components/modal/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/modal
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/modal/modal';
```

Optionally, import a suggested components.

```scss
@import 'node_modules/@bemoid/segment/segment';
@import 'node_modules/@bemoid/container/container';
@import 'node_modules/@bemoid/overlay/overlay';
@import 'node_modules/@bemoid/panel/panel';
```
