<template>
  <div class="app-flex app-flex-column app-mt-3 fade_animations">
    <AppBeardCrumb :route="$t('dashboard')" :child="$t('setting')" />
    <AppDivider class="app-mt-3" :name="$t('app theme')" />
    <div class="app-flex app-justify-start app-align-center app-w-100 app-mt-3">
      <div
        @click="changeThemeState('light')"
        class="app-flex app-flex-column app-justify-center app-align-center app-pointer"
      >
        <div
          style="width: 60px; height: 60px"
          class="app-bg-white app-border-radius"
        ></div>
        <span class="app-font-size-12 app-font-weight-600">روشن</span>
        <CheckCircleIcon v-if="themeStore.theme == 'light'" />
      </div>
      <div
        @click="changeThemeState('dark')"
        class="app-flex app-flex-column app-justify-center app-align-center app-pointer app-mx-5"
      >
        <div
          style="width: 60px; height: 60px"
          class="app-bg-dark app-border-radius app-border"
        ></div>
        <span class="app-font-size-12 app-font-weight-600">تیره</span>
        <CheckCircleIcon v-if="themeStore.theme == 'dark'" />
      </div>
      <div
        @click="changeThemeState('custom')"
        class="app-flex app-flex-column app-justify-center app-align-center app-pointer"
      >
        <div
          style="width: 60px; height: 60px"
          class="app-bg-secondary-custom app-border-radius"
        ></div>
        <span class="app-font-size-12 app-font-weight-600">کاستوم</span>
        <CheckCircleIcon v-if="themeStore.theme == 'custom'" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

const changeThemeState = (val) => {
  themeStore.updateThemeState(val);
};

definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});
</script>
