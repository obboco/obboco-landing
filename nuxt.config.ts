import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true
  },
  build: {
    transpile: ['@heroicons/vue']
  },
  head: {
    title: 'nuxt-tailwindcss',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/svg', href: '/favicon.ico' }]
  }
});
