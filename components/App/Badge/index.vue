<template>
  <div class="app-badge app-bg-danger">{{ badge }}</div>
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
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}
</style>
