<template>
  <div
    :style="{
      width: `${width}`,
      height: `${height}`,
    }"
    class="app-card-content app-border-radius overflow-hidden"
    :class="{
      'app-bg-white': themeStore.theme == 'light',
      'app-bg-element-dark': themeStore.theme == 'dark',
      'app-bg-secondary-custom': themeStore.theme == 'custom',
      'primary-border': wighetCard == 'hasBorder',
      'primary-shadow': wighetCard == 'hasShadow',
    }"
  >
    <slot name="content"></slot>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

const wighetCard = computed(() => {
  return themeStore.wighet.baseCard.border;
});

const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
});
</script>
