export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  build: {
    transpile: ["vuetify"],
  },

  css: ["@/assets/scss/main.scss", "vuetify/lib/styles/main.sass"],

  modules: ["nuxt-feather-icons"],
});
