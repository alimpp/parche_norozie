<template>
  <AppCard class="app-mt-2">
    <template #content>
      <div class="app-flex app-w-100">
        <div class="image-slide">
          <v-carousel
            height="200"
            hide-delimiters
            cycle
            :interval="6000"
            :show-arrows="false"
          >
            <v-carousel-item v-for="image in data.images" :key="i">
              <v-sheet height="100%">
                <img
                  class="app-w-100"
                  style="height: 200px; width: 200px"
                  :src="image"
                  alt="image"
                  loading="lazy"
                />
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
        <div class="app-flex app-w-100">
          <div class="product-info">
            <span
              style="width: 60px"
              class="app-flex app-align-center app-justify-center bg-primary-transparent color-primary app-border-radius"
            >
              <span>{{ data.ID }}</span>
              <HashIcon size="0.8x"></HashIcon>
            </span>
            <div class="app-mt-1">
              <span class="f-s-12 f-w-600">{{ data.name }}</span>
            </div>
            <div class="app-flex app-mt-1">
              <span class="f-s-12 f-w-600">{{ $t("price") }} </span>
              <span
                class="f-s-12 f-w-600 app-px-4 app-mx-2 bg-primary-transparent color-primary app-border-radius"
                >{{ data.price }} {{ $t("toman") }}</span
              >
            </div>
            <div class="app-flex app-mt-1">
              <span class="f-s-12 f-w-600">{{ $t("discount_") }} </span>
              <span
                class="f-s-12 f-w-600 app-px-4 app-mx-2 bg-primary-transparent color-primary app-border-radius"
                >{{ data.discount }} %</span
              >
            </div>
            <div class="app-flex app-mt-1">
              <span class="f-s-12 f-w-600"
                >{{ $t("price after discount") }}
              </span>
              <span
                class="f-s-12 f-w-600 app-px-4 app-mx-2 bg-primary-transparent color-primary app-border-radius"
                >{{ data.price_after_discount }} {{ $t("toman") }}</span
              >
            </div>

            <div class="app-flex app-mt-1">
              <span class="f-s-12 f-w-600">{{ $t("category") }}</span>
              <div>
                <span
                  class="f-s-12 f-w-600 app-px-4 app-py-1 bg-primary-transparent color-primary app-border-radius"
                >
                  {{ data.category }}
                </span>
              </div>
            </div>
          </div>
          <div
            class="app-flex app-flex-column app-w-100 app-justify-end content"
          >
            <div class="app-w-100 app-flex app-justify-end mb-4 px-2">
              <span class="app-pointer app-mx-1 mt-11" @click="decreaseStock">
                <v-tooltip :text="$t('increase inventory')" location="bottom">
                  <template v-slot:activator="{ props }">
                    <AppIconContent
                      color="bg-danger-transparent"
                      class="color-danger app-pointer"
                      v-bind="props"
                      ><MinusIcon size="1x"></MinusIcon
                    ></AppIconContent>
                  </template>
                </v-tooltip>
              </span>
              <div class="app-w-10 mx-1 pb-4">
                <AppInput
                  height="30px"
                  v-model="stock"
                  :label="$t('inventory')"
                  @keyup="inputValue"
                  type="number"
                />
              </div>
              <span class="app-pointer px-1 mt-11" @click="increaseStock">
                <v-tooltip :text="$t('increase inventory')" location="bottom">
                  <template v-slot:activator="{ props }">
                    <AppIconContent
                      color="bg-primary-transparent"
                      class="color-primary app-pointer"
                      v-bind="props"
                      ><PlusIcon size="1x"></PlusIcon
                    ></AppIconContent>
                  </template>
                </v-tooltip>
              </span>
            </div>
            <div class="app-w-100 app-flex app-justify-end px-4 pb-4">
              <AppButton
                :name="$t('submit')"
                background="bg-primary-100"
                :loading="loading"
                @click="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { useWarehouseStore } from "~/store/admin/warehouse";

const stock = ref(0);
const warehouseStore = useWarehouseStore();


const props = defineProps({
  data: {
    default: {},
    type: Object,
  },
});

const increaseStock = () => {
  stock.value++;
};
const decreaseStock = () => {
  if (stock.value > 0) {
    stock.value--;
  }
};

const inputValue = () => {
  stock.value = Number(stock.value);
};

const submit = () => {
  warehouseStore.updateStorage({
    product_id: props.data.ID,
    stock: stock.value,
  });
};
</script>

<style scoped>
.image-slide {
  width: 200px;
  height: 200px;
}

.product-info {
  width: 50%;
  padding: 10px 10px;
}
.content {
  height: 200px;
}
</style>
