import { defineStore } from "pinia";
import { useCookie } from "@/composable/useCookie";

export const useAuthAdminStore = defineStore("useAuthAdminStore", {
  state: (): any => ({
    isAuthenticated: false,
  }),
  actions: {
    async login(param: any) {
      const { setCookie } = useCookie();
      await $fetch("/api/v1/admin", {
        method: "POST",
        body: param,
      }).then((res) => {
        localStorage.setItem("token", res.data.token);
        setCookie("token", res.data.token);
        navigateTo("/admin/dashboard");
      });
    },

    logOut() {
      const { deleteCookie } = useCookie();
      deleteCookie("token");
      localStorage.clear();
      navigateTo("/admin/login");
    },
  },
});
