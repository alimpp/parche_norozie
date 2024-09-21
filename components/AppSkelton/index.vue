<template>
  <div class="skeleton-loader">
    <div
      class="skeleton-content app-border-radius"
      :style="{
        width: `${width}`,
      }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.skeleton-loader {
  padding: 5px 0;
}

.skeleton-content {
  height: 24px;
  background-color: #e0e0e0;
  animation: shimmer 1.2s infinite;
}

@keyframes shimmer {
  0% {
    background-color: #e0e0e00c;
  }
  100% {
    background-color: #e0e0e0;
  }
}
</style>
