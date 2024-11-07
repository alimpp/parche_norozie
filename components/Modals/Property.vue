<template>
  <AppModal
    width="380px"
    :state="state"
    @close="close"
    :title="$t('create property')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 app-py-2">
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
            background="bg-primary-100"
            :loading="loading"
            @click="submit"
          />
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
import { usePropertyStore } from "~/store/admin/property";
const propertyStore = usePropertyStore();

const emit = defineEmits(["close"]);

const form = ref({
  title: "",
});

const loading = ref(false);

const close = () => {
  form.value = {
    title: "",
  };
  emit("close");
};

const submit = async () => {
  if (form.value.title) {
    loading.value = true;
    await propertyStore.createProperty(form.value);
    loading.value = false;
    close();
  }
};
</script>
