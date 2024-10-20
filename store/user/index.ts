import { defineStore } from "pinia";
import { useCookie, useFetch } from "#app";
import { useToastStore } from "../toast";
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
      const toastStore = useToastStore();

      await useFetch("/api/v1/profile/update", {
        method: "PUT",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res: any) => {
          this.userProfile();
          if (res.data.value.status == 200) {
            toastStore.state = true;
            toastStore.title = res.data.value.message;
            toastStore.text = "اطلاعات حساب کاربری شما با موفقیت ویرایش شد";
            setTimeout(() => {
              toastStore.reset();
            }, 2000);
          }
        })
        .catch((err) => {
          toastStore.state = true;
          toastStore.title = "خطا در انجام عملیات";
          toastStore.text = "اطلاعات ویرایش نشد !!!";
          setTimeout(() => {
            toastStore.reset();
          }, 2000);
        });
    },
  },
});
