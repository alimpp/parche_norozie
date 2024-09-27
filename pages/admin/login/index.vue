<template>
  <div class="app-w-100 app-flex app-flex-column app-justify-center">
    <div
      class="app-flex app-align-center app-justify-center app-w-100 app-h-10"
    >
      <AppLogo />
    </div>
    <div class="app-px-4 app-py-4">
      <AppInput
        :label="t('username')"
        v-model="form.phone"
        :error="error.phone.state"
        :message-error="error.phone.message"
      />
      <AppInput
        :label="t('password')"
        v-model="form.password"
        :error="error.password.state"
        :message-error="error.password.message"
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
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useAuthAdminStore } from "~/store/adminAuth";
import {
  validateAdminUsername,
  validateAdminPassword,
} from "@/utils/validate.js";

const authAdminStore = useAuthAdminStore();

const form = ref({
  phone: "",
  password: "",
});

const error = ref({
  phone: { state: false, message: "" },
  password: { state: false, message: "" },
});

const { t } = useI18n();
const loading = ref(false);
const disabled = ref(false);

definePageMeta({
  // middleware: ["admin-auth"],
  layout: "login-admin",
});

const handleLogin = async () => {
  loading.value = true;
  error.value.phone = validateAdminUsername(form.value.phone);
  error.value.password = validateAdminPassword(form.value.password);
  if (!error.value.phone.state && !error.value.password.state) {
    await authAdminStore.login(form.value);
  }
  loading.value = false;
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
