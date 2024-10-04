<template>
  <div class="app-w-100">
    <AppCard v-for="n in 20" class="app-mt-3 fade_animations" v-if="loading">
      <template #content>
        <div class="app-flex app-flex-column app-px-2 app-py-2">
          <AppSkelton width="170px" />
          <AppSkelton width="100px" />
          <AppSkelton width="350px" />
        </div>
      </template>
    </AppCard>

    <CardsTicket
      v-else
      v-for="ticket in tickets"
      :key="ticket.ULID"
      :data="ticket"
      class="app-mt-5 fade_animations app-pointer"
      @click="openTicket(ticket)"
    />
    <ModalsResponseTicket
      :state="modalState"
      @close="modalState = false"
      @more="ticketInfoState = true"
    />
    <ModalsTicketInfo
      :state="ticketInfoState"
      @close="ticketInfoState = false"
      :data="ticketinfo"
    />
  </div>
</template>

<script setup>
import { useTicketStore } from "@/store/ticket/index";
const ticketStore = useTicketStore();

const modalState = ref(false);
const ticketInfoState = ref(false);

definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});

const loading = ref(false);

const tickets = computed(() => {
  return ticketStore.tickets;
});

const ticketinfo = computed(() => {
  return ticketStore.ticket.data;
});

const openTicket = async (ticket) => {
  const ticketStore = useTicketStore();
  await ticketStore.getAdminSingleTicket(ticket);
  modalState.value = true;
};

onMounted(async () => {
  loading.value = true;
  await ticketStore.adminAllTickets();
  loading.value = false;
});
</script>
