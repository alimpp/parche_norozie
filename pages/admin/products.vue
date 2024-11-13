<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50 app-flex app-flex-column">
          <span class="f-s-16 f-w-600">
            {{ $t("products") }}
          </span>
          <span class="f-s-12 f-w-500 color-gray">
            {{ $t("products admin title") }}
          </span>
        </div>
        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span class="app-pointer app-mx-1" @click="refreshData">
            <v-tooltip :text="$t('refresh')" location="bottom">
              <template v-slot:activator="{ props }">
                <AppIconContent color="bg-primary-100" v-bind="props"
                  ><RefreshCcwIcon size="1x"></RefreshCcwIcon
                ></AppIconContent>
              </template>
            </v-tooltip>
          </span>
          <span class="app-pointer app-mx-1" @click="searchState = true">
            <v-tooltip :text="$t('search')" location="bottom">
              <template v-slot:activator="{ props }">
                <AppIconContent color="bg-primary-100" v-bind="props"
                  ><SearchIcon size="1x"></SearchIcon
                ></AppIconContent>
              </template>
            </v-tooltip>
          </span>
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
  <AppLoading height="70dvh" v-if="loading" />
  <div v-else>
    <AppEmptyContent v-if="dataSource.length == 0" height="70dvh" />
    <CardsAdminProduct
      v-else
      v-for="data in dataSource"
      :data="data"
      class="app-mt-3 fade_animations"
      @deleteProduct="removeProduct"
      @editProduct="editProduct"
    />
  </div>

  <ModalsProduct
    :state="productModalState"
    @close="productModalState = false"
  />
  <ModalsSearch
    :state="searchState"
    @close="searchState = false"
    @search="searchData"
  />
</template>
<script setup>
import { useProductStore } from "~/store/admin/product";

const productStore = useProductStore();
const searchState = ref(false);
const dataSource = computed(() => {
  return productStore.products;
});
const loading = computed(() => {
  return productStore.loading;
});

definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});

const productModalState = ref(false);
const openProductModal = () => {
  productModalState.value = true;
};

const searchData = (data) => {
  productStore.getAllProducts(data);
};

const refreshData = () => {
  productStore.getAllProducts("");
};

const removeProduct = (data) => {
  productStore.removeProduct(data.ID);
  productStore.getAllProducts("");
};

const editProduct = (data) => {
  // productStore.updateProduct(data);
  // productStore.getAllProducts("");
};

onMounted(async () => {
  await productStore.getAllProducts("");
});
</script>

<style scoped></style>
