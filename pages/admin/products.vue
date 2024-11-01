<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50">
          <AppBeardCrumb :route="$t('dashboard')" :child="$t('products')" />
        </div>
        <div class="app-w-50 app-flex app-justify-end">
          <AppButton
            :name="$t('create new product')"
            background="app-bg-primary"
            height="32px"
            fontSize="app-font-size-12"
            @click="openProductModal"
          />
        </div>
      </div>
    </template>
  </AppCard>
  <AppLoading v-if="false" height="70dvh" />
  <div v-else>
    <AppEmptyContent v-if="true" height="70dvh" />

  </div>
  <ModalsProduct :state="productModalState" @close="productModalState = false" />
</template>
<script setup>
definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});

const productModalState = ref(false);
const openProductModal = () => {
  productModalState.value = true;
};

</script>

<style scoped></style>
