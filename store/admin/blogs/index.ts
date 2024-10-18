import { defineStore } from "pinia";
import { useCookie } from "#app";

export const useBlogsStore = defineStore("useBlogsStore", {
  state: (): any => ({
    blogsList: [],
    loading: false,
  }),
  actions: {
    async blogList() {
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/blog/list", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.blogsList = res.data;
    },

    async createBlog(param: any) {
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/blog/add", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.blogList();
    },
  },
});
