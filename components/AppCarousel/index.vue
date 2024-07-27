<template>
  <div class="content" :style="{ backgroundImage: `url(${active.image})` }">
    <div class="glass">
      <span class="app-font-size-18 app-color-white">{{ active.title }}</span>
      <AppButton class="app-mt-4" name="بازدید" background="app-bg-white" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  dataSource: {
    type: Array,
    default: () => [],
  },
  cycleTime: {
    type: Number,
    default: 1000,
  },
});

const active = ref("");
const animation = ref(false);

const next = () => {
  animation.value = true;
  const slideItemsLength = props.dataSource.length;
  let index = props.dataSource.indexOf(active.value);
  const nextSlideIndex = index + 1;
  if (slideItemsLength > nextSlideIndex) {
    active.value = props.dataSource[nextSlideIndex];
  } else {
    active.value = props.dataSource[0];
  }
  setTimeout(() => {
    animation.value = false;
  }, 100);
};

const prev = () => {
  animation.value = true;
  const slideItemsLength = props.dataSource.length - 1;
  let index = props.dataSource.indexOf(active.value);
  const nextSlideIndex = index - 1;
  if (nextSlideIndex == -1) {
    active.value = props.dataSource[slideItemsLength];
  } else {
    active.value = props.dataSource[nextSlideIndex];
  }
  setTimeout(() => {
    animation.value = false;
  }, 100);
};

onMounted(() => {
  active.value = props.dataSource[0];
  setInterval(() => {
    animation.value = true;
    const slideItemsLength = props.dataSource.length;
    let index = props.dataSource.indexOf(active.value);
    const nextSlideIndex = index + 1;
    if (slideItemsLength > nextSlideIndex) {
      active.value = props.dataSource[nextSlideIndex];
    } else {
      active.value = props.dataSource[0];
    }
    setTimeout(() => {
      animation.value = false;
    }, 100);
  }, 3000);
});
</script>

<style scoped>
.content {
  width: 100%;
  height: 80vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.glass {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 50px;
  background: rgba(0, 0, 0, 0.536);
}
</style>
