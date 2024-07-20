<template>
  <div :dir="locale == 'fr' ? 'rtl' : 'ltr'">
    <NuxtLoadingIndicator color="#fd7403" />
    auth layout
    <slot />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { themeConfig } from "../utils/theme.js";

const { locale } = useI18n();

onMounted(() => {
  themeConfig();
});
</script>
