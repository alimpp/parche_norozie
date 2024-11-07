<template>
  <div
    class="shopping-card-container"
    v-if="isOpen"
    @click.self="emit('close')"
  >
    <div
      class="content slid-right-animation-3"
      :class="{
        bgsecondary: themeStore.theme == 'light',
        bgdark: themeStore.theme == 'dark',
        'bg-primary-100-custom': themeStore.theme == 'custom',
      }"
    >
      <div class="app-w-100 app-flex app-py-3 app-px-3 app-justify-start">
        <span @click="emit('close')">
          <XIcon size="1.5x" class="custom-class app-pointer"></XIcon>
        </span>
      </div>
      <div
        class="app-w-100 app-h-80 app-flex app-flex-column app-justify-center app-align-center"
      >
        <EmptyShoppingCard />
        <span class="f-s--14 f-w-900">{{ t("emptyshoppingcard") }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();
const emit = defineEmits(["close"]);

const { t } = useI18n();

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.shopping-card-container {
  width: 100%;
  height: 100vh;
  background: rgba(5, 5, 5, 0.816);
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: end;
}

.shopping-card-container .content {
  width: 350px;
  height: 100vh;
  position: absolute;
  z-index: 100;
}
</style>
