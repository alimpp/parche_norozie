import { defineStore } from "pinia";
import { useFetch } from "#app";
import { type ILogin, type IOtp } from "@/dataModel/auth/model";

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
        const { data, error } = await useFetch<ILogin>("/api/auth/login", {
          method: "POST",
          body: {
            phone: phone,
          },
        });
        this.phone = phone;
        this.isAccessToOtpPage = true;
        console.log(data.value);
      } catch (err: any) {
        console.log(err);
      }
    },

    async otp(param: IOtp) {
      try {
        const { data, error } = await useFetch<IOtp>("/api/auth/otp", {
          method: "POST",
          body: {
            phone: param,
          },
        });
        this.isAuthenticated = true;
        this.isAccessToOtpPage = false;
        console.log(data.value);
      } catch (err: any) {
        console.log(err);
      }
    },
  },
});
