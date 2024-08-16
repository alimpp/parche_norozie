import { defineStore } from "pinia";
import { useFetch } from "#app";
import { type ILogin, type IOtp } from "@/dataModel/auth/model";
import { useCookie } from "@/composable/useCookie";

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

      try {
        const { data, error } = await useFetch<any>("/api/v1/otp", {
          method: "POST",
          body: param,
        });
        const cookie = setCookie("token", data.value?.data.token);
        console.log(cookie);

        if (data.value?.status == 200) {
          this.isAuthenticated = true;
          this.isAccessToOtpPage = false;
        }
      } catch (err: any) {
        console.log(err);
      }
    },
  },
  persist: true,
});
