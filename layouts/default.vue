<template>
  <div :dir="locale == 'fr' ? 'rtl' : 'ltr'">
    <ModalsProfile
      :state="profileModalState"
      @close="profileModalState = false"
    />
    <WighetBar :isOpen="isOpenWighetBar" @close="handleChangeStateWighetBar" />
    <HamburgerMenu :isOpen="isOpen" @closeMenu="handleChangeStateMenu" />
    <ShoppingCard
      @close="handleChangeStateShoppingCard"
      :isOpen="isOpenShoppingCard"
    />
    <NuxtLoadingIndicator color="#fd7403" />
    <NavigationBar
      @openHamburgerMenu="handleChangeStateMenu"
      @openHamburgerShoppingCard="handleChangeStateShoppingCard"
      @openProfileModal="openProfileModal"
    />
    <div
      class="content app-h-90"
      :class="{
        'app-bg-secondary': themeStore.theme == 'light',
        'app-bg-dark': themeStore.theme == 'dark',
        'app-bg-primary-custom': themeStore.theme == 'custom',
      }"
    >
      <slot />
      <div
        class="wighet-button app-bg-primary app-pointer"
        v-if="wighetState"
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

const themeStore = useThemeStore();
const userStore = useUserStore();

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
      themeStore.updateThemeState("dark");
    }
  } else {
    themeStore.updateThemeState("dark");
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
