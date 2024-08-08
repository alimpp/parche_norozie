<template>
  <div class="app-container">
    <v-row>
      <v-col md="7" sm="12" xs="4"
        ><div class="app-w-100 app-px-2 app-py-2">
          <AppCarousel
            class="slid-left-animation-5"
            :dataSource="dataSource"
            :cycleTime="cycleTime.one"
          /></div
      ></v-col>
      <v-col md="5" sm="12" xs="4">
        <div class="app-w-100 app-px-2 app-py-2">
          <AppCarousel
            class="slid-right-animation-8"
            :dataSource="dataSource"
            :cycleTime="cycleTime.two"
          /></div
      ></v-col>
    </v-row>
    <v-row>
      <v-col md="5" sm="12" xs="4"
        ><div class="app-w-100 app-px-2 app-py-2">
          <AppCarousel
            class="slid-left-animation-3"
            :dataSource="dataSource"
            :cycleTime="cycleTime.tree"
          /></div
      ></v-col>
      <v-col md="7" sm="12" xs="4">
        <div class="app-w-100 app-px-2 app-py-2">
          <AppCarousel
            class="slid-right-animation-5"
            :dataSource="dataSource"
            :cycleTime="cycleTime.four"
          /></div
      ></v-col>
    </v-row>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const cycleTime = ref({
  one: 3000,
  two: 5000,
  tree: 8000,
  four: 4000,
});
const dataSource = ref([
  {
    id: 1,
    title: "لورم ایپسوم متن ساختگی با نامفراحان گرافیک است. چاپگرها د",
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2023/01/platform-bed-frames-2048px-6229.jpg",
  },
  {
    id: 2,
    title: "لورم ایپسوم متن ساختگی با  اون بلکه روزنامه و مجلهدی می باشد",
    image:
      "https://furniturepalacekenya.com/wp-content/uploads/2023/05/CF-9148-N-HARMONY.jpg.jpg",
  },
  {
    id: 3,
    title: "لورم ایپسوم متن ساختگی باون  و سطرآبهبود ابزارهای کاربردی می باشد",
    image:
      "https://i1.adis.ws/i/dreams/251-00325_main-shot_01_hart-upholstered-bed?w=750&h=549&sm=c",
  },
  {
    id: 4,
    title: "لورم ایپسوم متن ساولیافیک اسان که لازم است دی می باشد",
    image:
      "https://furniturepalacekenya.com/wp-content/uploads/2023/05/CF-9148-N-HARMONY.jpg.jpg",
  },
]);
</script>
