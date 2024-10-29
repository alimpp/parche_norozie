<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50">
          <AppBeardCrumb :route="$t('dashboard')" :child="$t('property')" />
        </div>
        <div class="app-w-50 app-flex app-justify-end">
          <AppButton
            :name="$t('create property')"
            background="app-bg-primary"
            height="32px"
            fontSize="app-font-size-12"
            @click="openPropertyModal"
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
  <CardsProperty
    v-for="(data, index) in dataSource"
    :key="index"
    :data="data"
    class="app-mt-2"
    @deleteProperty="deleteProperty"
  />
  <ModalsProperty
    :state="propertyModalState"
    @close="propertyModalState = false"
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

const deleteProperty = (data) => {
  propertyStore.removeProperty(data.ID);
};

onMounted(() => {
  propertyStore.propertyList();
});
</script>
