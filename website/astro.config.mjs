import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import vue from "@astrojs/vue";
import mdx from "@astrojs/mdx";
import { transformerNotationDiff } from "shikiji-transformers";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  base:'/preset',
  site:"https://www.unify-ui.dev",
  redirects: {
    "/": {
      status: 302,
      destination: "/introduction"
    }
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
      transformers: [transformerNotationDiff()]
    }
  },
  integrations: [vue(), mdx(), UnoCSS({
    injectReset: true
  })],
  vite: {
    css: {
      transformer: "lightningcss"
    },
    build: {
      cssMinify: 'lightningcss'
    }
  },
  output: "server",
  adapter: vercel()
});