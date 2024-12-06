<template>
  <NavigationBar />
  <div
    ref="scrollToTop"
    class="app-container fade_animations"
    style="min-height: 100dvh"
  >
    <div class="app-flex">
      <AppDivider :name="$t('favorite list')" :hasLine="true" width="120px" />
    </div>
    <AppLoading v-if="loading" height="70dvh" />
    <div
      v-else
      class="products app-flex app-justify-center app-align-center app-flex-wrap"
    >
      <AppEmptyContent v-if="dataSource.length == 0" height="70dvh" />
      <CardsFavorite
        v-else
        class="app-mx-5 app-mt-7"
        :data="data"
        v-for="data in dataSource"
        :key="data"
      />
    </div>
  </div>
  <MobileNavigation />
</template>

<script setup>
import { useFavoriteStore } from "~/store/favorite";

const favoriteStore = useFavoriteStore();

const dataSource = computed(() => {
  return favoriteStore.favoriteList;
});

const loading = computed(() => {
  return favoriteStore.loading;
});

const scrollToTop = ref(null);

onMounted(async () => {
  scrollToTop.value.scrollIntoView();
  await favoriteStore.getFavorite();
});
</script>
