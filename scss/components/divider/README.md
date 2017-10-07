# Blockquote

The Bemoid divider component for dividing group elements with space and centered, labeled badge.

## Usage

Use `divider` class along with `group__divider` element class. Content of the divider can be precised with `data-text` attribute.

```html
<div class="group">
  <button class="group__item button button--large">Button</button>
  <div class="group__divider divider" data-text="or"></div>
  <button class="group__item button button--large">Button</button>
</div>
```

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