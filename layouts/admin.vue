<template>
  <div
    class="app-w-100 app-h-100 app-flex overflow-hidden"
    :class="{
      'app-bg-secondary': themeStore.theme == 'light',
      'app-bg-dark': themeStore.theme == 'dark',
      'app-bg-primary-custom': themeStore.theme == 'custom',
    }"
    :dir="locale == 'fr' ? 'rtl' : 'ltr'"
  >
    <NuxtLoadingIndicator color="#fd7403" />
    <AdminSidebar />
    <div class="app-flex app-flex-column app-align-center app-w-100">
      <AdminHeader />
      <div class="router-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>

<style scoped>
.router-content {
  width: 95%;
  height: 85vh;
  overflow-y: scroll;
}
</style>
