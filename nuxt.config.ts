import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true
  },
  build: {
    transpile: ['@heroicons/vue']
  }
});
