<template>
  <AppCard width="100%">
    <template #content>
      <ModalsEditAddress
        :data="data"
        :state="editModalState"
        @close="editModalState = false"
      />
      <ModalsConfrim
        :state="confrimModalState"
        :title="$t('edit address')"
        :text="$t('confrim to edit address')"
        @confrim="openEditModal"
        @cancel="confrimModalState = false"
        @close="confrimModalState = false"
      />
      <ModalsConfrim
        :state="confrimDeleteModalState"
        :title="$t('delete address')"
        :text="$t('confrim to delete address')"
        @confrim="deleteAddress"
        @cancel="confrimDeleteModalState = false"
        @close="confrimDeleteModalState = false"
      />
      <div class="app-w-100 app-flex app-flex-column app-px-3">
        <div class="app-flex app-justify-end app-mt-4 app-w-100">
          <div @click="confrimDeleteModalState = true">
            <XIcon size="1x" class="app-pointer"></XIcon>
          </div>
          <div class="app-mx-2" @click="confrimModalState = true">
            <EditIcon size="1x" class="app-pointer"></EditIcon>
          </div>
        </div>
        <span class="f-s-16 f-w-100 color-primary">{{ data.name }}</span>
        <span class="f-s-12 f-w-600">{{ data.address }}</span>
        <div class="app-flex">
          <span class="f-s-14 app-mt-1 f-w-100">{{ $t("postal code") }} :</span>
          <span class="f-s-14 app-mt-1 f-w-100 app-pb-5 app-px-2">
            {{ data.postal_code }}</span
          >
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { useAddressStore } from "@/store/address/index";
const editModalState = ref(false);
const confrimModalState = ref(false);
const confrimDeleteModalState = ref(false);

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});

const openEditModal = () => {
  confrimModalState.value = false;
  editModalState.value = true;
};

const deleteAddress = () => {
  const addressStore = useAddressStore();
  confrimDeleteModalState.value = false;
  addressStore.delete(props.data);
};
</script>
