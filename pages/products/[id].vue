<template>
  <div class="product-container">
    <AppLoading height="100dvh" v-if="loading" />
    <div class="product-content fade_animations" v-if="!loading">
      <div class="images">
        <img
          :src="dataSource.mainImage"
          alt="image"
          @click="show = true"
          class="app-pointer"
        />
        <div
          class="app-flex app-justify-center app-w-100 app-pointer"
          @click="show = true"
        >
          <img
            v-for="(img, index) in dataSource.images"
            :key="index"
            :src="img"
            alt="image"
            style="
              width: 100px;
              height: 100px;
              border-radius: 10px;
              margin: 10px 10px;
            "
          />
        </div>
      </div>
      <div class="information">
        <h1 class="f-s-18 f-w-600 color-primary">{{ dataSource.name }}</h1>
        <div class="app-flex">
          <h2 class="f-s-12 f-w-600">{{ dataSource.category?.Title }} /</h2>
          <h2
            class="f-s-12 f-w-600 app-px-1"
            v-for="(sub, index) in dataSource.category?.subcategories"
            :key="index"
          >
            {{ sub.Title }}
            <span v-if="dataSource.category.subcategories.length > index + 1"
              >/</span
            >
          </h2>
        </div>
        <div class="app-flex">
          <IconsStar v-for="n in 5" />
        </div>
        <span class="f-s-12 f-w-600 app-pt-4" v-if="dataSource.discount > 0">{{
          $t("orginal price")
        }}</span>
        <span class="f-s-12 f-w-600 app-pt-4" v-else>{{ $t("price") }}</span>
        <span class="f-s-12 f-w-600"
          >{{ dataSource.price }} {{ $t("toman") }}</span
        >
        <div class="app-mt-4" v-if="dataSource.discount > 0">
          <span
            class="bg-danger-100 f-s-12 app-border-radius app-px-2 app-py-1"
            style="width: 105px"
          >
            {{ dataSource.discount }} %
            {{ $t("discount") }}
          </span>
        </div>
        <span class="f-s-12 f-w-600 app-pt-4" v-if="dataSource.discount > 0">{{
          $t("price with discount")
        }}</span>
        <span class="f-s-12 f-w-600 app-pt-1" v-if="dataSource.discount > 0">
          {{ dataSource.price_after_discount }}
        </span>
        <span class="f-s-12 f-w-600 app-pt-2">{{ $t("propertys") }}</span>
        <div class="app-flex app-flex-column">
          <div
            class="app-flex app-flex-column app-mt-2"
            v-for="(property, index) in dataSource.properties"
            :key="index"
          >
            <span class="f-s-12 f-w-600"> {{ property.Title }}</span>
            <div class="app-flex">
              <span
                class="bg-primary-transparent app-px-2 app-py-1 f-s-12 f-w-600 app-border-radius app-mx-1 app-pointer"
                v-for="(item, index) in property.values"
                :key="index"
              >
                {{ item.Value }}
              </span>
            </div>
          </div>
        </div>
        <div class="buttons-content app-mt-4">
          <div class="add-to-card">
            <AppButton
              width="100%"
              :name="$t('add to shopping card')"
              background="bg-primary-100"
            >
              <template #iconLeft>
                <IconsShoppingCardPlus class="app-mx-2" />
              </template>
            </AppButton>
          </div>
          <div class="add-to-favorite">
            <AppButton
              width="100%"
              :name="$t('add to favorite list')"
              background="bg-danger-transparent"
              color="color-danger"
            >
              <template #iconLeft>
                <IconsHeart class="app-mx-2" />
              </template>
            </AppButton>
          </div>
        </div>
      </div>
    </div>
    <div class="attributes-content app-mt-5" v-if="!loading">
      <div class="description-content app-flex app-flex-column">
        <span class="f-s-14 f-w-600">{{ $t("descriptions") }}</span>
        <span class="f-s-12 f-w-500">{{ dataSource.description }}</span>
      </div>
      <div class="attributes app-flex app-flex-column">
        <span class="f-s-14 f-w-600">{{ $t("more propertys") }}</span>
        <div
          class="app-flex app-w-100 app-mt-2"
          v-for="(attr, index) in dataSource.attributes"
          :key="index"
        >
          <div
            class="app-w-30 app-flex f-s-14 f-w-600 app-border-radius app-px-2 app-py-1"
          >
            {{ attr.key }}
          </div>
          <div
            class="app-w-70 app-flex f-s-14 f-w-600 attr-border app-mx-2 app-px-2 app-py-1"
          >
            {{ attr.value }}
          </div>
        </div>
      </div>
    </div>
    <div class="app-w-100 app-flex app-flex-column app-mt-5">
      <div class="app-flex">
        <span class="app-pt-2">
          <TagIcon size="1.5x"></TagIcon>
        </span>
        <span class="f-s-14 f-w-600 app-px-2 app-pt-2">{{ $t("labels") }}</span>
      </div>
      <div class="app-w-100 app-flex app-flex-wrap">
        <nuxt-link
          to="/"
          v-for="(tag, index) in dataSource.tags"
          :key="index"
          style="text-decoration: none"
          class="app-px-1 f-s-14 f-w-500 bg-primary-transparent color-primary app-border-radius app-mx-1"
        >
          #{{ tag.tag }}
        </nuxt-link>
      </div>
    </div>
  </div>
  <VueEasyLightbox
    :visible="show"
    :imgs="dataSource.images"
    @hide="show = false"
  />
