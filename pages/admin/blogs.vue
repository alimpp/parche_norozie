<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50">
          <AppBeardCrumb :route="$t('dashboard')" :child="$t('blogs')" />
        </div>
        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span class="app-pointer app-mt-3" @click="getAllDataSourc">
            <RefreshCcwIcon size="1x"></RefreshCcwIcon>
          </span>
          <AppButton
            class="app-mx-2"
            :name="$t('search')"
            background="app-bg-primary"
            height="32px"
            fontSize="app-font-size-12"
            @click="openSearch"
          />
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
  <ModalsSearch
    :state="searchState"
    @close="searchState = false"
    @search="searchData"
  />
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

const searchState = ref(false);

const openSearch = () => {
  searchState.value = true;
};

const searchData = async (data) => {
  await blogsStore.searchBlog(data);
};

const getAllDataSourc = () => {
  blogsStore.blogList();
};

onMounted(async () => {
  await blogsStore.blogList();
});
</script>

<style scoped></style>
