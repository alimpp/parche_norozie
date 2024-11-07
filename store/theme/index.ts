import { defineStore } from "pinia";
import { type ITheme } from "@/dataModel/theme/model";

export const useThemeStore = defineStore("useThemeStore", {
  state: (): any => ({
    theme: "dark",
    refresh: false,
    wighet: {
      baseCard: {
        border: "default",
      },
      product: {
        display: "row",
      },
      blog: {
        display: "row",
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
