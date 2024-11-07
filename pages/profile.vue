<template>
  <div class="app-container fade_animations" style="min-height: 100dvh">
    <AppDivider :name="$t('account')" width="82px" :hasLine="true" />
    <div class="app-flex app-flex-column app-w-100 app-mt-5">
      <AppInput :disabled="true" v-model="form.phone" label="شماره تلفن" />
      <AppInput
        :error="error.name.state"
        :message-error="error.name.message"
        v-model="form.name"
        label="نام"
      />
      <AppInput
        :error="error.lastname.state"
        :message-error="error.lastname.message"
        v-model="form.lastname"
        label="نام خانوادگی"
      />
      <AppInput
        :error="error.id_card_number.state"
        :message-error="error.id_card_number.message"
        v-model="form.id_card_number"
        label="کد ملی"
      />
      <AppInput
        :error="error.email.state"
        :message-error="error.email.message"
        v-model="form.email"
        label="ایمیل"
      />
      <AppInput
        :error="error.job.state"
        :message-error="error.job.message"
        v-model="form.job"
        label="شغل"
      />

      <div class="app-mt-5" width="200px">
        <AppButton
          name="ثبت"
          background="bg-primary-100"
          @click="sendProfile"
          :loading="loading"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user/index";
import {
  ValidateName,
  ValidateLastName,
  ValidateJob,
  ValidateCardNumber,
  validateEmail,
} from "@/utils/validate";
const userStore = useUserStore();
const loading = ref(false);

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

const error = ref({
  email: { state: false, message: "" },
  id_card_number: { state: false, message: "" },
  job: { state: false, message: "" },
  lastname: { state: false, message: "" },
  name: { state: false, message: "" },
});

const isThemeChanges = ref(false);

const sendProfile = async () => {
  const userStore = useUserStore();

  error.value.name = ValidateName(form.value.name);
  error.value.lastname = ValidateLastName(form.value.lastname);
  error.value.id_card_number = ValidateCardNumber(form.value.id_card_number);
  error.value.job = ValidateJob(form.value.job);
  error.value.email = validateEmail(form.value.email);

  if (
    !error.value.name.state &&
    !error.value.lastname.state &&
    !error.value.email.state &&
    !error.value.id_card_number.state &&
    !error.value.job.state
  ) {
    loading.value = true;

    await userStore
      .sendProfile(
        {
          ...form.value,
          theme: form.value.theme ? form.value.theme : "light",
        },
        isThemeChanges
      )
      .then((res) => {
        loading.value = false;
      })
      .catch((err) => {
        loading.value = false;
      });
  }
};

onMounted(() => {
  userStore.userProfile();
  setTimeout(() => {
    form.value = userStore.user;
  }, 500);
});
</script>
