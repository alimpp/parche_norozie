import { defineStore } from "pinia";
import { useCookie } from "#app";

export const usePropertyStore = defineStore("usePropertyStore", {
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
    },

    async getProduct(id: number | string) {
      await $fetch(`/api/v1/product/${id}`, {
        method: "GET",
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
    },
  },
});
