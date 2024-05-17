import {
  defineConfig, presetAttributify, presetIcons, presetUno, presetMini,
} from "unocss";

import { colors } from "@unocss/preset-mini/colors";
import transformerDirectives from '@unocss/transformer-directives'

//test-unify-preset
import { unifyUI } from "@unifydev/unify-preset";
import {presetForms} from "@julr/unocss-preset-forms"

export default defineConfig({
  theme: {
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      primary: {
        DEFAULT: 'rgba(var(--c-primary-600) / <alpha-value>)',
        50: 'rgba(var(--c-primary-50) / <alpha-value>)',
        100: 'rgba(var(--c-primary-100) / <alpha-value>)',
        200: 'rgba(var(--c-primary-200) / <alpha-value>)',
        300: 'rgba(var(--c-primary-300) / <alpha-value>)',
        400: 'rgba(var(--c-primary-400) / <alpha-value>)',
        500: 'rgba(var(--c-primary-500) / <alpha-value>)',
        600: 'rgba(var(--c-primary-600) / <alpha-value>)',
        700: 'rgba(var(--c-primary-700) / <alpha-value>)',
        800: 'rgba(var(--c-primary-800) / <alpha-value>)',
        900: 'rgba(var(--c-primary-900) / <alpha-value>)',
        950: 'rgba(var(--c-primary-950) / <alpha-value>)',
      },
      secondary: {
        DEFAULT: 'rgba(var(--c-secondary-600) / <alpha-value>)',
        50: 'rgba(var(--c-secondary-50) / <alpha-value>)',
        100: 'rgba(var(--c-secondary-100) / <alpha-value>)',
        200: 'rgba(var(--c-secondary-200) / <alpha-value>)',
        300: 'rgba(var(--c-secondary-300) / <alpha-value>)',
        400: 'rgba(var(--c-secondary-400) / <alpha-value>)',
        500: 'rgba(var(--c-secondary-500) / <alpha-value>)',
        600: 'rgba(var(--c-secondary-600) / <alpha-value>)',
        700: 'rgba(var(--c-secondary-700) / <alpha-value>)',
        800: 'rgba(var(--c-secondary-800) / <alpha-value>)',
        900: 'rgba(var(--c-secondary-900) / <alpha-value>)',
        950: 'rgba(var(--c-secondary-950) / <alpha-value>)',
      },
      accent: {
        DEFAULT: 'rgba(var(--c-accent-600) / <alpha-value>)',
        50: 'rgba(var(--c-accent-50) / <alpha-value>)',
        100: 'rgba(var(--c-accent-100) / <alpha-value>)',
        200: 'rgba(var(--c-accent-200) / <alpha-value>)',
        300: 'rgba(var(--c-accent-300) / <alpha-value>)',
        400: 'rgba(var(--c-accent-400) / <alpha-value>)',
        500: 'rgba(var(--c-accent-500) / <alpha-value>)',
        600: 'rgba(var(--c-accent-600) / <alpha-value>)',
        700: 'rgba(var(--c-accent-700) / <alpha-value>)',
        800: 'rgba(var(--c-accent-800) / <alpha-value>)',
        900: 'rgba(var(--c-accent-900) / <alpha-value>)',
        950: 'rgba(var(--c-accent-950) / <alpha-value>)',
      },
      danger: {
        DEFAULT: 'rgba(var(--c-danger-600) / <alpha-value>)',
        50: 'rgba(var(--c-danger-50) / <alpha-value>)',
        100: 'rgba(var(--c-danger-100) / <alpha-value>)',
        200: 'rgba(var(--c-danger-200) / <alpha-value>)',
        300: 'rgba(var(--c-danger-300) / <alpha-value>)',
        400: 'rgba(var(--c-danger-400) / <alpha-value>)',
        500: 'rgba(var(--c-danger-500) / <alpha-value>)',
        600: 'rgba(var(--c-danger-600) / <alpha-value>)',
        700: 'rgba(var(--c-danger-700) / <alpha-value>)',
        800: 'rgba(var(--c-danger-800) / <alpha-value>)',
        900: 'rgba(var(--c-danger-900) / <alpha-value>)',
        950: 'rgba(var(--c-danger-950) / <alpha-value>)',
      },
      success: {
        DEFAULT: 'rgba(var(--c-success-600) / <alpha-value>)',
        50: 'rgba(var(--c-success-50) / <alpha-value>)',
        100: 'rgba(var(--c-success-100) / <alpha-value>)',
        200: 'rgba(var(--c-success-200) / <alpha-value>)',
        300: 'rgba(var(--c-success-300) / <alpha-value>)',
        400: 'rgba(var(--c-success-400) / <alpha-value>)',
        500: 'rgba(var(--c-success-500) / <alpha-value>)',
        600: 'rgba(var(--c-success-600) / <alpha-value>)',
        700: 'rgba(var(--c-success-700) / <alpha-value>)',
        800: 'rgba(var(--c-success-800) / <alpha-value>)',
        900: 'rgba(var(--c-success-900) / <alpha-value>)',
        950: 'rgba(var(--c-success-950) / <alpha-value>)',
      },
      warning: {
        DEFAULT: 'rgba(var(--c-warning-600) / <alpha-value>)',
        50: 'rgba(var(--c-warning-50) / <alpha-value>)',
        100: 'rgba(var(--c-warning-100) / <alpha-value>)',
        200: 'rgba(var(--c-warning-200) / <alpha-value>)',
        300: 'rgba(var(--c-warning-300) / <alpha-value>)',
        400: 'rgba(var(--c-warning-400) / <alpha-value>)',
        500: 'rgba(var(--c-warning-500) / <alpha-value>)',
        600: 'rgba(var(--c-warning-600) / <alpha-value>)',
        700: 'rgba(var(--c-warning-700) / <alpha-value>)',
        800: 'rgba(var(--c-warning-800) / <alpha-value>)',
        900: 'rgba(var(--c-warning-900) / <alpha-value>)',
        950: 'rgba(var(--c-warning-950) / <alpha-value>)',
      },
      info: {
        DEFAULT: 'rgba(var(--c-info-500) / <alpha-value>)',
        50: 'rgba(var(--c-info-50) / <alpha-value>)',
        100: 'rgba(var(--c-info-100) / <alpha-value>)',
        200: 'rgba(var(--c-info-200) / <alpha-value>)',
        300: 'rgba(var(--c-info-300) / <alpha-value>)',
        400: 'rgba(var(--c-info-400) / <alpha-value>)',
        500: 'rgba(var(--c-info-500) / <alpha-value>)',
        600: 'rgba(var(--c-info-600) / <alpha-value>)',
        700: 'rgba(var(--c-info-700) / <alpha-value>)',
        800: 'rgba(var(--c-info-800) / <alpha-value>)',
        900: 'rgba(var(--c-info-900) / <alpha-value>)',
        950: 'rgba(var(--c-info-950) / <alpha-value>)',
      },
      gray: {
        DEFAULT: 'rgba(var(--c-gray-500) / <alpha-value>)',
        50: 'rgba(var(--c-gray-50) / <alpha-value>)',
        100: 'rgba(var(--c-gray-100) / <alpha-value>)',
        200: 'rgba(var(--c-gray-200) / <alpha-value>)',
        300: 'rgba(var(--c-gray-300) / <alpha-value>)',
        400: 'rgba(var(--c-gray-400) / <alpha-value>)',
        500: 'rgba(var(--c-gray-500) / <alpha-value>)',
        600: 'rgba(var(--c-gray-600) / <alpha-value>)',
        700: 'rgba(var(--c-gray-700) / <alpha-value>)',
        800: 'rgba(var(--c-gray-800) / <alpha-value>)',
        900: 'rgba(var(--c-gray-900) / <alpha-value>)',
        950: 'rgba(var(--c-gray-950) / <alpha-value>)',
      },
      black: colors.black,
      white: colors.white,
    },
  },
  shortcuts:[
    {
      'blured-bg-ui':'flex absolute inset-0 bg-body !bg-op30 backdrop-blur-sm py',
      'btn-nav-icon':'flex p1.5 items-center hover-bg-solid rd-lg text-xl duration-200 ease-linear',
      'navbar-ui-states':'op0 invisible fx-open-ease-linear fx-open-transition-all fx-open-visible fx-open-op100 lg-visible lg-op100 lg-fx-open-transition-none',
      'navbar-ui':'px4 sm-px8 lg-px0 pt5 xl-pt0 bg-body xl-!bg-transparent fixed lg-relative top-16 lg-top-0 left-0 z130 xl-z-auto',
      'navbar-ui-h':'h-[calc(100dvh-4rem)] lg-h-max',
      'fx-site-dropdown':'invisible fx-open-visible op0 fx-open-op100 transition-opacity duration-200 ease-linear',
      'btn-palette':'wfull flex flex-col items-center text-center gap-1 ring-2 ring-transparent ring-offset-2 ring-offset-white dark-ring-offset-gray-950 focus-visible-ring-[--palette-main-color] b b-transparent aria-checked-b-primary600 aria-checked-bg-solid aria-checked-!bg-op50 rd-md outline-0 focus-outline-0 [&[aria-checked=true]>[data-text]]-text-primary600 dark-[&[aria-checked=true]>[data-text]]-text-primary400',
      'palette-token':'bg-[var(--palette-token)] wfull hfull flex',
      'btn-input-search':'h9 bdr rd-lg pl3 pr1.5 w50 hidden md-flex items-center justify-between gap-x2 text-sm hover-bdr_high hover-!b-op30 hover-bg-solid hover-!bg-op40',
      'sidebar-states':'invisible lg-visible -translate-x-full transition lg-transition-none fx-open-visible fx-open-translate-x-0 lg-translate-x-0 left-0',
      'sidebar-size':'w11/12 max-w64 sm-w64 lg-max-wnone md-wfull h100dvh md-h-[calc(100dvh-3.5rem)]',
      'sidebar-position':'fixed top-0 lg-sticky lg-top-14',
      'sidebar-bg':'bg-body  !bg-op60 backdrop-blur-xl md-backdrop-filter-none md-!bg-transparent',
      'btn-show-table-content':'bdr rd-lg py1.5 px2 flex items-center gap-x1 rd-lg text-sm hover-bg-solid ease-linear [&[aria-expanded=true]>span]:rotate-180',
      'tab-content-ui':'absolute top-[calc(100%+8px)] right-0 lg-left-0 lg-right-auto flex flex-col xl-hidden wfull max-wmd min-w50 hmax max-h90 overflow-hidden overflow-y-auto',
      'tab-content-ui-states':'invisible fx-open-visible op0 translate-y-4 fx-open-translate-y-0 fx-open-op100',
      'tab-content-ui-bg':'bdr b-op90 dark-b-op60 bg-solid !bg-op70 backdrop-blur-xl',
      'mdx-tbody':'[&>tr>td]-px4 [&>tr>td]-py1 divide-y divide-gray200 dark-divide-gray800 [&>tr]-!b-dashed',
      'mdx-thead':'relative before-absolute before-inset-0 before-content-empty before-bg-solid before-!bg-op60 before-rd-lg before-bdr_high before-!b-op90 dark-before-!b-op60 text-left [&>tr]-relative [&>tr>th]-px4 [&>tr>th]-py1 text-title [&>tr>th]-font-medium'
      
    }
  ],
  presets: [
    presetUno(),
    presetForms({
       strategy: "base", // Only add preflights and not new rules
       }),
    presetAttributify(),
    unifyUI({
      appearance: "both", // choose the appearance, light, dark or both, by default it's fault
    }),
    // presetForms(),
    presetIcons({
      collections: {
        fx: {
          'unocss-ico': '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12.86 18.4a5.57 5.57 0 1 1 11.14 0a5.57 5.57 0 0 1-11.14 0m0-12.8A5.57 5.57 0 1 1 24 5.602v5.013a.557.557 0 0 1-.557.557H13.417a.557.557 0 0 1-.557-.557zm-1.72 12.8A5.57 5.57 0 1 1 0 18.4v-5.014a.557.557 0 0 1 .557-.557h10.026a.557.557 0 0 1 .557.557z"/></svg>',
          'github':'<svg viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44a10.32 10.32 0 0 0-3.393 6.17a10.48 10.48 0 0 0 1.317 6.955a10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494c0-.245-.01-1.052-.014-1.908c-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621c.317.044.62.163.885.346c.266.183.487.426.647.71c.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37c-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75a3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05c.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814c0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421a10.473 10.473 0 0 0 1.313-6.948a10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/></svg>',
          'sun':'<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7.05 7.05L5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636L16.95 7.05M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0"/></svg>',
          'moon-star':'<svg viewBox="0 0 56 56"><path fill="currentColor" d="M31.316 14.887c.282 0 .446-.188.492-.446c.727-3.89.704-3.984 4.758-4.78c.281-.048.446-.188.446-.47c0-.304-.165-.445-.446-.492c-4.054-.82-4.03-.89-4.758-4.781c-.046-.258-.21-.445-.492-.445c-.28 0-.422.187-.468.445c-.75 3.89-.704 3.96-4.782 4.781c-.258.047-.445.188-.445.492c0 .282.188.422.445.47c4.102.796 4.032.89 4.782 4.78c.046.258.187.446.468.446M42.543 30.73c.422 0 .726-.304.773-.75c.774-6.304 1.031-6.398 7.43-7.453c.516-.093.82-.328.82-.797c0-.445-.304-.726-.726-.796c-6.493-1.102-6.75-1.149-7.524-7.454c-.047-.445-.351-.75-.773-.75c-.446 0-.75.305-.797.727c-.82 6.305-1.008 6.375-7.523 7.477c-.422.07-.727.351-.727.796c0 .446.305.704.727.797c6.515 1.055 6.75 1.149 7.523 7.5a.775.775 0 0 0 .797.703M24.918 52.528c8.578 0 15.516-4.312 18.68-11.648c.421-1.008.28-1.781-.164-2.25c-.422-.398-1.125-.492-1.97-.164c-1.757.703-3.913 1.101-6.609 1.101c-10.476 0-17.226-6.539-17.226-16.828c0-2.836.539-5.648 1.265-7.125c.47-.937.422-1.734.024-2.226c-.445-.516-1.242-.68-2.344-.235c-7.195 2.93-12.14 10.43-12.14 19.196c0 11.414 8.39 20.18 20.484 20.18m.047-3.562c-10.008 0-16.969-7.29-16.969-16.899c0-5.906 2.742-11.109 7.102-14.437c-.563 1.523-.891 3.867-.891 6.117c0 11.531 7.969 19.266 19.758 19.266c2.11 0 4.031-.258 5.015-.61c-2.93 4.055-8.156 6.563-14.015 6.563"/></svg>',
          'discord':'<svg viewBox="0 0 24 24"><path fill="currentColor" d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3a12.04 12.04 0 0 0-.529 1.1a15.175 15.175 0 0 0-4.573 0a11.586 11.586 0 0 0-.535-1.1a16.274 16.274 0 0 0-4.129 1.3a17.392 17.392 0 0 0-2.868 11.662a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331c-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785a16.46 16.46 0 0 0 5.064-2.595a17.286 17.286 0 0 0-2.973-11.59M8.678 14.813a1.94 1.94 0 0 1-1.8-2.045a1.93 1.93 0 0 1 1.8-2.047a1.918 1.918 0 0 1 1.8 2.047a1.929 1.929 0 0 1-1.8 2.045m6.644 0a1.94 1.94 0 0 1-1.8-2.045a1.93 1.93 0 0 1 1.8-2.047a1.919 1.919 0 0 1 1.8 2.047a1.93 1.93 0 0 1-1.8 2.045"/></svg>',
          'list-broken':'<svg viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m11 5H4m5 5H4"/></svg>',
          'adobe':'<svg viewBox="0 0 30 26" fill="#E1251B" aria-label="Adobe" height="22"><polygon points="19,0 30,0 30,26"></polygon><polygon points="11.1,0 0,0 0,26"></polygon><polygon points="15,9.6 22.1,26 17.5,26 15.4,20.8 10.2,20.8"></polygon></svg>',
        },
        ph: () => import('@iconify-json/ph/icons.json').then(i => i.default),
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetMini({
      dark: "class", //  
    }),

  ],
  transformers: [
    transformerDirectives(),
  ],
});

