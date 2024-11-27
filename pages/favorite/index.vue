<template>
  <div
    ref="scrollToTop"
    class="app-container fade_animations"
    style="min-height: 100dvh"
  >
    <div class="app-flex">
      <AppDivider :name="$t('favorite list')" :hasLine="true" width="120px" />
      <div
        class="filter-modal app-flex app-align-center app-mx-3"
        @click="filterModalState = true"
      ></div>
    </div>

    <div class="app-w-100 app-mt-8">
      <div
        class="products app-flex app-justify-center app-align-center app-flex-wrap"
      >
        <CardsFavorite
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
import { useFavoriteStore } from "~/store/favorite";

const favoriteStore = useFavoriteStore();

const dataSource = computed(() => {
  return favoriteStore.favoriteList;
});

const scrollToTop = ref(null);
onMounted(async () => {
  scrollToTop.value.scrollIntoView();
  await favoriteStore.getFavorite();
  console.log(favoriteStore.favoriteList);
});


</script>

<style scoped>
.filter-modal {
  display: none;
}
</style>
