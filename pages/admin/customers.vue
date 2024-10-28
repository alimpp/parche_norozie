<template>
  <div class="app-flex app-flex-column app-w-100">
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
    <ModalsCustomers :state="modalState" @close="modalState = false" />
    <AppCard
      v-if="customersLoading"
      v-for="n in 20"
      class="app-mt-3 fade_animations"
    >
      <template #content>
        <div class="app-flex app-flex-column app-px-2 app-py-2">
          <AppLoading height="70vh"/>
        </div>
      </template>
    </AppCard>

    <div v-else>
      <CardsCustomers
        v-for="customer in customersDataSource"
        :data="customer"
        class="app-mt-3 fade_animations"
      />
      <div
        v-if="customersDataSource.length == 0"
        class="app-flex app-h-70 app-align-center app-justify-center"
      >
        <AppEmptyContent />
      </div>
    </div>
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
