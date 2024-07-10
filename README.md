<p align="center">
  <img src="./favicon-dark.png" style="width:100px;" />
  <h1 align="center">Unify Preset</h1>
  <p align="center">UnoCSS Toolkit.</p>
</p>


## UnifyUI-Preset

UnifyPreset is a collection of UnoCSS Presets.

> **Not** : This project is a WIP, you can test it and report bug... Your contribution is much valualed for us, help us to make it better.

### Preset UI

Preset UI stands at the forefront of UI customization, offering a comprehensive theming library designed to empower developers and designers alike. At its core, preset-ui leverages the power and flexibility of UnoCSS and provides a variety of themes that can be easily customized to match your brand and style.

[Read more here](./packages/preset-ui/README.md)

#### Install Preset UI

```bash
npm i -D @unifydev/preset-ui
# or
yarn add @unifydev/preset-ui -D
# or
pnpm add @unifydev/preset-ui -D
```

### UnifyVariant

This is a preset package that provides variants for Components Libraries based on data-state attribute value, and help to create custom variant selector.

[Know more here](./packages/unify-variant/README.md)



Install also `@julr/unocss-preset-forms` in case you'll form controls.

```bash
npm i -D @julr/unocss-preset-forms
```

### Config

in your uno.config.(ts|js)

```js

import {
  defineConfig, presetAttributify, presetUno, presetMini,
} from "unocss";

import { colors } from "@unocss/preset-mini/colors";

import { presetForms } from "@julr/unocss-preset-forms";
// import the preset
import {presetUI} from "@unifydev/preset-ui"


export default defineConfig({
  theme: {
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      primary: colors.indigo,
      // add other colors for : success, danger, info, ....
      black: colors.black,
      white: colors.white,
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetUI({}),
    presetForms({
      strategy: "base", // Only add preflights and not new rules
    }),
    presetMini({
      dark: "class", //  
    }),
    
  ],
});

```

### Use PresetUI

```html
<div class="space-y-6">
  <h1 class="text-xl font-semibold ui-title">
      Badges
  </h1>
  <div class="p6 flex flex-wrap gap4 rd-lg bdr-gray">
      <span class="badge-md badge-solid">
          badge
      </span>
      <span un-badge="md solig" rd-sm>
          badge
      </span>
      <span class="badge-md badge-solid rd-md">
          badge
      </span>
      <span class="badge-md badge-solid rd-lg">
          badge
      </span>
      <span class="badge-md badge-solid rd-xl">
          badge
      </span>
      <span class="badge-md badge-solid rd-full">
          badge
      </span>
  </div>
</div>
```

## Contributing

If you're interested in contributing to Unify-UI, please read our [contributing docs](CONTRIBUTING.MD) before submitting a pull request.

### Join Our Community 🌍

Contribute, collaborate, and become a part of our mission 🚀
- [Discord Community](https://discord.gg/6VN6zTPZAy)


## Acknowledgments 🌟

- [Antfu](https://github.com/antfu) 
- [UnoCSS](https://github.com/unocss/unocss)
- [Méschac Irung](https://github.com/Meschacirung) - [Tailus Themer](https://github.com/Tailus-UI/themer).
- [Nuxt UI](https://github.com/nuxt/ui) -
- [Phojie Rengel](https://github.com/phojie) - [Una UI](https://github.com/una-ui/una-ui)
- [Saadeghi](https://github.com/saadeghi) - [DaisyUI](https://github.com/saadeghi/daisyui)


## Support Us

If you like this project and want to support us, feel free to get in touch with one of maintainers : 

- [johnkatembue4@gmail.com](mailto:johnkatembue4@gmail.com)