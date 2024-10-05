<template>
  <AppCard
    data-aos="zoom-in-left"
    class="app-mx-3 app-mt-3"
    width="350px"
    v-if="themeStore.wighet.product.display == 'row'"
  >
    <template #content>
      <div class="app-flex">
        <div style="width: 150px">
          <v-carousel
            height="160"
            hide-delimiters
            cycle
            :interval="6000"
            :show-arrows="false"
          >
            <v-carousel-item v-for="image in data.images" :key="i">
              <v-sheet height="100%">
                <img
                  class="app-w-100"
                  style="height: 160px"
                  :src="image.url"
                  alt="image"
                  loading="lazy"
                />
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
        <div
          class="app-flex app-flex-column app-w-100 app-px-3 app-pt-1"
          style="width: 200px"
        >
          <span class="app-font-size-12 app-font-weight-100">{{
            data.name
          }}</span>
          <div class="app-flex">
            <span class="app-font-size-10 app-font-weight-100 app-color-gray">{{
              data.category
            }}</span>
            <span
              v-if="data.hasDiscount"
              class="app-font-size-10 app-font-weight-100 app-bg-danger app-mx-2 app-px-2 app-border-radius"
              >40% {{ $t("discount card") }}</span
            >
          </div>
          <div class="app-flex app-mt-1">
            <IconsStar v-for="n in 5" />
          </div>
          <div
            v-if="data.hasDiscount"
            class="app-flex app-flex-column app-align-end app-mt-1 app-w-100 bg-discount app-border-radius app-px-1"
          >
            <span class="app-font-size-12 app-font-weight-100"
              >{{ data.discountPrice }} {{ $t("toman") }}</span
            >
            <span class="app-font-size-10 app-font-weight-100 discount-style"
              >{{ data.price }} {{ $t("toman") }}</span
            >
          </div>
          <div v-else class="app-flex app-justify-end app-mt-5 app-w-100">
            <span class="app-font-size-12 app-font-weight-100"
              >{{ data.price }} {{ $t("toman") }}</span
            >
          </div>
          <AppButton
            :name="$t('order product')"
            background="app-bg-primary"
            height="30px"
            class="app-mt-2"
            icon="shopping cart"
          ></AppButton>
        </div>
      </div> </template
  ></AppCard>

  <AppCard
    data-aos="zoom-in-left"
    class="app-mx-3 app-mt-3"
    width="240px"
    v-if="themeStore.wighet.product.display == 'column'"
  >
    <template #content>
      <div class="app-flex flex-column">
        <div style="width: 240px">
          <v-carousel
            height="220"
            hide-delimiters
            cycle
            :interval="6000"
            :show-arrows="false"
          >
            <v-carousel-item v-for="image in data.images" :key="i">
              <v-sheet height="100%">
                <img
                  class="app-w-100"
                  style="height: 220px"
                  :src="image.url"
                  alt="image"
                  loading="lazy"
                />
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
        <div
          class="app-flex app-flex-column app-w-100 app-px-3 app-pt-1"
          style="width: 240px; height: 165px"
        >
          <span class="app-font-size-12 app-font-weight-100">{{
            data.name
          }}</span>
          <div class="app-flex">
            <span class="app-font-size-10 app-font-weight-100 app-color-gray">{{
              data.category
            }}</span>
            <span
              v-if="data.hasDiscount"
              class="app-font-size-10 app-font-weight-100 app-bg-danger app-mx-2 app-px-2 app-border-radius"
              >40% {{ $t("discount card") }}</span
            >
          </div>
          <div class="app-flex app-mt-1">
            <IconsStar v-for="n in 5" />
          </div>
          <div
            v-if="data.hasDiscount"
            class="app-flex app-flex-column app-align-end app-mt-1 app-w-100 bg-discount app-border-radius app-px-1"
          >
            <span class="app-font-size-12 app-font-weight-100"
              >{{ data.discountPrice }} {{ $t("toman") }}</span
            >
            <span class="app-font-size-10 app-font-weight-100 discount-style"
              >{{ data.price }} {{ $t("toman") }}</span
            >
          </div>
          <div v-else class="app-flex app-justify-end app-mt-5 app-w-100">
            <span class="app-font-size-12 app-font-weight-100"
              >{{ data.price }} {{ $t("toman") }}</span
            >
          </div>
          <AppButton
            :name="$t('order product')"
            background="app-bg-primary"
            height="30px"
            class="app-mt-2"
            icon="shopping cart"
          ></AppButton>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";

const themeStore = useThemeStore();

const props = defineProps({
  data: {
    default: {},
    type: Object,
  },
});
</script>

<style scoped>
.bg-discount {
  background: #9999992c;
}
.discount-style {
  color: #666666;
  position: relative;
}
</style>
