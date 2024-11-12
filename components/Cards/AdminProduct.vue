<template>
  <AppCard class="app-mt-3">
    <template #content>
      <ModalsConfrim
        :state="deleteState"
        :title="$t('delete product')"
        :text="$t('confirm delete product')"
        @confrim="deleteProduct"
        @cancel="deleteState = false"
        @close="deleteState = false"
        ><TrashIcon size="1.5x"></TrashIcon>
      </ModalsConfrim>
      <div class="app-flex app-w-100">
        <div class="image-slide">
          <v-carousel
            height="300"
            hide-delimiters
            cycle
            :interval="6000"
            :show-arrows="false"
          >
            <v-carousel-item v-for="image in data.images" :key="i">
              <v-sheet height="100%">
                <img
                  class="app-w-100"
                  style="height: 300px; width: 300px"
                  :src="image"
                  alt="image"
                  loading="lazy"
                />
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
        <div class="product-info">
          <span
            style="width: 60px"
            class="app-flex app-align-center app-justify-center bg-primary-transparent color-primary app-border-radius"
          >
            <HashIcon size="1x"></HashIcon>
            <span>{{ data.ID }}</span>
          </span>
          <div class="app-mt-2">
            <span class="f-s-12 f-w-600">{{ data.name }}</span>
          </div>
          <div class="app-flex app-mt-2">
            <span class="f-s-14 f-w-600">{{ $t("price") }} </span>
            <span
              class="f-s-14 f-w-600 app-px-4 app-mx-2 bg-primary-transparent color-primary app-border-radius"
              >{{ data.price }} {{ $t("toman") }}</span
            >
          </div>
          <div class="app-flex app-mt-2">
            <span class="f-s-14 f-w-600">{{ $t("discount_") }} </span>
            <span
              class="f-s-14 f-w-600 app-px-4 app-mx-2 bg-primary-transparent color-primary app-border-radius"
              >{{ data.discount }} %</span
            >
          </div>
          <div class="app-flex app-mt-2">
            <span class="f-s-14 f-w-600"
              >{{ $t("price after discount") }}
            </span>
            <span
              class="f-s-14 f-w-600 app-px-4 app-mx-2 bg-primary-transparent color-primary app-border-radius"
              >{{ data.price_after_discount }} {{ $t("toman") }}</span
            >
          </div>

          <div class="app-flex app-flex-column app-mt-2">
            <span class="f-s-12 f-w-600">{{ $t("category") }}</span>
            <div>
              <span
                class="f-s-12 f-w-600 app-px-4 app-py-1 bg-primary-transparent color-primary app-border-radius"
              >
                {{ data.category.Title }}
              </span>
            </div>
          </div>
          <div class="app-flex app-mt-6">
            <span class="app-pointer color-white" @click="editProduct">
              <v-tooltip :text="$t('edit')" location="bottom">
                <template v-slot:activator="{ props }">
                  <AppIconContent
                    color="bg-success-transparent"
                    class="color-success app-pointer"
                    v-bind="props"
                    ><EditIcon size="1x"></EditIcon
                  ></AppIconContent>
                </template>
              </v-tooltip>
            </span>
            <span
              class="color-white app-pointer app-px-2"
              @click="deleteState = true"
            >
              <v-tooltip :text="$t('remove')" location="bottom">
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
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
const deleteState = ref(false);

const emit = defineEmits(["deleteProduct", "editProduct"]);
const props = defineProps({
  data: {
    default: {},
    type: Object,
  },
});

const deleteProduct = () => {
  deleteState.value = false;
  emit("deleteProduct", props.data);
};

const editProduct = () => {
  emit("editProduct", props.data);
};
</script>

<style scoped>
.image-slide {
  width: 300px;
  height: 300px;
}

.product-info {
  width: 90%;
  padding: 10px 10px;
}
</style>
