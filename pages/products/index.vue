<template>
  <NavigationBar />
  <div
    ref="scrollToTop"
    class="app-container fade_animations"
    style="min-height: 100dvh"
  >
    <div class="app-flex">
      <AppDivider :name="$t('products')" :hasLine="true" width="65px" />
    </div>

    <div class="app-w-100">
      <div
        class="products app-flex app-justify-center app-align-center app-flex-wrap"
      >
        <CardsProducts
          class=""
          :data="data"
          v-for="data in dataSource"
          :key="data"
        />
      </div>
    </div>
  </div>
  <MobileNavigation />
</template>

<script setup>
import { useWebProductStore } from "~/store/webProduct";

const productStore = useWebProductStore();
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
