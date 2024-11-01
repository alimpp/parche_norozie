import { defineStore } from "pinia";
import { useCookie } from "#app";

export const useFileStore = defineStore("useFileStore", {
  actions: {
    async upload(file: any, name: string) {
      const cookie = useCookie("token");
      await $fetch(`/api/v1/upload/${name}`, {
        method: "POST",
        body: file,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
          "Content-Length": file.size,
          "Content-Type": file.type,
        },
      });
    },

    async download(fileName: string) {
      return `https://parche-go.liara.run/api/v1/download/${fileName}`;
    },
  },
});
