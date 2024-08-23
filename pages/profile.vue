<template>
  <div class="app-container">
    <AppDivider :name="$t('account')" width="82px" :hasLine="true" />
    <div class="app-flex app-flex-column app-w-100 app-mt-5">
      <AppInput :disabled="true" v-model="form.phone" label="شماره تلفن" />
      <AppInput v-model="form.name" label="نام" />
      <AppInput v-model="form.last_name" label="نام خانوادگی" />
      <AppInput v-model="form.id_card_number" label="کد ملی" />
      <AppInput v-model="form.email" label="ایمیل" />
      <div class="app-mt-5" width="200px">
        <AppButton
          name="ثبت"
          background="app-bg-primary"
          @click="sendProfile"
        />
      </div>
      {{ authStore.isAuthenticated }}
      {{ authStore.phone }}
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user/index";
import { useAuthStore } from "@/store/auth/index";

const authStore = useAuthStore();
const userStore = useUserStore();

const form = ref({
  email: "",
  id_card_number: "",
  last_name: "",
  name: "",
  phone: "",
});

const sendProfile = async () => {
  const userStore = useUserStore();
  await userStore.sendProfile({
    email: form.value.email,
    id_card_number: form.value.id_card_number,
    last_name: form.value.last_name,
    name: form.value.name,
  });
};

onMounted(() => {
  userStore.userProfile();
  setTimeout(() => {
    form.value.phone = userStore.user.phone;
  }, 1000);
});
</script>
