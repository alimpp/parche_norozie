<template>
  <div class="app-w-100">
    <div class="app-flex app-mt-3">
      <AppDivider :name="$t('dashboard')" />
      <span class="app-mx-2">/</span>
      <AppDivider :name="$t('costumers')" />
    </div>

    <AppAdminCard
      v-if="costumersLoading"
      v-for="n in 20"
      class="app-mt-3 fade_animations"
    >
      <template #content>
        <div class="app-flex app-flex-column app-px-2 app-py-2">
          <AppSkelton width="300px" />
          <AppSkelton width="150px" />
          <AppSkelton width="350px" />
          <AppSkelton width="250px" />
          <AppSkelton width="210px" />
        </div>
      </template>
    </AppAdminCard>

    <CardsCostumers
      v-else
      v-for="costumer in costumersDataSource"
      :data="costumer"
      class="app-mt-3 fade_animations"
    />
  </div>
</template>
<script setup>
import { useCustomersStore } from "@/store/admin/customers/index";

const customersStore = useCustomersStore();

const costumersDataSource = computed(() => {
  return customersStore.customers;
});

const costumersLoading = computed(() => {
  return customersStore.loading;
});

definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});

onMounted(async () => {
  await customersStore.getAllCustomers();
});
</script>

<style scoped></style>
