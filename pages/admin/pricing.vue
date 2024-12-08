<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50 app-flex app-flex-column">
          <span class="f-s-16 f-w-600">
            {{ $t("pricing") }}
          </span>
          <span class="f-s-12 f-w-500 color-gray">
            {{ $t("pricing admin title") }}
          </span>
        </div>
      </div>
    </template>
  </AppCard>
  <AppLoading height="70dvh" v-if="loading" />
  <div v-else>
    <AppEmptyContent v-if="dataSource.length == 0" height="70dvh" />
    <AppCard class="app-mt-3 app-py-3" v-else>
      <template #content>
        <TablePricing :items="dataSource" />
      </template>
    </AppCard>
  </div>
  <div>
    <ModalsWarehouse :state="modalState" @close="modalState = false" />
  </div>
</template>

<script setup>
import { usePricingStore } from "~/store/admin/pricing";

const pricingStore = usePricingStore();

const dataSource = computed(() => {
  return pricingStore.pricingList;
});

const loading = computed(() => {
  return pricingStore.loading;
});


definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});

onMounted(async () => {
  await pricingStore.getPricingList("");
  console.log(pricingStore.pricingList);
});
</script>
