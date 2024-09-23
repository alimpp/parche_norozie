<template>
  <div class="app-w-100">
    <AppCard class="app-mt-3">
      <template #content>
        <div class="app-flex app-flex-column app-px-2 app-py-2">
          <AppBeardCrumb :route="$t('dashboard')" :child="$t('costumers')" />
          <div class="app-flex app-w-100">
            <AppInput height="35px" :label="$t('phoneNumber')" />
            <AppInput height="35px" :label="$t('name')" class="app-mx-2" />
            <AppInput height="35px" :label="$t('family name')" />
            <AppInput
              height="35px"
              :label="$t('email address')"
              class="app-mx-2"
            />
            <AppInput height="35px" :label="$t('id card')" />
            <AppButton
              class="app-mx-2 app-mt-11"
              :name="$t('search')"
              background="app-bg-primary"
              icon="search"
              height="35px"
            />
          </div>
        </div>
      </template>
    </AppCard>

    <AppCard
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
          <AppSkelton width="150px" />
        </div>
      </template>
    </AppCard>

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
