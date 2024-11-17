import { defineStore } from "pinia";
import { useCookie } from "#app";
import { createProductListModel, createProductModel } from "@/model/product";
import { useToastStore } from "~/store/toast";

export const useProductStore = defineStore("useProductStore", {
  state: (): any => ({
    products: [],
    product: {},
    loading: false,
  }),
  actions: {
    async createProduct(param: any) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/product/add", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.products = res.data;
          this.getAllProducts("");
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " محصول با موفقیت ایجاد شد";
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

    async updateProduct(param: any) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/product/update", {
        method: "PUT",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.getAllProducts("");
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " محصول با موفقیت ویرایش شد";
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

    async getProduct(id: number | string) {
      this.loading = !this.loading;
      const res = await $fetch(`/api/v1/product/get`, {
        method: "POST",
        body: { product_id: Number(id) },
      });
      this.product = createProductModel(res.data);
      this.loading = !this.loading;
    },

    async removeProduct(id: number | string) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      await $fetch(`/api/v1/product/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.getAllProducts("");
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " محصول با موفقیت حذف شد";
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

    async getAllProducts(param: any) {
      this.loading = true;
      await $fetch(`/api/v1/search?name=${param}`, {
        method: "GET",
      })
        .then((res: any) => {
          this.products = createProductListModel(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.loading = false;
    },

    async getByCategoryId(id: any) {
      this.loading = true;
      await $fetch(`/api/v1/search/${id}`, {
        method: "GET",
      })
        .then((res: any) => {
          this.products = createProductListModel(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.loading = false;
    },
  },
});
