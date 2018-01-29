---
title: List
description: Component for representing a list of items.
group: Objects
layout: docs.html
algolia: true
---

Component for representing a list of items.

## Usage

Add `.list` block class to `<ul>` or `<ol>` markup and mark its items with `.list__item` element class.

[[example file=objects/list/example/basic.html]]

List items can be displayed in one line with `.list--inline` modifier class.

[[example file=objects/list/example/inline.html]]

There is also a `.list--unstyle` modifier class to remove default listing styles.

[[example file=objects/list/example/unstyled.html]]

## Styleguide

[[styleguide file=objects/list/list.scss]]

## Variables

[[variables file=objects/list/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/list
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/list/list';
```