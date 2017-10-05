# Blockquote

The Bemoid checkbox component for selectable input fields.

## Usage

Use `checkbox` class along with general `field` component:

```html
<div class="field">
  <div class="field__control checkbox">
    <input id="Checkbox" class="checkbox__input" type="checkbox">
    <label for="Checkbox" class="checkbox__label">Checkbox</label>
  </div>
</div>
```

## Standalone installation

Install using NPM:

```bash
$ npm install --save @bemoid/checkbox
```

Import files from the `node_modules` directory:

```scss
@import '~@bemoid/field/field';
@import '~@bemoid/checkbox/checkbox';
```

## Variables

|  Name  |  Type  |  Default  |
|---|---|---|
| `$checkbox-radius` | Number/Value | `radius(circle)` |
| `$checkbox-size` | Number/Value | `em(18px)` |
| `$checkbox-background` | Color | `transparent` |
| `$checkbox-border` | Value | `1px solid color(light-gray)` |
| `$checkbox-hover-border` | Value | `1px solid color(info)` |
| `$checkbox-hover-background` | Color | `transparentize(color(info), 0.9)` |
| `$checkbox-mark-size` | Number/Value | `em(14px)` |
| `$checkbox-mark-width` | Number/Value | `em(2px)` |
| `$checkbox-mark-color` | Color | `color(info)` |
| `$checkbox-mark-transform` | Value | `rotate(-45deg) scale(0)` |
| `$checkbox-mark-active-transform` | Value | `rotate(-45deg) scale(1)` |