<template>
  <span class="app-font-size-12 app-font-weight-900">{{ totalSeconds }}</span>
</template>

<script setup>
const props = defineProps({
  starterFlag: {
    type: String,
    default: "stop",
  },
});

const totalSeconds = ref(5);


watch(
  () => props.starterFlag,
  (newValue) => {
    switch (newValue) {
      case "start":
        let start = setInterval(() => {
          totalSeconds.value--;
        }, 1000);
        setTimeout(() => {
          clearInterval(start);
          totalSeconds.value = 5;
        }, 5000);
        

        break;
      case "reset":
        let reStart = setInterval(() => {
          totalSeconds.value--;
        }, 1000);
        setTimeout(() => {
          clearInterval(reStart);
        }, 5000);
        

        break;
      default:
        return;
    }
  }
);
</script>

<style>
.button {
  background-color: rgba(0, 0, 255, 0.315);
  padding: 2px 6px;
  border-radius: 5px;
}
</style>
