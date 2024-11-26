import { defineStore } from "pinia";
import { useCookie } from "#app";
import { useToastStore } from "../toast";
export const useUserStore = defineStore("useUserStore", {
  state: (): any => ({
    favoriteList: [],
  }),

  getters: {},
  actions: {
    async getFavorite() {
      const cookie = useCookie("token");

      await $fetch("/api/v1/favorite/get", {
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res: any) => {
          this.favoriteList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async addFavorite(param: any) {
      const cookie = useCookie("token");
      const toastStore = useToastStore();

      await $fetch("/api/v1/favorite/add", {
        method: "post",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res: any) => {
          this.getFavorite();
          if (res.data.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = "محصول به لیست علاقه مندی ها اضافه شد";
            setTimeout(() => {
              toastStore.reset();
            }, 2000);
          }
        })
        .catch((err) => {
          toastStore.state = true;
          toastStore.title = "خطا در انجام عملیات";
          toastStore.text = "لطفا دوباره تلاش کنید";
          setTimeout(() => {
            toastStore.reset();
          }, 5000);
        });
    },

    async removeFavorite(param: any) {
      const cookie = useCookie("token");
      const toastStore = useToastStore();

      await $fetch("/api/v1/favorite/remove", {
        method: "post",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res: any) => {
          this.getFavorite();
          if (res.data.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = "محصول از لیست علاقه مندی ها حذف شد";
            setTimeout(() => {
              toastStore.reset();
            }, 2000);
          }
        })
        .catch((err) => {
          toastStore.state = true;
          toastStore.title = "خطا در انجام عملیات";
          toastStore.text = "لطفا دوباره تلاش کنید";
          setTimeout(() => {
            toastStore.reset();
          }, 5000);
        });
    },
  },
});
