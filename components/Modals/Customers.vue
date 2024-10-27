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
            />
            <AppInput
              height="35px"
              :label="$t('name')"
              class=""
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
              class=""
              v-model="filter.email"
            />
            <AppInput
              height="35px"
              :label="$t('id card')"
              v-model="filter.id_card_number"
            />
            <AppButton
              class="app-mt-4"
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
};

onMounted(async () => {
  await customersStore.getAllCustomers(filter.value);
});
</script>
