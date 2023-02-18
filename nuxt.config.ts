export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    apiSecret: '',
    public: {
      loginUrl: '',
      registerUrl: ''
    }
  }
});
