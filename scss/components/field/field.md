# Field

The Bemoid field component for creating various form fields.

## Usage

> This component only controls a size, status and behaviour of inputs. Use it in pair with [`input`](), [`select`](), [`checkbox`]() and [`radio`]() components to achieve fully styled inputs.

Warp your `<input>` elements with a `field` class

```html
<div class="field">
  <input id="text" class="field__input" type="text">
</div>
```

Fields labels should receive a `field__label` class.

```html
<div class="field">
  <label for="text" class="field__label label">Text</label>
  <input id="text" class="field__input" type="text">
</div>
```

Use `field__caption` to stylize field captions.

```html
<div class="field">
  <input id="text" class="field__input" type="text" aria-describedby="caption">
  <small id="caption" class="field__caption">Lorem ipsum dolor sit amet.</small>
</div>
```

Diffrently form standard inputs a checkboxes and radios should be warped with the `field__control` class.

```html
<div class="field">
  <div class="field__control">
    <input type="checkbox">
  </div>
</div>
```

```html
<div class="field">
  <div class="field__control">
    <input type="radio">
  </div>
</div>
```

## Standalone installation

Install using NPM:

```bash
$ npm install --save @bemoid/field
```

Import required files from the `node_modules` directory:

```scss
@import '~@bemoid/field/field';
```
