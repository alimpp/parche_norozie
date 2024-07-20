<template>
  <div>
    <NuxtLoadingIndicator color="#fd7403" />
    default layout
    <slot />
  </div>
</template>

<script setup>
import { themeConfig } from "../utils/theme.js";
onMounted(() => {
  themeConfig();
});
</script>
