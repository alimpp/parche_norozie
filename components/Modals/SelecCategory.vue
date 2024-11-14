<template>
  <AppModal width="500px" :state="state" :title="title" @close="emit('close')">
    <template #content>
      <div class="app-w-100 app-flex app-flex-column app-px-3 py-3">
        <div
          class="app-flex app-align-center app-pointer deactive-style app-border-radius"
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
    <template #icon>
      <AppIconContent>
        <CheckCircleIcon class="color-primary" size="1.5x"></CheckCircleIcon>
      </AppIconContent>
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

<style scoped>
.deactive-style {
  padding: 5px 5px;
  background: #d7d7d751;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px 1px;
  transition: 0.5s;
}
</style>
