<template>
  <AppModal
    width="90%"
    :state="state"
    @close="emit('close')"
    :title="$t('submit address')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 app-py-8">
        <AppInput :label="$t('name')" v-model="form.name" />
        <AppInput :label="$t('address')" v-model="form.address" />
        <AppInput :label="$t('postal code')" v-model="form.postal_code" />
        <AppButton
          class="app-mt-4"
          :name="$t('submit')"
          :loading="loading"
          background="app-bg-primary"
          width="120px"
          height="35px"
          @click="add"
        />
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { useAddressStore } from "@/store/address/index";

const adddressStore = useAddressStore();
const emit = defineEmits(["close"]);

const form = ref({ address: "", name: "", postal_code: "" });
const loading = ref(false);

const add = async () => {
  loading.value = true;
  await adddressStore
    .add(form.value)
    .then((res) => {
      emit("close");
    })
    .catch((err) => {
      console.log(err);
    });
  loading.value = false;
};

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});
</script>
