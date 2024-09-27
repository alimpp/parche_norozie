<template>
  <div class="chat-content app-px-2 app-py-2">
    <CardsMessage
      v-for="(msg, index) in messages"
      :key="index"
      :data="msg"
      class="app-mt-2"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  messages: {
    type: Array,
    default: [],
  },
});
</script>

<style scoped>
.chat-content {
  width: 100%;
  height: 84dvh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
}
</style>
