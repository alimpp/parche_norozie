<template>
  <div class="app-container app-flex">
    <div class="app-w-100 app-px-2 app-py-2 text">
      <span> {{ $t("about us page text 1") }} </span>
      <br />
      <br />
      <span> {{ $t("about us page text 2") }} </span>
      <br />
      <br />
      <span> {{ $t("about us page text 3") }}</span>
    </div>
    <div class="app-w-100 app-px-2 mt-6 app-py-2 carousel">
      <AboutUsCarousel :dataSource="sectionOne" />
    </div>
  </div>
  <div class="app-flex app-flex-column img">
    <img src="/assets/images/fabric2.jpg" alt="fabric" class="app-w-100" />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const sectionOne = ref([
  {
    id: 1,
    title: "لورم ایپسوم متن ساختگی با نامفراحان گرافیک است. چاپگرها د",
    image: "/about-us/section-1-1.jpg",
  },
  {
    id: 2,
    title: "لورم ایپسوم متن ساختگی با نامفراحان گرافیک است. چاپگرها د",
    image: "/about-us/section-1-2.jpg",
  },
  {
    id: 3,
    title: "لورم ایپسوم متن ساختگی با نامفراحان گرافیک است. چاپگرها د",
    image: "/about-us/section-1-3.jpg",
  },
  {
    id: 4,
    title: "لورم ایپسوم متن ساختگی با نامفراحان گرافیک است. چاپگرها د",
    image: "/about-us/section-1-4.jpg",
  },
]);
</script>

<style scoped>
span {
  text-wrap: wrap;
}
@media (max-width: 800px) {
  .app-container {
    display: flex;
    flex-direction: column;
  }
  .text {
    width: 100%;
  }
  .carousel {
    width: 100%;
  }
}
</style>
