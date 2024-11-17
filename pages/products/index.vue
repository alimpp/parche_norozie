<template>
  <div
    ref="scrollToTop"
    class="app-container fade_animations"
    style="min-height: 100dvh"
  >
    <ModalsFilter :state="filterModalState" @close="filterModalState = false" />
    <div class="app-flex">
      <AppDivider :name="$t('products')" :hasLine="true" width="65px" />
      <div
        class="filter-modal app-flex app-align-center app-mx-3"
        @click="filterModalState = true"
      >
        <FilterIcon size="1x" />
        <span class="f-s-14 f-w-600 app-px-2">{{ $t("filter by") }}</span>
      </div>
    </div>

    <div class="app-w-100 app-mt-8">
      <div
        class="products app-flex app-justify-center app-align-center app-flex-wrap"
      >
        <CardsProducts
          class="app-mx-5 app-mt-7"
          :data="data"
          v-for="data in dataSource"
          :key="data"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "~/store/admin/product";

const productStore = useProductStore();
const filterModalState = ref(false);

const dataSource = computed(() => {
  return productStore.products;
});

const scrollToTop = ref(null);
onMounted(async () => {
  scrollToTop.value.scrollIntoView();

  await productStore.getAllProducts("");
});
</script>

<style scoped>
.filter-modal {
  display: none;
}
</style>
