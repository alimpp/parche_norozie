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
  <ModalsUpdateBlog
    :state="blogUpdateModalState"
    @close="blogUpdateModalState = false"
  />
  <ModalsBlog :state="blogModalState" @close="blogModalState = false" />
  <CardsAdminBlog
    v-for="(data, index) in dataSource"
    :key="index"
    :data="data"
    @deleteBlog="deleteBlog"
    @editBlog="openUpdateModalBlog"
    class="app-mt-3 fade_animations"
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

const blogUpdateModalState = ref(false);
const openUpdateModalBlog = async (data) => {
  await blogsStore.getBlogById(data.ID);
  blogUpdateModalState.value = true;
};

const deleteBlog = async (data) => {
  await blogsStore.deleteBlog(data.ID);
};

onMounted(async () => {
  await blogsStore.blogList();
});
</script>

<style scoped></style>
