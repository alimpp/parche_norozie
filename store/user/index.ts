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
        // for develop side
        // await $fetch("/api/v1/profile")
        //   .then((res) => {
        //     this.user = res.data;
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });

        // for server
        await $fetch("https://parche-go.liara.run/api/v1/profile", {
          headers: {
            Authorization: `Bearer ${cookie.value}`,
            "Content-Type": "application/json",
          },
        })
          .then((res: any) => {
            console.log("res", res);
            this.user = res.data;
            authStore.isAuthenticated = true;
          })
          .catch((err) => {
            authStore.isAuthenticated = false;
          });
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
});
