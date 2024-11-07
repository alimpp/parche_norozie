<template>
  <div class="app-w-100 app-flex app-flex-column">
    <span class="f-s--14 f-w-600 app-py-2">
      {{ label }}
    </span>
    <input
      :style="{
        height: `${height}`,
      }"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :class="{
        error: error,
        bgwhite: themeStore.theme == 'light',
        'app-color-white': themeStore.theme != 'light',
      }"
      :disabled="disabled"
      class="app-border-radius app-border"
      :placeholder="placeholder"
    />
    <span v-if="error" class="f-s--12 f-w-600 app-color-danger app-py-2">
      {{ messageError }}
    </span>
  </div>
</template>

<script setup>
import { useThemeStore } from "~/store/theme";

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
  height: {
    type: String,
    default: "45px",
  },
});
</script>

<style scoped lang="scss">
input {
  width: 100%;
  padding: 0 7px;
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
