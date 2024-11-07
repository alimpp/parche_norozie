<template>
  <div
    class="app-w-100 app-h-10 app-flex app-align-center navigation"
    :class="{
      'app-bg-secondary': themeStore.theme == 'light',
      'app-bg-dark': themeStore.theme == 'dark',
      'bg-primary-100-custom': themeStore.theme == 'custom',
    }"
  >
    <div class="menu-content">
      <div class="mobile-size">
        <span class="app-pt-2" @click="openHamburgerMenu">
          <MenuIcon
            size="1.5x"
            class="custom-class app-mx-2 app-pointer"
          ></MenuIcon>
        </span>
      </div>
      <div
        class="app-h-10 app-flex app-align-center app-mx-2"
        v-if="!authStore.isAuthenticated || !detectToken"
      >
        <AppButton
          :name="$t('login and register')"
          background="bg-primary-100"
          height="35px"
          @click="navigateTo('/auth/login')"
          fontSize="f-s--12"
          width="110px"
        />
        <!-- <LoginButton @click="navigateTo('/auth/login')" /> -->
      </div>
      <div class="app-mr-30">
        <span
          class="app-pointer f-s--14 f-w-600 desktop-size"
          :class="{ 'active-route-main-theme': route.path == '/' }"
          @click="navigateTo('/')"
          >{{ t("home") }}</span
        >
      </div>
      <span
        class="app-pointer f-s--14 f-w-600 app-mx-5 desktop-size"
        :class="{ 'active-route-main-theme': route.path == '/blogs' }"
        @click="navigateTo('/blogs')"
        >{{ t("blogs") }}</span
      >
      <span
        class="app-pointer f-s--14 f-w-600 desktop-size"
        :class="{ 'active-route-main-theme': route.path == '/products' }"
        @click="navigateTo('/products')"
        >{{ t("products") }}</span
      >
      <span
        class="app-pointer f-s--14 f-w-600 app-mx-5 desktop-size"
        :class="{ 'active-route-main-theme': route.path == '/about-us' }"
        @click="navigateTo('/about-us')"
        >{{ t("aboutUs") }}</span
      >
      <span
        class="app-pointer f-s--14 f-w-600 desktop-size"
        :class="{ 'active-route-main-theme': route.path == '/contact-us' }"
        @click="navigateTo('/contact-us')"
        >{{ t("contactUs") }}</span
      >
    </div>

    <div class="logo-content">
      <div class="app-w-100 app-h-10 app-flex app-align-center app-justify-end">
        <span
          @click="emit('openProfileModal')"
          class="app-pt-2"
          v-if="authStore.isAuthenticated || detectToken"
        >
          <UserIcon size="1.5x" class="custom-class app-pointer"></UserIcon
        ></span>
        <span class="app-pt-2 app-px-2">
          <SearchIcon size="1.5x" class="custom-class app-pointer"></SearchIcon>
        </span>
        <span @click="openHamburgerShoppingCard" class="app-pt-2">
          <ShoppingCartIcon
            size="1.5x"
            class="custom-class app-pointer"
          ></ShoppingCartIcon
        ></span>
        <AppLogo />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCookie } from "@/composable/useCookie";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/store/auth/index";
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();
const emit = defineEmits([
  "openHamburgerMenu",
  "openHamburgerShoppingCard",
  "openProfileModal",
]);

const { t } = useI18n();
const route = useRoute();
const authStore = useAuthStore();

const openHamburgerMenu = () => {
  emit("openHamburgerMenu");
};

const openHamburgerShoppingCard = () => {
  emit("openHamburgerShoppingCard");
};

const detectToken = computed(() => {
  const { getCookie } = useCookie();
  const token = getCookie("token");
  if (token) {
    return true;
  } else {
    return false;
  }
});
</script>

<style scoped>
.navigation {
  position: fixed;
  z-index: 30;
}
.mobile-size {
  display: none;
}

.desktop-size {
  display: flex;
}

.menu-content {
  width: 50%;
  height: 10vh;
  display: flex;
  align-items: center;
}

.logo-content {
  width: 50%;
  height: 10vh;
}

.active-route-main-theme {
  border-bottom: 2px solid #7b7be3;
}

@media (max-width: 900px) {
  .mobile-size {
    display: flex;
  }
  .desktop-size {
    display: none;
  }
}
</style>
