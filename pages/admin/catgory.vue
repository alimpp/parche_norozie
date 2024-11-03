<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50">
          <AppBeardCrumb :route="$t('dashboard')" :child="$t('category')" />
        </div>
        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span class="app-pointer app-mx-1" @click="getAllDataSourc">
            <AppIconContent color="app-bg-refresh"
              ><RefreshCcwIcon size="1x"></RefreshCcwIcon
            ></AppIconContent>
          </span>
          <span class="app-pointer app-mx-1" @click="openSearch">
            <AppIconContent color="app-bg-search"><SearchIcon size="1x"></SearchIcon></AppIconContent>
          </span>
          <span class="app-pointer app-mx-1" @click="openCategoryModal">
            <AppIconContent color="app-bg-primary"><PlusIcon size="1x"></PlusIcon></AppIconContent>
          </span>
        </div>
      </div>
    </template>
  </AppCard>
  <AppLoading height="70dvh" v-if="loading" />
  <div v-else>
    <AppEmptyContent v-if="dataSource.length == 0" height="70dvh" />
    <CardsCategory
      v-else
      v-for="(data, index) in dataSource"
      :key="index"
      :data="data"
      class="app-mt-2"
      @deleteCategory="deleteCategory"
    />
  </div>
  <ModalsCategory
    :state="categoryModalState"
    @close="categoryModalState = false"
  />
  <ModalsSearch
    :state="searchState"
    @close="searchState = false"
    @search="searchData"
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

const searchState = ref(false);

const openSearch = () => {
  searchState.value = true;
};

const searchData = async (param) => {
  await categoryStore.searchCategory(param);
};

const getAllDataSourc = () => {
  categoryStore.categoryList();
};

onMounted(() => {
  categoryStore.categoryList();
});
</script>
