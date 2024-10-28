<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50">
          <AppBeardCrumb :route="$t('dashboard')" :child="$t('category')" />
        </div>
        <div class="app-w-50 app-flex app-justify-end">
          <AppButton
            :name="$t('create category')"
            background="app-bg-primary"
            height="35px"
            width="150px"
            @click="openCategoryModal"
            class="app-mx-4"
          />
        </div>
      </div>
    </template>
  </AppCard>
  <ModalsCategory
    :state="categoryModalState"
    @close="categoryModalState = false"
  />
  <span>test delete</span>
  <div class="app-pointer app-flex" v-for="(data, index) in dataSource">
    <div class="app-pt-1" @click="deleteCategory(data)">
      <XIcon size="1.0x" class="app-pointer"></XIcon>
    </div>
    /
    <span>{{ data.ID }} {{ data.Title }}</span>
  </div>
</template>
<script setup>
import { useCategoryStore } from "~/store/admin/category";

const categoryStore = useCategoryStore();

definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});

const dataSource = computed(() => {
  return categoryStore.categories;
});

const deleteCategory = async (data) => {
  await categoryStore.deleteCategory(data.ID);
};

const categoryModalState = ref(false);
const openCategoryModal = () => {
  categoryModalState.value = true;
};

onMounted(() => {
  categoryStore.categoryList();
});
</script>
