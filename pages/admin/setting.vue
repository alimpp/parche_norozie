<template>
  <div class="app-flex app-flex-column app-mt-3 fade_animations">
    <AppCard class="app-mt-3">
      <template #content>
        <div class="app-flex app-align-center app-px-2 app-py-4">
          <div class="app-w-50 app-flex app-flex-column">
            <span class="f-s-16 f-w-600">
              {{ $t("setting") }}
            </span>
            <span class="f-s-12 f-w-500 color-gray">
              {{ $t("setting admin title") }}
            </span>
          </div>
        </div>
      </template>
    </AppCard>
    <AppDivider class="app-mt-3" :name="$t('app theme')" />
    <div class="app-flex app-justify-start app-align-center app-w-100 app-mt-3">
      <div
        @click="changeThemeState('light')"
        class="app-flex app-flex-column app-justify-center app-align-center app-pointer"
      >
        <div
          style="width: 60px; height: 60px"
          class="bgwhite app-border-radius"
        ></div>
        <span class="f-s-12 f-w-600">روشن</span>
        <CheckCircleIcon v-if="themeStore.theme == 'light'" />
      </div>
      <div
        @click="changeThemeState('dark')"
        class="app-flex app-flex-column app-justify-center app-align-center app-pointer app-mx-5"
      >
        <div
          style="width: 60px; height: 60px"
          class="bgdark app-border-radius app-border"
        ></div>
        <span class="f-s-12 f-w-600">تیره</span>
        <CheckCircleIcon v-if="themeStore.theme == 'dark'" />
      </div>
      <div
        @click="changeThemeState('custom')"
        class="app-flex app-flex-column app-justify-center app-align-center app-pointer"
      >
        <div
          style="width: 60px; height: 60px"
          class="bg-secondary-custom app-border-radius"
        ></div>
        <span class="f-s-12 f-w-600">کاستوم</span>
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
