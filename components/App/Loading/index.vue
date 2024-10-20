<template>
  <div
    class="app-w-100 app-flex app-justify-center app-align-center"
    :style="{ height: height }"
  >
    <div class="loader"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  height: {
    type: String,
    default: "75dvh",
  },
});
</script>

<style scoped>
.loader {
  position: relative;
  border: 24px solid;
  border-color: #7b7be3 transparent #7b7be3 transparent;
  animation: rotate 2s linear infinite;
}
.loader:before,
.loader:after {
  content: "";
  display: block;
  border: 24px solid transparent;
  border-left-color: #7b7be3;
  position: absolute;
  left: -24px;
  top: -24px;
  animation: mvx 1s infinite linear;
}
.loader:before {
  border-color: transparent #7b7be3 transparent transparent;
  animation-name: mvrx;
  animation-delay: 0.5s;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes mvx {
  20%,
  80% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
}
@keyframes mvrx {
  20%,
  80% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(50%);
  }
}
</style>
