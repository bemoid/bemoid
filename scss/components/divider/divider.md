---
title: Divider
description: Component for dividing group elements with space and centered, labeled badge.
group: Components
layout: docs.html
algolia: true
---

Component for dividing group of elements with space and centered, labeled badge.

## Usage

Use `.divider` class along with `.group__divider` element class.

> Note that the content of a divider can be simply precised with `data-text` attribute.

[[example file=components/divider/example/basic.html]]

Of course, dividers adjuses on stacked groups.

[[example file=components/divider/example/stacked.html]]

## Styleguide

[[styleguide file=components/divider/divider.scss]]

## Variables

[[variables file=components/divider/_variables.scss]]

## Standalone installation

Install using NPM:

```bash
$ npm install --save @bemoid/divider
```

Import required files from the `node_modules` directory:

```scss
@import '~@bemoid/group/group';
@import '~@bemoid/divider/divider';
```