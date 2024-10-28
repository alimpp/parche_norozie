<template>
  <AppLoading height="100dvh" v-if="loading" />
  <div class="app-flex app-flex-column app-w-100 blog fade_animations" v-else>
    <div class="header">
      <img
        class="app-w-100"
        src="https://nicholasrossis.me/wp-content/uploads/2017/04/BLOG01.jpg"
        alt="image"
        loading="lazy"
      />
      <div class="header-info">
        <div class="app-flex app-flex-column app-mb-5">
          <h1 class="app-font-size-20 app-font-weight-600">
            {{ dataSource.title }}
          </h1>
          <span class="app-font-size-12 app-font-weight-600"
            >{{ $t("read time") }} 10 {{ $t("minute") }}</span
          >
        </div>
        <div class="app-flex">
          <AppAvatar width="40px" height="40px" name="ع" />
          <div class="app-flex app-flex-column app-px-2">
            <span class="app-font-size-10">علیرضا نوروزی</span>
            <span class="app-font-size-10">ادمین فروشگاه نوروزی</span>
          </div>
        </div>
      </div>
    </div>
    <div class="app-container">
      <h2 class="app-font-size-14 app-font-weight-600">
        {{ dataSource.description }}
      </h2>
      <div
        class="app-flex app-flex-column app-py-5"
        v-for="section in dataSource.sections"
      >
        <span class="app-font-size-16 app-font-weight-600">{{
          section.title
        }}</span>
        <span class="app-font-size-12 app-font-weight-600">{{
          section.description
        }}</span>
        <img
          class="app-w-100 app-border-radius app-mt-5"
          src="https://nicholasrossis.me/wp-content/uploads/2017/04/BLOG01.jpg"
          alt="image"
          loading="lazy"
        />
      </div>
      <div class="app-w-100 app-flex app-flex-column app-mt-5">
        <AppDivider :name="$t('other blogs')" :hasLine="true" width="100px" />
        <div
          class="app-w-100 app-flex app-flex-wrap app-justify-center app-align-center"
        >
          <CardsBlogs
            class="app-mx-5 app-mt-7"
            :data="data"
            v-for="data in blogsList"
            :key="data"
            @read="read"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBlogsStore } from "~/store/admin/blogs";
import { useRoute } from "#app";

const blogsStore = useBlogsStore();
const loading = ref(false);

const read = (data) => {
  navigateTo(`/blogs/${data.ID}`);
};

const blogsList = computed(() => {
  return blogsStore.blogsList;
});

const dataSource = computed(() => {
  return blogsStore.singleBlog;
});

onMounted(async () => {
  const route = useRoute();
  loading.value = !loading.value;
  await blogsStore.getBlogById(route.params.id);
  await blogsStore.blogList();
  loading.value = !loading.value;
});
</script>

<style scoped>
.header {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
}
.header img {
  height: 500px;
  border-radius: 0 0 50px 50px;
  position: absolute;
  z-index: 10;
}
.header-info {
  width: 100%;
  height: 500px;
  position: absolute;
  z-index: 20;
  background: rgba(0, 0, 0, 0.649);
  border-radius: 0 0 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  padding: 15px 15px;
}
</style>
