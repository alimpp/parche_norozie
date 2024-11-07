<template>
  <div
    class="app-flex app-align-center app-justify-center app-px-2"
    :class="[color]"
    :style="{
      width: width,
      height: height,
      background: background,
      borderRadius: borderRadius,
    }"
  >
    <slot name="iconRight"></slot>
    <span class="app-font-weight-500" :style="{ fontSize: fontSize }">{{
      text
    }}</span>
    <slot name="iconLeft"></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "30px",
  },
  text: {
    type: String,
    default: "",
  },
  background: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  borderRadius: {
    type: String,
    default: "6px",
  },
  fontSize: {
    type: String,
    default: "10px",
  },
});
</script>
