export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  ssr: true,
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
    },
  },

  build: {
    transpile: ["vuetify"],
  },

  css: ["@/assets/scss/main.scss", "vuetify/lib/styles/main.sass"],

  modules: [
    "nuxt-feather-icons",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],

  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "localStorage",
  },
});
