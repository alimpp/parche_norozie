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
            height="35px"
            width="150px"
            @click="openBlogModal"
            class="app-mx-4"
          />
        </div>
      </div>
    </template>
  </AppCard>
  <ModalsBlog
    :state="blogModalState"
    :modalType="modalType"
    :data="singleBlog"
    @close="blogModalState = false"
  />
  <CardsAdminBlog
    v-for="(data, index) in dataSource"
    :key="index"
    :data="data"
    @deleteBlog="deleteBlog"
    @editBlog="editBlog"
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
const modalType = ref("add");

const blogModalState = ref(false);
const openBlogModal = () => {
  blogModalState.value = true;
};

const dataSource = computed(() => {
  return blogsStore.blogsList;
});

const singleBlog = computed(() => {
  return blogsStore.singleBlog;
});

const editBlog = async (data) => {
  await blogsStore.getBlogById(data.ID);
  modalType.value = "edit";
  blogModalState.value = true;
};

const deleteBlog = async (data) => {
  await blogsStore.deleteBlog(data.ID);
};

onMounted(async () => {
  await blogsStore.blogList();
});
</script>

<style scoped></style>
