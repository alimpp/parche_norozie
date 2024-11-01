<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50">
          <AppBeardCrumb :route="$t('dashboard')" :child="$t('blogs')" />
        </div>
        <div class="app-w-50 app-flex app-justify-end">
          <AppButton
            :name="$t('create new blog')"
            background="app-bg-primary"
            height="32px"
            fontSize="app-font-size-12"
            @click="openBlogModal"
          />
        </div>
      </div>
    </template>
  </AppCard>
  <AppLoading v-if="loading" height="70dvh" />
  <div v-else>
    <AppEmptyContent v-if="dataSource.length == 0" height="70dvh" />
    <CardsAdminBlog
      v-else
      v-for="(data, index) in dataSource"
      :key="index"
      :data="data"
      @deleteBlog="deleteBlog"
      @editBlog="openUpdateModalBlog"
      class="app-mt-3 fade_animations"
    />
  </div>
  <ModalsBlog :state="blogModalState" @close="blogModalState = false" />
  <ModalsUpdateBlog
    :state="blogUpdateModalState"
    @close="blogUpdateModalState = false"
  />
</template>
<script setup>
import { useBlogsStore } from "~/store/admin/blogs";

definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});

const blogsStore = useBlogsStore();

const blogModalState = ref(false);
const openBlogModal = () => {
  blogModalState.value = true;
};

const dataSource = computed(() => {
  return blogsStore.blogsList;
});

const loading = computed(() => {
  return blogsStore.loading;
});

const blogUpdateModalState = ref(false);
const openUpdateModalBlog = async (data) => {
  await blogsStore.getBlogById(data.ID);
  blogUpdateModalState.value = true;
};

const deleteBlog = async (data) => {
  await blogsStore.deleteBlog(data.ID);
};

onMounted(async () => {
  await await blogsStore.blogList();
});
</script>

<style scoped></style>
