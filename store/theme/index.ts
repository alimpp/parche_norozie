import { defineStore } from "pinia";
import { type ITheme } from "@/dataModel/theme/model";
import { display } from "virtual:nuxt-pwa-configuration";

export const useThemeStore = defineStore("useThemeStore", {
  state: (): any => ({
    theme: "light",
    wighet: {
      baseCard: {
        border: "default",
      },
      product: {
        display: "column",
      },
    },
  }),

  getters: {
    currentTheme(state) {
      return state.theme;
    },
  },
  actions: {
    updateThemeState(theme: ITheme) {
      this.theme = theme;
    },
  },
});
