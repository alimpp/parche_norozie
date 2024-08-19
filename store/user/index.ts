import { defineStore } from "pinia";
import { useCookie, useFetch } from "#app";

import { useAuthStore } from "../auth";
export const useUserStore = defineStore("useUserStore", {
  state: (): any => ({
    user: {},
  }),

  getters: {},
  actions: {
    async userProfile() {
      const authStore = useAuthStore();
      const cookie = useCookie("token");
      if (cookie.value) {
        authStore.isAuthenticated = true;
        const response: any = await $fetch("/api/v1/profile");
        this.user = response.data;
      } else {
        authStore.isAuthenticated = false;
      }
    },

    async sendProfile(param: any) {
      const { data } = await useFetch("/api/v1/profile/update", {
        method: "POST",
        body: param,
      });
      console.log(data.value);
    },
  },
  persist: true,
});
