<template>
  <AppCard
    data-aos="fade-up"
    class="app-mx-3 app-mt-3"
    width="350px"
    v-if="
      themeStore.wighet.product.display == 'row' && themeStore.refresh == false
    "
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
                    :src="image"
                    alt="image"
                    loading="lazy"
                  />
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
          </v-carousel>
        </div>
        <div
          class="app-flex app-flex-column app-w-100 app-px-3 app-pt-1"
          style="width: 200px"
        >
          <div>
            <span class="f-s-12 f-w-500 float-right">{{ data.name }}</span>
            <span
              class="app-pointer float-left"
              @click="removeFromFavorite"
            >
              <v-tooltip :text="$t('remove from favorite')" location="bottom">
                <template v-slot:activator="{ props }">
                  <AppIconContent
                    color="bg-danger-transparent"
                    class="color-danger app-pointer"
                    v-bind="props"
                    ><TrashIcon size="1x"></TrashIcon
                  ></AppIconContent>
                </template>
              </v-tooltip>
            </span>
          </div>

          <span class="f-s-10 f-w-500 color-gray">{{
            data.category.Title
          }}</span>

          <span
            v-if="data.discount > 1"
            class="bg-danger-100 f-s-12 app-border-radius app-px-2 app-flex app-align-center app-justify-center"
            style="width: 80px"
          >
            % {{ data.discount }} {{ $t("discount") }}
          </span>
          <div class="app-flex app-justify-end" v-if="data.discount > 1">
            <span
              style="auto"
              class="app-flex app-justify-end app-mt-4 app-w-600 app-border-radius"
            >
              <span class="f-s-12 f-w-100"
                >{{ data.price_after_discount }} {{ $t("toman") }}</span
              >
            </span>
          </div>
          <div
            v-else
            class="app-flex app-flex-column app-justify-end app-align-end app-pt-2"
          >
            <span class="f-s-12 f-w-100"
              >{{ data.price }} {{ $t("toman") }}</span
            >
            <div class="app-flex">
              <IconsStar v-for="n in 5" />
            </div>
          </div>
          <AppButton
            :name="$t('order product')"
            background="bg-primary-100"
            height="30px"
            class="app-mt-2"
            :class="{ 'app-mt-6': data.discount == 0 }"
            @click="getProduct"
          >
            <template #iconLeft>
              <IconsShoppingCard></IconsShoppingCard>
            </template>
          </AppButton>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
import { useFavoriteStore } from "~/store/favorite";
import { useProductStore } from "~/store/admin/product";

const themeStore = useThemeStore();
const favoriteStore = useFavoriteStore();
const productStore = useProductStore();

const props = defineProps({
  data: {
    default: {},
    type: Object,
  },
});

const removeFromFavorite = async () => {
  await favoriteStore.removeFavorite(props.data.ID);
};

const getProduct = () => {
  productStore.product = props.data;
  navigateTo(`/products/${props.data.ID}`);
};
</script>

<style scoped>
.bg-discount {
  background: #9999992c;
}
.discount-style {
  color: #666666;
  position: relative;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
</style>
