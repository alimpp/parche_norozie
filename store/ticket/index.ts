import { defineStore } from "pinia";
import { useCookie, useFetch } from "#app";
import { useToastStore } from "../toast";
export const useTicketStore = defineStore("useTicketStore", {
  state: (): any => ({
    tickets: [],
    ticket: { data: {}, messages: [] },
  }),

  getters: {},
  actions: {
    async allTickets() {
      const cookie = useCookie("token");
      const res = await $fetch("/api/v1/ticketing", {
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.tickets = res.data;
    },

    async getSingleTicket(ulid: string) {
      const cookie = useCookie("token");
      await this.allTickets();
      const targetTicket = this.tickets.find((item: any) => {
        return item.ULID == ulid;
      });
      this.ticket.data = targetTicket;
      const res = await $fetch(`/api/v1/ticketing/retrieve/${ulid}`, {
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.ticket.messages = res.data;
    },

    async sendMessage(messge: string) {
      const cookie = useCookie("token");
      const msg = {
        msg: messge,
        ticket_id: this.ticket.data.ULID,
        type: "txt",
      };
      const res = await $fetch("/api/v1/ticketing/msg", {
        method: "POST",
        body: msg,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      });
      this.getSingleTicket(this.ticket.data.ULID);
    },

    async addTicket(param: any) {
      const toastStore = useToastStore();
      const cookie = useCookie("token");
      await $fetch("/api/v1/ticketing/add", {
        method: "POST",
        body: param,
        headers: {
          Authorization: `Bearer ${cookie.value}`,
        },
      })
        .then((res: any) => {
          if (res.status == 200) {
            toastStore.state = true;
            toastStore.title = res.message;
            toastStore.text = "در اولین فرصت تیکت شما رسیدگی خواهد شد";
            setTimeout(() => {
              toastStore.reset();
            }, 2000);
          }
        })
        .catch((err) => {
          err;
        });
    },
  },
});
