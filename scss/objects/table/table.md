---
title: Table
description: Component for representing a tabular data.
group: Objects
layout: docs.html
algolia: true
---

Component for representing a tabular data.

## Usage

Add `.table` block class to the `<table>` HTML tag and mark cells of the table with a `.table__cell` element class.

[[example file=objects/table/example/basic.html]]

Use `.table__head` and `.table__footer` to highlight the `<thead>` and `<tfoot>` of a table.

[[example file=objects/table/example/head-and-footer.html]]

### Sizing

There is a `.table` modifier class for making a table more compact.

[[example file=objects/table/example/condensed.html]]

### Borders

Various type of borders can be applied with a stylizing modifier classes. Let's start with a standard all side border.

[[example file=objects/table/example/bordered.html]]

On the other hand, a `.table--scoreboard` adds border only to internal cells.

[[example file=objects/table/example/scoreboard.html]]

### Hightlighting

A `.table--stripe` modifier class will add background to every even row of the table.

[[example file=objects/table/example/bordered.html]]

Row can be hightlighted on the user `:hover` event with the `.table--hoverable` modifier class.

[[example file=objects/table/example/scoreboard.html]]

## Styleguide

[[styleguide file=objects/table/table.scss]]

## Variables

[[variables file=objects/table/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/table
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/table/table';
```