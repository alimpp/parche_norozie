import { defineStore } from "pinia";
import { useCookie } from "#app";
import { useProductStore } from "../product";
import { createWarehouseListModel } from "@/model/warehouse";
import { useToastStore } from "~/store/toast";

export const useWarehouseStore = defineStore("useWarehouseStore", {
  state: (): any => ({
    warehouseList: [],
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
          this.warehouseList = createWarehouseListModel(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.loading = false;
    },

    async addStorage(param: any) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/storage/addProduct", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.storageList();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " محصول با موفقیت به انبار اضافه شد";
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

    async updateStock(param: any) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/storage/updateStock", {
        method: "PUT",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res) => {
          this.storageList();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " موجودی انبار با موفقیت به ویرایش شد";
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

    async removeStorage(id: any) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      const res = await $fetch(`/api/v1/storage/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res: any) => {
          this.storageList();
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = "عملیات با موفقیت انجام شد";
            toastStore.text = " محصول از انبار با موفقیت به حذف شد";
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

    async accessProducts() {
      const productStore = useProductStore();
      await productStore.getAllProducts("");
      const result = await filteredWarehouse(
        productStore.products,
        this.warehouseList
      );
    },
  },
});

export const filteredWarehouse = async (
  productData: any,
  warehouseData: any
) => {
  // return [
  //   ...productData.filter((p: any) =>
  //     warehouseData.every((w: any) => w.ProductID != p.ID)
  //   ),
  //   ...warehouseData.filter((p: any) =>
  //     productData.every((w: any) => w.ProductID != p.ID)
  //   ),
  // ];
};