</template>

<script setup>
import { useRoute } from "#app";
import { useProductStore } from "~/store/admin/product";

const route = useRoute();
const productStore = useProductStore();
const show = ref(false);

const loading = computed(() => {
  return productStore.loading;
});

const dataSource = computed(() => {
  if (productStore.product) {
    return productStore.product;
  }
});

onBeforeMount(async () => {
  if (!productStore.product.ID) {
    await productStore.getProduct(route.params.id);
  }
});
</script>

<style scoped>
.attr-border {
  border-bottom: 1px solid #89898978;
}

.product-container {
  width: 100%;
  min-height: 1000px;
  padding: 150px 200px;
  overflow: hidden;
}

.product-content {
  width: 100%;
  display: flex;
}

.information {
  width: 50%;
  display: flex;
  flex-direction: column;
}

.images {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.images img {
  height: auto;
  width: 350px;
  border-radius: 10px;
  transition: 1s;
}

.attributes-content {
  width: 100%;
  display: flex;
}

.description-content {
  width: 50%;
}

.attributes {
  width: 50%;
  padding: 0 10px;
}

.buttons-content {
  width: 100%;
  display: flex;
}

.add-to-card {
  width: 50%;
}

.add-to-favorite {
  width: 50%;
  padding: 0 10px;
}

@media (max-width: 1500px) {
  .product-container {
    padding: 150px 150px;
  }
}
@media (max-width: 1250px) {
  .product-container {
    padding: 150px 100px;
  }
}
@media (max-width: 1100px) {
  .product-content {
    flex-direction: column;
  }
  .information {
    width: 100%;
  }
  .images {
    width: 100%;
    margin: 15px 0;
  }
  .buttons-content {
    flex-direction: column;
  }
  .add-to-card {
    width: 100%;
    margin: 5px 0;
  }
  .add-to-favorite {
    width: 100%;
    padding: 0 0;
    margin: 5px 0;
  }
  .images img {
    width: 100%;
  }
  .attributes-content {
    flex-direction: column;
  }
  .description-content {
    width: 100%;
    margin: 10px 0;
  }
  .attributes {
    width: 100%;
    margin: 10px 0;
  }
}
@media (max-width: 1050px) {
  .product-container {
    padding: 150px 60px;
  }
}

@media (max-width: 600px) {
  .product-container {
    padding: 150px 15px;
  }
}
</style>
