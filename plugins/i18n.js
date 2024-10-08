import { createI18n } from "vue-i18n";
import en from "@/lcoale/en.json";
import fr from "@/lcoale/fr.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "fr",
    messages: {
      en,
      fr,
    },
  });

  vueApp.use(i18n);
});
