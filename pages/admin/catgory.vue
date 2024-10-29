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
            height="32px"
            fontSize="app-font-size-12"
            @click="openCategoryModal"
          />
        </div>
      </div>
    </template>
  </AppCard>
  <div>
    <div v-if="loading" class="app-flex app-flex-column app-px-2 app-py-2">
      <AppLoading height="70vh" />
    </div>
    <div
      v-if="dataSource.length == 0"
      class="app-flex app-h-70 app-align-center app-justify-center"
    >
      <AppEmptyContent />
    </div>
  </div>
  <CardsCategory
    v-for="(data, index) in dataSource"
    :key="index"
    :data="data"
    class="app-mt-2"
    @deleteCategory="deleteCategory"
  />

  <ModalsCategory
    :state="categoryModalState"
    @close="categoryModalState = false"
  />
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

const loading = computed(() => {
  return categoryStore.loading;
});

const categoryModalState = ref(false);
const openCategoryModal = () => {
  categoryModalState.value = true;
};

const deleteCategory = async (data) => {
  await categoryStore.removeCategory(data.ID);
};

onMounted(() => {
  categoryStore.categoryList();
});
</script>
