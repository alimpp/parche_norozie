<template>
  <div class="otp-content">
    <div class="content">
      <div
        class="form-content app-bg-white app-border-radius app-py-6 app-mx-4"
      >
        <div
          class="app-flex app-align-center app-justify-center app-w-100 app-h-10"
        >
          <AppLogo />
        </div>
        <span class="app-font-size-14 app-font-weight-600 app-px-4 app-py-2">
          {{ t("otp") }}</span
        >
        <div class="app-px-4 app-py-4" dir="ltr">
          <v-otp-input :loading="loading" v-model="otpCode"></v-otp-input>
        </div>
        <div
          class="app-w-100 app-flex app-justify-center app-flex-column app-align-center"
        >
          <!-- <span class="app-font-size-12 app-font-weight-900">01:59</span> -->
          <CountDown :starterFlag="starterFlag"> </CountDown>
          <span
            @click="resend"
            class="app-font-size-12 app-font-weight-900 app-pointer app-bg-primary"
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
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const otpCode = ref("");
const loading = ref(false);
const disabled = ref(false);

definePageMeta({
  layout: "auth",
});
const starterFlag = ref("stop");

const resend = (starterFlag) => {
  starterFlag.value = "reset";
};

const handleSendOtp = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    navigateTo("/");
  }, 2000);
};
onMounted(() => {
  setTimeout(() => {
    starterFlag.value = "start";
  }, 0);
});
</script>

<style scoped>
.otp-content {
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
