<template>
  <AppModal
    width="90%"
    :state="state"
    @close="close"
    :title="$t('create new blog')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 app-py-7 container">
        <div class="app-flex app-flex-column app-w-100">
          <AppInput
            height="35px"
            :label="$t('title') + ' ' + $t('main')"
            v-model="form.title"
            :error="error.title.state"
            :message-error="error.title.message"
          />
          <AppTextarea
            :label="$t('text') + ' ' + $t('main')"
            v-model="form.description"
            :error="error.description.state"
            :message-error="error.description.message"
          />
          <FileImage class="app-mt-5" />
          <div>
            <AppButton
              class="app-mt-4"
              :name="$t('create section')"
              background="app-bg-primary"
              :loading="loading"
              @click="addSection"
            />
          </div>
        </div>
        <div
          class="app-flex app-flex-column app-w-100"
          v-for="(section, index) in form.sections"
        >
          <AppDivider
            class="app-mt-8 app-font-size-16"
            :name="$t('section') + ' ' + (index + 1)"
            width="40px"
            :hasLine="true"
          />
          <AppInput
            height="35px"
            :label="$t('title')"
            v-model="section.title"
          />
          <AppTextarea :label="$t('text')" v-model="section.description" />
          <AppInput height="35px" :label="$t('upload img')" />
        </div>
        <div>
          <AppButton
            class="app-mt-4"
            :name="$t('submit')"
            background="app-bg-primary"
            :loading="loading"
            @click="addSection"
          />
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { validateEmpty } from "@/utils/validate.js";
const emit = defineEmits(["close"]);

const form = ref({
  description: "",
  img: "",
  title: "",
  sections: [
    {
      description: "",
      img: "",
      title: "",
    },
  ],
});

const close = () => {
  form.value.sections = [
    {
      description: "",
      img: "",
      title: "",
    },
  ];
  emit("close");
};

const error = ref({
  description: { state: false, message: "" },
  img: { state: false, message: "" },
  title: { state: false, message: "" },
});

const loading = ref(false);

const addSection = async () => {
  error.value.title = validateEmpty(form.value.title);
  error.value.description = validateEmpty(form.value.description);
  if (
    !error.value.title.state &&
    !error.value.description.state &&
    form.value.sections[form.value.sections.length - 1].title != "" &&
    form.value.sections[form.value.sections.length - 1].description != ""
  ) {
    form.value.sections.push({
      description: "",
      img: "",
      title: "",
    });
  }
};

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.container {
  max-height: 90vh;
  overflow-y: scroll;
}
</style>
