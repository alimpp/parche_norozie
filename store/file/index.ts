import { defineStore } from "pinia";
import { useCookie } from "#app";

export const useFileStore = defineStore("useFileStore", {
  state: (): any => ({}),

  getters: {},
  actions: {
    async upload(file: any, name: string, type: string) {
      const cookie = useCookie("token");
      //   const res = await $fetch("/api/v1/upload", {
      //     method: "POST",
      //     body: {
      //       name: name,
      //       file: file,
      //     },
      //     headers: {
      //       Authorization: `Bearer ${cookie.value}`,
      //     },
      //   });
      //   console.log(res);
      const res = await $fetch(`https://parche-go.liara.run/upload/${name}`, {
        method: "POST",
        body: {
          filename: file,
        },
        headers: {
          Authorization: `Bearer ${cookie.value}`,
          "Content-Length": file.size,
          "Content-Type": file.type,
        },
      });
      console.log(res);
    },
  },
});
