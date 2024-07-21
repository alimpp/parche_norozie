<template>
  <div :dir="locale == 'fr' ? 'rtl' : 'ltr'">
    <NuxtLoadingIndicator color="#fd7403" />
    <NavigationBar />
    <div class="app-h-90 app-bg-secondary">
      <slot />
    </div>
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
