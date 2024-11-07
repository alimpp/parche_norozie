<template>
  <div>
    <AppModal
      width="400px"
      :state="state"
      @close="emit('close')"
      :title="$t('search')"
    >
      <template #content>
        <div class="app-flex app-w-100 app-px-2 app-py-4">
          <div class="app-w-100">
            <AppInput
              height="35px"
              :label="$t('title')"
              class=""
              v-model="filter"
              @keyup.enter="search"
            />
            <AppButton
              width="100%"
              class="app-mt-4"
              :name="$t('search')"
              background="bg-primary-100"
              fontSize="app-font-size-12"
              @click="search"
            />
          </div>
        </div>
      </template>
    </AppModal>
  </div>
</template>

<script setup>
const emit = defineEmits(["close", "search"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});

const filter = ref("");

const search = () => {
  emit("close");
  emit("search", filter.value);
  filter.value = "";
};
</script>
