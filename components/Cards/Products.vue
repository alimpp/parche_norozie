<template>
  <AppCard>
    <template #content>
      <div
        class="app-flex cursor-pointer"
        :class="{
          'app-flex-column': themeStore.wighet.product.display == 'column',
        }"
      >
        <div
          :calss="{
            'app-w-100': themeStore.wighet.product.display == 'row',
          }"
        >
          <v-carousel
            height="150"
            hide-delimiters
            cycle
            :interval="6000"
            :show-arrows="false"
          >
            <v-carousel-item v-for="image in data.images" :key="i">
              <v-sheet height="100%">
                <img
                  class="app-w-100"
                  :class="{
                    'card-w-150': themeStore.wighet.product.display == 'row',
                  }"
                  style="height: 150px"
                  :src="image.url"
                  alt="image"
                  loading="lazy"
                />
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>

        <div
          class="app-flex app-flex-column app-pt-1 app-px-2"
          :class="{
            'card-w-150': themeStore.wighet.product.display == 'row',
            'card-w-220': themeStore.wighet.product.display == 'column',
          }"
        >
          <span class="app-font-size-12 app-font-weight-600">{{
            data.name
          }}</span>
          <span class="app-font-size-12 app-font-weight-600 app-color-gray">{{
            data.category
          }}</span>
          <div class="app-flex app-flex-column" v-if="data.hasDiscount">
            <span class="app-font-size-12 app-font-weight-600 app-color-primary"
              >{{ data.discountPrice }} {{ $t("toman") }}</span
            >
            <del class="app-color-gray">
              <span class="app-font-size-10 app-font-weight-600"
                >{{ data.price }} {{ $t("toman") }}</span
              >
            </del>
          </div>
          <span class="app-font-size-12 app-font-weight-600 app-py-2" v-else
            >{{ data.price }} {{ $t("toman") }}</span
          >
          <span
            class="app-font-size-10 app-font-weight-600"
            :class="{ 'app-pt-2': data.hasDiscount == false }"
            >{{ $t("score product") }}</span
          >
          <span class="app-font-size-10 app-font-weight-600">5/5</span>
          <!-- <div
            class="app-w-100 app-flex app-justify-end app-py-2"
            :class="{ 'app-mt-5': themeStore.wighet.product.display == 'row' }"
          >
            <HeartIcon size="1x" class="app-pointer app-mx-2"></HeartIcon>
            <ShoppingCartIcon size="1x" class="app-pointer"></ShoppingCartIcon>
          </div> -->
        </div>
      </div>
    </template></AppCard
  >
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
.card-w-150 {
  width: 150px;
}
.card-w-220 {
  width: 250px;
}
</style>
