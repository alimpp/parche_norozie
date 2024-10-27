<template>
  <div class="app-w-100">
    <AppCard class="app-mt-3">
      <template #content>
        <div class="app-flex app-align-center app-px-2 app-py-4">
          <div class="app-w-50">
            <AppBeardCrumb :route="$t('dashboard')" :child="$t('customers')" />
          </div>
          <div class="app-w-50 app-flex app-justify-end">
            <AppButton
              :name="$t('search') + ' ' + $t('customers')"
              background="app-bg-primary"
              height="35px"
              @click="openModal"
            />
          </div>
        </div>
      </template>
    </AppCard>
    <ModalsCustomers :state="modalState" @close="modalState = false"/>
    <AppCard
      v-if="customersLoading"
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

    <CardsCustomers
      v-else
      v-for="customer in customersDataSource"
      :data="customer"
      class="app-mt-3 fade_animations"
    />
  </div>
</template>
<script setup>
import { useCustomersStore } from "@/store/admin/customers/index";

const customersStore = useCustomersStore();

const customersDataSource = computed(() => {
  return customersStore.customers;
});

const customersLoading = computed(() => {
  return customersStore.loading;
});

definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});

const modalState = ref(false);
const openModal = () => {
  modalState.value = true;
};
</script>

