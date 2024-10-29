<template>
  <div class="app-w-100">
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50">
          <AppBeardCrumb :route="$t('dashboard')" :child="$t('tickets')" />
        </div>
      </div>
    </template>
  </AppCard>
    <div>
      <div v-if="loading" class="app-flex app-flex-column app-px-2 app-py-2">
        <AppLoading height="70vh" />
      </div>
      <div
        v-if="dataSource.length == 0"
        class="app-flex app-h-70 app-align-center app-justify-center"
      >
        <AppEmptyContent />
      </div>
    </div>
    <CardsTicket
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
    <ModalsTicketInfo
      :state="ticketInfoState"
      @close="closeTicketInfo"
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
