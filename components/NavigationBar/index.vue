<template>
  <div
    class="app-w-100 app-h-10 app-bg-white app-flex app-align-center border-bottom"
  >
    <div class="app-w-30 app-h-10 app-flex app-align-center app-px-4">
      <LoginButton />
    </div>
    <div class="app-w-40 app-h-10 app-flex app-align-center app-justify-center">
      <span class="app-pointer pp-font-size-16 app-font-weight-600">{{
        t("home")
      }}</span>
      <span class="app-pointer app-font-size-16 app-font-weight-600 app-px-5">{{
        t("blogs")
      }}</span>
      <span class="app-pointer app-font-size-16 app-font-weight-600">{{
        t("products")
      }}</span>
      <span class="app-pointer app-font-size-16 app-font-weight-600 app-px-5">{{
        t("aboutUs")
      }}</span>
      <span class="app-pointer app-font-size-16 app-font-weight-600">{{
        t("contactUs")
      }}</span>
    </div>
    <div
      class="app-w-30 app-h-10 app-flex app-align-center app-justify-end app-px-4"
    >
      <SearchIcon size="1.5x" class="custom-class app-pointer"></SearchIcon>
      <ShoppingCartIcon
        size="1.5x"
        class="custom-class app-mx-3 app-pointer"
      ></ShoppingCartIcon>

      <span class="app-font-weight-700">فروشگاه نوروزی</span>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const { t } = useI18n();
const route = useRoute();
</script>

<style scoped>
.border-bottom {
  box-shadow: 0px 0px 2px 0px #646464;
}
</style>
