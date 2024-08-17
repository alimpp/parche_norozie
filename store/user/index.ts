import { defineStore } from "pinia";
import { useCookie } from "#app";
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
  },
  persist: true,
});
