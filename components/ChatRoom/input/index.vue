<template>
  <div
    class="chat-room-input app-px-3"
    :class="{
      bgwhite: themeStore.theme == 'light',
      'bgelement-dark': themeStore.theme == 'dark',
      'bgsecondary-custom': themeStore.theme == 'custom',
    }"
  >
    <div class="app-w-5 app-flex app-align-center app-justify-center">
      <span class="app-mt-2 app-pointer" @click="sendMessage"
        ><SendIcon size="1.5x"></SendIcon
      ></span>
    </div>
    <div class="app-w-95 app-flex app-justify-end">
      <input
        v-model="message"
        type="text"
        :placeholder="$t('chat input placeholder')"
        :class="{
          bgwhite: themeStore.theme == 'light',
          'bgelement-dark': themeStore.theme == 'dark',
          'bgsecondary-custom': themeStore.theme == 'custom',
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

const emit = defineEmits(["sendMessage"]);

const message = ref("");

const sendMessage = () => {
  if (message.value.length != 0) {
    emit("sendMessage", message.value);
    message.value = "";
  }
};
</script>

<style scoped>
.chat-room-input {
  width: 100%;
  height: 8dvh;
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0 0;
}

input {
  width: 99%;
  height: 40px;
  background: none;
  border: none;
  outline: none;
  background: #39393927;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 12px;
  font-weight: 600;
}
</style>
