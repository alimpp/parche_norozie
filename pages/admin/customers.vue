<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50">
          <AppBeardCrumb :route="$t('dashboard')" :child="$t('customers')" />
        </div>
        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span class="app-pointer app-mx-1" @click="getAllCustomers">
            <AppIconContent color="app-bg-green"
              ><RefreshCcwIcon size="1x"></RefreshCcwIcon
            ></AppIconContent>
          </span>
          <span class="app-pointer app-mx-1" @click="openModal">
            <AppIconContent color="app-bg-info"
              ><SearchIcon size="1x"></SearchIcon
            ></AppIconContent>
          </span>
        </div>
      </div>
    </template>
  </AppCard>
  <AppLoading height="70dvh" v-if="loading" />
  <div v-else>
    <AppEmptyContent v-if="dataSource.length == 0" height="70dvh" />
    <CardsCustomers
      v-else
      v-for="customer in dataSource"
      :data="customer"
      class="app-mt-3 fade_animations"
    />
  </div>
  <ModalsCustomers :state="modalState" @close="modalState = false" />
</template>

<script setup>
import { useCustomersStore } from "@/store/admin/customers/index";

const customersStore = useCustomersStore();

const dataSource = computed(() => {
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
