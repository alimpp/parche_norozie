import { defineStore } from "pinia";
import { useCookie } from "#app";

export const useBlogsStore = defineStore("useBlogsStore", {
  state: (): any => ({
    blogsList: [],
    singleBlog: {},
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

    async getBlogById(id: number | string) {
      const cookie = useCookie("token");
      const res: any = await $fetch(`/api/v1/blog/post/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      console.log(res.data);
      this.singleBlog = res.data;
      console.log(this.singleBlog);
    },

    async deleteBlog(id: number | string) {
      const cookie = useCookie("token");
      await $fetch(`/api/v1/blog/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.blogList();
    },
  },
});
