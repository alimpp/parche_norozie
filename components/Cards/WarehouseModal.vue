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
                  {{ data.category.Title }}
                </span>
              </div>
            </div>
          </div>
          <div class="app-w-50 app-flex app-justify-end app-align-center">
            <span class="app-pointer app-mx-2" @click="addToWarehouse">
              <v-tooltip :text="$t('add to warehouse')" location="bottom">
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
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { useWarehouseStore } from "~/store/admin/warehouse";

const warehouseStore = useWarehouseStore();
const selected = ref(false);
const selectedId = ref({
  product_id: 0,
});
const emit = defineEmits("selectedId");

const props = defineProps({
  data: {
    default: {},
    type: Object,
  },
});

const addToWarehouse = () => {
  selected.value = true;
  selectedId.value.product_id = props.data.ID;
  emit("selectedId", props.data.id);
  warehouseStore.addStorage(selectedId.value);
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

</style>
