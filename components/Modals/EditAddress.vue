<template>
  <AppModal
    width="90%"
    :state="state"
    @close="emit('close')"
    :title="$t('edit address')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 app-py-8">
        <AppInput
          :label="$t('name')"
          v-model="form.name"
          :error="error.name.state"
          :message-error="error.name.message"
        />
        <AppInput
          :label="$t('address')"
          v-model="form.address"
          :error="error.address.state"
          :message-error="error.address.message"
        />
        <AppInput
          :label="$t('postal code')"
          v-model="form.postal_code"
          :error="error.postal_code.state"
          :message-error="error.postal_code.message"
        />
        <AppButton
          class="app-mt-4"
          :name="$t('submit')"
          :loading="loading"
          background="bg-primary-100"
          width="120px"
          height="35px"
          @click="edit"
        />
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { useAddressStore } from "@/store/address/index";
import {
  ValidateName,
  ValidateAddress,
  validatepostalCode,
} from "@/utils/validate.js";

const adddressStore = useAddressStore();
const emit = defineEmits(["close"]);

const form = ref({ address: "", name: "", postal_code: "", uuid: "" });
const error = ref({
  name: { state: false, message: "" },
  address: { state: false, message: "" },
  postal_code: { state: false, message: "" },
});
const loading = ref(false);

const edit = async () => {
  error.value.name = ValidateName(form.value.name);
  error.value.address = ValidateAddress(form.value.address);
  error.value.postal_code = validatepostalCode(form.value.postal_code);
  if (
    !error.value.postal_code.state &&
    !error.value.name.state &&
    !error.value.address.state
  ) {
    loading.value = true;
    await adddressStore
      .update(form.value)
      .then((res) => {
        emit("close");
      })
      .catch((err) => {
        console.log(err);
      });
    loading.value = false;
  }
};

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: {},
  },
});

onMounted(() => {
  form.value = props.data;
});
</script>
