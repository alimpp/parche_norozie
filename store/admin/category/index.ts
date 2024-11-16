import { defineStore } from "pinia";
import { useCookie } from "#app";
import { useToastStore } from "~/store/toast";

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
    },

    async createCategory(param: any) {
      const cookie = useCookie("token");
      const toastStore = useToastStore();
      const res = await $fetch("/api/v1/category/add", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.categories = res.data;
          this.categoryList();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = "دسته بندی با موفقیت ایجاد شد";
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

    async removeCategory(id: number | string) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      await $fetch(`/api/v1/category/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.categoryList();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = "دسته بندی با موفقیت حذف شد";
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

    async searchCategory(param: any) {
      await this.categoryList();
      this.categories = this.categories.filter((category: any) => {
        return category.Title.match(param);
      });
    },
  },
});
