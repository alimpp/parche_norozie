import { defineStore } from "pinia";
import { useCookie } from "#app";
import { addressDataModel } from "@/model/address";
import { type IAddress } from "~/dataModel/address/model";
import { useToastStore } from "../toast";

export const useAddressStore = defineStore("useAddressStore", {
  state: (): any => ({
    address: [],
  }),

  getters: {},
  actions: {
    async getAddress() {
      const cookie = useCookie("token");
      await $fetch("/api/v1/address", {
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res: any) => {
          this.address = addressDataModel(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async add(param: IAddress) {
      const cookie = useCookie("token");
      const toastStore = useToastStore();
      await $fetch("/api/v1/address/add", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.getAddress();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = res.message;
            toastStore.text = "آدرس شما با موفقیت ثبت شد";
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

    async update(param: IAddress) {
      const toastStore = useToastStore();

      const cookie = useCookie("token");
      await $fetch("/api/v1/address/update", {
        method: "PUT",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.getAddress();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "آدرس ویراش شد";
            toastStore.text = "آدرس شما با موفقیت ویرایش شد";
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

    async delete(param: IAddress) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      await $fetch(`/api/v1/address/${param.uuid}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res: any) => {
          this.getAddress();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "آدرس حذف شد";
            toastStore.text = "آدرس شما با موفقیت حذف شد";
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
  },
});
