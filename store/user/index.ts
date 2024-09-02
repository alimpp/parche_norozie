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
        // await $fetch("/api/v1/profile")
        //   .then((res: any) => {
        //     authStore.isAuthenticated = true;
        //     this.user = res.data;
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });

        await $fetch("https://parche-go.liara.run/api/v1/profile", {
          headers: {
            Authorization: `Bearer ${cookie.value}`,
            "Content-Type": "application/json",
          },
        })
          .then((res: any) => {
            console.log("res", res);
            authStore.isAuthenticated = true;
            this.user = res.data;
          })
          .catch((err) => {
            authStore.isAuthenticated = false;
          });
      } else {
        authStore.isAuthenticated = false;
      }
    },

    async sendProfile(param: any) {
      const cookie = useCookie("token");

      // await useFetch("/api/v1/profile/update", {
      //   method: "PUT",
      //   body: param,
      // })
      //   .then((res) => {
      //     this.userProfile();
      //   })
      //   .catch((err) => {
      //     err;
      //   });

      await $fetch("https://parche-go.liara.run/api/v1/profile/update", {
        method: "PUT",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
          "Content-Type": "application/json",
        },
      })
        .then((res: any) => {
          this.userProfile();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
