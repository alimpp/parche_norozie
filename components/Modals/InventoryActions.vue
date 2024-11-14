<template>
  <AppModal
    width="550px"
    :state="state"
    @close="close"
    :title="$t('increase inventory and decrease inventory')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 app-py-2">
        <div
          class="bg-primary-transparent app-border-radius app-py-1 app-px-1 app-flex app-flex-column"
        >
          <span class="f-s-12 f-w-500 color-primary"
            >. {{ $t("increase inventory and decrease inventory guide") }}</span
          >
        </div>
        <div class="app-flex app-flex-column app-w-100">
          <div
            class="app-w-100 app-flex app-flex-column app-justify-center app-align-center"
            v-if="mode == 'auto'"
          >
            <span class="f-s-20 f-w-600 app-pt-2">
              {{ $t("inventory") }}
            </span>
            <div class="app-flex">
              <v-tooltip :text="$t('increase inventory')" location="bottom">
                <template v-slot:activator="{ props }">
                  <AppIconContent
                    @click="increaseStock"
                    color="bg-primary-transparent"
                    class="color-primary app-pointer"
                    v-bind="props"
                    ><PlusIcon size="1x"></PlusIcon
                  ></AppIconContent>
                </template>
              </v-tooltip>
              <span class="f-s-20 f-w-600 color-primary app-px-4">
                {{ data.stock }}
              </span>
              <v-tooltip :text="$t('decrease inventory')" location="bottom">
                <template v-slot:activator="{ props }">
                  <AppIconContent
                    @click="decreaseStock"
                    color="bg-danger-transparent"
                    class="color-danger app-pointer"
                    v-bind="props"
                    ><MinusIcon size="1x"></MinusIcon
                  ></AppIconContent>
                </template>
              </v-tooltip>
            </div>
          </div>
        </div>
        <div class="app-flex app-w-100 app-justify-center app-align-center">
          <AppButton
            :name="$t('submit')"
            background="bg-primary-100"
            class="app-mt-2"
            @click="updateStock"
            :loading="loading"
          ></AppButton>
        </div>
      </div>
    </template>
    <template #icon>
      <AppIconContent color="bg-primary-100">
        <ActivityIcon size="1.5x"></ActivityIcon>
      </AppIconContent>
    </template>
  </AppModal>
</template>

<script setup>
import { useWarehouseStore } from "~/store/admin/warehouse";

const warehouseStore = useWarehouseStore();
const emit = defineEmits(["close"]);

const loading = ref(false);
const mode = ref("auto");

const increaseStock = () => {
  props.data.stock++;
};
const decreaseStock = () => {
  if (props.data.stock > 0) {
    props.data.stock--;
  }
};

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

const close = () => {
  props.data = {};
  emit("close");
};

const updateStock = async () => {
  loading.value = !loading.value;
  await warehouseStore.updateStock({
    product_id: props.data.ProductID,
    stock: props.data.stock,
  });
  await warehouseStore.storageList();
  loading.value = !loading.value;
};
</script>

<style scoped>
.container {
  max-height: 50dvh;
  overflow-y: scroll;
}

.active-style {
  border: 1px solid #98989835;
  background: #9898985c;
  border-radius: 5px;
  cursor: pointer;
  transition: 1s;
}
</style>
