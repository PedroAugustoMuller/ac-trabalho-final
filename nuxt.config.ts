// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/image',
    '@tresjs/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/icon',
    'vuetify-nuxt-module'
  ],
  tres: {
    devtools: true,
  },
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'pt',
        name: 'Portuguese',
      }
    ],
    defaultLocale: 'pt',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts'
  },
  tailwindcss: {
    cssPath: '~/asssets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true,
  }
})