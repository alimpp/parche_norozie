import { defineStore } from "pinia";
import { useCookie } from "#app";
import { createProductListModel } from "@/model/product";

export const useProductStore = defineStore("useProductStore", {
  state: (): any => ({
    products: [],
    loading: false,
  }),
  actions: {
    async createProduct(param: any) {
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/product/add", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.getAllProducts();
    },

    async updateProduct(param: any) {
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/product/update", {
        method: "PUT",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.getAllProducts();
    },

    async getProduct(id: number | string) {
      await $fetch(`/api/v1/product`, {
        method: "POST",
        body: { product_id: id },
      });
    },

    async removeProduct(id: number | string) {
      const cookie = useCookie("token");
      await $fetch(`/api/v1/product/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.getAllProducts();
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
  },
});
