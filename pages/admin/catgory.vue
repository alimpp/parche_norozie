<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50">
          <AppBeardCrumb :route="$t('dashboard')" :child="$t('category')" />
        </div>
        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span class="app-pointer app-mt-3" @click="getAllDataSourc">
            <RefreshCcwIcon size="1x"></RefreshCcwIcon>
          </span>
          <AppButton
            class="app-mx-2"
            :name="$t('search')"
            background="app-bg-primary"
            height="32px"
            fontSize="app-font-size-12"
            @click="openSearch"
          />
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
