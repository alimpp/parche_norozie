import { defineStore } from "pinia";
import { useCookie } from "#app";
import {
  createWebProductListModel,
  createWebProductModel,
} from "@/model/webProduct";

export const useWebProductStore = defineStore("useWebProductStore", {
  state: (): any => ({
    products: [],
    product: {},
    loading: false,
  }),
  actions: {
    async getProduct(id: number | string) {
      const cookie = useCookie("token");
      this.loading = !this.loading;
      const res = await $fetch(`/api/v1/product/get`, {
        method: "POST",
        body: { product_id: Number(id) },
      });
      let favoriteListId: any = [];
      if (cookie.value) {
        const res = await $fetch("/api/v1/favorite/get", {
          headers: {
            Authorization: `Bearer ${cookie.value}`,
          },
        });
        favoriteListId = res.data;
      }
      this.product = createWebProductModel(res.data, favoriteListId);
      this.loading = !this.loading;
    },

    async getAllProducts(param: any) {
      this.loading = true;
      const cookie = useCookie("token");
      let favoriteListId = [];
      if (cookie.value) {
        const res = await $fetch("/api/v1/favorite/get", {
          headers: {
            Authorization: `Bearer ${cookie.value}`,
          },
        });
        favoriteListId = res.data;
      }
      await $fetch(`/api/v1/search?name=${param}`, {
        method: "GET",
      })
        .then((res: any) => {
          this.products = createWebProductListModel(res.data, favoriteListId);
        })
        .catch((err) => {
          console.log(err);
        });
      this.loading = false;
    },

    async getByCategoryId(id: any) {
      this.loading = true;
      const cookie = useCookie("token");
      const favoriteListId = await $fetch("/api/v1/favorite/get", {
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      await $fetch(`/api/v1/search/${id}`, {
        method: "GET",
      })
        .then((res: any) => {
          this.products = createWebProductListModel(
            res.data,
            favoriteListId.data
          );
        })
        .catch((err) => {
          console.log(err);
        });
      this.loading = false;
    },
  },
});
