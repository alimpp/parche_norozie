<
<template>
  <div
    class="app-bg-primary app-avatar app-flex app-justify-center app-align-center"
  >
    <span>{{ name }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>

<style>
.app-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>
