<template>
  <AppModal
    width="70%"
    :state="state"
    @close="close"
    :title="$t('create new product')"
  >
    <template #content>
      <div
        class="app-flex app-flex-column app-w-100 app-px-4 app-py-7 container"
      >
        <div
          class="bg-primary-transparent app-border-radius app-py-1 app-px-1 app-flex app-flex-column"
        >
          <span class="f-s-12 f-w-500 color-primary"
            >. {{ $t("create product guide 1") }}</span
          >
          <span class="f-s-12 f-w-500 color-primary"
            >. {{ $t("create product guide 2") }}</span
          >
          <span class="f-s-12 f-w-500 color-primary"
            >. {{ $t("create product guide 3") }}</span
          >
        </div>
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
        <AppInput
          height="35px"
          :label="$t('price')"
          v-model="form.price"
          type="number"
        />
        <AppInput
          height="35px"
          :label="$t('discount_')"
          v-model="form.discount"
          type="number"
        />
        <AppInput
          height="35px"
          :label="$t('price after discount')"
          v-model="form.price_after_discount"
          type="number"
        />
        <FileImage class="app-mt-5" @fileInformation="handleImage" />
        <div
          class="app-flex app-flex-wrap app-w-100 app-justify-center app-align-center app-mt-2"
        >
          <img
            v-for="(image, index) in images"
            :key="index"
            class="app-border-radius app-mx-2 app-my-1"
            v-if="images"
            :src="image"
            width="130"
            height="130"
            alt="image"
          />
        </div>
        <div class="app-mt-3">
          <AppButton
            :name="$t('select category')"
            background="bg-primary-transparent"
            color="color-primary"
            font-wight="f-w-600"
            @click="selecCategoryModal = true"
          />
        </div>
        <div
          v-if="selectedCategoryData"
          class="app-w-100 app-flex app-flex-column app-border-radius app-py-2 app-mt-2"
        >
          <span class="f-s-14 f-w-600">{{ $t("category name") }}</span>
          <div class="app-flex">
            <span class="f-s-14 f-w-600 app-px-1">{{
              selectedCategoryData.Title
            }}</span>
            <span
              class="f-s-14 f-w-600 app-flex app-px-1"
              v-for="(sub, index) in selectedCategoryData.subcategories"
              :key="index"
            >
              <span class="f-s-14 f-w-600 app-px-1">/</span>
              {{ sub.Title }}
            </span>
          </div>
        </div>
        <div class="app-mt-3">
          <AppButton
            :name="$t('select property')"
            background="bg-primary-transparent"
            color="color-primary"
            font-wight="f-w-600"
            @click="selectPropertyModal = true"
          />
        </div>
        <div
          class="app-flex app-mx-1 app-my-1"
          v-for="(data, index) in selectedProperttyPreview"
          :key="index"
        >
          <span class="f-s-14 f-w-600 app-px-1 app-py-1"
            >{{ data.Title }} :
          </span>
          <span
            class="f-s-14 f-w-600 app-px-1 app-py-1"
            v-for="(sub, index) in data.values"
            :key="index"
            >/ {{ sub.Value }}</span
          >
        </div>
        <div class="app-flex">
          <AppInput
            class="app-pl-2"
            height="35px"
            width="60px"
            :label="$t('attribute name')"
            v-model="inputAttributes.key"
            @keyup.enter="addAttribiute"
          />
          <AppInput
            class="app-pr-2"
            height="35px"
            width="60px"
            :label="$t('attribute value')"
            v-model="inputAttributes.value"
            @keyup.enter="addAttribiute"
          />
        </div>
        <div>
          <AppButton
            width="170px"
            class="app-mt-4"
            :name="$t('add Attribute')"
            background="bg-primary-transparent"
            color="color-primary"
            font-wight="f-w-600"
            :loading="loading"
            @click="addAttribiute"
          />
        </div>
        <div class="app-flex app-flex-wrap app-my-2">
          <div
            class="app-border app-border-radius app-px-2 app-py-1 app-flex app-pointer app-mx-1 app-mt-1"
            v-for="(attr, index) in form.attributes"
            @click="removeAttribute(index)"
          >
            <div class="color-white">
              <AppIconContent color="danger">
                <TrashIcon size="1x"></TrashIcon>
              </AppIconContent>
            </div>
            <span class="app-px-1 app-pt-1">{{ attr.key }} :</span>
            <span class="app-px-1 app-pt-1">{{ attr.value }}</span>
          </div>
        </div>

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
            background="bg-primary-transparent"
            color="color-primary"
            font-wight="f-w-600"
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
            <div class="color-white">
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
            background="bg-primary-100"
            :loading="loading"
            @click="submit"
          />
        </div>
      </div>
      <ModalsSelecCategory
        :state="selecCategoryModal"
        @close="selecCategoryModal = false"
        @selected="selectedCategory"
        :title="$t('select category')"
      />
      <ModalsSelectProperty
        :state="selectPropertyModal"
        @close="selectPropertyModal = false"
        @selected="selectedProperty"
        :title="$t('select property')"
      />
    </template>
    <template #icon>
      <AppIconContent color="bg-primary-100">
        <PlusIcon size="1.5x"></PlusIcon>
      </AppIconContent>
    </template>
  </AppModal>
</template>

<script setup>
import { useProductStore } from "~/store/admin/product";

const productStore = useProductStore();
const selecCategoryModal = ref(false);
const selectedCategoryData = ref(null);
const selectPropertyModal = ref(false);
const selectedProperttyPreview = ref([]);

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
  attributes: [],
  category_id: 0,
  description: "",
  discount: 0,
  media: [],
  name: "",
  price: 0,
  properties: [],
  tags: [],
  price_after_discount: 0,
});

const inputAttributes = ref({
  key: "",
  value: "",
});
const inputTag = ref("");

const close = () => {
  form.value = {
    attributes: [],
    category_id: 0,
    description: "",
    discount: 0,
    media: [],
    name: "",
    price: 0,
    properties: [],
    tags: [],
    price_after_discount: 0,
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

const addAttribiute = () => {
  if (inputAttributes.value.key && inputAttributes.value.value) {
    form.value.attributes.push(inputAttributes.value);
    inputAttributes.value = {
      key: "",
      value: "",
    };
  }
};

const removeAttribute = (index) => {
  form.value.attributes.splice(index, 1);
};

const selectedCategory = (data) => {
  selectedCategoryData.value = data;
  form.value.category_id = data.ID;
};

const images = ref([]);

const handleImage = (data) => {
  images.value.push(data.urlImage);
  form.value.media.push(data.fileName);
};

const selectedProperty = (data) => {
  const result = {
    id: data.ID,
    value_ids: [],
  };
  for (let key of data.values) {
    result.value_ids.push(key.ID);
  }
  const targetProperty = selectedProperttyPreview.value.find((item) => {
    return item.ID == data.ID;
  });
  if (targetProperty) {
    const index = selectedProperttyPreview.value.indexOf(targetProperty);
    selectedProperttyPreview.value[index] = data;
    form.value.properties = form.value.properties.filter((item) => {
      return item.id != targetProperty.ID;
    });
    form.value.properties.push(result);
  } else {
    selectedProperttyPreview.value.push(data);
    form.value.properties.push(result);
  }
};

const submit = () => {
  const product = {
    ...form.value,
    price: Number(form.value.price),
    discount: Number(form.value.discount),
    price_after_discount: Number(form.value.price_after_discount),
  };
  productStore.createProduct(product);
  close();
  console.log(product);
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
