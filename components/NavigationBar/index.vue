<template>
  <div class="app-w-100 app-h-10 app-flex app-align-center navigation">
    <div class="menu-content">
      <AppLogo />
      <div
        class="app-h-10 app-flex app-align-center app-mx-2"
        v-if="!authStore.isAuthenticated || !detectToken"
      >
        <AppButton
          :name="$t('login and register')"
          background="bg-primary-100"
          height="35px"
          @click="navigateTo('/auth/login')"
          fontSize="f-s-12"
          width="110px"
        />
      </div>
      <span class="app-pt-2" @click="openHamburgerMenu">
        <MenuIcon size="1.5x" class="custom-class app-pointer"></MenuIcon>
      </span>
      <span
        @click="emit('openProfileModal')"
        class="app-pt-2"
        v-if="authStore.isAuthenticated || detectToken"
      >
        <UserIcon size="1.5x" class="custom-class app-pointer"></UserIcon
      ></span>
      <span class="app-pt-2">
        <SearchIcon size="1.5x" class="custom-class app-pointer"></SearchIcon>
      </span>
      <span @click="openHamburgerShoppingCard" class="app-pt-2 app-px-2">
        <ShoppingCartIcon
          size="1.5x"
          class="custom-class app-pointer"
        ></ShoppingCartIcon
      ></span>
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

.desktop-size {
  display: flex;
}

.menu-content {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
}
</style>
