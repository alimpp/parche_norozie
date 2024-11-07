<template>
  <div
    :dir="locale == 'fr' ? 'rtl' : 'ltr'"
    class="auth-layout bgadmin"
    :class="{
      bgsecondary: themeStore.theme == 'light',
      bgdark: themeStore.theme == 'dark',
      'primary-custom': themeStore.theme == 'custom',
    }"
  >
    <div class="form app-w-100">
      <slot />
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
.auth-layout {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form {
  width: 400px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
