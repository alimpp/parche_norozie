<template>
  <div
    class="admin-header-content app-flex mt-4 app-border-radius"
    :class="{
      'bg-white': themeStore.theme == 'light',
      'bg-element-dark': themeStore.theme == 'dark',
      'bg-secondary-custom': themeStore.theme == 'custom',
    }"
  >
    <div class="app-w-50 app-flex app-flex app-align-center">
      <div class="app-flex app-px-3">
        <AppAvatar
          background="bg-primary-100"
          name="N"
          width="50px"
          height="50px"
        />
        <div class="app-flex app-flex-column app-justify-center app-px-2">
          <span class="f-s-14 f-w-600">norozie</span>
          <span class="f-s-12 f-w-600 color-primary">{{
            $t("role admin")
          }}</span>
        </div>
      </div>
    </div>
    <div class="app-w-50 app-flex app-align-center app-justify-end app-pointer">
      <div class="app-mx-3 app-mt-2 app-pointer app-mx-4 app-flex">
        <ShoppingCartIcon size="1x"></ShoppingCartIcon>
        <AppBadge badge="25" />
      </div>
      <div class="app-mx-3 app-mt-2 app-pointer app-flex">
        <FileTextIcon size="1x"></FileTextIcon>
        <AppBadge badge="19" />
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
