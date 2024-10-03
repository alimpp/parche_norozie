<template>
  <div
    class="menu-items-container"
    v-if="isOpen"
    @click.self="emit('closeMenu')"
  >
    <div
      class="menu-content slid-left-animation-3"
      :class="{
        'app-bg-secondary': themeStore.theme == 'light',
        'app-bg-dark': themeStore.theme == 'dark',
        'app-bg-primary-custom': themeStore.theme == 'custom',
      }"
    >
      <div class="app-w-100 app-flex app-py-3 app-px-3 app-justify-end">
        <span @click="emit('closeMenu')">
          <XIcon size="1.5x" class="custom-class app-pointer"></XIcon>
        </span>
      </div>
      <div class="app-w-100 app-flex app-justify-center app-align-center">
        <AppLogo />
      </div>
      <div
        class="app-w-100 app-flex app-flex-column app-justify-center app-align-center"
      >
        <span
          class="app-pointer app-font-size-14 app-font-weight-600"
          :class="{ 'active-route-main-theme': route.path == '/' }"
          @click="navigateTo('/')"
          >{{ t("home") }}</span
        >
        <span
          class="app-pointer app-font-size-14 app-font-weight-600 app-mx-5 app-mt-2"
          :class="{ 'active-route-main-theme': route.path == '/blogs' }"
          @click="navigateTo('/blogs')"
          >{{ t("blogs") }}</span
        >
        <span
          class="app-pointer app-font-size-14 app-font-weight-600"
          :class="{ 'active-route-main-theme': route.path == '/products' }"
          @click="navigateTo('/products')"
          >{{ t("products") }}</span
        >
        <span
          class="app-pointer app-font-size-14 app-font-weight-600 app-mx-5 app-mt-2"
          :class="{ 'active-route-main-theme': route.path == '/about-us' }"
          @click="navigateTo('/about-us')"
          >{{ t("aboutUs") }}</span
        >
        <span
          class="app-pointer app-font-size-14 app-font-weight-600 app-mt-2"
          :class="{ 'active-route-main-theme': route.path == '/contact-us' }"
          @click="navigateTo('/contact-us')"
          >{{ t("contactUs") }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useAuthStore } from "@/store/auth/index";
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

const emit = defineEmits(["closeMenu"]);
const router = useRouter();
const route = useRoute();
const { t } = useI18n();

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const navigateTo = (path) => {
  router.push(`${path}`);
  emit("closeMenu");
};
</script>

<style scoped>
.menu-items-container {
  width: 100%;
  height: 100vh;
  background: rgba(5, 5, 5, 0.816);
  position: fixed;
  z-index: 1;
}

.menu-items-container .menu-content {
  width: 350px;
  height: 100vh;
  position: absolute;
  z-index: 1;
}
.active-route-main-theme {
  border-bottom: 2px solid #7b7be3;
}
</style>
