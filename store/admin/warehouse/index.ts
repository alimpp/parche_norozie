import { defineStore } from "pinia";
import { useCookie } from "#app";

export const useWarehouseStore = defineStore("useWarehouseStore", {
  state: (): any => ({
    products: [],
    loading: false,
  }),
  actions: {
    async storageList() {
      const cookie = useCookie("token");
      this.loading = true;
      await $fetch("/api/v1/storage/list", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res: any) => {
          this.products = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      this.loading = false;
    },

    async addStorage(param: any) {
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/storage/addProduct", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
    },

    async updateStorage(param: any) {
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/storage/updateStock", {
        method: "PUT",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
    },
  },
});
