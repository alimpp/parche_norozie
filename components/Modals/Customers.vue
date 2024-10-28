<template>
  <div>
    <AppModal
      width="400px"
      :state="state"
      @close="emit('close')"
      :title="$t('filter by')"
    >
      <template #content>
        <div class="app-flex app-w-100 app-px-2 app-py-4">
          <div class="app-w-100">
            <AppInput
              height="35px"
              :label="$t('phoneNumber')"
              v-model="filter.phone"
              @keyup.enter="search"
            />
            <AppInput
              height="35px"
              :label="$t('name')"
              class=""
              v-model="filter.name"
              @keyup.enter="search"
            />
            <AppInput
              height="35px"
              :label="$t('family name')"
              v-model="filter.lastname"
              @keyup.enter="search"
            />
            <AppInput
              height="35px"
              :label="$t('email address')"
              class=""
              v-model="filter.email"
              @keyup.enter="search"
            />
            <AppInput
              height="35px"
              :label="$t('id card')"
              v-model="filter.id_card_number"
              @keyup.enter="search"
            />
            <AppButton
              class="app-mt-4"
              :name="$t('search')"
              background="app-bg-primary"
              height="32px"
              fontSize="app-font-size-12"
              @click="search"
            />
          </div>
        </div>
      </template>
    </AppModal>
  </div>
</template>

<script setup>
import { useCustomersStore } from "@/store/admin/customers/index";

const customersStore = useCustomersStore();

const emit = defineEmits(["close"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
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
  emit("close");
  filter.value = {
    name: "",
    lastname: "",
    id_card_number: "",
    email: "",
    phone: "",
    job: "",
  };
};
</script>
