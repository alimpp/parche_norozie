<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50 app-flex app-flex-column">
          <span class="f-s--16 f-w-600">
            {{ $t("category") }}
          </span>
          <span class="f-s--12 f-w-500 app-color-gray">
            {{ $t("category admin title") }}
          </span>
        </div>
        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span class="app-pointer app-mx-1" @click="getAllDataSourc">
            <v-tooltip :text="$t('refresh')" location="bottom">
              <template v-slot:activator="{ props }">
                <AppIconContent color="bg-primary-100" v-bind="props"
                  ><RefreshCcwIcon size="1x"></RefreshCcwIcon
                ></AppIconContent>
              </template>
            </v-tooltip>
          </span>
          <span class="app-pointer app-mx-1" @click="openSearch">
            <v-tooltip :text="$t('search')" location="bottom">
              <template v-slot:activator="{ props }">
                <AppIconContent color="bg-primary-100" v-bind="props"
                  ><SearchIcon size="1x"></SearchIcon
                ></AppIconContent>
              </template>
            </v-tooltip>
          </span>
          <span class="app-pointer app-mx-1" @click="openCategoryModal">
            <v-tooltip :text="$t('create')" location="bottom">
              <template v-slot:activator="{ props }">
                <AppIconContent color="bg-primary-100" v-bind="props"
                  ><PlusIcon size="1x"></PlusIcon
                ></AppIconContent>
              </template>
            </v-tooltip>
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
