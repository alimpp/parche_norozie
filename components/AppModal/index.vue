<template>
  <div class="app-modal-content" v-if="state">
    <AppCard width="380px" class="slid-right-animation-3">
      <template #content>
        <div
          class="app-w-100 app-flex app-justify-end app-px-1 app-py-1"
          @click="emit('close')"
        >
          <XIcon size="1.5x" class="custom-class app-pointer"></XIcon>
        </div>
        <slot name="content"></slot>
      </template>
    </AppCard>
  </div>
</template>

<script setup>
const emit = defineEmits(["close"]);
const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.app-modal-content {
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(8, 10, 10, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(0px);
  transition: 1s;
}
</style>
