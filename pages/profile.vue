<template>
  <div class="app-container">
    <AppDivider :name="$t('account')" width="82px" :hasLine="true" />
    <div class="app-flex app-flex-column app-w-100 app-mt-5">
      <AppInput :disabled="true" v-model="form.phone" label="شماره تلفن" />
      <AppInput v-model="form.name" label="نام" />
      <AppInput v-model="form.lastname" label="نام خانوادگی" />
      <AppInput v-model="form.id_card_number" label="کد ملی" />
      <AppInput v-model="form.email" label="ایمیل" />
      <AppInput v-model="form.job" label="شغل" />

      <div class="app-mt-5" width="200px">
        <AppButton
          name="ثبت"
          background="app-bg-primary"
          @click="sendProfile"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user/index";

const userStore = useUserStore();

const form = ref({
  birthdate: "",
  email: "",
  id_card_number: "",
  job: "",
  lastname: "",
  name: "",
  phone: "",
  role: "",
  theme: "",
});

const sendProfile = async () => {
  const userStore = useUserStore();
  await userStore.sendProfile({
    ...form.value,
  });
};

onMounted(() => {
  userStore.userProfile();
  setTimeout(() => {
    form.value = userStore.user;
  }, 500);
});
</script>
