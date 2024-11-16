import { defineStore } from "pinia";
import { useCookie } from "#app";
import { useToastStore } from "~/store/toast";

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
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/blog/add", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.blogsList = res.data;
          this.blogList();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " بلاگ با موفقیت ایجاد شد";
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
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      await $fetch(`/api/v1/blog/update/${this.lastSelectedBlogId}`, {
        method: "PUT",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.blogList();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " بلاگ با موفقیت ویرایش شد";
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

    async deleteBlog(id: number | string) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      await $fetch(`/api/v1/blog/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.blogList();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " بلاگ با موفقیت حذف شد";
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

    async searchBlog(param: any) {
      await this.blogList();
      this.blogsList = this.blogsList.filter((blog: any) => {
        return blog.Title.match(param);
      });
    },
  },
});
