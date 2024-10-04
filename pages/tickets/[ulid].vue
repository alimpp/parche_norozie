<template>
  <div class="app-w-100 app-flex app-flex-column">
    <ChatRoom
      :header="{ name: 'فروشگاه نوروزی', avatar: 'ن', role: 'ادمین' }"
      :messages="messages"
      @sendMessage="sendMessage"
      @back="back"
    />
  </div>
</template>

<script setup>
import { useTicketStore } from "~/store/ticket";
import { useRoute } from "vue-router";

const ticketStore = useTicketStore();
const route = useRoute();
const loading = ref(false);

const messages = computed(() => {
  return ticketStore.ticket.messages;
});

const sendMessage = (value) => {
  ticketStore.sendMessage(value, "user");
};

const back = () => {
  ticketStore.ticket.messages = [];
  navigateTo("/tickets");
};

onMounted(async () => {
  loading.value = true;
  const ticketStore = useTicketStore();
  await ticketStore.getSingleTicket(route.params.ulid);
  loading.value = false;
});
</script>
