<template>
  <v-carousel
    height="400"
    hide-progress
    hide-delimiters
    cycle
    :interval="cycleTime"
    :show-arrows="false"
  >
    <v-carousel-item v-for="(slide, i) in dataSource" :key="i">
      <v-sheet height="80%">
        <div class="d-flex fill-height justify-center align-center">
          <div
            class="content"
            :style="{ backgroundImage: `url(${slide.image})` }"
          ></div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
const props = defineProps({
  dataSource: {
    type: Array,
    default: () => [],
  },
  cycleTime: {
    type: Number,
    default: 10000,
  },
});
</script>

<style scoped>
.content {
  overflow: hidden;
  width: 100%;
  height: 55vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.glass {
  width: 100%;
  height: 55vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 50px;
  background: rgba(0, 0, 0, 0.536);
  border-radius: 30px;
}
</style>
