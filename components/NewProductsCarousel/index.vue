<template>
  <v-carousel
    height="400"
    progress="orange"
    hide-delimiters
    cycle
    :interval="cycleTime"
    :show-arrows="false"
  >
    <v-carousel-item v-for="(slide, i) in dataSource" :key="i">
      <v-sheet height="100%">
        <div class="d-flex fill-height justify-center align-center">
          <div
            class="content"
            :style="{ backgroundImage: `url(${slide.image})` }"
          >
            <div class="glass">
              <span
                class="app-font-size-22 app-font-weight-900 app-color-white"
                >{{ slide.title }}</span
              >
              <span
                class="app-font-size-14 app-font-weight-500 app-color-white"
                >{{ slide.name }}</span
              >
              <span
                class="app-font-size-14 app-font-weight-600 app-color-white"
                >{{ slide.price }}</span
              >
              <AppButton
                class="app-mt-4"
                name="بازدید"
                width="150px"
                height="32px"
                background="app-border-light"
              />
            </div>
          </div>
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
    default: 1000,
  },
});
</script>

<style scoped>
.content {
  overflow: hidden;
  width: 100%;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.glass {
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 50px;
  background: rgba(0, 0, 0, 0.71);
}
</style>
