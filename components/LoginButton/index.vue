<template>
  <div class="login-button">
    {{ t("login") }} | {{ t("register") }}
    <ArrowLeftIcon
      size="1.5x"
      class="custom-class app-mx-2 app-pointer"
    ></ArrowLeftIcon>
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
  height: 38px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 6px;
  border: 1px solid #c1bdbd;
  padding: 0px 8px;
  transition: 0.5s;
}

.login-button:hover {
  border-radius: 25px;
}
</style>
