<template>
  <AppModal
    width="90%"
    :state="state"
    @close="close"
    :title="$t('create new product')"
  >
    <template #content>
      <div
        class="app-flex app-flex-column app-w-100 app-px-4 app-py-7 container"
      >
        <AppInput
          height="35px"
          :label="$t('product name')"
          v-model="form.name"
          :error="error.name.state"
          :message-error="error.name.message"
        />
        <AppTextarea
          :label="$t('descriptions')"
          v-model="form.description"
          :error="error.description.state"
          :message-error="error.description.message"
        />
        <AppInput height="35px" :label="$t('price')" v-model="form.price" />
        <AppInput
          height="35px"
          :label="$t('discount_')"
          v-model="form.discount"
        />
        <AppInput
          height="35px"
          width="60px"
          :label="$t('tag')"
          v-model="inputTag"
          @keyup.enter="addTag"
        />
        <AppButton
          width="125px"
          class="app-mt-4 app-w-20"
          :name="$t('addTag')"
          background="app-bg-primary"
          :loading="loading"
          @click="addTag"
        />
        <div class="app-flex app-flex-wrap app-my-2">
          <div
            class="app-border app-border-radius app-px-2 app-py-1 app-flex app-pointer app-mx-1"
            v-for="(tag, index) in form.tags"
            @click="removeTag(index)"
          >
            <div class="app-color-white">
              <AppIconContent color="danger">
                <TrashIcon size="1x"></TrashIcon>
              </AppIconContent>
            </div>
            <span class="app-px-2 app-pt-1">{{ tag }}</span>
          </div>
        </div>
        <FileImage class="app-mt-5" />
        <AppButton
          width="50px"
          class="app-mt-4"
          :name="$t('submit')"
          background="app-bg-primary"
          :loading="loading"
          @click="submit"
        />
      </div>
    </template>
  </AppModal>
</template>

<script setup>
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

const form = ref({
  name: "",
  description: "",
  category_id: null,
  price: 0,
  discount: 0,
  property_ids: [],
  media: [],
  tags: [],
  attributes: {},
});
const inputTag = ref("");

const close = () => {
  form.value = {
    name: "",
    description: "",
    price: null,
    category_id: null,
    discount: null,
    property_ids: [],
    media: [],
    tags: [],
    attributes: {},
  };
  emit("close");
};

const error = ref({
  description: { state: false, message: "" },
  name: { state: false, message: "" },
});

const loading = ref(false);

const addTag = () => {
  if (inputTag.value) {
    form.value.tags.push(inputTag.value);
    inputTag.value = "";
  }
};

const removeTag = (index) => {
  form.value.tags.splice(index, 1);
};
const submit = async () => {
  await close();
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
