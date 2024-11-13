<template>
  <AppModal
    width="70%"
    :state="state"
    @close="emit('close')"
    :title="$t('product list')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 py-4 container">
        <div
          class="bg-primary-transparent app-border-radius app-py-1 app-px-1 app-flex app-flex-column"
        >
          <span class="f-s-12 f-w-500 color-primary"
            >. {{ $t("warehouse modal guide 1") }}</span
          >
        </div>
        <div class="">
          <AppLoading height="70dvh" v-if="loading" />
          <div v-else>
            <AppEmptyContent v-if="dataSource.length == 0" height="70dvh" />
            <CardsWarehouseModal
              v-else
              v-for="data in dataSource"
              :data="data"
              class="app-mt-3 fade_animations"
              @selectedId="selectedId"
            />
          </div>
        </div>
      </div>
      <div class="mx-6 my-2">
        <AppButton
          :name="$t('close')"
          background="bg-primary-100"
          :loading="loading"
          @click="submit"
        />
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { useProductStore } from "~/store/admin/product";
import { useWarehouseStore } from "~/store/admin/warehouse";

const productStore = useProductStore();
const warehouseStore = useWarehouseStore();
const dataSource = computed(() => {
  return productStore.products;
});
const loading = computed(() => {
  return productStore.loading;
});
const warehouseList = computed(() => {
  return warehouseStore.warehouseList;
});
const filteredList = ref([]);

const emit = defineEmits(["close"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
  data: {
    type: Object,
    default: {},
  },
});

const selectedId = (id) => {
  filteredList.value.splice(id, 1);
};

const submit = () => {
  emit("close");
};

onMounted(async () => {
  await warehouseStore.storageList();
  await warehouseStore.accessProducts();
});
</script>

<style scoped>
.container {
  max-height: 80vh;
  overflow-y: scroll;
  background-color: rgba(159, 161, 170, 0.151);
}
</style>
