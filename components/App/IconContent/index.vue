<template>
  <div
    class="style"
    :class="[color]"
    :style="{ width: `${width}`, height: `${height}` }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "30px",
  },
  height: {
    type: String,
    default: "30px",
  },
});
</script>

<style scoped>
.success {
  background: rgba(0, 255, 0, 0.684);
}
.danger {
  background: rgba(245, 49, 49, 0.84);
}
.style {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>
