# Blockquote

The Bemoid blockquote component defines a block of text that is a direct quotation.

## Usage

Use `blockquote` class along with `segment` component:

```html
<blockquote class="blockquote segment">
  Why is the rum always gone? <cite>— Captain Jack Sparrow</cite>
</blockquote>
```

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

## Variables

|  Name  |  Type  |  Default  |
|---|---|---|
| `$blockquote-margins` | Number/Value | `0` |
| `$blockquote-background` | Color | `color(lighter-gray)` |
| `$blockquote-border-color` | Color | `color(gray)` |
| `$blockquote-border-width` | Value | `0 0 0 em(5px)` |
| `$blockquote-border-style` | Keyword | `solid` |