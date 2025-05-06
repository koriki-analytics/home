// https://nuxt.com/docs/api/configuration/nuxt-config
import { Title } from '#components'
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app:{
    head:{
      title: 'Koriki | waitlist',
      viewport: 'width=device-width, initial-scale=1'
    }
  },

  modules: [
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
  ]
})