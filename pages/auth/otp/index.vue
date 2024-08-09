<template>
  <div
    class="app-w-100 app-h-100 app-flex app-flex-column app-justify-center app-px-8"
  >
    <div
      class="app-flex app-align-center app-justify-center app-w-100 app-h-10"
    >
      <AppLogo />
    </div>
    <div class="app-flex app-justify-center app-align-center">
      <span class="app-font-size-14 app-font-weight-600 app-px-4 app-py-2">
        {{ t("otp") }}</span
      >
    </div>
    <div class="app-px-4 app-py-4" dir="ltr">
      <v-otp-input :loading="loading" v-model="otpCode"></v-otp-input>
    </div>
    <div
      class="app-w-100 app-flex app-justify-center app-flex-column app-align-center"
    >
      <!-- <span class="app-font-size-12 app-font-weight-900">01:59</span> -->
      <CountDown :starterFlag="countDownState" @stop="stoped"> </CountDown>
      <span
        @click="resendCode"
        class="app-font-size-12 app-font-weight-900 app-pointer"
        >{{ t("resendCode") }}</span
      >
    </div>
    <div class="app-px-4 app-py-4">
      <AppButton
        background="app-bg-primary"
        :name="t('submit')"
        @click="handleSendOtp"
        :loading="loading"
        width="100%"
        :disabled="disabled"
      />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import { useAuthStore } from "@/store/auth/index";
const authStore = useAuthStore();

const otpCode = ref("");
const loading = ref(false);
const disabled = ref(false);

definePageMeta({
  layout: "auth",
  middleware: ["otp"],
});

const countDownState = ref("stop");
const resendState = ref(false);

const resendCode = () => {
  countDownState.value = "reset";
};

const stoped = () => {
  resendState.value = true;
};

const handleSendOtp = async () => {
  loading.value = true;
  await authStore.otp({ otp_token: otpCode.value, phone: "09383758792" });
  if (authStore.isAuthenticated) {
    loading.value = false;
    navigateTo("/");
  }
};

onMounted(() => {
  setTimeout(() => {
    countDownState.value = "start";
  }, 0);
});
</script>

<style scoped>
.otp-content {
  width: 100%;
  height: 100vh;
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
