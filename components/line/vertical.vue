<template>
  <div class="bg-gray-500" :style="{ width: width, height: height }"></div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "2px",
  },
  height: {
    type: String,
    default: "30px",
  },
});
</script>
