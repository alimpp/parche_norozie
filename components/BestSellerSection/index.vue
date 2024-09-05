<template>
  <div
    class="app-w-100 app-flex app-justify-center app-align-center app-flex-wrap"
  >
    <CardsProducts class="app-mx-5 app-mt-7" v-for="n in 9" :key="n" />
  </div>
</template>

<script setup>
const model = ref(null);

const props = defineProps({
  data: {
    type: Array,
    default: [],
  },
});
</script>

<style scoped>
.best-seller-section {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
