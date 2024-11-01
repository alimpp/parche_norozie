<template>
  <div class="style" :class="[color]">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "",
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
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>
