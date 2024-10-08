<template>
  <div
    class="app-container fade_animations app-flex app-flex-column"
    style="min-height: 100dvh"
  >
    <AppDivider
      :name="$t('all tickets for user')"
      width="110px"
      :hasLine="true"
    />

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
      v-for="ticket in allTickets"
      :key="ticket.ULID"
      :data="ticket"
      class="app-mt-5 fade_animations app-pointer"
      @click="navigateTo(`/tickets/${ticket.ULID}`)"
    />
  </div>
</template>

<script setup>
import { useTicketStore } from "~/store/ticket";
const ticketStore = useTicketStore();

const loading = ref(false);

const allTickets = computed(() => {
  return ticketStore.tickets;
});

onMounted(async () => {
  loading.value = true;
  const ticketStore = useTicketStore();
  await ticketStore.allTickets();
  loading.value = false;
});
</script>
