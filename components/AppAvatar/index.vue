<
<template>
  <div
    class="app-avatar app-flex app-justify-center app-align-center"
    :class="[background]"
  >
    <span class="app-font-size-16 app-font-weight-900">{{ name }}</span>
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
    default: "app-bg-primary",
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
