<template>
  <div class="app-container fade_animations">
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

    <div class="app-w-100 products-content">
      <div class="filter-content">
        <div
          :class="{
            'app-bg-white': themeStore.theme == 'light',
            'app-bg-element-dark': themeStore.theme == 'dark',
            'app-bg-secondary-custom': themeStore.theme == 'custom',
          }"
          class="app-w-100 app-flex app-flex-column app-border-radius app-px-2 app-py-4 app-mt-9"
        >
          <FilterBarContent />
        </div>
      </div>
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
  <AppFooter/>
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
</script>

<style scoped>
.products-content {
  display: flex;
}
.filter-content {
  width: 25%;
  height: 80vh;
  overflow-y: scroll;
}
.products {
  width: 75%;
  height: 85vh;
  overflow-y: scroll;
  padding: 10px 0;
}
.filter-modal {
  display: none;
}

@media (max-width: 900px) {
  .filter-content {
    display: none;
  }

  .products {
    width: 100%;
  }

  .filter-modal {
    display: flex;
  }
}
</style>
