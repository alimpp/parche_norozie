import { defineStore } from "pinia";
import { useCookie, useFetch } from "#app";

export const useTicketStore = defineStore("useTicketStore", {
  state: (): any => ({
    tickets: {},
  }),

  getters: {},
  actions: {
    async addTicket(param: any) {
      const cookie = useCookie("token");

      await useFetch("/api/v1/ticketing/add", {
        method: "POST",
        body: param,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          err;
        });

      // await $fetch("https://parche-go.liara.run/api/v1/ticketing/add", {
      //   method: "POST",
      //   body: param,
      //   headers: {
      //     Authorization: `Bearer ${cookie.value}`,
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((res: any) => {
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
});
