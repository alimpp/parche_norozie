<template>
  <div class="product-container">
    <AppLoading height="100dvh" v-if="loading" />
    <div class="product-content">
      <div class="information">
        <h1 class="f-s-18 f-w-600 color-primary">{{ dataSource.name }}</h1>
        <div class="app-flex">
          <h2 class="f-s-12 f-w-600">{{ dataSource.category.Title }} /</h2>

          <h2
            class="f-s-12 f-w-600 app-px-1"
            v-for="(sub, index) in dataSource.category.subcategories"
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
            class="bg-danger-100 app-border-radius app-px-2 app-py-1"
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
      </div>
      <div class="images">
        <v-carousel
          height="300"
          hide-delimiters
          cycle
          :interval="6000"
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="(image, index) in dataSource.images"
            :key="index"
          >
            <v-sheet style="background: none">
              <img
                class="app-w-100"
                style="height: 300px; border-radius: 10px; transition: 1s"
                :src="image"
                alt="image"
                loading="lazy"
              />
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "#app";
import { useProductStore } from "~/store/admin/product";

const route = useRoute();
const productStore = useProductStore();

const loading = computed(() => {
  return productStore.loading;
});

const dataSource = computed(() => {
  console.log(productStore.product);

  return productStore.product;
});

onMounted(async () => {
  if (!productStore.product.ID) {
    await productStore.getProduct(route.params.id);
  }
});
</script>

<style scoped>
.product-container {
  width: 100%;
  min-height: 1000px;
}

.product-content {
  width: 100%;
  display: flex;
  padding: 150px 200px;
}

.information {
  width: 60%;
  display: flex;
  flex-direction: column;
}

.images {
  width: 40%;
}
</style>
