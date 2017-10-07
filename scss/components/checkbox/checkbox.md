---
title: "Checkbox"
group: "Components"
---

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