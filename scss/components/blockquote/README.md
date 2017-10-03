# Blockquote

The Bemoid blockquote component defines a block of text that is a direct quotation.

## Installation

Install using NPM:

```bash
$ npm install --save @bemoid/blockquote
```

## Usage

Import SASS files from the `node_modules` directory:

```scss
@import '~@bemoid/segment/segment';
@import '~@bemoid/blockqoute/blockqoute';
```

Use `blockquote` class along with `segment`:

```html
<blockquote class="blockquote segment">
  Why is the rum always gone? <cite>— Captain Jack Sparrow</cite>
</blockquote>
```