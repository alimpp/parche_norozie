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
            background="app-bg-primary"
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
            class="deactive-style"
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

.deactive-style {
  padding: 5px 5px;
  border: 1px solid #7b7be33c;
  background: #7b7be30e;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 1px;
  transition: 0.5s;
}

.active-style {
  padding: 5px 5px;
  border: 1px solid #7b7be368;
  background: #7b7be3c1;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 1px;
  transition: 0.5s;
}
</style>
