<template>
  <div class="app-flex app-flex-column app-w-100 blog">
    <h1 class="app-font-size-20 app-font-weight-600 app-color-primary">
      {{ dataSource.title }}
    </h1>
    <div class="app-flex">
      <span class="app-font-size-12 app-font-weight-600"
        >{{ $t("autor") }} :</span
      >
      <span class="app-font-size-12 app-font-weight-600 app-px-2">نوروزی</span>
    </div>
    <h2 class="app-font-size-14 app-font-weight-600">
      {{ dataSource.description }}
    </h2>
    <img
      class="app-w-100 app-border-radius app-mt-5"
      src="https://nicholasrossis.me/wp-content/uploads/2017/04/BLOG01.jpg"
      alt="image"
      loading="lazy"
    />
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
</template>

<script setup>
import { useBlogsStore } from "~/store/admin/blogs";
import { useRoute } from "#app";

const blogsStore = useBlogsStore();

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
  await blogsStore.getBlogById(route.params.id);
  await blogsStore.blogList();
});
</script>

<style scoped>
.blog {
  min-height: 100dvh;
  padding: 110px 100px;
}

@media (max-width: 600px) {
  .blog {
    padding: 110px 15px;
  }
}
</style>
