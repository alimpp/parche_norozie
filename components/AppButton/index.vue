<template>
  <button
    class="app-button"
    :style="{ width: `${width}`, height: `${height}` }"
    :class="[background]"
    :disabled="disabled"
  >
    <v-progress-circular indeterminate v-if="loading"></v-progress-circular>
    <div class="app-flex app-align-center" v-else>
      <span class="app-font-size-14"> {{ name }}</span>
      <ShoppingCartIcon
        v-if="icon == 'shopping cart'"
        size="1x"
        class="custom-class app-pointer app-mx-2"
      ></ShoppingCartIcon>
    </div>
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
  border: 1px solid #ffa500;
  border-radius: 30px;
  color: #ffa500;
}

.app-border-light {
  border: 1px solid #fff;
  color: #fff;
}
</style>
