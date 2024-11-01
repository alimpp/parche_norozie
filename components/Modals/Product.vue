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
        <div class="app-mt-3">
          <AppButton
            :name="$t('select category')"
            background="app-bg-primary"
            @click="selecCategoryModal = true"
          />
        </div>
        <div
          v-if="selectedCategoryData"
          class="app-w-100 app-flex app-flex-column app-border-radius app-py-2 app-mt-2"
        >
          <span class="app-font-size-14 app-font-weight-600">{{
            $t("category name")
          }}</span>
          <div class="app-flex">
            <span class="app-font-size-14 app-font-weight-600 app-px-1">{{
              selectedCategoryData.Title
            }}</span>
            <span
              class="app-font-size-14 app-font-weight-600 app-flex app-px-1"
              v-for="(sub, index) in selectedCategoryData.subcategories"
              :key="index"
            >
              <span class="app-font-size-14 app-font-weight-600 app-px-1"
                >/</span
              >
              {{ sub.Title }}
            </span>
          </div>
        </div>
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
        <div>
          <AppButton
            width="125px"
            class="app-mt-4 app-w-20"
            :name="$t('addTag')"
            background="app-bg-primary"
            :loading="loading"
            @click="addTag"
          />
        </div>
        <div class="app-flex app-flex-wrap app-my-2">
          <div
            class="app-border app-border-radius app-px-2 app-py-1 app-flex app-pointer app-mx-1 app-mt-1"
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
        <div>
          <AppButton
            width="100px"
            class="app-mt-4"
            :name="$t('submit')"
            background="app-bg-primary"
            :loading="loading"
            @click="submit"
          />
        </div>
      </div>
      <SelecCategory
        :state="selecCategoryModal"
        @close="selecCategoryModal = false"
        @selected="selectedCategory"
        :title="$t('select category')"
      />
    </template>
  </AppModal>
</template>

<script setup>
import SelecCategory from "./SelecCategory.vue";

const emit = defineEmits(["close"]);

const selecCategoryModal = ref(false);
const selectedCategoryData = ref(null);

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
  attributes: [],
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

const selectedCategory = (data) => {
  selectedCategoryData.value = data;
};

const submit = async () => {
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
