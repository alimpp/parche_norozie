<template>
  <AppModal
    width="100%"
    height="100dvh"
    :state="state"
    @close="emit('close')"
    :header="false"
    :title="$t('submit address')"
  >
    <template #content>
      <div
        class="app-w-100"
        :class="{
          'app-bg-secondary': themeStore.theme == 'light',
          'app-bg-dark': themeStore.theme == 'dark',
          'app-bg-primary-custom': themeStore.theme == 'custom',
        }"
      >
        <ChatRoom
          :header="ticketinfo"
          :messages="messages"
          @sendMessage="sendMessage"
          @back="emit('close')"
          @more="emit('more')"
        />
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { useTicketStore } from "@/store/ticket/index";
import { useThemeStore } from "@/store/theme/index";

const proos = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close", "more"]);

const themeStore = useThemeStore();
const ticketStore = useTicketStore();

const ticketinfo = computed(() => {
  const user = {
    name:
      ticketStore.ticket.data.user.name + ticketStore.ticket.data.user.lastname,
    avatar:
      ticketStore.ticket.data.user.name[0] +
      ticketStore.ticket.data.user.lastname[0],
    role: "user",
  };
  return user;
});

const messages = computed(() => {
  return ticketStore.ticket.messages;
});

const sendMessage = (value) => {
  ticketStore.sendMessage(value);
};
</script>
