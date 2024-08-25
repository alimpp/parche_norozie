<template>
  <div
    :style="{ width: `${width}`, height: `${height}` }"
    class="app-card-content app-border-radius"
    :class="{
      'app-bg-white': themeStore.theme == 'light',
      'app-bg-element-dark': themeStore.theme == 'dark',
      'app-bg-secondary-custom': themeStore.theme == 'custom',
    }"
  >
    <slot name="content"></slot>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

const props = defineProps({
  width: {
    type: String,
    default: "",
  },
});
</script>
