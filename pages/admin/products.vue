<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50 app-flex app-flex-column">
          <span class="f-s--16 f-w-600">
            {{ $t("products") }}
          </span>
          <span class="f-s--12 f-w-500 app-color-gray">
            {{ $t("products admin title") }}
          </span>
        </div>
        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span class="app-pointer app-mx-1" @click="openProductModal">
            <v-tooltip :text="$t('create')" location="bottom">
              <template v-slot:activator="{ props }">
                <AppIconContent color="bg-primary-100" v-bind="props"
                  ><PlusIcon size="1x"></PlusIcon
                ></AppIconContent>
              </template>
            </v-tooltip>
          </span>
        </div>
      </div>
    </template>
  </AppCard>
  <AppLoading v-if="false" height="70dvh" />
  <div v-else>
    <AppEmptyContent v-if="true" height="70dvh" />
  </div>
  <ModalsProduct
    :state="productModalState"
    @close="productModalState = false"
  />
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
