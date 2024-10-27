<template>
  <div class="app-w-100">
    <AppCard class="app-mt-3">
      <template #content>
        <div class="app-flex app-align-center app-px-2 app-py-4">
          <div class="app-w-50">
            <AppBeardCrumb :route="$t('dashboard')" :child="$t('costumers')" />
          </div>
          <div class="app-w-50 app-flex app-justify-end">
            <AppButton
              :name="$t('search') + ' ' + $t('costumers')"
              background="app-bg-primary"
              height="35px"
              @click="openModal"
            />
          </div>
          <div>
            <AppModal
              width="90%"
              :state="ModalState"
              @close="ModalState = false"
              :title="$t('filter by')"
            >
              <template #content>
                <div class="app-flex app-flex-column app-px-4 app-py-8">
                  <div class="app-flex app-w-100">
                    <AppInput
                      height="35px"
                      :label="$t('phoneNumber')"
                      v-model="filter.phone"
                    />
                    <AppInput
                      height="35px"
                      :label="$t('name')"
                      class="app-mx-2"
                      v-model="filter.name"
                    />
                    <AppInput
                      height="35px"
                      :label="$t('family name')"
                      v-model="filter.lastname"
                    />
                    <AppInput
                      height="35px"
                      :label="$t('email address')"
                      class="app-mx-2"
                      v-model="filter.email"
                    />
                    <AppInput
                      height="35px"
                      :label="$t('id card')"
                      v-model="filter.id_card_number"
                    />
                    <AppButton
                      class="app-mx-2 app-mt-11"
                      :name="$t('search')"
                      background="app-bg-primary"
                      icon="search"
                      height="35px"
                      @click="search"
                    />
                  </div>
                </div>
              </template>
            </AppModal>
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

const filter = ref({
  name: "",
  lastname: "",
  id_card_number: "",
  email: "",
  phone: "",
  job: "",
});

const search = () => {
  customersStore.getAllCustomers(filter.value);
};

const ModalState = ref(false);
const openModal = () => {
  ModalState.value = true;
};

onMounted(async () => {
  await customersStore.getAllCustomers(filter.value);
});
</script>

<style scoped></style>
