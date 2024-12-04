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
    <AppDivider
      class="mx-4"
      name="ورود | ثبت نام"
      :hasLine="true"
      width="90px"
    />
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
    return "bg-primary-100";
  } else {
    return "bg-primary-100";
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
.content {
  width: 380px;
}
</style>
