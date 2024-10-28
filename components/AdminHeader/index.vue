<template>
  <div
    class="admin-header-content app-flex mt-4 app-border-radius"
    :class="{
      'app-bg-white': themeStore.theme == 'light',
      'app-bg-element-dark': themeStore.theme == 'dark',
      'app-bg-secondary-custom': themeStore.theme == 'custom',
    }"
  >
    <div class="app-w-50 app-flex app-flex app-align-center">
      <div class="app-mx-3 app-mt-2 app-pointer app-mx-4 app-flex">
        <ShoppingCartIcon size="1x"></ShoppingCartIcon>
        <AppBadge badge="25" />
      </div>
      <div class="app-mx-3 app-mt-2 app-pointer app-flex">
        <FileTextIcon size="1x"></FileTextIcon>
        <AppBadge badge="19" />
      </div>
    </div>
    <div class="app-w-50 app-flex app-align-center app-justify-end app-pointer">
      <div class="app-flex app-px-3">
        <div class="app-flex app-flex-column app-justify-center app-px-2">
          <span class="app-font-size-14 app-font-weight-700">norozie</span>
          <span class="app-font-size-12 app-font-weight-500 app-color-gray">{{
            $t("role admin")
          }}</span>
        </div>
        <AppAvatar background="app-bg-primary" name="N" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();
</script>

<style scoped>
.admin-header-content {
  width: 95%;
  height: 80px;
}
</style>
