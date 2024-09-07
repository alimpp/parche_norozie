<template>
  <AppCard>
    <template #content>
      <div
        class="app-flex"
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
            height="190"
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
                    'card-w-200': themeStore.wighet.product.display == 'row',
                  }"
                  style="height: 190px"
                  :src="image.url"
                  alt="image"
                  loading="lazy"
                />
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>

        <div
          class="app-flex app-flex-column app-px-2 app-py-2"
          :class="{
            'card-w-200': themeStore.wighet.product.display == 'row',
            'card-w-290': themeStore.wighet.product.display == 'column',
          }"
        >
          <span class="app-font-size-12 app-font-weight-600">{{
            data.name
          }}</span>
          <span class="app-font-size-12 app-font-weight-600 app-color-gray">{{
            data.category
          }}</span>
          <div class="app-flex app-w-100" v-if="data.hasDiscount">
            <div class="app-w-50">
              <span class="app-font-size-12 app-font-weight-600">40%</span>
            </div>
            <div class="app-w-50 app-flex app-justify-end">
              <div class="app-flex app-flex-column">
                <span
                  class="app-font-size-12 app-font-weight-600 app-color-primary"
                  >{{ data.discountPrice }} {{ $t("toman") }}</span
                >
                <del class="app-color-gray">
                  <span class="app-font-size-10 app-font-weight-600"
                    >{{ data.price }} {{ $t("toman") }}</span
                  >
                </del>
              </div>
            </div>
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
          <AppButton
            background="app-bg-primary"
            icon="shopping cart"
            width="100%"
            height="37px"
            :name="$t('add to shopping card')"
          />
        </div>
      </div> </template
  ></AppCard>
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
.card-w-200 {
  width: 200px;
}
.card-w-290 {
  width: 290px;
}
</style>
