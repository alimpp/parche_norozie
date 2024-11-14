import { defineStore } from "pinia";
import { useCookie } from "#app";
import { useProductStore } from "../product";

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
          this.warehouseList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      this.loading = false;
    },

    async addStorage(param: any) {
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/storage/addProduct", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
    },

    async updateStorage(param: any) {
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/storage/updateStock", {
        method: "PUT",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
    },

    async accessProducts() {
      const productStore = useProductStore();
      await productStore.getAllProducts("");
      console.log(productStore.products);
      console.log(this.warehouseList);
      const result = await filteredWarehouse(
        productStore.products,
        this.warehouseList
      );
      console.log(result);
    },
  },
});
export const filteredWarehouse = async (
  productData: any,
  warehouseData: any
) => {
  return [
    ...productData.filter((p: any) =>
      warehouseData.every((w: any) => w.ProductID != p.ID)
    ),
    ...warehouseData.filter((p: any) =>
      productData.every((w: any) => w.ProductID != p.ID)
    ),
  ];
};
