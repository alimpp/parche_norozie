<template>
  <div class="d-flex flex-column">
    <span class="app-font-size-14 app-font-weight-600">
      {{ name }}
    </span>
    <div
      class="app-bg-primary"
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
