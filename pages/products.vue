<template>
  <div ref="scrollToTop" class="app-container fade_animations">
    <ModalsFilter :state="filterModalState" @close="filterModalState = false" />
    <div class="app-flex">
      <AppDivider :name="$t('products')" :hasLine="true" width="65px" />
      <div
        class="filter-modal app-flex app-align-center app-mx-3"
        @click="filterModalState = true"
      >
        <FilterIcon size="1x" />
        <span class="app-font-size-14 app-font-weight-600 app-px-2">{{
          $t("filter by")
        }}</span>
      </div>
    </div>

    <div class="app-w-100">
      <div
        class="products app-flex app-justify-center app-align-center app-flex-wrap"
      >
        <CardsProducts
          class="app-mx-5 app-mt-7"
          :data="data"
          v-for="data in dataSource"
          :key="data"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

const filterModalState = ref(false);

const dataSource = computed(() => {
  return [
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: true,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: false,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: true,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: false,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: true,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: true,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: true,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: false,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: false,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: true,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: false,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: true,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: false,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: true,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: false,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
    {
      name: "رو تختی طرح کهکشان",
      category: "کالای خواب",
      price: "2,050,000",
      hasDiscount: true,
      discountPrice: "1,950,000",
      images: [
        { id: 1, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 2,
          url: "https://roomgraphy.ir/wp-content/uploads/2023/01/IMG-20210921-WA0022.jpg",
        },
        { id: 3, url: "https://coverlet.ir/wp-content/uploads/15.jpg" },
        {
          id: 4,
          url: "https://chidary.com/wp-content/uploads/2022/09/%D8%B1%D9%88%D8%AA%D8%AE%D8%AA%DB%8C-%D9%85%D8%B4%DA%A9%DB%8C-%D8%B7%D9%88%D8%B3%DB%8C-%D8%AA%DB%8C%D8%B1%D9%87.webp",
        },
        {
          id: 5,
          url: "https://aradrotakhti.ir/storage/media/GsEdZdPNPXQkgKfWybHc51y9g4eWSjvN21Arvu4X.webp",
        },
      ],
    },
  ];
});

const scrollToTop = ref(null);
onMounted(() => {
  scrollToTop.value.scrollIntoView();
});
</script>

<style scoped>
.filter-modal {
  display: none;
}
</style>
