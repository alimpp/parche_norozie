<template>
  <div
    class="shopping-card-container"
    v-if="isOpen"
    @click.self="emit('close')"
  >
    <div
      class="content slid-right-animation-3"
      :class="{
        'app-bg-secondary': themeStore.theme == 'light',
        'app-bg-dark': themeStore.theme == 'dark',
        'app-bg-primary-custom': themeStore.theme == 'custom',
      }"
    >
      <div
        class="app-w-100 app-flex app-flex-column app-py-3 app-px-3 app-justify-start"
      >
        <span @click="emit('close')">
          <XIcon size="1.5x" class="custom-class app-pointer"></XIcon>
        </span>
        <div class="app-w-100 app-mt-5">
          <AppDivider name="تم برنامه" :hasLine="true" width="60px" />
        </div>
        <div
          class="app-flex app-justify-center app-align-center app-mt-5 app-w-100"
        >
          <div
            @click="changeThemeState('light')"
            class="app-flex app-flex-column app-justify-center app-align-center app-pointer"
          >
            <div
              style="width: 60px; height: 60px"
              class="app-bg-white app-border-radius"
            ></div>
            <span class="app-font-size-14 app-font-weight-600">روشن</span>
          </div>
          <div
            @click="changeThemeState('dark')"
            class="app-flex app-flex-column app-justify-center app-align-center app-pointer app-mx-5"
          >
            <div
              style="width: 60px; height: 60px"
              class="app-bg-dark app-border-radius app-border"
            ></div>
            <span class="app-font-size-14 app-font-weight-600">تیره</span>
          </div>
          <div
            @click="changeThemeState('custom')"
            class="app-flex app-flex-column app-justify-center app-align-center app-pointer"
          >
            <div
              style="width: 60px; height: 60px"
              class="app-bg-secondary-custom app-border-radius"
            ></div>
            <span class="app-font-size-14 app-font-weight-600">کاستوم</span>
          </div>
        </div>
        <div class="app-w-100 app-mt-5">
          <AppDivider name="حالت کارت ها" :hasLine="true" width="88px" />
        </div>
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

const emit = defineEmits(["close"]);

const { t } = useI18n();

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

const changeThemeState = (val) => {
  if (userStore.user) {
    if (userStore.user.theme) {
      userStore.sendProfile({ ...userStore.user, theme: val });
    }
  }
  themeStore.updateThemeState(val);
};
</script>

<style scoped>
.shopping-card-container {
  width: 100%;
  height: 100vh;
  background: rgba(5, 5, 5, 0.816);
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: end;
}

.shopping-card-container .content {
  width: 350px;
  height: 100vh;
  position: absolute;
  z-index: 1;
}
</style>
