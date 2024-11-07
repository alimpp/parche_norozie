<template>
  <div class="app-badge bg-danger-100">{{ badge }}</div>
</template>

<script setup>
const props = defineProps({
  badge: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped>
.app-badge {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
}
</style>
