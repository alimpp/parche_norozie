<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50 app-flex app-flex-column">
          <span class="app-font-size-16 app-font-weight-600">
            {{ $t("blogs") }}
          </span>
          <span class="app-font-size-12 app-font-weight-500 app-color-gray">
            {{ $t("blogs admin title") }}
          </span>
        </div>
        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span class="app-pointer app-mx-1" @click="getAllDataSourc">
            <v-tooltip :text="$t('refresh')" location="bottom">
              <template v-slot:activator="{ props }">
                <AppIconContent color="app-bg-green" v-bind="props"
                  ><RefreshCcwIcon size="1x"></RefreshCcwIcon
                ></AppIconContent>
              </template>
            </v-tooltip>
          </span>
          <span class="app-pointer app-mx-1" @click="openSearch">
            <v-tooltip :text="$t('search')" location="bottom">
              <template v-slot:activator="{ props }">
                <AppIconContent color="app-bg-info" v-bind="props"
                  ><SearchIcon size="1x"></SearchIcon
                ></AppIconContent>
              </template>
            </v-tooltip>
          </span>
          <span class="app-pointer app-mx-1" @click="openBlogModal">
            <v-tooltip :text="$t('create')" location="bottom">
              <template v-slot:activator="{ props }">
                <AppIconContent color="app-bg-primary" v-bind="props"
                  ><PlusIcon size="1x"></PlusIcon
                ></AppIconContent>
              </template>
            </v-tooltip>
          </span>
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
