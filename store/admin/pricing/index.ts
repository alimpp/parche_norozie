import { defineStore } from "pinia";
import { useCookie } from "#app";
import { createPricingListModel } from "@/model/pricing";
import { useToastStore } from "~/store/toast";

export const usePricingStore = defineStore("usePricingStore", {
  state: (): any => ({
    pricingList: [],
    loading: false,
  }),
  actions: {
    async updatePrice(param: any) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/product/update", {
        method: "PUT",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.getPricingList("");
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " قیمت با موفقیت ویرایش شد";
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

    async getPricingList(param: any) {
      this.loading = true;
      await $fetch(`/api/v1/search?name=${param}`, {
        method: "GET",
      })
        .then((res: any) => {
          this.pricingList = createPricingListModel(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.loading = false;
    },
  },
});
