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
            height="210"
            hide-delimiters
            cycle
            :interval="3000"
            :show-arrows="false"
          >
            <v-carousel-item v-for="i in 5" :key="i">
              <v-sheet height="100%">
                <img
                  class="app-w-100"
                  style="height: 210px"
                  src="@/assets/images/about-us/IMG_5185.jpg"
                  alt="image"
                />
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>

        <div
          class="app-flex app-flex-column app-justify-center app-px-2 app-py-2"
          :class="{
            'card-w-200': themeStore.wighet.product.display == 'row',
            'card-w-290': themeStore.wighet.product.display == 'column',
          }"
        >
          <span class="app-font-size-14 app-font-weight-600"
            >رو تختی طرح رز</span
          >
          <span class="app-font-size-12 app-font-weight-600 app-color-gray"
            >کالای خواب</span
          >
          <div class="app-flex app-w-100">
            <div class="app-w-50">
              <span class="app-font-size-12 app-font-weight-600">قیمت :</span>
            </div>
            <div class="app-w-50 app-flex app-justify-end">
              <del>
                <span class="app-font-size-14 app-font-weight-600"
                  >2,100,000</span
                >
              </del>
              <!-- <span class="app-font-size-14 app-font-weight-600"
                >2,100,000</span
              > -->
            </div>
          </div>
          <div class="app-flex app-flex-column app-w-100">
            <span class="app-font-size-12 app-font-weight-600"
              >قیمت با تخفیف :</span
            >
            <span class="app-font-size-14 app-font-weight-600 app-color-primary"
              >1,100,000</span
            >
          </div>
          <AppButton
            background="app-bg-primary"
            height="37px"
            :name="$t('add to shopping card')"
            class="app-mt-2"
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
