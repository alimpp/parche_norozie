<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50">
          <AppBeardCrumb :route="$t('dashboard')" :child="$t('property')" />
        </div>
        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span class="app-pointer app-mx-1" @click="getAllDataSourc">
            <AppIconContent color="app-bg-wariningapp-bg-green"
              ><RefreshCcwIcon size="1x"></RefreshCcwIcon
            ></AppIconContent>
          </span>
          <span class="app-pointer app-mx-1" @click="openSearch">
            <AppIconContent color="app-bg-info"
              ><SearchIcon size="1x"></SearchIcon
            ></AppIconContent>
          </span>
          <span class="app-pointer app-mx-1" @click="openPropertyModal">
            <AppIconContent color="app-bg-primary"
              ><PlusIcon size="1x"></PlusIcon
            ></AppIconContent>
          </span>
        </div>
      </div>
    </template>
  </AppCard>
  <AppLoading v-if="loading" height="70dvh" />
  <div v-else>
    <AppEmptyContent v-if="dataSource.length == 0" height="70dvh" />
    <CardsProperty
      v-else
      v-for="(data, index) in dataSource"
      :key="index"
      :data="data"
      class="app-mt-2"
      @deleteProperty="deleteProperty"
    />
  </div>
  <ModalsProperty
    :state="propertyModalState"
    @close="propertyModalState = false"
  />
  <ModalsSearch
    :state="searchState"
    @close="searchState = false"
    @search="searchData"
  />
</template>

<script setup>
import { usePropertyStore } from "~/store/admin/property";

const propertyStore = usePropertyStore();

const dataSource = computed(() => {
  return propertyStore.properties;
});

const loading = computed(() => {
  return propertyStore.loading;
});

definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});

const propertyModalState = ref(false);
const openPropertyModal = () => {
  propertyModalState.value = true;
};

const deleteProperty = async (data) => {
  await propertyStore.removeProperty(data.ID);
};

const searchState = ref(false);

const openSearch = () => {
  searchState.value = true;
};

const searchData = async (param) => {
  await propertyStore.searchProperty(param);
};

const getAllDataSourc = () => {
  propertyStore.propertyList();
};

onMounted(() => {
  propertyStore.propertyList();
});
</script>
