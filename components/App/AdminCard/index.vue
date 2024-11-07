<template>
  <div
    :style="{
      width: `${width}`,
    }"
    class="app-border-radius overflow-hidden bg-element-dark border-card"
  >
    <slot name="content"></slot>
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
.border-card {
  border: 1px solid #ffffff41;
}
</style>
