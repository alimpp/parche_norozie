<template>
  <div class="app-flex">
    <span class="app-font-size-12 app-font-weight-600">{{ route }}</span>
    <span class="app-font-size-12 app-font-weight-600 app-px-1">/</span>
    <span class="app-font-size-12 app-font-weight-600">{{ child }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  route: {
    type: String,
    default: "",
  },
  child: {
    type: String,
    default: "",
  },
});
</script>
