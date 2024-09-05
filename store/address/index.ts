import { defineStore } from "pinia";
import { useCookie, useFetch } from "#app";

import { useAuthStore } from "../auth";
export const useAddressStore = defineStore("useAddressStore", {
  state: (): any => ({
    address: [],
  }),

  getters: {},
  actions: {
    async getAddress() {
      const cookie = useCookie("token");

      await $fetch("/api/v1/address")
        .then((res: any) => {
          this.address = res.data;
        })
        .catch((err) => {
          console.log(err);
        });

      // await $fetch("https://parche-go.liara.run/api/v1/address", {
      //   headers: {
      //     Authorization: `Bearer ${cookie.value}`,
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((res: any) => {
      //     this.address = res.data;
      //     console.log(this.address);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },

    async add(param: any) {
      const cookie = useCookie("token");

      await $fetch("/api/v1/address/add", {
        method: "POST",
        body: param,
      })
        .then((res) => {
          this.getAddress();
        })
        .catch((err) => {
          console.log(err);
        });

      // await $fetch("https://parche-go.liara.run/api/v1/address/add", {
      //   method: "POST",
      //   body: param,
      //   headers: {
      //     Authorization: `Bearer ${cookie.value}`,
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((res) => {
      //     this.getAddress();
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },

    async update(param: any) {
      const cookie = useCookie("token");

      await $fetch("/api/v1/address/update", {
        method: "PUT",
        body: param,
      })
        .then((res) => {
          this.getAddress();
        })
        .catch((err) => {
          console.log(err);
        });

      // await $fetch("https://parche-go.liara.run/api/v1/address/update", {
      //   method: "PUT",
      //   body: param,
      //   headers: {
      //     Authorization: `Bearer ${cookie.value}`,
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((res) => {
      //     this.getAddress();
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },

    async delete(param: any) {
      const cookie = useCookie("token");

      await $fetch(`/api/v1/address/${param.uuid}`, {
        method: "DELETE",
      })
        .then((res) => {
          this.getAddress();
        })
        .catch((err) => {
          console.log(err);
        });

      // await $fetch(`https://parche-go.liara.run/api/v1/address/${param.uuid}`, {
      //   method: "DELETE",
      //   headers: {
      //     Authorization: `Bearer ${cookie.value}`,
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((res) => {
      //     this.getAddress();
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
});
