<template>
  <div class="app-container fade_animations">
    <div class="app-flex app-w-100">
      <div class="app-w-60">
        <AppCarousel
          class="slid-right-animation"
          :dataSource="dataSource"
          :cycleTime="cycleTime"
        />
      </div>
      <div class="app-w-40 app-mx-6">
        <AppCarousel
          class="slid-left-animation"
          :dataSource="dataSource"
          :cycleTime="cycleTime"
        />
      </div>
    </div>
    <div class="app-flex app-w-100 app-mt-4">
      <div class="app-w-40">
        <AppCarousel
          class="slid-left-animation"
          :dataSource="dataSource"
          :cycleTime="cycleTime"
        />
      </div>
      <div class="app-w-60 app-mx-6">
        <AppCarousel
          class="slid-right-animation"
          :dataSource="dataSource"
          :cycleTime="cycleTime"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const cycleTime = ref(5000);
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
