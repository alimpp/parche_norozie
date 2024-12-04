<template>
  <div :dir="locale == 'fr' ? 'rtl' : 'ltr'" class="auth-layout">
    <img src="/public/images/bed.jpeg" alt="image" />
    <div class="form app-w-100" data-aos="fade-up">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { locale } = useI18n();
</script>

<style scoped>
.auth-layout {
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: end;
}
img {
  width: 100%;
  height: 100dvh;
  position: relative;
}
.form {
  position: absolute;
  z-index: 30;
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffffc9;
}

@media (max-width: 700px) {
  .form {
    width: 100%;
    height: 85dvh;
    border-radius: 60px 60px 0 0;
  }
}
</style>
