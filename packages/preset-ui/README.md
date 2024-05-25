<p align="center">
  <img src="./favicon-dark.png" style="width:100px;" />
  <h1 align="center">Preset UI</h1>
  <p align="center">UnoCSS Theming Toolkit.</p>
</p>


## Preset-UI /UnifyUI-Preset (Atomic, Theming UI Libray)

Preset UI stands at the forefront of UI customization, offering a comprehensive theming library designed to empower developers and designers alike. At its core, preset-ui leverages the power and flexibility of UnoCSS and provides a variety of themes that can be easily customized to match your brand and style.

> **Not** : This project is a WIP, you can test it and report bug... Your contribution is much valualed for us, help us to make it better.

## Concepts 🧠

- **🖌️ Component-Level Theming:**  Customize each component independently, allowing for detailed personalization while maintaining overall harmony.

- **🎯 Atomic Library:** Following UNOCSS design principles, Unify Preset adopts an atomic approach . It generates CSS only for the utilities you use, optimizing both speed and efficiency.


## Features

- **Atomic Library by Nature:** Configure what you need, and use when you need it.
  
- **🛠️ Customizable:** Tailor each component to fit your vision, ensuring a unique and cohesive look across your application.
  
- **📈 Efficient Scaling:** Our atomic library ensures your project remains lightweight and fast, no matter its size.
  
- **🎨 Consistent Yet Flexible:** Achieve a consistent look and feel without sacrificing the creativity and uniqueness of individual components.
  
- **Dark Mode Support** : Automatic Dark mode support
  
- **Freedom on Appearance:** Customize your styles to match your preferences. Whether you prefer only dark style, light and dark styles, or only light styles, Unify Preset accommodates your needs. The generated CSS will contain only what you decide to have.


## Usage

### Installation 

```bash
npm i -D @unifydev/preset-ui
# or
yarn add @unifydev/preset-ui -D
# or
pnpm add @unifydev/preset-ui -D
```

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
import {presetUi} from "@unifydev/preset-ui"


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
    presetUi({}),
    presetForms({
      strategy: "base", // Only add preflights and not new rules
    }),
    presetMini({
      dark: "class", //  
    }),
    
  ],
});

```

### Use it

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





