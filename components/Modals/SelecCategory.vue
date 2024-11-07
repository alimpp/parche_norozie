<template>
  <AppModal width="380px" :state="state" :title="title" @close="emit('close')">
    <template #content>
      <div class="app-w-100 app-flex app-flex-column app-px-3">
        <div
          class="app-flex app-align-center app-pointer app-py-2 app-border app-border-radius app-mb-2 app-px-2"
          v-for="(data, index) in dataSource"
          :key="index"
          @click="selected(data)"
        >
          <span class="f-s-14 f-w-600">{{ data.Title }}</span>
          <span
            class="f-s-14 f-w-600 app-flex app-px-1"
            v-for="(sub, index) in data.subcategories"
            :key="index"
          >
            <span class="f-s-14 f-w-600">/</span>
            {{ sub.Title }}
          </span>
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { useCategoryStore } from "~/store/admin/category";
const emit = defineEmits(["selected", "close"]);

const categoryStore = useCategoryStore();

const dataSource = computed(() => {
  return categoryStore.categories;
});

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
});

const selected = (data) => {
  emit("selected", data);
  emit("close");
};

onMounted(async () => {
  await categoryStore.categoryList();
});
</script>
