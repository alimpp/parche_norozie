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
      setTimeout(async () => {
        const response: any = await $fetch(
          "https://parche-go.liara.run/api/v1/profile"
        );
        this.user = response.data;
        console.log(response.data);
      }, 1000);
    },
  },
  persist: true,
});
