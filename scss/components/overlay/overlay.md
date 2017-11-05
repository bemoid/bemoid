---
title: Overlay
description: Curtaining a view with semi-trasparent panel so users won't be distracted by content underneath.
group: Components
layout: docs.html
algolia: true
---

Curtaining a view with semi-trasparent panel so users won't be distracted by content underneath.

## Usage

Place a `.overlay` block class insiad a relative positioned HTML element.

[[example file=components/overlay/example/basic.html]]

## Styleguide

[[styleguide file=components/overlay/overlay.scss]]

## Variables

[[variables file=components/overlay/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/overlay
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/overlay/overlay';
```