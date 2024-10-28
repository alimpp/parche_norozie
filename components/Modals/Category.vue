<template>
  <AppModal
    width="50%"
    :state="state"
    @close="close"
    :title="$t('create category')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 app-py-2 container">
        <div class="app-flex app-flex-column app-w-100">
          <AppInput
            height="35px"
            :label="$t('title')"
            v-model="form.title"
            @keyup.enter="submit"
          />
        </div>
        <div>
          <AppButton
            class="app-mt-4"
            :name="$t('submit')"
            background="app-bg-primary"
            :loading="loading"
            @click="submit"
          />
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { useCategoryStore } from "~/store/admin/category";
const categoryStore = useCategoryStore();

const emit = defineEmits(["close"]);

const close = () => {
  form.value = {
    parent_id: null,
    title: "",
  };
  emit("close");
};

const form = ref({
  parent_id: null,
  title: "",
});

const loading = ref(false);

const submit = async () => {
  loading.value = true;
  await categoryStore.createCategory(form.value);
  loading.value = false;
  close();
};
</script>

<style scoped>
.container {
  max-height: 90vh;
  overflow-y: scroll;
}
.tags-container {
  max-height: 90vh;
  overflow-y: scroll;
}
</style>
