import { defineStore } from "pinia";
import { useCookie } from "#app";

export const useFileStore = defineStore("useFileStore", {
  state: (): any => ({}),

  getters: {},

  actions: {
    async upload(file: any, name: string) {
      const cookie = useCookie("token");
      const res = await $fetch(`/api/v1/upload/?${name}.png`, {
        method: "POST",
        body: { file },
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
