import { defineStore } from "pinia";
import { useFetch } from "#app";
import { type ILogin, type IOtp } from "@/dataModel/auth/model";
import { useCookie } from "@/composable/useCookie";
import { useUserStore } from "@/store/user/index";

export const useAuthStore = defineStore("useAuthStore", {
  state: (): any => ({
    phone: "",
    isAuthenticated: false,
    isAccessToOtpPage: false,
  }),
  getters: {},
  actions: {
    async login(phone: ILogin) {
      try {
        const { data, error } = await useFetch<ILogin>("/api/v1/login", {
          method: "POST",
          body: {
            phone: phone,
          },
        });
        if (data.value?.status == 200) {
          this.phone = phone;
          this.isAccessToOtpPage = true;
        }
      } catch (err: any) {
        console.log(err);
      }
    },

    async otp(param: IOtp) {
      const { setCookie } = useCookie();
      const userStore = useUserStore();
      try {
        const { data, error } = await useFetch<any>("/api/v1/otp", {
          method: "POST",
          body: param,
        });
        setCookie("token", data.value?.data.token);
        localStorage.setItem("token", data.value?.data.token);
        if (data.value?.status == 200) {
          userStore.userProfile();
          this.isAuthenticated = true;
          this.isAccessToOtpPage = false;
        }
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
