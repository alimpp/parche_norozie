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
        localStorage.setItem("token_admin", res.data.token);
        setCookie("token_admin", res.data.token);
        navigateTo("/admin/dashboard");
      });
    },

    logOut() {
      const { deleteCookie } = useCookie();
      deleteCookie("token_admin");
      localStorage.clear();
      navigateTo("/admin/login");
    },
  },
});
