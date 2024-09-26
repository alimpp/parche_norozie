<template>
  <div class="skeleton-loader">
    <div
      class="skeleton-content app-border-radius"
      :style="{
        width: `${width}`,
      }"
    >
      <div class="animation-content"></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.skeleton-loader {
  padding: 5px 0;
}

.skeleton-content {
  height: 24px;
  background-color: #e0e0e0;
  display: flex;
  justify-content: end;
}

.animation-content {
  width: 1px;
  height: 24px;
  background: rgb(255, 255, 255);
  box-shadow: 15px 20px 30px 30px #ffffff8e;
  animation: 1.2s skelton infinite;
  margin-left: 100px;
}

@keyframes skelton {
  0% {
    margin-left: 0;
  }
  100% {
    margin-left: 400px;
  }
}
</style>
