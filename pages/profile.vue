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
          :loading="loading"
        />
      </div>
    </div>
    <v-snackbar v-model="snackbar.state" :timeout="5000">
      {{ snackbar.text }}
      <template v-slot:actions>
        <span class="app-pt-2" @click="snackbar.state = false">
          <XIcon size="1.5x" class="custom-class app-pointer"></XIcon>
        </span>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user/index";

const userStore = useUserStore();
const loading = ref(false);
const snackbar = ref({
  state: false,
  text: "",
});

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
  loading.value = true;
  await userStore
    .sendProfile({
      ...form.value,
    })
    .then((res) => {
      loading.value = false;
      snackbar.value.state = true;
      snackbar.value.text = "اطلاعات شما با موفقیت ثبت و ویرایش شد";
    })
    .catch((err) => {
      loading.value = false;
      snackbar.value.state = true;
      snackbar.value.text = "خطا در ثبت اطلاعات دوباره تلاش کنید";
    });
};

onMounted(() => {
  userStore.userProfile();
  setTimeout(() => {
    form.value = userStore.user;
  }, 500);
});
</script>
