<template>
  <div class="app-w-100 app-flex app-flex-column app-justify-center">
    <div
      class="app-flex app-align-center app-justify-center app-w-100 app-h-10"
    >
      <AppLogo />
    </div>
    <AppDivider
      class="mx-4"
      name="ورود | ثبت نام"
      :hasLine="true"
      width="90px"
    />
    <!-- <span class="app-font-size-18 app-font-weight-600 app-px-4 app-py-2">
      {{ t("login") }} | {{ t("register") }}</span
    > -->
    <div class="app-px-4 app-py-4">
      <AppInput
        :label="t('phoneNumber')"
        v-model="phoneNumber"
        @keyup.enter="handleLogin"
        placeholder="09123232123"
        type="number"
        :error="errorState.state"
        :message-error="errorState.message"
      />
    </div>
    <div class="app-px-4 app-py-4">
      <AppButton
        :background="background"
        :name="t('send')"
        @click="handleLogin"
        :loading="loading"
        width="100%"
        :disabled="disabled"
        height="45px"
      />
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ValidatePhoneNumber } from "@/utils/validate";
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

const { t } = useI18n();
const phoneNumber = ref("");
const errorState = ref({ state: false, message: "" });
const loading = ref(false);
const disabled = ref(false);

definePageMeta({
  layout: "auth",
});

const handleLogin = async () => {
  errorState.value = ValidatePhoneNumber(phoneNumber.value);
  if (!errorState.value.state) {
    loading.value = true;
    await authStore.login(phoneNumber.value);
    loading.value = false;
    navigateTo("/auth/otp");
  }
};
</script>

<style scoped lang="scss">
.login-content {
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
