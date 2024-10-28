import { defineStore } from "pinia";
import { useCookie } from "#app";

export const useCategoryStore = defineStore("useCategoryStore", {
  state: (): any => ({
    categories: [],
    loading: false,
  }),
  actions: {
    async categoryList() {
      this.loading = !this.loading;
      const res = await $fetch("/api/v1/category/list", {
        method: "GET",
      });
      this.categories = res.data;
      this.loading = !this.loading;
      console.log(res.data);
      
      
    },

    async createCategory(param: any) {
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/category/add", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.categoryList();
      
    },


    async deleteCategory(id: number | string) {
      const cookie = useCookie("token");
      await $fetch(`/api/v1/category/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.categoryList();
    },
  },
});
