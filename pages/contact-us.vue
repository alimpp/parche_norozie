<template>
  <div class="app-container">
    <div class="row-content">
      <div class="section-right app-flex app-flex-column app-py-2 app-px-5">
        <AppDivider :name="$t('contactUs')" :hasLine="true" width="65px" />
        <AppInput :label="$t('ticket subject')" />
        <AppInput
          :error="error.email.state"
          :message-error="error.email.message"
          v-model="form.email"
          label="ایمیل"
          :label="$t('email address')"
        />
        <AppTextarea :label="$t('explans')" />
        <div class="row-content">
          <AppButton
            :name="$t('send')"
            background="custom-border-primary"
            width="130px"
            class="app-mt-5"
            :loading="loading"
            @click="sendTicket"
          />
        </div>
      </div>
      <div class="section-left mt-10 pt-10">
        <img
          src="@/assets/images/contact-us/contact3.jpg"
          alt="image"
          class="app-w-100 app-border-radius"
        />
      </div>
    </div>
  </div>
  <AppFooter></AppFooter>
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
  ticketSubject: "",
  email: "",
  ticketExpalns: "",
});

const error = ref({
  email: { state: false, message: "" },
});


onMounted(() => {
  userStore.userProfile();
  setTimeout(() => {
    form.value = userStore.user;
  }, 500);
});
</script>

<style scoped>
.row-content {
  width: 100%;
  display: flex;
}

.section-right {
  width: 50%;
}
.section-left {
  width: 50%;
}

@media (max-width: 800px) {
  .row-content {
    flex-direction: column;
  }
  .section-left {
    width: 100%;
  }
  .section-right {
    width: 100%;
  }
  img {
    width: 100%;
  }
}
</style>
