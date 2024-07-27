<template>
  <div class="login-content">
    <div class="content">
      <div
        class="form-content app-bg-white app-border-radius app-py-6 app-mx-4"
      >
        <div
          class="app-flex app-align-center app-justify-center app-w-100 app-h-10"
        >
          <AppLogo />
        </div>
        <span class="app-font-size-18 app-font-weight-600 app-px-4 app-py-2">
          {{ t("login") }} | {{ t("register") }}</span
        >
        <div class="app-px-4 app-py-4">
          <AppInput label="شماره تلفن" />
        </div>
        <div class="app-px-4 app-py-4">
          <AppButton background="app-bg-primary" :name="t('login')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

definePageMeta({
  layout: "auth",
});
</script>

<style scoped>
.login-content {
  width: 100%;
  height: 100vh;
  background-image: url(@/assets/images/login-bg.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.content {
  width: 100%;
  height: 100vh;
  background: #000000b5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-content {
  width: 380px;
  display: flex;
  flex-direction: column;
}
</style>
