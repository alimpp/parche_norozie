<template>
  <div class="app-flex app-flex-column app-w-100">
    <AppCard class="app-mt-3">
      <template #content>
        <div class="app-flex app-align-center app-px-2 app-py-4">
          <div class="app-w-50">
            <AppBeardCrumb :route="$t('dashboard')" :child="$t('customers')" />
          </div>
          <div class="app-w-50 app-flex app-justify-end app-align-center">
            <span
              class="app-mx-4 app-pointer app-mt-3"
              @click="getAllCustomers"
            >
              <RefreshCcwIcon size="1x"></RefreshCcwIcon>
            </span>
            <AppButton
              :name="$t('search') + ' ' + $t('customers')"
              background="app-bg-primary"
              height="32px"
              fontSize="app-font-size-12"
              @click="openModal"
            />
          </div>
        </div>
      </template>
    </AppCard>
    <ModalsCustomers :state="modalState" @close="modalState = false" />
    <div
      v-if="loading"
      class="app-flex app-flex-column app-px-2 app-py-2"
    >
      <AppLoading height="70vh" />
    </div>
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

const loading = computed(() => {
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

const getAllCustomers = async () => {
  filter.value = {
    name: "",
    lastname: "",
    id_card_number: "",
    email: "",
    phone: "",
    job: "",
  };
  await customersStore.getAllCustomers(filter.value);
};

const filter = ref({
  name: "",
  lastname: "",
  id_card_number: "",
  email: "",
  phone: "",
  job: "",
});

onMounted(async () => {
  await customersStore.getAllCustomers(filter.value);
});
</script>
