<template>
  <div class="login-button bg-primary-100 f-s-12 f-w-100">
    {{ t("login") }} | {{ t("register") }}
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped lang="scss">
.login-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid #c1bdbd;
  padding: 0px 10px;
  transition: 0.5s;
}

.login-button:hover {
  border-radius: 25px;
}
</style>
