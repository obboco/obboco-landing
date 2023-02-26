export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    apiSecret: '',
    public: {
      loginUrl: process.env.NUXT_LOGIN_URL,
      registerUrl: process.env.NUXT_REGISTER_URL
    }
  },
  plugins: [{ src: '~/plugins/font-awesome.ts' }],
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons'
    ]
  }
});
