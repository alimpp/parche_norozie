import { defineStore } from "pinia";
import { useCookie } from "#app";
import { useToastStore } from "../toast";
import { favoriteModel } from "@/model/favorite";
import { useProductStore } from "../admin/product";
import { useRouter } from "#app";
export const useFavoriteStore = defineStore("useFavoriteStore", {
  state: (): any => ({
    favoriteList: [],
  }),

  getters: {},
  actions: {
    async getFavorite() {
      const cookie = useCookie("token");
      const productStore = useProductStore();
      await productStore.getAllProducts("");
      await $fetch("/api/v1/favorite/get", {
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res: any) => {
          this.favoriteList = favoriteModel(res.data, productStore.products);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async addFavorite(id: any) {
      const cookie = useCookie("token");
      const toastStore = useToastStore();
      const router = useRouter();
      await $fetch("/api/v1/favorite/add", {
        method: "post",
        body: { product_id: Number(id) },
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res: any) => {
          this.getFavorite();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = "محصول به لیست علاقه مندی ها اضافه شد";
            setTimeout(() => {
              toastStore.reset();
            }, 2000);
          }
        })
        .catch((err) => {
          localStorage.setItem("lastRoute", `/products/${id}`);
          router.push("/auth/login");
          toastStore.state = true;
          toastStore.title = "خطا در انجام عملیات";
          toastStore.text = "لطفا دوباره تلاش کنید";
          setTimeout(() => {
            toastStore.reset();
          }, 5000);
        });
    },

    async removeFavorite(id: any) {
      const cookie = useCookie("token");
      const toastStore = useToastStore();

      await $fetch("/api/v1/favorite/remove", {
        method: "post",
        body: { product_id: Number(id) },
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res: any) => {
          this.getFavorite();
          if (res.status == 200) {
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
