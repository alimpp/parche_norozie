<template>
  <div class="app-flex app-h-100 app-justify-center app-align-center">
    <div
      class="admin-sidebar app-border-radius"
      :class="{
        'sidebar-close-state': sidebarState == 'close',
        'sidebar-open-state': sidebarState == 'open',
        bgwhite: themeStore.theme == 'light',
        'bg-element-dark': themeStore.theme == 'dark',
        'bg-secondary-custom': themeStore.theme == 'custom',
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
            'bg-primary-100': route.path == '/admin/dashboard',
            'app-justify-center': sidebarState == 'close',
          }"
          @click="navigateTo('/admin/dashboard')"
        >
          <BarChartIcon size="1x"></BarChartIcon>
          <span
            class="f-s-12 f-w-600 app-px-2 app-pt-1"
            v-if="sidebarState == 'open'"
            >{{ $t("dashboard") }}</span
          >
        </div>

        <div
          class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-3 app-py-1"
          :class="{
            'bg-primary-100': route.path == '/admin/catgory',
            'app-justify-center': sidebarState == 'close',
          }"
          @click="navigateTo('/admin/catgory')"
        >
          <ArchiveIcon size="1x"></ArchiveIcon>
          <span
            class="f-s-12 f-w-600 app-px-2 app-pt-1"
            v-if="sidebarState == 'open'"
            >{{ $t("category") }}</span
          >
        </div>

        <div
          class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
          :class="{
            'bg-primary-100': route.path == '/admin/property',
            'app-justify-center': sidebarState == 'close',
          }"
          @click="navigateTo('/admin/property')"
        >
          <ActivityIcon size="1x"></ActivityIcon>
          <span
            class="f-s-12 f-w-600 app-px-2 app-pt-1"
            v-if="sidebarState == 'open'"
            >{{ $t("property") }}</span
          >
        </div>
        <div
          class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
          :class="{
            'bg-primary-100': route.path == '/admin/property-value',
            'app-justify-center': sidebarState == 'close',
          }"
          @click="navigateTo('/admin/property-value')"
        >
          <CloudLightningIcon size="1x"></CloudLightningIcon>
          <span
            class="f-s-12 f-w-600 app-px-2 app-pt-1"
            v-if="sidebarState == 'open'"
            >{{ $t("property value") }}</span
          >
        </div>
        <div
          class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
          :class="{
            'bg-primary-100': route.path == '/admin/products',
            'app-justify-center': sidebarState == 'close',
          }"
          @click="navigateTo('/admin/products')"
        >
          <CodesandboxIcon size="1x"></CodesandboxIcon>
          <span
            class="f-s-12 f-w-600 app-px-2 app-pt-1"
            v-if="sidebarState == 'open'"
            >{{ $t("products") }}</span
          >
        </div>
        <div
          class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
          :class="{
            'bg-primary-100': route.path == '/admin/orders',
            'app-justify-center': sidebarState == 'close',
          }"
          @click="navigateTo('/admin/orders')"
        >
          <ShoppingCartIcon size="1x"></ShoppingCartIcon>
          <span
            class="f-s-12 f-w-600 app-px-2 app-pt-1"
            v-if="sidebarState == 'open'"
            >{{ $t("orders") }}</span
          >
        </div>
        <div
          class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
          :class="{
            'bg-primary-100': route.path == '/admin/blogs',
            'app-justify-center': sidebarState == 'close',
          }"
          @click="navigateTo('/admin/blogs')"
        >
          <AlignLeftIcon size="1x"></AlignLeftIcon>
          <span
            class="f-s-12 f-w-600 app-px-2 app-pt-1"
            v-if="sidebarState == 'open'"
            >{{ $t("blogs") }}</span
          >
        </div>
        <div
          class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
          :class="{
            'bg-primary-100': route.path == '/admin/customers',
            'app-justify-center': sidebarState == 'close',
          }"
          @click="navigateTo('/admin/customers')"
        >
          <UserIcon size="1x"></UserIcon>
          <span
            class="f-s-12 f-w-600 app-px-2 app-pt-1"
            v-if="sidebarState == 'open'"
            >{{ $t("customers") }}</span
          >
        </div>
        <div
          class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
          :class="{
            'bg-primary-100': route.path == '/admin/tickets',
            'app-justify-center': sidebarState == 'close',
          }"
          @click="navigateTo('/admin/tickets')"
        >
          <FileTextIcon size="1x"></FileTextIcon>
          <span
            class="f-s-12 f-w-600 app-px-2 app-pt-1"
            v-if="sidebarState == 'open'"
            >{{ $t("tickets") }}</span
          >
        </div>
        <div
          class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
          :class="{
            'bg-primary-100': route.path == '/admin/warehouse',
            'app-justify-center': sidebarState == 'close',
          }"
          @click="navigateTo('/admin/warehouse')"
        >
          <LayersIcon size="1x"></LayersIcon>
          <span
            class="f-s-12 f-w-600 app-px-2 app-pt-1"
            v-if="sidebarState == 'open'"
            >{{ $t("warehouse") }}</span
          >
        </div>
        <div
          class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
          :class="{
            'bg-primary-100': route.path == '/admin/pricing',
            'app-justify-center': sidebarState == 'close',
          }"
          @click="navigateTo('/admin/pricing')"
        >
          <DollarSignIcon size="1x"></DollarSignIcon>
          <span
            class="f-s-12 f-w-600 app-px-2 app-pt-1"
            v-if="sidebarState == 'open'"
            >{{ $t("pricing") }}</span
          >
        </div>
        <div
          class="app-flex app-w-100 app-align-center app-pointer app-mt-3 app-border-radius app-px-2 app-py-1"
          :class="{
            'bg-primary-100': route.path == '/admin/setting',
            'app-justify-center': sidebarState == 'close',
          }"
          @click="navigateTo('/admin/setting')"
        >
          <SettingsIcon size="1x"></SettingsIcon>
          <span
            class="f-s-12 f-w-600 app-px-2 app-pt-1"
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
            class="f-s-12 f-w-600 app-px-2 app-pt-1"
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
  height: 97dvh;
  display: flex;
  flex-direction: column;
  transition: 0.5s;
  margin-right: 20px;
}
</style>
