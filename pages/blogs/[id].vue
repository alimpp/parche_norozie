<template>
  <AppLoading height="100dvh" v-if="loading" />
  <div class="app-flex app-flex-column app-w-100 blog fade_animations" v-else>
    <div class="app-w-100 app-flex app-justify-center">
      <div class="header" data-aos="fade-down">
        <img
          class="app-w-100"
          :src="`https://parche-go.liara.run/api/v1/download/${dataSource.img}`"
          alt="image"
          loading="lazy"
        />
        <div class="header-info">
          <div class="app-flex app-flex-column app-mb-5">
            <h1 class="f-s-18 f-w-600">
              {{ dataSource.title }}
            </h1>
            <span class="f-s-12 f-w-500"
              >{{ $t("read time") }} 10 {{ $t("minute") }}</span
            >
          </div>
          <div class="app-flex app-px-2">
            <span class="f-s-12">{{ $t("autor") }} :</span>
            <span class="f-s-12 app-px-2">علیرضا نوروزی</span>
          </div>
          <div class="share-link-content app-border-radius">
            <span class="app-pt-2" @click="copyLink">
              <CopyIcon size="1.5x"></CopyIcon>
            </span>
            <span class="f-s-12 app-w-100 app-flex app-justify-end">
              https://parche-go.liara.run {{ route.fullPath }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="app-w-100 app-flex app-flex-column app-align-center"
      data-aos="fade-up"
    >
      <div class="content">
        <h3 class="f-s-14 f-w-600">
          {{ dataSource.description }}
        </h3>
        <div
          class="app-flex app-flex-column app-py-5"
          v-for="section in dataSource.sections"
        >
          <h2 class="f-s-18 f-w-600">
            {{ section.title }}
          </h2>
          <h3 class="f-s-12 f-w-600">
            {{ section.description }}
          </h3>
          <img
            v-if="section.img"
            class="app-w-100 app-border-radius app-mt-5"
            :src="`https://parche-go.liara.run/api/v1/download/${section.img}`"
            alt="image"
            loading="lazy"
          />
        </div>
        <div class="app-w-100 app-flex app-flex-column">
          <div class="app-flex">
            <span class="app-pt-2">
              <TagIcon size="1.5x"></TagIcon>
            </span>
            <span class="f-s-18 f-w-600 app-px-2">{{ $t("labels") }}</span>
          </div>
          <div class="app-w-100 app-flex app-flex-wrap">
            <h6
              class="f-s-14 f-w-600 app-px-1"
              v-for="(tag, index) in dataSource.tags"
              :key="index"
            >
              #{{ tag }}
            </h6>
          </div>
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
  </div>
</template>

<script setup>
import { copyToClipboard } from "@/utils/copy";
import { useBlogsStore } from "~/store/admin/blogs";
import { useRoute } from "#app";

const blogsStore = useBlogsStore();
const loading = ref(false);
const route = useRoute();

const read = (data) => {
  navigateTo(`/blogs/${data.ID}`);
};

const blogsList = computed(() => {
  return blogsStore.blogsList;
});

const dataSource = computed(() => {
  return blogsStore.singleBlog;
});

const copyLink = () => {
  const route = useRoute();
  copyToClipboard(`https://parche-go.liara.run${route.fullPath}`);
};

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
  width: 80%;
  height: 500px;
  position: relative;
  overflow: hidden;
  color: #fff;
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
  align-items: center;
  justify-content: center;
  padding: 15px 15px;
  text-align: center;
}

.share-link-content {
  width: 300px;
  height: 40px;
  background: #98989841;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
}

.content {
  width: 80%;
  padding: 30px 0;
}

@media (max-width: 800px) {
  .header {
    width: 100%;
  }
  .header img {
    border-radius: 0 0 30px 30px;
  }
  .header-info {
    border-radius: 0 0 30px 30px;
  }
  .content {
    width: 100%;
    padding: 20px 20px;
  }
}
</style>
