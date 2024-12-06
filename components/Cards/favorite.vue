<template>
  <AppCard data-aos="fade-up" class="app-mx-3 app-mt-3" width="300px">
    <template #content>
      <div class="app-flex flex-column">
        <v-carousel
          height="250"
          hide-delimiters
          cycle
          :interval="6000"
          :show-arrows="false"
        >
          <v-carousel-item v-for="image in data.images" :key="i">
            <v-sheet height="100%">
              <img
                class="app-w-100"
                style="height: 250px"
                :src="image"
                alt="image"
                loading="lazy"
              />
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <div
          class="app-flex app-flex-column app-w-100 app-px-3 app-py-3"
          style="width: 300px"
        >
          <span class="f-s-12 f-w-600">{{ data.name }}</span>
          <div class="app-flex">
            <span class="f-s-10 f-w-600">{{ $t("category") }} /</span>
            <span class="f-s-10 f-w-600 app-px-1">{{
              data.category.Title
            }}</span>
          </div>
          <div v-if="data.discount > 1" class="app-w-100 app-flex app-py-5">
            <div class="app-w-50 app-flex">
              <span
                class="bg-danger-100 f-s-12 app-border-radius app-px-2 app-flex app-align-center app-justify-center"
                style="width: 80px"
              >
                % {{ data.discount }} {{ $t("discount") }}
              </span>
            </div>
            <div class="app-w-50 app-flex app-justify-end app-align-center">
              <span class="f-s-14 f-w-600"
                >{{ data.price_after_discount }} {{ $t("toman") }}</span
              >
            </div>
          </div>
          <div
            v-else
            class="app-flex app-flex-column app-justify-end app-align-end app-pt-2"
          >
            <span class="f-s-14 f-w-600"
              >{{ data.price }} {{ $t("toman") }}</span
            >
            <div class="app-flex">
              <IconsStar v-for="n in 5" />
            </div>
          </div>
          <div
            class="app-flex w-100 app-mt-2"
            :class="{ 'app-mt-6': data.discount == 0 }"
          >
            <span
              class="color-white app-pointer ml-2"
              @click="removeFromFavorite"
            >
              <v-tooltip :text="$t('remove')" location="bottom">
                <template v-slot:activator="{ props }">
                  <AppIconContent
                    color="bg-danger-transparent"
                    class="color-danger app-pointer"
                    v-bind="props"
                    height="36px"
                    width="36px"
                    ><TrashIcon size="1x"></TrashIcon
                  ></AppIconContent>
                </template>
              </v-tooltip>
            </span>
            <AppButton
              :name="$t('order product')"
              background="bg-primary-100"
              @click="getProduct"
              width="232px"
            >
              <template #iconLeft>
                <IconsShoppingCard></IconsShoppingCard>
              </template>
            </AppButton>
          </div>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { useFavoriteStore } from "~/store/favorite";
import { useProductStore } from "~/store/admin/product";

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
