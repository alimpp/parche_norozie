<template>
  <div class="app-w-100 app-flex app-flex-column"></div>
</template>

<script setup>
import { useTicketStore } from "~/store/ticket";
import { useRoute } from "vue-router";

const ticketStore = useTicketStore();
const route = useRoute();
const loading = ref(false);

onMounted(async () => {
  loading.value = true;
  const ticketStore = useTicketStore();
  await ticketStore.getSingleTicket(route.params.ulid);
  loading.value = false;
});
</script>
