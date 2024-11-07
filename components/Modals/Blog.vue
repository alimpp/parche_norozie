<template>
  <AppModal
    width="70%"
    :state="state"
    @close="close"
    :title="$t('create new blog')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 app-py-7 container">
        <div
          class="bg-primary-transparent app-border-radius app-py-1 app-px-1 app-flex app-flex-column"
        >
          <span class="f-s-12 f-w-500 color-primary"
            >. {{ $t("create blog guide 1") }}</span
          >
          <span class="f-s-12 f-w-500 color-primary"
            >. {{ $t("create blog guide 2") }}</span
          >
          <span class="f-s-12 f-w-500 color-primary"
            >. {{ $t("create blog guide 3") }}</span
          >
        </div>
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
          <div class="app-w-100 app-flex">
            <div
              class="app-w-50 app-flex app-justify-center app-align-center app-px-2"
              v-if="form.imageUrl"
            >
              <img
                class="app-mt-3 app-border-radius"
                :src="form.imageUrl"
                width="500"
                alt="image"
              />
            </div>
            <div class="app-w-100" :class="{ 'app-w-50': form.imageUrl }">
              <FileImage class="app-mt-5" @fileInformation="handleMainImage" />
            </div>
          </div>
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
              background="bg-primary-transparent"
              color="color-primary"
              font-wight="f-w-600"
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
          <div class="app-w-100 app-flex">
            <div
              class="app-w-50 app-flex app-justify-center app-align-center app-px-2"
              v-if="section.imageUrl"
            >
              <img
                class="app-mt-2 app-border-radius"
                :src="section.imageUrl"
                width="500"
                alt="image"
              />
            </div>
            <div class="app-w-100" :class="{ 'app-w-50': section.imageUrl }">
              <FileImage
                @click="lastSectionIndexSelected = index"
                class="app-mt-5"
                @fileInformation="handleSectionImage"
              />
            </div>
          </div>
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
              background="bg-primary-transparent"
              color="color-primary"
              font-wight="f-w-600"
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
    <template #icon>
      <AppIconContent color="bg-primary-100">
        <PlusIcon size="1.5x"></PlusIcon>
      </AppIconContent>
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
