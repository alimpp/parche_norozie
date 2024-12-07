<template>
  <div
    class="app-flex app-flex-column app-justify-center content"
    data-aos="fade-up"
  >
    <div
      class="app-flex app-align-center app-justify-center app-w-100 app-h-10"
    >
      <AppLogo />
    </div>
    <div class="app-flex app-flex-column app-justify-center app-align-center">
      <AppDivider :name="$t('otp')" :hasLine="false" width="160px" />
      <span class="f-s-14 f-w-600">{{ authStore.phone }}</span>
    </div>
    <div class="app-px-4 app-py-4" dir="ltr">
      <v-otp-input :loading="loading" v-model="otpCode"></v-otp-input>
    </div>
    <div
      class="app-flex app-flex-column app-justify-center app-align-center"
      v-if="otpError"
    >
      <span class="f-s-14 f-w-600 color-danger"> {{ t("otp error") }}</span>
    </div>
    <div
      class="app-w-100 app-flex app-justify-center app-flex-column app-align-center"
    >
      <CountDown :starterFlag="countDownState" @stop="stoped"> </CountDown>
      <span
        v-if="resendState"
        @click="resendCode"
        class="f-s-12 f-w-900 app-pointer"
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
    return "bg-primary-100";
  } else {
    return "bg-primary-100";
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
    const lastRoute = localStorage.getItem("lastRoute");
    if (lastRoute) {
      navigateTo(lastRoute);
      localStorage.removeItem("lastRoute");
    } else {
      navigateTo("/");
    }
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

<style scoped lang="scss">
.content {
  width: 380px;
}
</style>
