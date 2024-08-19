<template>
  <div class="app-w-100 app-flex app-flex-column app-justify-center">
    <div
      class="app-flex app-align-center app-justify-center app-w-100 app-h-10"
    >
      <AppLogo />
    </div>
    <div class="app-flex app-flex-column app-justify-center app-align-center">
      <AppDivider :name="$t('otp')" :hasLine="false" width="160px" />
      <span class="app-font-size-14 app-font-weight-600">{{
        authStore.phone
      }}</span>
    </div>
    <div class="app-px-4 app-py-4" dir="ltr">
      <v-otp-input :loading="loading" v-model="otpCode"></v-otp-input>
    </div>
    <div
      class="app-flex app-flex-column app-justify-center app-align-center"
      v-if="otpError"
    >
      <span class="app-font-size-14 app-font-weight-600 app-color-danger">
        {{ t("otp error") }}</span
      >
    </div>
    <div
      class="app-w-100 app-flex app-justify-center app-flex-column app-align-center"
    >
      <CountDown :starterFlag="countDownState" @stop="stoped"> </CountDown>
      <span
        v-if="resendState"
        @click="resendCode"
        class="app-font-size-12 app-font-weight-900 app-pointer"
        >{{ t("resendCode") }}</span
      >
    </div>
    <div class="app-px-4 app-py-4">
      <AppButton
        :background="background"
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
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

const background = computed(() => {
  if (themeStore.theme == "dark" || themeStore.theme == "dark") {
    return "app-bg-primary";
  } else {
    return "app-bg-primary";
  }
});
import { useAuthStore } from "@/store/auth/index";
const authStore = useAuthStore();

const otpCode = ref("");
const otpError = ref(false);
const loading = ref(false);
const disabled = ref(false);

definePageMeta({
  layout: "auth",
  middleware: ["otp"],
});

watch(otpCode, async (newValue, oldValue) => {
  if (otpCode.value.length == 6) {
    await handleSendOtp();
  }
});

const countDownState = ref("stop");
const resendState = ref(false);

const resendCode = async () => {
  countDownState.value = "reset";
  await authStore.login(authStore.phone);
  resendState.value = false;
};

const stoped = async () => {
  resendState.value = true;
};

const handleSendOtp = async () => {
  loading.value = true;
  await authStore.otp({ otp_token: otpCode.value, phone: authStore.phone });
  if (authStore.isAuthenticated) {
    loading.value = false;
    otpError.value = false;
    navigateTo("/");
  } else {
    loading.value = false;
    otpError.value = true;
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
