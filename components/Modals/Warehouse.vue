<template>
  <AppModal
    width="70%"
    :state="state"
    @close="emit('close')"
    :title="$t('product list')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 py-4 container">
        <div
          class="bg-primary-transparent app-border-radius app-py-1 app-px-1 app-flex app-flex-column"
        >
          <span class="f-s-12 f-w-500 color-primary"
            >. {{ $t("warehouse modal guide 1") }}</span
          >
        </div>
        <div class="">
          <AppLoading height="70dvh" v-if="loading" />
          <div v-else>
            <AppEmptyContent v-if="dataSource.length == 0" height="70dvh" />
            <CardsWarehouseModal
              v-else
              v-for="data in dataSource"
              :data="data"
              class="app-mt-3 fade_animations"
              @selectedId="selected"
            />
          </div>
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { useWarehouseStore } from "~/store/admin/warehouse";

const warehouseStore = useWarehouseStore();
const dataSource = computed(() => {
  return warehouseStore.productsWarehouseList;
});
const loading = computed(() => {
  return warehouseStore.loading;
});

const emit = defineEmits(["close"]);

const selected = async () => {
  emit("close");
};
</script>

<style scoped>
.container {
  max-height: 80vh;
  overflow-y: scroll;
}
</style>
