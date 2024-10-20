<template>
  <div class="app-flex app-justify-center app-align-center app-w-100">
    <swiper
      :slidesPerView="slidesPerView"
      :centeredSlides="true"
      :grabCursor="true"
      :spaceBetween="30"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(category, index) in categorys" :key="index">
        <div class="style" @click="categoryEmited(category)">
          {{ category.name }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";

const slidesPerView = ref(0);

import "swiper/css";
import "swiper/css/pagination";

const emit = defineEmits(["categoryEmited"]);

const props = defineProps({
  categorys: {
    type: Array,
    default: [
      { name: "کالای خواب" },
      { name: "تخت خواب" },
      { name: "تشک" },
      { name: "رو تختی" },
      { name: "بالشت" },
      { name: "حوله" },
      { name: " تن پوش" },
    ],
  },
});

const categoryEmited = (data) => {
  console.log(data);

  emit("categoryEmited", data);
};

onMounted(() => {
  const osWidth = window.screen.width;
  if (osWidth < 500) {
    slidesPerView.value = 4;
  } else if (osWidth < 500) {
    slidesPerView.value = 4;
  } else {
    slidesPerView.value = 10;
  }
});
</script>

<style scoped>
.style {
  padding: 10px 30px;
  border: 1px solid #7b7be3;
  background: #7b7be347;
  color: #7b7be3;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 600;
  text-wrap: nowrap;
  cursor: pointer;
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: auto;
  text-align: center;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 30px;
}
</style>
