<template>
  <AppModal
    width="380px"
    :state="state"
    @close="close"
    :title="$t('select category')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 app-py-2">
        <div
          class="bg-primary-transparent app-border-radius app-py-1 app-px-1 app-flex app-flex-column"
        >
          <span class="f-s-12 f-w-500 color-primary"
            >. {{ $t("search by category guide") }}</span
          >
        </div>
        <div></div>
        <span v-if="categoryList.length != 0" class="f-s-14 f-w-600 app-mt-5">{{
          $t("category")
        }}</span>
        <div class="app-w-100 app-flex app-flex-column container">
          <span
            @click="selectCategory(data)"
            class="deactive-style app-flex app-align-center app-pointer f-s-14 f-w-600"
            v-for="(data, index) in categoryList"
            :key="index"
          >
            <span class="app-px-1">{{ data.Title }}</span></span
          >
        </div>
      </div>
    </template>
    <template #icon>
      <AppIconContent color="bg-primary-100">
        <PlusIcon size="1.5x"></PlusIcon>
      </AppIconContent>
    </template>
  </AppModal>
</template>

<script setup>
import { useCategoryStore } from "~/store/admin/category";
import { useProductStore } from "~/store/admin/product";

const categoryStore = useCategoryStore();
const productStore = useProductStore();

const emit = defineEmits(["close"]);

const categoryList = computed(() => {
  return categoryStore.categories;
});

const selectCategory = async (data) => {
  await productStore.getByCategoryId(data.ID);
  close();
};

const close = () => {
  emit("close");
};

onMounted(async () => {
  await categoryStore.categoryList();
});
</script>

<style scoped>
.container {
  max-height: 50dvh;
  overflow-y: scroll;
}

.deactive-style {
  padding: 5px 5px;
  background: #d7d7d751;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 1px;
  transition: 0.5s;
}
</style>
