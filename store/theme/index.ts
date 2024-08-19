import { defineStore } from "pinia";
import { type ITheme } from "@/dataModel/theme/model";

export const useThemeStore = defineStore("useThemeStore", {
  state: (): any => ({
    theme: "light",
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
  persist: false,
});
