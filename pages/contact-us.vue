<template>
  <div ref="scrollToTop" class="app-container">
    <div class="row-content">
      <div
        class="section-right app-flex app-flex-column app-py-2 app-px-5"
        data-aos="fade-left"
      >
        <AppDivider :name="$t('contact us')" :hasLine="true" width="65px" />
        <AppInput
          :error="error.subject.state"
          :message-error="error.subject.message"
          v-model="form.subject"
          label="موضوع"
        />
        <AppTextarea
          :error="error.title.state"
          :message-error="error.title.message"
          v-model="form.title"
          :label="$t('explans')"
        />
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
      <div class="section-left mt-10 pt-10" data-aos="fade-right">
        <img
          src="@/assets/images/contact-us/contact3.jpg"
          alt="image"
          class="app-w-100 app-border-radius"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTicketStore } from "@/store/ticket/index";
import { validateEmpty } from "@/utils/validate";
const ticketStore = useTicketStore();
const loading = ref(false);

const form = ref({
  subject: "",
  title: "",
});

const error = ref({
  subject: { state: false, message: "" },
  title: { state: false, message: "" },
});

const sendTicket = async () => {
  loading.value = true;

  error.value.subject = validateEmpty(form.value.subject);
  error.value.title = validateEmpty(form.value.title);

  if (!error.value.subject.state && !error.value.title.state) {
    await ticketStore.addTicket({
      ...form.value,
    });
  }
  loading.value = false;
  for (let key in form.value) {
    form.value[key] = "";
  }
};

const scrollToTop = ref(null);
onMounted(() => {
  scrollToTop.value.scrollIntoView();
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
