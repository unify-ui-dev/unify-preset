import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro'


import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  base:'/preset',
  integrations: [vue(), UnoCSS()]
});