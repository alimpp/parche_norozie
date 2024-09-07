import { defineStore } from "pinia";
import { useCookie } from "@/composable/useCookie";

export const useAuthAdminStore = defineStore("useAuthAdminStore", {
  state: (): any => ({
    isAuthenticated: false,
  }),
  actions: {
    async login(param: any) {
      try {
        const data = await $fetch("/api/v1/admin", {
          method: "POST",
          body: param,
        });
        console.log(data);
      } catch (err: any) {
        console.log(err);
      }
    },

    logOut() {
      const { deleteCookie } = useCookie();
      deleteCookie("token");
      this.isAuthenticated = false;
      location.reload();
    },
  },
});
