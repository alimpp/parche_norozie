<template>
  <AppModal width="380px" :state="state" @close="emit('close')">
    <template #content>
      <div class="app-px-3 app-py-3">
        <FilterBarContent />
      </div>
    </template>
  </AppModal>
</template>

<script setup>
const emit = defineEmits(["close"]);

const loading = ref(false);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});
</script>
