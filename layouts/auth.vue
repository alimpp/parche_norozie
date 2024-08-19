<template>
  <div
    :dir="locale == 'fr' ? 'rtl' : 'ltr'"
    class="auth-layout"
    :class="{
      'app-bg-secondary': themeStore.theme == 'light',
      'app-bg-dark': themeStore.theme == 'dark',
      'app-bg-primary-custom': themeStore.theme == 'custom',
    }"
  >
    <div class="form app-w-100">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

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

@media (max-width: 900px) {
  .image-bar {
    display: none;
  }
  .form {
    width: 100%;
  }
}
</style>
