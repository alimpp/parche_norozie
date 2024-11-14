<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50 app-flex app-flex-column">
          <span class="f-s-16 f-w-600">
            {{ $t("warehouse") }}
          </span>
          <span class="f-s-12 f-w-500 color-gray">
            {{ $t("warehouse admin title") }}
          </span>
        </div>
        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span class="app-pointer app-mx-1" @click="openModal">
            <v-tooltip :text="$t('manage products')" location="bottom">
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
    <CardsWarehouse
      v-else
      v-for="data in dataSource"
      :data="data"
      class="app-mt-3 fade_animations"
    />
  </div>
  <div>
    <ModalsWarehouse :state="modalState" @close="modalState = false" />
  </div>
</template>

<script setup>
import { useWarehouseStore } from "~/store/admin/warehouse";

const warehouseStore = useWarehouseStore();
const dataSource = computed(() => {
  return warehouseStore.warehouseList;
});
const loading = computed(() => {
  return warehouseStore.loading;
});

const modalState = ref(false);

const openModal = () => {
  modalState.value = true;
};

definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});

onMounted( () => {
   warehouseStore.storageList();
});
</script>
