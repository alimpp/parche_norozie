<template>
  <table class="app-w-100">
    <tr class="app-w-100">
      <th
        v-for="(item, index) in header"
        :key="index"
        :style="{ width: item.width }"
      >
        {{ item.title }}
      </th>
    </tr>
    <tr v-for="(item, index) in items" :key="index">
      <td style="width: 20%; text-align: center">
        <span
          class="bg-primary-transparent app-py-2 app-px-2 app-border-radius"
        >
          {{ item.ID }}
        </span>
      </td>
      <td style="width: 20%; text-align: center">
        <span class="bg-danger-transparent app-py-2 app-px-2 app-border-radius">
          {{ item.ProductID }}
        </span>
      </td>
      <td style="width: 20%; text-align: center">
        {{ item.name }}
      </td>
      <td style="width: 20%; text-align: center">
        {{ item.stock }}
      </td>
      <td style="width: 20%; text-align: center">
        <div class="app-flex app-justify-center app-align-center app-w-100">
          <v-tooltip :text="$t('remove')" location="bottom">
            <template v-slot:activator="{ props }">
              <AppIconContent
                color="bg-danger-transparent"
                class="color-danger app-pointer app-mx-2"
                v-bind="props"
                ><TrashIcon size="1x"></TrashIcon
              ></AppIconContent>
            </template>
          </v-tooltip>
          <v-tooltip :text="$t('increase inventory')" location="bottom">
            <template v-slot:activator="{ props }">
              <AppIconContent
                color="bg-primary-transparent"
                class="color-primary app-pointer app-mx-2"
                v-bind="props"
                @click="openModal(item)"
                ><PlusIcon size="1x"></PlusIcon
              ></AppIconContent>
            </template>
          </v-tooltip>
        </div>
      </td>
    </tr>
  </table>

  <ModalsInventoryActions
    :state="modalState"
    @close="modalState = false"
    :data="selectedData"
  />
</template>

<script setup>
const header = ref([
  { title: "شماره", width: "20%" },
  { title: "شناسه محصول", width: "20%" },
  { title: "نام محصول", width: "20%" },
  { title: "تعداد", width: "20%" },
  { title: "عملیات", width: "20%" },
]);

const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
});

const modalState = ref(false);
const selectedData = ref(null);

const openModal = (item) => {
  selectedData.value = item;
  modalState.value = true;
};
</script>

<style scoped>
table th {
  height: 50px;
  border-bottom: 1px solid #b8b3b349;
  font-size: 14px;
  font-weight: 600;
}
table td {
  height: 50px;
  border-bottom: 1px solid #b8b3b349;
  font-size: 12px;
  font-weight: 600;
}
</style>
