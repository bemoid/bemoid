---
title: Field
description: Component for creating various form fields
group: Components
layout: docs.html
algolia: true
---

Component for creating various form fields. Controls size, status and behaviour of inputs.

## Usage

Wrap your `<input>`, `<select>` or `<textarea>` elements within a `.field` block class and give them a `.field__input` element class.

[[example file=components/field/example/basic.html]]

### Elements

Field component only controls a size, status and behaviour of inputs. It should be used in pair with [`.input`](), [`.select`](), [`.checkbox`](), [`.radio`]() and [`.label`]() block classes to achieve fully styled inputs.

#### Labels

Labels should receive a `.field__label` element class and extend the `.label` block class.

> Be sure to explore a `.label` block documentation to further style the <label> element.

[[example file=components/field/example/label.html]]

#### Captions

Use `field__caption` element class to stylize field captions.

> Remember about the accessibility of captions, mark you inputs with `aria-describedby` which targets an id attribute of the caption.

[[example file=components/field/example/caption.html]]

#### Checkboxes and radios

Diffrently from standard inputs a checkbox and radio inputs should extend a `.field__control` element class and it's own `.checkbox` or `.radio` block class.

[[example file=components/field/example/checkbox.html]]

[[example file=components/field/example/radio.html]]

#### Selects

Select field need also to include a `.select` block class except of standard `.field__input` and `.input` classes.

[[example file=components/field/example/select.html]]

### Sizing

Fields can take various sizes. You can control it with sizing modifiers.

[[example file=components/field/example/sizes.html]]

Define needed field sizes with a map in the `$field-sizes` variable.

> A default size can be setup in `$field-size` variable. It will be used as initial size for `.field` block (e.g. `$field-size: big;`).

```scss
$field-sizes: (
  big: (
    'font-size': em(21px),
    'padding': space(small) space(medium),
  )
)
```

### Validation statuses

Fields may also obtain a validation statuses with modifier classes. Use together with captions to provide valuable feedback messages about form's errors to your users.

[[example file=components/field/example/statuses.html]]

Statuses styles can be controlled with a map in the `$field-variants` variable.

```scss
$field-variants: (
  success: (
    'color': color(success),
    'border-color': color(success),
  )
)
```

## Styleguide

[[styleguide file=components/field/field.scss]]

## Variables

[[variables file=components/field/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/field
```

Import required mixins along with a component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/mixins-declarations/declarations';

@import 'node_modules/@bemoid/field/field';
```

Optionally, import a suggested components.

```scss
@import 'node_modules/@bemoid/input/input';
@import 'node_modules/@bemoid/radio/radio';
@import 'node_modules/@bemoid/select/select';
@import 'node_modules/@bemoid/checkbox/checkbox';
```
