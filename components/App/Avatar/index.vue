<
<template>
  <div
    class="app-avatar app-flex app-justify-center app-align-center"
    :style="{
      width: `${width}`,
      height: `${height}`,
    }"
    :class="[background]"
  >
    <span class="app-font-size-16 app-font-weight-900">{{ name }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "60px",
  },
  height: {
    type: String,
    default: "60px",
  },
  name: {
    type: String,
    default: "",
  },
  background: {
    type: String,
    default: "bg-primary-100",
  },
});
</script>

<style>
.app-avatar {
  border-radius: 50%;
}
</style>
