---
title: Blockqoute
description: Defines a block of text that is a direct quotation
group: Components
layout: docs.html
algolia: true
---

## Introduction

The Bemoid blockquote component defines a block of text that is a direct quotation.

## Usage

Warp your quoting content with `<blockquote>` HTML markup and `.blockquote` class. Leverage the [segment]() component to add paddings.

[[example file=components/blockquote/example/basic.html]]

#### Providing a source of the quotation

Use `<footer>` markup with the `.blockquote__footer` class for identifying the source. Don't forget to include name of the source in `<cite>` markup.

[[example file=components/blockquote/example/providing-a-source.html]]

## Styleguide

[[styleguide file=components/blockquote/blockquote.scss]]

## Variables

[[variables file=components/blockquote/_variables.scss]]

## Standalone installation

Install using NPM:

```bash
$ npm install --save @bemoid/blockquote
```

Import files from the `node_modules` directory:

```scss
@import '~@bemoid/segment/segment';
@import '~@bemoid/blockqoute/blockqoute';
```