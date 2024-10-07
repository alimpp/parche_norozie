<template>
  <div
    class="chat-room-header app-px-3"
    :class="{
      'app-bg-white': themeStore.theme == 'light',
      'app-bg-element-dark': themeStore.theme == 'dark',
      'app-bg-secondary-custom': themeStore.theme == 'custom',
    }"
  >
    <div class="app-flex app-w-95">
      <AppAvatar width="40px" height="40px" :name="data.avatar" />
      <div class="app-flex app-flex-column app-px-2">
        <span class="app-font-size-12 app-font-weight-500">{{
          data.name
        }}</span>
        <span class="app-font-size-10 app-font-weight-100 app-color-gray">{{
          data.role
        }}</span>
      </div>
    </div>
    <div class="app-w-5 app-flex app-align-center app-justify-end app-pointer">
      <span class="app-mt-2" @click="emit('more')" v-if="role == 'admin'">
        <MoreVerticalIcon size="1x"></MoreVerticalIcon>
      </span>
      <span class="app-mt-2 app-mx-2" @click="emit('back')"
        ><ArrowLeftIcon size="1x"></ArrowLeftIcon
      ></span>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

const emit = defineEmits(["back", "more"]);

const role = computed(() => {
  const role = localStorage.getItem("role");
  return role ? role : "";
});

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>

<style scoped>
.chat-room-header {
  width: 100%;
  height: 8dvh;
  display: flex;
  align-items: center;
  border-radius: 0 0 10px 10px;
}
</style>
