<template>
  <div class="d-flex flex-column">
    <span class="f-s-14 f-w-600">
      {{ name }}
    </span>
    <div
      class="bg-primary-100"
      :class="{ line: hasLine }"
      :style="{ width: `${width}` }"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
    required: false,
  },
  width: {
    type: String,
    default: "",
    required: false,
  },
  hasLine: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
.line {
  height: 2px;
}
</style>
