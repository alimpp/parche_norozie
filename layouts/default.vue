<template>
  <div :dir="locale == 'fr' ? 'rtl' : 'ltr'">
    <ModalsProfile
      :state="profileModalState"
      @close="profileModalState = false"
    />
    <ShoppingCard
      @close="handleChangeStateShoppingCard"
      :isOpen="isOpenShoppingCard"
    />
    <Toast />
    <NuxtLoadingIndicator color="#7b7be3" />
    <div
      class="content bgsecondary"
      :class="{
        'app-h-100': route.params.ulid,
      }"
    >
      <slot />
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

const { locale } = useI18n();

const isOpen = ref(false);
const isOpenShoppingCard = ref(false);
const profileModalState = ref(false);

const handleChangeStateMenu = () => {
  isOpen.value = !isOpen.value;
};

const handleChangeStateShoppingCard = () => {
  isOpenShoppingCard.value = !isOpenShoppingCard.value;
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
