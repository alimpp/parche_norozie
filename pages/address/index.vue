<template>
  <div class="app-container fade_animations">
    <ModalsAddress :state="state" @close="state = false" />
    <div class="app-w-100 app-flex app-flex app-align-center">
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
          height="35px"
          @click="state = true"
        />
      </div>
    </div>
    <div class="app-w-100 app-flex app-flex-wrap">
      <CardsAddress
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

const allAddress = computed(() => {
  return addressStore.address;
});

onMounted(() => {
  addressStore.getAddress();
});
</script>
