<template>
  <AppCard>
    <template #content>
      <div class="app-flex app-w-100 app-py-2 app-px-4">
        <div class="app-w-50 app-flex app-flex-column">
          <span class="app-font-size-14 app-font-weight-600"
            >{{ $t("category name") }} :</span
          >
          <span class="app-font-size-12 app-font-weight-600">{{
            data.Title
          }}</span>
          <span
            class="app-font-size-14 app-font-weight-600"
            v-if="data.subcategories[0]"
            >{{ $t("branch category") }} :</span
          >
          <span
            class="app-font-size-12 app-font-weight-600"
            v-for="(sub, index) in data.subcategories"
            :key="index"
            >{{ sub.Title }}</span
          >
        </div>

        <div class="app-w-50 app-flex app-justify-end app-align-center">
          <span
            class="app-color-danger app-pointer app-pt-2"
            @click="removeCategory"
          >
            <TrashIcon size="1x"></TrashIcon>
          </span>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { useCategoryStore } from "~/store/admin/category";

const categoryStore = useCategoryStore();

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});

const removeCategory = () => {
  categoryStore.removeCategory(props.data.ID);
};
</script>
