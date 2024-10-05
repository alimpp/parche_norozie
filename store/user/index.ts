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
        await $fetch("/api/v1/profile", {
          headers: {
            Authorization: `Bearer ${cookie.value}`,
          },
        })
          .then((res: any) => {
            authStore.isAuthenticated = true;
            this.user = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        authStore.isAuthenticated = false;
      }
    },

    async sendProfile(param: any) {
      const cookie = useCookie("token");
      await useFetch("/api/v1/profile/update", {
        method: "PUT",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.userProfile();
        })
        .catch((err) => {
          err;
        });
    },
  },
});
