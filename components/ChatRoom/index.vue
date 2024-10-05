<template>
  <div class="chat-room">
    <ChatRoomHeader :data="header" @back="emit('back')" @more="emit('more')" />
    <ChatRoomContent :messages="messages" />
    <ChatRoomInput @sendMessage="sendMessage" />
  </div>
</template>

<script setup>
const emit = defineEmits(["sendMessage", "back", "more"]);

const sendMessage = (event) => {
  emit("sendMessage", event);
};
const props = defineProps({
  header: {
    type: Object,
    default: {},
  },
  messages: {
    type: Array,
    default: [],
  },
  data: {
    type: Object,
    default: {},
  },
});
</script>

<style scoped>
.chat-room {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
