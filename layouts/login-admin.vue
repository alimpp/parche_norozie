<template>
  <div
    :dir="locale == 'fr' ? 'rtl' : 'ltr'"
    class="auth-layout app-bg-admin app-bg-dark"
  >
    <div class="form app-w-100">
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
