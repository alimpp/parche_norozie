<template>
  <div class="app-container">
    <!-- <v-row>
      <v-col md="7" sm="12" xs="4">
        <div class="app-w-100 app-px-2 app-py-2">
          <span
            >فروشگاه نوروزی از سال۹۸ بصورت فروشگاه حظوری شروع به فعالیت
            کرده،احتمالا منتظر باشین که بگم از یه فروشگاه کوچیک ولی اینطور نیست
            بلکه از یه فروشگاه بزرگ ولی منطقه تقریبا ضعیف…
          </span>
        </div>
      </v-col>
      <v-col md="5" sm="12" xs="4">
        <div class="app-w-100 app-px-2 app-py-2">
          <AboutUsCarousel :dataSource="sectionOne" />
        </div>
      </v-col>
    </v-row> -->
  </div>
</template>

<script setup>
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
