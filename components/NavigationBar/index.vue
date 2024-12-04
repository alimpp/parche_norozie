<template>
  <div
    class="app-w-100 app-h-10 app-flex app-align-center navigation bgsecondary"
  >
    <div class="menu-content">
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
        <div class="desktop-size app-mx-5">
          <span
            class="app-pointer app-flex f-s-14 f-w-600 app-px-3"
            @click="navigateTo('/')"
          >
            {{ $t("home") }}
          </span>
          <span
            class="app-pointer app-flex f-s-14 f-w-600 app-px-3"
            @click="navigateTo('/products')"
          >
            {{ $t("products") }} </span
          ><span
            class="app-pointer app-flex f-s-14 f-w-600 app-px-3"
            @click="navigateTo('/blogs')"
          >
            {{ $t("blogs") }} </span
          ><span
            class="app-pointer app-flex f-s-14 f-w-600 app-px-3"
            @click="navigateTo('/about-us')"
          >
            {{ $t("about us") }} </span
          ><span
            class="app-pointer app-flex f-s-14 f-w-600 app-px-3"
            @click="navigateTo('/contact-us')"
          >
            {{ $t("contact us") }}
          </span>
        </div>
      </div>
    </div>
    <div class="logo-content">
      <span
        class="app-pt-2 app-px-2 desktop-size"
        v-if="authStore.isAuthenticated || detectToken"
      >
        <UserIcon size="1.5x" class="custom-class app-pointer"></UserIcon
      ></span>
      <span class="app-pt-2">
        <SearchIcon size="1.5x" class="custom-class app-pointer"></SearchIcon>
      </span>
      <span class="app-pt-2 app-px-2">
        <ShoppingCartIcon
          size="1.5x"
          class="custom-class app-pointer"
        ></ShoppingCartIcon
      ></span>
      <AppLogo />
    </div>
  </div>
</template>

<script setup>
import { useCookie } from "@/composable/useCookie";
import { useAuthStore } from "@/store/auth/index";

const authStore = useAuthStore();

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
  width: 70%;
  height: 10vh;
  display: flex;
  align-items: center;
}

.logo-content {
  width: 30%;
  height: 10dvh;
  display: flex;
  justify-content: end;
  align-items: center;
}

@media (max-width: 850px) {
  .desktop-size {
    display: none;
  }
  .menu-content {
    width: auto;
  }
  .logo-content {
    width: 70%;
  }
}
</style>
