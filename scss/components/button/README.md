# Button

The Bemoid button component for creating standard clickable buttons.

## Usage

Use `button` class for a standard button.

```html
<button class="button">Button</button>
```

Adding a `button__cover` element and the `button--covered` modifier will cover button's default text with an extra one. For example, it's useful to indicate a currently processing loading state.

```html
<button class="button button--covered">
  <span>Button</span>

  <span class="button__cover">Loading...</span>
</button>
```

Want to achieve the same effect, but only on user `:hover` action? Switch to a `button--covered` modifier.

```html
<button class="button button--curtained">
  <span>Button</span>

  <span class="button__cover">Action</span>
</button>
```

## Standalone installation

Install using NPM:

```bash
$ npm install --save @bemoid/button
```

Import files from the `node_modules` directory:

```scss
@import '~@bemoid/button/button';
```

## Variables

|  Name  |  Type  |  Default  |
|---|---|---|
| `$button-variants` | Map | ••• |
| `$button-hollow-variants` | Map | ••• |
| `$button-sizes` | Map | ••• |
| `$button-size` | Keyword | `medium` |
| `$button-variant` | Keyword | `neutral` |
| `$button-weight` | Keword/Number | `400` |
| `$button-align` | Keyword | `center` |
| `$button-radius` | Value | `radius(xsmall)` |
| `$button-wide-padding` | Value | `em(40px)` |
| `$button-disabled-opacity` | Number | `0.5` |
| `$button-hollow-variant` | Keyword | `neutral` |
| `$button-hollow-border` | Value | `1px` |
| `$button-hollow-background` | Color | `transparent` |