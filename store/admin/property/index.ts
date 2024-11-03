import { defineStore } from "pinia";
import { useCookie } from "#app";

export const usePropertyStore = defineStore("usePropertyStore", {
  state: (): any => ({
    properties: [],
    loading: false,
  }),
  actions: {
    async propertyList() {
      const cookie = useCookie("token");
      this.loading = !this.loading;
      const res = await $fetch("/api/v1/property/list", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.properties = res.data;
      this.loading = !this.loading;
    },

    async createProperty(param: any) {
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/property/add", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.propertyList();
    },

    async removeProperty(id: number | string) {
      const cookie = useCookie("token");
      await $fetch(`/api/v1/property/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.propertyList();
    },

    async createPropertyValue(param: any) {
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/property/value/add", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.propertyList();
    },

    async removePropertyValue(id: number | string) {
      const cookie = useCookie("token");
      await $fetch(`/api/v1/property/value/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.propertyList();
    },
    async searchProperty(param: any) {
      await this.propertyList();
      this.properties = this.properties.filter((property: any) => {
        return property.Title.match(param);
      });
    },
  },
});
