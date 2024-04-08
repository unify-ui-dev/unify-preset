// uno.config.js
import {
  defineConfig, presetAttributify, presetIcons, presetUno, presetMini, presetWebFonts,
} from "unocss";

import { colors } from "@unocss/preset-mini/colors";

import { presetForms } from "@julr/unocss-preset-forms";

import { unifyUI } from "@unifydev/unify-preset"; 

export default defineConfig({
  theme: {
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
  },
  presets: [
    presetUno(),
    presetAttributify(),
    unifyUI({
      appearance: "both", // choose the appearance, light, dark or both, by default it's fault
    }),
      presetForms({
        strategy: "base", // Only add preflights and not new rules
      }),
    presetMini({
      dark: "class", //  
    }),

  ],
});

