<template>
  <div class="app-container">
    <div class="banner-content">
      <div class="new-products-container">
        <div class="app-w-100 app-px-2 app-py-2 app-flex app-flex-column">
          <AppDivider name="محصولات جدید" width="120px" />
          <NewProductsCarousel
            class="slid-right-animation-8 app-mt-2"
            :dataSource="newProducts"
            :cycleTime="cycleTime.two"
          />
        </div>
      </div>
      <div class="discount-container">
        <div class="app-w-100 app-px-2 app-py-2 app-flex app-flex-column">
          <AppDivider name="تخفیفات شگفت انگیز" width="160px" />
          <DiscountCarousel
            class="slid-left-animation-5 app-mt-2"
            :dataSource="discount"
            :cycleTime="cycleTime.one"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useUserStore } from "@/store/user/index";

const userStore = useUserStore();

const { t } = useI18n();
const cycleTime = ref({
  one: 3000,
  two: 5000,
  tree: 8000,
  four: 4000,
});

const discount = ref([
  {
    id: 1,
    title: "Rose Gold",
    name: "رو تختی تک نفره",
    price: "2,100,000",
    newPrice: "1,200,000",
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2023/01/platform-bed-frames-2048px-6229.jpg",
  },
  {
    id: 2,
    title: "Rose Gold",
    name: "رو تختی دو نفره",
    price: "4,100,000",
    newPrice: "1,200,000",
    image:
      "https://furniturepalacekenya.com/wp-content/uploads/2023/05/CF-9148-N-HARMONY.jpg.jpg",
  },
  {
    id: 3,
    title: "Rose Gold",
    name: "رو تختی تک نفره",
    price: "2,100,000",
    newPrice: "1,200,000",
    image:
      "https://i1.adis.ws/i/dreams/251-00325_main-shot_01_hart-upholstered-bed?w=750&h=549&sm=c",
  },
  {
    id: 4,
    title: "Rose Gold",
    name: "رو تختی دو نفره",
    price: "5,100,000",
    newPrice: "1,200,000",
    image:
      "https://furniturepalacekenya.com/wp-content/uploads/2023/05/CF-9148-N-HARMONY.jpg.jpg",
  },
]);

const newProducts = ref([
  {
    id: 1,
    title: "Rose Gold",
    name: "رو تختی تک نفره",
    price: "2,100,000",
    image:
      "https://cdn.thewirecutter.com/wp-content/media/2023/01/platform-bed-frames-2048px-6229.jpg",
  },
  {
    id: 2,
    title: "Rose Gold",
    name: "رو تختی دو نفره",
    price: "4,100,000",
    image:
      "https://furniturepalacekenya.com/wp-content/uploads/2023/05/CF-9148-N-HARMONY.jpg.jpg",
  },
  {
    id: 3,
    title: "Rose Gold",
    name: "رو تختی تک نفره",
    price: "2,100,000",
    image:
      "https://i1.adis.ws/i/dreams/251-00325_main-shot_01_hart-upholstered-bed?w=750&h=549&sm=c",
  },
  {
    id: 4,
    title: "Rose Gold",
    name: "رو تختی دو نفره",
    price: "5,100,000",
    image:
      "https://furniturepalacekenya.com/wp-content/uploads/2023/05/CF-9148-N-HARMONY.jpg.jpg",
  },
]);

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

onMounted(async () => {
  await userStore.userProfile();
});
</script>

<style scoped>
.banner-content {
  display: flex;
  width: 100%;
}

.banner-content .new-products-container {
  width: 60%;
}

.banner-content .discount-container {
  width: 40%;
}

@media (max-width: 800px) {
  .banner-content {
    display: flex;
    flex-direction: column;
  }

  .banner-content .new-products-container {
    width: 100%;
  }

  .banner-content .discount-container {
    width: 100%;
  }
}
</style>
