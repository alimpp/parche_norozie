<template>
  <div
    :dir="locale == 'fr' ? 'rtl' : 'ltr'"
    class="auth-layout app-bg-secondary"
  >
    <div class="form">
      <slot />
    </div>
    <div class="image-bar">
      <img src="@/assets/images/login-bg.jpg" alt="image" />
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

<style scoped>
.auth-layout {
  width: 100%;
  height: 100vh;
  display: flex;
}

.image-bar {
  width: 60%;
  height: 100vh;
}
.image-bar img {
  width: 100%;
  height: 100vh;
  border-radius: 0 50px 50px 0;
}

.form {
  width: 40%;
  height: 100vh;
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
