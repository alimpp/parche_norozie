import { defineStore } from "pinia";
import { type ITheme } from "@/dataModel/theme/model";

export const useToastStore = defineStore("useToastStore", {
  state: (): any => ({
    state: false,
    icon: "success",
    title: "",
    text: "",
    width: "380px",
    hasClose: false,
  }),

  actions: {
    reset() {
      this.state = false
      this.icon = "success"
      this.title = ""
      this.text = ""
      this.width = "380px"
      this.hasClose = false
    }
  },
});
