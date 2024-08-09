<template>
  <div :dir="locale == 'fr' ? 'rtl' : 'ltr'">
    <NuxtLoadingIndicator color="#fd7403" />
    login admin layout
    <slot />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
</script>
