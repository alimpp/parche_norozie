<template>
  <div
    class="admin-sidebar"
    :class="{
      'sidebar-close-state': sidebarState == 'close',
      'sidebar-open-state': sidebarState == 'open',
      'app-bg-white': themeStore.theme == 'light',
      'app-bg-element-dark': themeStore.theme == 'dark',
      'app-bg-secondary-custom': themeStore.theme == 'custom',
    }"
  >
    <div class="app-w-100 app-flex app-justify-end">
      <span
        class="app-px-3 app-py-3 app-pointer"
        v-if="sidebarState == 'open'"
        @click="sidebarState = 'close'"
      >
        <XIcon size="1x"></XIcon>
      </span>
      <span
        class="app-px-3 app-py-3 app-pointer"
        @click="sidebarState = 'open'"
        v-else
      >
        <ArrowLeftIcon size="1x"></ArrowLeftIcon>
      </span>
    </div>

    <div
      class="app-w-100 app-h-80 app-flex app-flex-column app-align-center app-mt-9 app-px-4 content"
    >
      <div
        class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
        :class="{
          'app-bg-primary': route.path == '/admin/dashboard',
          'app-justify-center': sidebarState == 'close',
        }"
        @click="navigateTo('/admin/dashboard')"
      >
        <BarChartIcon size="1x"></BarChartIcon>
        <span
          class="app-font-size-12 app-font-weight-600 app-px-2 app-pt-1"
          v-if="sidebarState == 'open'"
          >{{ $t("dashboard") }}</span
        >
      </div>

      <div
        class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-3 app-py-1"
        :class="{
          'app-bg-primary': route.path == '/admin/catgory',
          'app-justify-center': sidebarState == 'close',
        }"
        @click="navigateTo('/admin/catgory')"
      >
        <ArchiveIcon size="1x"></ArchiveIcon>
        <span
          class="app-font-size-12 app-font-weight-600 app-px-2 app-pt-1"
          v-if="sidebarState == 'open'"
          >{{ $t("category") }}</span
        >
      </div>

      <div
        class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
        :class="{
          'app-bg-primary': route.path == '/admin/property',
          'app-justify-center': sidebarState == 'close',
        }"
        @click="navigateTo('/admin/property')"
      >
        <ActivityIcon size="1x"></ActivityIcon>
        <span
          class="app-font-size-12 app-font-weight-600 app-px-2 app-pt-1"
          v-if="sidebarState == 'open'"
          >{{ $t("property") }}</span
        >
      </div>
      <div
        class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
        :class="{
          'app-bg-primary': route.path == '/admin/property-value',
          'app-justify-center': sidebarState == 'close',
        }"
        @click="navigateTo('/admin/property-value')"
      >
        <CloudLightningIcon size="1x"></CloudLightningIcon>
        <span
          class="app-font-size-12 app-font-weight-600 app-px-2 app-pt-1"
          v-if="sidebarState == 'open'"
          >{{ $t("property value") }}</span
        >
      </div>
      <div
        class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
        :class="{
          'app-bg-primary': route.path == '/admin/products',
          'app-justify-center': sidebarState == 'close',
        }"
        @click="navigateTo('/admin/products')"
      >
        <CodesandboxIcon size="1x"></CodesandboxIcon>
        <span
          class="app-font-size-12 app-font-weight-600 app-px-2 app-pt-1"
          v-if="sidebarState == 'open'"
          >{{ $t("products") }}</span
        >
      </div>
      <div
        class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
        :class="{
          'app-bg-primary': route.path == '/admin/orders',
          'app-justify-center': sidebarState == 'close',
        }"
        @click="navigateTo('/admin/orders')"
      >
        <ShoppingCartIcon size="1x"></ShoppingCartIcon>
        <span
          class="app-font-size-12 app-font-weight-600 app-px-2 app-pt-1"
          v-if="sidebarState == 'open'"
          >{{ $t("orders") }}</span
        >
      </div>
      <div
        class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
        :class="{
          'app-bg-primary': route.path == '/admin/blogs',
          'app-justify-center': sidebarState == 'close',
        }"
        @click="navigateTo('/admin/blogs')"
      >
        <AlignLeftIcon size="1x"></AlignLeftIcon>
        <span
          class="app-font-size-12 app-font-weight-600 app-px-2 app-pt-1"
          v-if="sidebarState == 'open'"
          >{{ $t("blogs") }}</span
        >
      </div>
      <div
        class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
        :class="{
          'app-bg-primary': route.path == '/admin/customers',
          'app-justify-center': sidebarState == 'close',
        }"
        @click="navigateTo('/admin/customers')"
      >
        <UserIcon size="1x"></UserIcon>
        <span
          class="app-font-size-12 app-font-weight-600 app-px-2 app-pt-1"
          v-if="sidebarState == 'open'"
          >{{ $t("customers") }}</span
        >
      </div>
      <div
        class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
        :class="{
          'app-bg-primary': route.path == '/admin/tickets',
          'app-justify-center': sidebarState == 'close',
        }"
        @click="navigateTo('/admin/tickets')"
      >
        <FileTextIcon size="1x"></FileTextIcon>
        <span
          class="app-font-size-12 app-font-weight-600 app-px-2 app-pt-1"
          v-if="sidebarState == 'open'"
          >{{ $t("tickets") }}</span
        >
      </div>
      <div
        class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
        :class="{
          'app-bg-primary': route.path == '/admin/setting',
          'app-justify-center': sidebarState == 'close',
        }"
        @click="navigateTo('/admin/setting')"
      >
        <SettingsIcon size="1x"></SettingsIcon>
        <span
          class="app-font-size-12 app-font-weight-600 app-px-2 app-pt-1"
          v-if="sidebarState == 'open'"
          >{{ $t("setting") }}</span
        >
      </div>
      <div
        class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
        :class="{
          'app-justify-center': sidebarState == 'close',
        }"
        @click="logOut()"
      >
        <ArrowRightIcon size="1x"></ArrowRightIcon>
        <span
          class="app-font-size-12 app-font-weight-600 app-px-2 app-pt-1"
          v-if="sidebarState == 'open'"
          >{{ $t("exit") }}</span
        >
      </div>
    </div>

    <div
      class="app-flex app-w-100 app-justify-center app-align-center"
      style="height: 120px"
      v-if="sidebarState == 'open'"
    >
      <AppLogo />
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

import { useAuthAdminStore } from "~/store/adminAuth";
import { useRoute } from "vue-router";

const route = useRoute();
const authAdminStore = useAuthAdminStore();

const logOut = () => {
  authAdminStore.logOut();
};

const sidebarState = ref("open");
</script>

<style scoped>
.content {
  overflow-y: scroll;
}
.sidebar-close-state {
  width: 90px;
}
.sidebar-open-state {
  width: 230px;
}
.admin-sidebar {
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-radius: 30px 0 0 30px;
  transition: 0.5s;
}
</style>
