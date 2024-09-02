<template>
  <div class="app-container fade_animations">
    <AppDivider :name="$t('account')" width="82px" :hasLine="true" />
    <div class="app-flex app-flex-column app-w-100 app-mt-5">
      <AppInput
        :error="error.phone.state"
        :message-error="error.phone.message"
        :disabled="true"
        v-model="form.phone"
        label="شماره تلفن"
      />
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
import {
  ValidatePhoneNumber,
  ValidateName,
  ValidateLastName,
  ValidateJob,
  ValidateCardNumber,
  validateEmail,
} from "@/utils/validate";
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

const error = ref({
  email: { state: false, message: "" },
  id_card_number: { state: false, message: "" },
  job: { state: false, message: "" },
  lastname: { state: false, message: "" },
  name: { state: false, message: "" },
  phone: { state: false, message: "" },
});

const sendProfile = async () => {
  const userStore = useUserStore();

  error.value.name = ValidateName(form.value.name);
  error.value.lastname = ValidateLastName(form.value.lastname);
  error.value.phone = ValidatePhoneNumber(form.value.phone);
  error.value.id_card_number = ValidateCardNumber(form.value.id_card_number);
  error.value.job = ValidateJob(form.value.job);
  error.value.email = validateEmail(form.value.email);

  if (
    !error.value.name.state &&
    !error.value.lastname.state &&
    !error.value.email.state &&
    !error.value.id_card_number.state &&
    !error.value.job.state &&
    !error.value.phone.state
  ) {
    loading.value = true;

    await userStore

      .sendProfile({
        ...form.value,
        theme: form.value.theme ? form.value.theme : "light",
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
  }
};

onMounted(() => {
  userStore.userProfile();
  setTimeout(() => {
    form.value = userStore.user;
  }, 500);
});
</script>
