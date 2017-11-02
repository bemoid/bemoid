---
title: Message
description: Component for displaying emphasized text informations.
group: Components
layout: docs.html
algolia: true
---

Component for displaying emphasized text informations. Handy for catching user attention on important information.

## Usage

Enclose your message text in a `.message` block class.

[[example file=components/message/example/basic.html]]

### Title

Messages may have alse a title. Use the `.message__title` element class.

[[example file=components/message/example/titled.html]]

### Variants

You can present different variants of the message by applying various modifiers.

#### Colors

By default, there is a standard set of 4 color variants.

[[example file=components/message/example/variants.html]]

Of course, you can customize this set by adding or removing entries from the map in `$message-variants` variable. Each variant should be entered as a map of declarations in variant's name key option.

```scss
$message-variants: (
  neutral: (
    'background-color': color(lighter-gray),
    'border-color': color(light-gray),
  ),
);
```

> A default variant of the `.message` can be set with `$message-variant` variable. Enter there keyword name of a variant from the `$message-variants` map (e.g. `$message-variant: neutral;`).

#### Hollowed

Messages can be also presented in a less eye-catching hollowed version.

[[example file=components/message/example/variants-hollowed.html]]

This set of variants is controlled in the same manner as standard variants but with a map defined in the `$message-hollow-variants` variable.

### Sizes

Control padding of a message using the [segment]() component and its modifiers.

[[example file=components/message/example/sizes.html]]

## Styleguide

[[styleguide file=components/message/message.scss]]

## Variables

[[variables file=components/message/_variables.scss]]

## Standalone installation

Install package using NPM.

```bash
$ npm install @bemoid/message
```

Import component file from the `node_modules` directory.

```scss
@import 'node_modules/@bemoid/message/message';
```

Optionally, import a suggested components.

```scss
@import 'node_modules/@bemoid/segment/segment';
```