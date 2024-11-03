<template>
  <div>
    <AppModal
      width="400px"
      :state="state"
      @close="emit('close')"
      :title="$t('filter by')"
    >
      <template #content>
        <div class="app-flex app-w-100 app-px-2 app-py-4">
          <div class="app-w-100">
            <AppInput
              height="35px"
              :label="$t('name')"
              class=""
              v-model="filter"
              @keyup.enter="search"
            />
            <AppButton
              class="app-mt-4"
              :name="$t('search')"
              background="app-bg-primary"
              height="32px"
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
