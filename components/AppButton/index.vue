<template>
  <div class="app-button" :class="[background]">
    {{ name }}
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  background: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.app-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  padding: 0px 15px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
