<template>
  <div :dir="locale == 'fr' ? 'rtl' : 'ltr'">
    <HamburgerMenu :isOpen="isOpen" @closeMenu="closeMenu" />

    <NuxtLoadingIndicator color="#fd7403" />
    <NavigationBar @openHamburgerMenu="openHamburgerMenu" />
    <div class="app-h-90 app-bg-secondary">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { themeConfig } from "../utils/theme.js";

const { locale } = useI18n();
const isOpen = ref(false);

const openHamburgerMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMenu = () => {
  isOpen.value = !isOpen.value;
};

onMounted(() => {
  themeConfig();
});
</script>
