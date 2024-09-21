import { defineStore } from "pinia";
import { useCookie } from "#app";
import { CostumersDataModel } from "@/model/costumers";
export const useCustomersStore = defineStore("useCustomersStore", {
  state: (): any => ({
    customers: [],
    loading: false,
  }),
  actions: {
    async getAllCustomers() {
      this.loading = true;
      const cookie = useCookie("token_admin");
      await $fetch("/api/v1/profile/list")
        .then((res: any) => {
          this.customers = CostumersDataModel(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      //   await $fetch("https://parche-go.liara.run/api/v1/profile", {
      //     headers: {
      //       Authorization: `Bearer ${cookie.value}`,
      //       "Content-Type": "application/json",
      //     },
      //   })
      //     .then((res: any) => {this.customers = res.data;})
      //     .catch((err) => {});
      this.loading = false;
    },
  },
});
