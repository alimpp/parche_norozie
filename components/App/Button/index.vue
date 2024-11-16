<template>
  <button
    class="app-button"
    :style="{ width: `${width}`, height: `${height}` }"
    :class="[background]"
    :disabled="disabled"
  >
    <v-progress-circular indeterminate v-if="loading"></v-progress-circular>
    <div class="app-flex app-align-center" v-else>
      <span :class="[fontSize, fontWight, color]"> {{ name }}</span>
    </div>
  </button>
</template>

<script setup>
const props = defineProps({
  color: {
    type: String,
    default: "",
  },
  fontSize: {
    type: String,
    default: "f-s-14",
  },
  fontWight: {
    type: String,
    default: "f-w-500",
  },
  name: {
    type: String,
    default: "",
  },
  background: {
    type: String,
    default: "",
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "37px",
  },
  icon: {
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
  height: 44px;
  padding: 0px 15px;
  border-radius: 6px;
  cursor: pointer;
}

.custom-border-primary {
  background: none;
  border: 1px solid #7b7be3;
  border-radius: 30px;
  color: #7b7be3;
}

.app-border-light {
  border: 1px solid #fff;
  color: #fff;
}
</style>
