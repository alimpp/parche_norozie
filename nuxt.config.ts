export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  ssr: false,
  purgecss: {
    safelist: {
      greedy: [/w-/, /h-/, /\[/, /swiper/, /!/],
    },
  },
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
    },
  },

  build: {
    transpile: ["vuetify"],
  },

  css: [
    "@/assets/scss/main.scss",
    "vuetify/lib/styles/main.sass",
    "vuetify/styles",
  ],

  modules: [
    "nuxt-feather-icons",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vite-pwa/nuxt",
    "nuxt-easy-lightbox"
  ],

  pwa: {
    manifest: {
      name: "Parche Norozie",
      lang: "fa",
    },
  },

  piniaPersistedstate: {
    cookieOptions: {
      sameSite: "strict",
    },
    storage: "localStorage",
  },
});