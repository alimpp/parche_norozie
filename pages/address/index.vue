<template>
  <div class="app-container fade_animations" style="min-height: 100dvh">
    <ModalsAddress :state="state" @close="state = false" />
    <div class="app-w-100 app-flex app-flex app-align-center app-py-5">
      <div class="app-w-50">
        <AppDivider
          :name="$t('address and submit address')"
          width="131px"
          :hasLine="true"
        />
      </div>
      <div class="app-w-50 app-flex app-justify-end">
        <AppButton
          class="app-mt-2"
          :name="$t('new address')"
          background="app-bg-primary"
          @click="openModalAddress"
        />
      </div>
    </div>
    <div class="app-w-100 app-flex app-flex-wrap app-justify-center">
      <div
        class="app-flex app-justify-center app-align-center app-flex-column app-h-80"
        v-if="allAddress.length == 0"
      >
        <span class="app-font-size-16 app-font-weight-600">
          {{ $t("empty address") }}</span
        >
      </div>
      <CardsAddress
        v-else
        class="app-mt-5"
        v-for="address in allAddress"
        :key="address.uuid"
        :data="address"
      />
    </div>
  </div>
</template>

<script setup>
import { useAddressStore } from "@/store/address/index";

const addressStore = useAddressStore();
const state = ref(false);

const openModalAddress = () => {
  state.value = !state.value;
};

const allAddress = computed(() => {
  return addressStore.address;
});

onMounted(() => {
  addressStore.getAddress();
});
</script>
