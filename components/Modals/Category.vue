<template>
  <AppModal
    width="380px"
    :state="state"
    @close="close"
    :title="$t('create category')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 app-py-2">
        <div class="app-flex app-flex-column app-w-100">
          <AppInput
            height="35px"
            :label="$t('title')"
            v-model="form.title"
            @keyup.enter="submit"
          />
        </div>
        <div class="app-flex app-flex-column app-w-100">
          <AppInput
            height="35px"
            :label="$t('sub catgory')"
            v-model="subCategory.Title"
            @keyup.enter="submit"
            :disabled="true"
          />
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
        <span
          v-if="categoryList.length != 0"
          class="app-font-size-14 app-font-weight-600 app-mt-5"
          >{{ $t("category") }}</span
        >
        <div class="app-w-100 app-flex app-flex-column container">
          <span
            @click="selectSubCategory(data)"
            class="app-flex app-pointer app-py-2 app-border app-border-radius app-mb-2 app-px-2 app-font-size-14 app-font-weight-600"
            :class="{ 'active-style': data.ID == subCategory.ID }"
            v-for="(data, index) in categoryList"
            :key="index"
            >{{ data.Title }}</span
          >
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { useCategoryStore } from "~/store/admin/category";
const categoryStore = useCategoryStore();

const emit = defineEmits(["close"]);

const subCategory = ref({ Title: "" });

const categoryList = computed(() => {
  return categoryStore.categories;
});

const form = ref({
  parent_id: null,
  title: "",
});

const loading = ref(false);

const selectSubCategory = (data) => {
  if (data.ID == subCategory.value.ID) {
    subCategory.value = { Title: "" };
  } else {
    subCategory.value = data;
  }
};

const close = () => {
  form.value = {
    parent_id: null,
    title: "",
  };
  subCategory.value = { Title: "" };
  emit("close");
};

const submit = async () => {
  if (form.value.title) {
    loading.value = true;
    if (subCategory.value.ID) {
      form.value.parent_id = subCategory.value.ID;
    }
    await categoryStore.createCategory(form.value);
    loading.value = false;
    close();
  }
};
</script>

<style scoped>
.container {
  max-height: 50dvh;
  overflow-y: scroll;
}

.active-style {
  border: 1px solid #98989835;
  background: #9898985c;
  border-radius: 5px;
  cursor: pointer;
  transition: 1s;
}
</style>
