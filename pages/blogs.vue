<template>
  <div
    ref="scrollToTop"
    class="app-container fade_animations"
    style="min-height: 100dvh"
  >
    <div class="app-w-100 app-px-2 app-py-2 app-flex app-flex-column">
      <AppDivider :name="$t('blogs')" :hasLine="true" width="30px" />
      <div
        class="blogs app-flex app-justify-center app-align-center app-flex-wrap"
      >
        <AppLoading v-if="loading" />
        <CardsBlogs
          v-else
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
import { useBlogsStore } from "~/store/admin/blogs";

const blogsStore = useBlogsStore();

const loading = computed(() => {
  return blogsStore.loading;
});

const dataSource = computed(() => {
  return blogsStore.blogsList;
});

const scrollToTop = ref(null);
onMounted(async () => {
  await blogsStore.blogList();
  scrollToTop.value.scrollIntoView();
});
</script>

<style scoped></style>
