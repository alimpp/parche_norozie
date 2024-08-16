import { defineStore } from "pinia";
// import { type IUser } from "@/dataModel/user/model";
import { useFetch } from "#app";

export const useUserStore = defineStore("useUserStore", {
  state: (): any => ({
    user: {},
  }),

  getters: {},
  actions: {
    async userProfile() {
      const response: any = await $fetch("/api/v1/profile");
      this.user = response.data;
    },
  },
  persist: true,
});
