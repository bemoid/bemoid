---
title: Form
description: Component which structures form interactive controls like fields, selects or checkboxes
group: Components
layout: docs.html
algolia: true
---

Component which structures form interactive controls like fields, selects or checkboxes.

## Usage

Allow for controlling fields structure of a form. Simply, add `.form` block class to the `<form>` HTML tag.

[[example file=components/form/example/basic.html]]

You can also group related field with a `.form__group` element class and `<fieldset>` HTML tag. Use in pair with `.form__legend` to provide a description of the particular group.

[[example file=components/form/example/group.html]]

## Styleguide

[[styleguide file=components/form/form.scss]]

## Variables

[[variables file=components/form/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/form
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/form/form';
```

Optionally, import a suggested components.

```scss
@import 'node_modules/@bemoid/field/field';
@import 'node_modules/@bemoid/input/input';
@import 'node_modules/@bemoid/radio/radio';
@import 'node_modules/@bemoid/select/select';
@import 'node_modules/@bemoid/checkbox/checkbox';
```
