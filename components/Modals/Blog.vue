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
          <img
            class="app-mt-2 app-border-radius"
            v-if="form.imageUrl"
            :src="form.imageUrl"
            width="500"
            alt="image"
          />
          <FileImage class="app-mt-5" @fileInformation="handleMainImage" />
          <AppInput
            height="35px"
            :label="$t('reading time')"
            v-model="form.reading_time"
            :error="error.reading_time.state"
            :message-error="error.reading_time.message"
          />
          <div>
            <AppButton
              class="app-mt-4"
              :name="$t('create section')"
              background="bg-primary-100"
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
            class="app-mt-8 f-s-16"
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
          <img
            class="app-mt-2 app-border-radius"
            v-if="section.imageUrl"
            :src="section.imageUrl"
            width="500"
            alt="image"
          />
          <FileImage
            @click="lastSectionIndexSelected = index"
            class="app-mt-5"
            @fileInformation="handleSectionImage"
          />
        </div>
        <div>
          <div>
            <AppInput
              height="35px"
              width="60px"
              :label="$t('tag')"
              v-model="inputTag"
              @keyup.enter="addTag"
            />
            <AppButton
              class="app-mt-4 app-w-20"
              :name="$t('addTag')"
              background="bg-primary-100"
              :loading="loading"
              @click="addTag"
            />
          </div>
          <div class="app-flex app-flex-wrap app-my-2">
            <div
              class="app-border app-border-radius app-px-2 app-py-1 app-flex app-pointer app-mx-1"
              v-for="(tag, index) in form.tags"
              @click="removeTag(index)"
            >
              <div class="color-white">
                <AppIconContent color="danger">
                  <TrashIcon size="1x"></TrashIcon>
                </AppIconContent>
              </div>
              <span class="app-px-2 app-pt-1">{{ tag }}</span>
            </div>
          </div>
        </div>
        <div>
          <AppButton
            class="app-mt-4"
            :name="$t('submit')"
            background="bg-primary-100"
            :loading="loading"
            @click="submit"
          />
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { useBlogsStore } from "~/store/admin/blogs";
import { validateEmpty } from "@/utils/validate.js";

const emit = defineEmits(["close"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: {},
  },
});

const blogsStore = useBlogsStore();
const loading = ref(false);
const lastSectionIndexSelected = ref(null);

const form = ref({
  description: "",
  img: "",
  title: "",
  reading_time: "",
  sections: [
    {
      description: "",
      img: "",
      title: "",
    },
  ],
  tags: [],
});
const inputTag = ref("");

const close = () => {
  form.value = {
    description: "",
    imageUrl: "",
    img: "",
    title: "",
    reading_time: "",
    sections: [
      {
        description: "",
        img: "",
        imageUrl: "",
        title: "",
      },
    ],
    tags: [],
  };
  emit("close");
};

const error = ref({
  description: { state: false, message: "" },
  img: { state: false, message: "" },
  title: { state: false, message: "" },
  reading_time: { state: false, message: "" },
});

const addSection = async () => {
  error.value.title = validateEmpty(form.value.title);
  error.value.description = validateEmpty(form.value.description);
  error.value.reading_time = validateNumber(form.value.reading_time);
  if (
    !error.value.title.state &&
    !error.value.description.state &&
    !error.value.reading_time.state &&
    form.value.sections[form.value.sections.length - 1].title != "" &&
    form.value.sections[form.value.sections.length - 1].description != ""
  ) {
    form.value.sections.push({
      description: "",
      img: "",
      imageUrl: "",
      title: "",
    });
  }
};

const addTag = () => {
  if (inputTag.value) {
    form.value.tags.push(inputTag.value);
    inputTag.value = "";
  }
};

const removeTag = (index) => {
  form.value.tags.splice(index, 1);
};

const handleMainImage = (event) => {
  form.value.img = event.fileName;
  form.value.imageUrl = event.urlImage;
};

const handleSectionImage = (event, index) => {
  console.log(event);
  console.log(lastSectionIndexSelected.value);
  form.value.sections[lastSectionIndexSelected.value].img = event.fileName;
  form.value.sections[lastSectionIndexSelected.value].imageUrl = event.urlImage;
  console.log(form.value);
};

const submit = async () => {
  loading.value = true;
  await blogsStore.createBlog(form.value);
  loading.value = false;
  close();
};
</script>

<style scoped>
.container {
  max-height: 90vh;
  overflow-y: scroll;
}
.tags-container {
  max-height: 90vh;
  overflow-y: scroll;
}
</style>
