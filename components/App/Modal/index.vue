<template>
  <div class="app-modal-content" v-if="state">
    <div
      class="fade_animations app-border-radius app-overflow-hidden"
      :style="{
        width: `${width}`,
        height: `${height}`,
      }"
      :class="{
        'app-bg-white': themeStore.theme == 'light',
        'app-bg-element-dark': themeStore.theme == 'dark',
        'app-bg-secondary-custom': themeStore.theme == 'custom',
      }"
    >
      <div class="app-flex app-w-100" v-if="header">
        <div
          class="app-w-50 app-flex app-justify-start app-px-1 app-py-3 app-px-3"
        >
          <span class="f-s--16 f-w-600">{{ title }}</span>
        </div>
        <div
          class="app-w-50 app-flex app-justify-end app-px-1 app-py-3 app-px-3"
          @click="emit('close')"
        >
          <XIcon size="1.5x" class="custom-class app-pointer"></XIcon>
        </div>
      </div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

const emit = defineEmits(["close"]);
const props = defineProps({
  header: {
    type: Boolean,
    default: true,
  },
  state: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "380px",
  },
  height: {
    type: String,
    default: "auto",
  },
  title: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.app-modal-content {
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(5, 5, 5, 0.816);
  transition: 1s;
}
</style>
