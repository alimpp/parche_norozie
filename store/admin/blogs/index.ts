import { defineStore } from "pinia";
import { useCookie } from "#app";

export const useBlogsStore = defineStore("useBlogsStore", {
  state: (): any => ({
    blogsList: [],
    singleBlog: {},
    lastSelectedBlogId: null,
    loading: false,
  }),
  actions: {
    async blogList() {
      this.loading = !this.loading;
      const res = await $fetch("/api/v1/blog/list", {
        method: "GET",
      });
      this.blogsList = res.data;
      this.loading = !this.loading;
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
      this.lastSelectedBlogId = id;
      const cookie = useCookie("token");
      const res: any = await $fetch(`/api/v1/blog/post/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.singleBlog = res.data;
      console.log(this.singleBlog);
    },

    async updateBlog(param: any) {
      const cookie = useCookie("token");
      await $fetch(`/api/v1/blog/update/${this.lastSelectedBlogId}`, {
        method: "PUT",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.blogList();
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

    async searchBlog(param: any) {
      await this.blogList();
      this.blogsList = this.blogsList.filter((blog: any) => {
        return blog.Title.match(param);
      });
    },
    
  },
});
