<template>
  <span class="f-s--12 f-w-900"
    ><span v-if="totalSeconds.sec < 10">0</span
    ><span>{{ totalSeconds.sec }}</span> : <span>0{{ totalSeconds.min }}</span>
  </span>
</template>

<script setup>
const emit = defineEmits(["stop"]);

const props = defineProps({
  starterFlag: {
    type: String,
    default: "stop",
  },
});

const totalSeconds = ref({
  min: 1,
  sec: 59,
});

const startMethod = () => {
  let start = setInterval(() => {
    if (totalSeconds.value.sec > 1) {
      totalSeconds.value.sec--;
    } else if (totalSeconds.value.min == 1 && totalSeconds.value.sec == 1) {
      totalSeconds.value.sec = 59;
      totalSeconds.value.min = 0;
    } else if (totalSeconds.value.min == 0 && totalSeconds.value.sec == 1) {
      totalSeconds.value.sec = 0;
      totalSeconds.value.min = 0;
      clearInterval(start);
      emit("stop");
    }
  }, 1000);
};

watch(
  () => props.starterFlag,
  (newValue) => {
    switch (newValue) {
      case "start":
        startMethod();
        break;
      case "reset":
        totalSeconds.value.sec = 59;
        totalSeconds.value.min = 1;
        setTimeout(() => {
          startMethod();
        }, 0);
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
