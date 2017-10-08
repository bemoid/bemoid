---
title: Blockqoute
description: Defines a block of text that is a direct quotation
group: Components
algolia: true
---

<a name="introduction"></a>
## [Introduction](#introduction)

The Bemoid blockquote component defines a block of text that is a direct quotation.

<a name="usage"></a>
## [Usage](#usage)

Warp your quoting content with `<blockquote>` HTML markup and `.blockquote` class. Leverage the [segment]() component to add paddings.

[[example file="components/blockquote/example/basic.html"]]

<a name="providing-a-source-of-the-quotation"></a>
#### [Providing a source of the quotation](#providing-a-source-of-the-quotation)

Use `<footer>` markup with the `.blockquote__footer` class for identifying the source. Don't forget to include name of the source in <cite> markup.

[[example file="components/blockquote/example/providing-a-source.html"]]

<a name="styleguide"></a>
## [Styleguide](#styleguide)

[[styleguide file="components/blockquote/blockquote.scss"]]

<a name="variables"></a>
## [Variables](#variables)

[[variables file="components/blockquote/_variables.scss"]]

<a name="standalone-installation"></a>
## [Standalone installation](#standalone-installation)

Install using NPM:

```bash
$ npm install --save @bemoid/blockquote
```

Import files from the `node_modules` directory:

```scss
@import '~@bemoid/segment/segment';
@import '~@bemoid/blockqoute/blockqoute';
```