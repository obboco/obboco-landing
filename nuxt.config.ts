export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    apiSecret: '',
    public: {
      loginUrl: process.env.NUXT_LOGIN_URL,
      registerUrl: process.env.NUXT_REGISTER_URL
    }
  }
});
