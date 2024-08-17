<template>
  <button
    class="app-button"
    :style="{ width: `${width}`, height: `${height}` }"
    :class="[background]"
    :disabled="disabled"
  >
    <v-progress-circular indeterminate v-if="loading"></v-progress-circular>
    <span v-else>
      {{ name }}
    </span>
  </button>
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

.custom-border-danger {
  background: none;
  border: 1px solid #ff3333;
  border-radius: 30px;
  color: #ff3333;
}

.custom-dark-btn {
  background: #353535;
  border: 2px solid #252525;
  color: #fff;
}
</style>
