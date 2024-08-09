<template>
  <div :dir="locale == 'fr' ? 'rtl' : 'ltr'">
    <HamburgerMenu :isOpen="isOpen" @closeMenu="handleChangeStateMenu" />
    <ShoppingCard
      @close="handleChangeStateShoppingCard"
      :isOpen="isOpenShoppingCard"
    />
    <NuxtLoadingIndicator color="#fd7403" />
    <NavigationBar
      @openHamburgerMenu="handleChangeStateMenu"
      @openHamburgerShoppingCard="handleChangeStateShoppingCard"
    />
    <div class="content app-h-90 app-bg-secondary">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { themeConfig } from "../utils/theme.js";

const { locale } = useI18n();
const isOpen = ref(false);
const isOpenShoppingCard = ref(false);

const handleChangeStateMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleChangeStateShoppingCard = () => {
  isOpenShoppingCard.value = !isOpenShoppingCard.value;
};

onMounted(() => {
  themeConfig();
});
</script>

<style scoped>
.content {
  overflow-y: scroll;
}
</style>
