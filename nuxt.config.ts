// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts'
  ],
  css: [
    '@/assets/css/main.css',
  ],
})