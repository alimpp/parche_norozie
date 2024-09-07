<template>
  <div
    class="app-w-100 app-flex app-bg-admin"
    :dir="locale == 'fr' ? 'rtl' : 'ltr'"
  >
    <NuxtLoadingIndicator color="#fd7403" />
    <AdminSidebar />
    <slot />
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>
