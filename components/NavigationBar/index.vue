<template>
  <div class="app-w-100 app-h-10 app-bg-secondary app-flex app-align-center">
    <div class="auth-content">
      <div class="app-w-100 app-h-10 app-flex app-align-center">
        <div class="mobile-size">
          <span class="app-pt-2" @click="openHamburgerMenu">
            <MenuIcon
              size="1.5x"
              class="custom-class app-mx-2 app-pointer"
            ></MenuIcon>
          </span>
        </div>
        <LoginButton @click="navigateTo('/auth/login')" class="app-mx-2" />
      </div>
    </div>

    <div class="menu-content">
      <div
        class="app-w-100 app-h-10 app-flex app-align-center app-justify-center"
      >
        <span
          class="app-pointer app-font-size-14 app-font-weight-600"
          :class="{ 'active-route-main-theme': route.path == '/' }"
          @click="navigateTo('/')"
          >{{ t("home") }}</span
        >
        <span
          class="app-pointer app-font-size-14 app-font-weight-600 app-mx-5"
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
          class="app-pointer app-font-size-14 app-font-weight-600 app-mx-5"
          :class="{ 'active-route-main-theme': route.path == '/about-us' }"
          @click="navigateTo('/about-us')"
          >{{ t("aboutUs") }}</span
        >
        <span
          class="app-pointer app-font-size-14 app-font-weight-600"
          :class="{ 'active-route-main-theme': route.path == '/contact-us' }"
          @click="navigateTo('/contact-us')"
          >{{ t("contactUs") }}</span
        >
      </div>
    </div>

    <div class="logo-content">
      <div
        class="app-w-100 app-h-10 app-flex app-align-center app-justify-end app-px-1"
      >
        <SearchIcon size="1.5x" class="custom-class app-pointer"></SearchIcon>
        <ShoppingCartIcon
          size="1.5x"
          class="custom-class app-mx-3 app-pointer"
        ></ShoppingCartIcon>
        <AppLogo />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";

const emit = defineEmits(["openHamburgerMenu"]);

const { t } = useI18n();
const route = useRoute();

const openHamburgerMenu = () => {
  emit("openHamburgerMenu");
};
</script>

<style scoped>
.mobile-size {
  display: none;
}
.auth-content {
  width: 30%;
  height: 10vh;
}

.menu-content {
  width: 40%;
  height: 10vh;
}

.logo-content {
  width: 30%;
  height: 10vh;
}

.active-route-main-theme {
  border-bottom: 2px solid #000000;
}

@media (max-width: 800px) {
  .menu-content {
    display: none;
  }
  .auth-content {
    width: 50%;
  }
  .logo-content {
    width: 50%;
  }

  .mobile-size {
    display: flex;
  }
}
</style>
