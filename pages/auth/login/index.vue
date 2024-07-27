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
          <AppInput
            :label="t('phoneNumber')"
            v-model="phoneNumber"
            placeholder="09123232123"
            type="number"
            :error="errorState.state"
            :message-error="errorState.message"
          />
        </div>
        <div class="app-px-4 app-py-4">
          <AppButton
            background="app-bg-primary"
            :name="t('send')"
            @click="handleLogin"
            :loading="loading"
            width="100%"
            :disabled="disabled"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ValidatePhoneNumber } from "@/utils/validate";
const { t } = useI18n();
const phoneNumber = ref("");
const errorState = ref({ state: false, message: "" });
const loading = ref(false);
const disabled = ref(false);

definePageMeta({
  layout: "auth",
});

const handleLogin = () => {
  errorState.value = ValidatePhoneNumber(phoneNumber.value);
  if (!errorState.value.state) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      navigateTo("/auth/otp");
    }, 2000);
  }
};
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
