import { defineStore } from "pinia";
import { useCookie } from "#app";
import { useToastStore } from "~/store/toast";

export const usePropertyStore = defineStore("usePropertyStore", {
  state: (): any => ({
    properties: [],
    loading: false,
  }),
  actions: {
    async propertyList() {
      const cookie = useCookie("token");
      this.loading = !this.loading;
      const res = await $fetch("/api/v1/property/list", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.properties = res.data;
      this.loading = !this.loading;
    },

    async createProperty(param: any) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/property/add", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.properties = res.data;
          this.propertyList();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " ویژگی با موفقیت ایجاد شد";
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

    async removeProperty(id: number | string) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      await $fetch(`/api/v1/property/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.propertyList();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " ویژگی با موفقیت حذف شد";
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

    async createPropertyValue(param: any) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/property/value/add", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.propertyList();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " مقدار ویژگی با موفقیت ایجاد شد";
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

    async removePropertyValue(id: number | string) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      await $fetch(`/api/v1/property/value/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.propertyList();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " مقدار ویژگی با موفقیت حذف شد";
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
    async searchProperty(param: any) {
      await this.propertyList();
      this.properties = this.properties.filter((property: any) => {
        return property.Title.match(param);
      });
    },
  },
});
