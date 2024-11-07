<template>
  <div class="app-w-100 app-flex app-flex-column">
    <span class="f-s--14 f-w-600 app-py-2">
      {{ label }}
    </span>
    <textarea
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :type="type"
      :class="{
        error: error,
        bgwhite: themeStore.theme == 'light',
        'color-white': themeStore.theme != 'light',
      }"
      :disabled="disabled"
      class="app-border-radius app-border"
      :placeholder="placeholder"
    ></textarea>
    <span v-if="error" class="f-s--12 f-w-600 color-danger app-py-2">
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
});
</script>

<style scoped lang="scss">
textarea {
  width: 100%;
  height: 144px;
  padding: 0 7px;
  outline: none;
}

.error {
  border: 2px solid #f50000;
  color: #f50000;
}

textarea::-webkit-outer-spin-button,
textarea::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
