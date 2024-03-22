The Right way to config colors in your uno.config.js (uno.config.ts)

## Using colorPaletteProvider : "default"

### Default palette : Pick colors you need

```js
import { colors } from "@unocss/preset-mini/colors";
...
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      primary: colors.indigo,
      secondary: colors.cyan,
      accent: colors.blue,
      danger: colors.red,
      success: colors.emerald,
      warning: colors.orange,
      info: colors.cyan,
      gray: colors.slate,
      black: colors.black,
      white: colors.white,
    },
    ...

```


### Custom with CSS Variables 

> **Not** : you need to provide every color with all shades from 50 to 950, black is black, there's no shade even white


```js
...
    colors: {
        primary: {
            DEFAULT: 'rgba(var(--c-primary) / <alpha-value>)',
            active: 'rgba(var(--c-primary-active) / <alpha-value>)',
            50: 'rgba(var(--ui-primary-50) / <alpha-value>)',
            100: 'rgba(var(--ui-primary-100) / <alpha-value>)',
            200: 'rgba(var(--ui-primary-200) / <alpha-value>)',
            300: 'rgba(var(--ui-primary-300) / <alpha-value>)',
            400: 'rgba(var(--ui-primary-400) / <alpha-value>)',
            500: 'rgba(var(--ui-primary-500) / <alpha-value>)',
            600: 'rgba(var(--ui-primary-600) / <alpha-value>)',
            700: 'rgba(var(--ui-primary-700) / <alpha-value>)',
            800: 'rgba(var(--ui-primary-800) / <alpha-value>)',
            900: 'rgba(var(--ui-primary-900) / <alpha-value>)',
            950: 'rgba(var(--ui-primary-950) / <alpha-value>)',
        },
        gray: {
            DEFAULT: 'rgba(var(--c-gray) / <alpha-value>)',
            50: 'rgba(var(--ui-gray-50) / <alpha-value>)',
            100: 'rgba(var(--ui-gray-100) / <alpha-value>)',
            200: 'rgba(var(--ui-gray-200) / <alpha-value>)',
            300: 'rgba(var(--ui-gray-300) / <alpha-value>)',
            400: 'rgba(var(--ui-gray-400) / <alpha-value>)',
            500: 'rgba(var(--ui-gray-500) / <alpha-value>)',
            600: 'rgba(var(--ui-gray-600) / <alpha-value>)',
            700: 'rgba(var(--ui-gray-700) / <alpha-value>)',
            800: 'rgba(var(--ui-gray-800) / <alpha-value>)',
            900: 'rgba(var(--ui-gray-900) / <alpha-value>)',
            950: 'rgba(var(--ui-gray-950) / <alpha-value>)',
        },
        ... 
        // define mor as needed 
    },
    ...

```

### Usage

This will help to have things like `btn-solid-primary`, `btn-solid-success`, `btn-ghost-primary`, and so on.


## Using colorPaletteProvider : "cssVar"


> **Not** : this feature is not ready to be used, we still need to improve it


When choosing this you need to follow this : 

In your uno config, here How you can add colors :

```ts
colors: {
    //
    primary:"rgba(var(--ui-primary) / <alpha-value>)",

    'colorname-hover':"rgba(var(--colorname-hover) / <alpha-value>)"
    'colorname-active' : "rgba(var(--colorname-text) / <alpha-value>)"
    'colorname-text' : "rgba(var(--colorname-text) / <alpha-value>)"
    
    // 
},
```