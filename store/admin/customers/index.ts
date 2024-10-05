import { defineStore } from "pinia";
import { useCookie } from "#app";
import { CostumersDataModel } from "@/model/costumers";
export const useCustomersStore = defineStore("useCustomersStore", {
  state: (): any => ({
    customers: [],
    loading: false,
  }),
  actions: {
    async getAllCustomers(param: any) {
      this.loading = true;
      const cookie = useCookie("token");
      await $fetch(
        `/api/v1/profile/list?phone=${param.phone}&name=${param.name}&lastname=${param.lastname}&email=${param.email}&id_card_number=${param.id_card_number}`,
        {
          headers: {
            Authorization: `Bearer ${cookie.value}`,
          },
        }
      )
        .then((res: any) => {
          this.customers = CostumersDataModel(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      this.loading = false;
    },
  },
});
