<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50 app-flex app-flex-column">
          <span class="f-s--16 f-w-600">
            {{ $t("tickets") }}
          </span>
          <span class="f-s--12 f-w-500 app-color-gray">
            {{ $t("tickets admin title") }}
          </span>
        </div>
      </div>
    </template>
  </AppCard>
  <AppLoading v-if="loading" height="70dvh" />
  <div v-else>
    <AppEmptyContent v-if="dataSource.length == 0" height="70dvh" />
    <CardsTicket
      v-else
      v-for="ticket in dataSource"
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
  </div>
  <ModalsTicketInfo
    :state="ticketInfoState"
    @close="closeTicketInfo"
    :data="ticketinfo"
  />
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

const loading = computed(() => {
  return ticketStore.loading;
});

const dataSource = computed(() => {
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

const closeTicketInfo = () => {
  ticketInfoState.value = false;
  modalState.value = false;
};

onMounted(async () => {
  await ticketStore.adminAllTickets();
});
</script>
