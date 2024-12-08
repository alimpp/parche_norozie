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
    <tr v-for="(item, index) in form" :key="index">
      <td style="width: 16%; text-align: center">
        <span class="bg-danger-transparent app-py-2 app-px-2 app-border-radius">
          {{ item.ID }}
        </span>
      </td>
      <td style="width: 16%; text-align: center">
        {{ item.name }}
      </td>
      <td style="width: 16%; align-items: center">
        <AppInput
          height="32px"
          placeholder="قیمت"
          class="pb-4"
          v-model="item.price"
        />
      </td>
      <td style="width: 16%; align-items: center">
        <AppInput
          height="32px"
          placeholder="درصد تخفیف"
          class="pb-4 pr-2"
          v-model="item.discount"
        />
      </td>
      <td style="width: 16%; align-items: center">
        <AppInput
          height="32px"
          placeholder="قیمت نهایی"
          class="pb-4 pr-2"
          v-model="item.price_after_discount"
        />
      </td>
      <td>
        <div class="app-w-100 app-flex app-justify-center app-align-center">
          <AppButton
            height="32px"
            class=""
            :name="$t('submit')"
            background="bg-primary-100"
            fontSize="f-s-12"
            @click="submit(item)"
          />
        </div>
      </td>
    </tr>
  </table>
</template>

<script setup>
import { usePricingStore } from "~/store/admin/pricing";

const pricingStore = usePricingStore();

const header = ref([
  { title: "شناسه محصول", width: "16%" },
  { title: "نام محصول", width: "16%" },
  { title: "قیمت", width: "16%" },
  { title: "درصد تخفیف", width: "16%" },
  { title: "قیمت نهایی", width: "16%" },
  { title: "اعمال ", width: "16%" },
]);

const form = ref({
  attributes: [],
  category_id: 0,
  description: "",
  discount: 0,
  media: [],
  name: "",
  price: 0,
  properties: [],
  tags: [],
  price_after_discount: 0,
});

const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
});

const submit = async (item) => {
  await pricingStore.updatePrice(item);
};

onMounted(() => {
  form.value = props.items;
});
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
