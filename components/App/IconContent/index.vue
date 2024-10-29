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
  background: rgba(9, 247, 9, 0.648);
}
.danger {
  background: rgba(255, 0, 0, 0.607);
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
