<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50">
          <AppBeardCrumb
            :route="$t('dashboard')"
            :child="$t('property value')"
          />
        </div>
        <div class="app-w-50 app-flex app-justify-end">
          <AppButton
            :name="$t('create property value')"
            background="app-bg-primary"
            height="32px"
            fontSize="app-font-size-12"
            @click="openPropertValueModal"
          />
        </div>
      </div>
    </template>
  </AppCard>
  <AppLoading v-if="loading" height="70dvh" />
  <div v-else>
    <AppEmptyContent v-if="dataSource.length == 0" height="70dvh" />
    <CardsPropertyValue
      v-else
      v-for="(data, index) in dataSource"
      :key="index"
      :data="data"
      class="app-mt-2"
      @deleteProperty="deleteProperty"
    />
  </div>
  <ModalsPropertyValue
    :state="propertyValueModalState"
    @close="propertyValueModalState = false"
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

const propertyValueModalState = ref(false);
const openPropertValueModal = () => {
  propertyValueModalState.value = true;
};

const deleteProperty = async (id) => {
  await propertyStore.removePropertyValue(id);
};

onMounted(() => {
  propertyStore.propertyList();
});
</script>
