<template>
  <div :dir="locale == 'fr' ? 'rtl' : 'ltr'">
    <ModalsProfile
      :state="profileModalState"
      @close="profileModalState = false"
    />
    <HamburgerMenu :isOpen="isOpen" @closeMenu="handleChangeStateMenu" />
    <ShoppingCard
      @close="handleChangeStateShoppingCard"
      :isOpen="isOpenShoppingCard"
    />
    <Toast />
    <NuxtLoadingIndicator color="#7b7be3" />
    <NavigationBar
      @openHamburgerMenu="handleChangeStateMenu"
      @openHamburgerShoppingCard="handleChangeStateShoppingCard"
      @openProfileModal="openProfileModal"
      v-if="!route.params.ulid"
    />
    <div
      class="content"
      :class="{
        bgsecondary: themeStore.theme == 'light',
        bgdark: themeStore.theme == 'dark',
        'primary-custom': themeStore.theme == 'custom',
        'app-h-100': route.params.ulid,
      }"
    >
      <slot />
      <AppFooter class="app-mt-16" v-if="showFooter" />
      <div
        class="wighet-button bg-primary-100 app-pointer"
        v-if="wighetState && !route.params.ulid"
        @click="handleChangeStateWighetBar"
      >
        <SettingsIcon size="1.5x" class="custom-class"></SettingsIcon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useThemeStore } from "@/store/theme/index";
import { useUserStore } from "~/store/user";
import { useRoute } from "vue-router";

const themeStore = useThemeStore();
const userStore = useUserStore();
const route = useRoute();

const showFooter = computed(() => {
  const route = useRoute();
  switch (route.path) {
    case "/":
      return true;
    case "/about-us":
      return true;
    case "/contact-us":
      return true;
    case "/blogs":
      return true;
    case "/products":
      return true;
  }
});

const wighetState = computed(() => {
  if (isOpen.value || isOpenShoppingCard.value || isOpenWighetBar.value) {
    return false;
  } else {
    return true;
  }
});

const { locale } = useI18n();

const isOpen = ref(false);
const isOpenShoppingCard = ref(false);
const isOpenWighetBar = ref(false);
const profileModalState = ref(false);

const handleChangeStateMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleChangeStateShoppingCard = () => {
  isOpenShoppingCard.value = !isOpenShoppingCard.value;
};

const handleChangeStateWighetBar = () => {
  isOpenWighetBar.value = !isOpenWighetBar.value;
};

const openProfileModal = () => {
  profileModalState.value = true;
};

onMounted(async () => {
  await userStore.userProfile();
  if (userStore.user) {
    if (userStore.user.theme) {
      themeStore.updateThemeState(userStore.user.theme);
    } else {
      themeStore.updateThemeState("light");
    }
  } else {
    themeStore.updateThemeState("light");
  }
});
</script>

<style scoped>
.content {
  overflow-y: scroll;
}

.wighet-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  margin: 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
