<template>
  <div class="app-w-100 app-flex app-flex-column">
    <span class="app-font-size-14 app-font-weight-600 app-py-2">
      {{ label }}
    </span>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :class="{
        error: error,
        'app-color-white': themeStore.theme == 'dark',
        'app-color-white': themeStore.theme == 'custom',
      }"
      :disabled="disabled"
      class="app-border-radius"
      :placeholder="placeholder"
    />
    <span
      v-if="error"
      class="app-font-size-12 app-font-weight-600 app-color-danger app-py-2"
    >
      {{ messageError }}
    </span>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
    required: false,
  },
  label: {
    type: String,
    default: "",
    required: false,
  },
  type: {
    type: String,
    default: "",
    required: false,
  },
  error: {
    type: Boolean,
    default: false,
    required: false,
  },
  messageError: {
    type: String,
    default: "",
    required: false,
  },
  modelValue: {
    type: String,
    default: "",
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
    required: false,
  },
});
</script>

<style scoped lang="scss">
input {
  width: 100%;
  height: 44px;
  padding: 0 7px;
  border: 1px solid #a4a4a48b;
  outline: none;
}

.error {
  border: 2px solid #f50000;
  color: #f50000;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
