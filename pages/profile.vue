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
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user/index";

const form = ref({
  email: "",
  id_card_number: "",
  last_name: "",
  name: "",
  phone: "",
});

const userInformation = computed(() => {
  const userStore = useUserStore();
  return userStore.user;
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
  setTimeout(() => {
    form.value.email = userInformation.value.email;
    form.value.id_card_number = userInformation.value.id_card_number;
    form.value.last_name = userInformation.value.last_name;
    form.value.name = userInformation.value.name;
    form.value.phone = userInformation.value.phone;
  }, 1);
});
</script>
