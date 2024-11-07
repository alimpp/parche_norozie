<template>
  <div class="app-flex">
    <span class="f-s-12 f-w-600">{{ route }}</span>
    <span class="f-s-12 f-w-600 app-px-1">/</span>
    <span class="f-s-12 f-w-600">{{ child }}</span>
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
