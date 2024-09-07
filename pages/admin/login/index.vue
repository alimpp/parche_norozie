<template>
  <div class="app-w-100 app-flex app-flex-column app-justify-center">
    <div
      class="app-flex app-align-center app-justify-center app-w-100 app-h-10"
    >
      <AppLogo theme="dark" />
    </div>
    <div class="app-px-4 app-py-4">
      <AppInput :label="t('username')" v-model="form.phone" />
      <AppInput :label="t('password')" v-model="form.password" />
    </div>
    <div class="app-px-4 app-py-4">
      <AppButton
        background="app-border-light"
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

const authAdminStore = useAuthAdminStore();

const form = ref({
  phone: "",
  password: "",
});

const { t } = useI18n();
const loading = ref(false);
const disabled = ref(false);

definePageMeta({
  layout: "login-admin",
});

const handleLogin = async () => {
  loading.value = true;
  authAdminStore.login(form.value);
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
