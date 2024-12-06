<template>
  <div class="content">
    <div
      class="item"
      @click="navigateTo('/')"
      :class="{ 'bg-primary-transparent': route.path == '/' }"
    >
      <IconsHome />
      <span class="f-s-12 f-w-600 color-primary">{{ $t("home") }}</span>
    </div>
    <div
      class="item"
      @click="navigateTo('/products')"
      :class="{
        'bg-primary-transparent': route.path == '/products',
      }"
    >
      <IconsProducts />
      <span class="f-s-12 f-w-600 color-primary">{{ $t("products") }}</span>
    </div>
    <div
      class="item"
      @click="navigateTo('/blogs')"
      :class="{ 'bg-primary-transparent': route.path == '/blogs' }"
    >
      <IconsBlogs />
      <span class="f-s-12 f-w-600 color-primary">{{ $t("blogs") }}</span>
    </div>
    <div
      class="item"
      @click="navigateTo('/contact-us')"
      :class="{ 'bg-primary-transparent': route.path == '/contact-us' }"
    >
      <IconsCall />
      <span class="f-s-12 f-w-600 color-primary">{{ $t("contact us") }}</span>
    </div>
    <div
      class="item"
      @click="navigateTo('/profile')"
      :class="{ 'bg-primary-transparent': route.path == '/profile' }"
    >
      <IconsProfile />
      <span class="f-s-12 f-w-600 color-primary">{{ $t("profile") }}</span>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "#app";

const route = useRoute();
</script>

<style scoped>
.content {
  width: 100%;
  height: 10dvh;
  background: #fff;
  position: fixed;
  z-index: 10;
  bottom: 0;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border-top: 1px solid #98989892;
}
.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 19%;
  height: 9dvh;
  border-radius: 10px;
}

@media (min-width: 850px) {
  .content {
    display: none;
  }
}
</style>
