<template>
  <div class="toast-content" v-if="toastStore.state">
    <div
      class="fade_animations app-border-radius"
      :style="{
        width: `${toastStore.width}`,
      }"
      :class="{
        bgwhite: themeStore.theme == 'light',
        'bgelement-dark': themeStore.theme == 'dark',
        'bgsecondary-custom': themeStore.theme == 'custom',
      }"
    >
      <div class="app-flex app-w-100" v-if="toastStore.hasClose">
        <div
          class="app-w-50 app-flex app-justify-start app-px-1 app-py-3 app-px-3"
        ></div>
        <div
          class="app-w-50 app-flex app-justify-end app-px-1 app-py-3 app-px-3"
          @click="toastStore.state = false"
        >
          <XIcon size="1.5x" class="custom-class app-pointer"> </XIcon>
        </div>
      </div>
      <div
        class="app-w-100 app-flex app-flex-column app-align-center app-justify-center app-pt-5"
      >
        <CheckCircleIcon size="1.5x" v-if="toastStore.icon == 'success'" />
        <span class="f-s--16 f-w-600">{{ toastStore.title }}</span>
        <span class="f-s--12 f-w-100">{{ toastStore.text }}</span>
        <v-progress-linear
          class="app-mt-5"
          color="#fd7403"
          indeterminate
        ></v-progress-linear>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToastStore } from "~/store/toast";
import { useThemeStore } from "@/store/theme/index";

const themeStore = useThemeStore();
const toastStore = useToastStore();

const emit = defineEmits(["close"]);

const props = defineProps({
  width: {
    type: String,
    default: "380px",
  },
});
</script>

<style lang="scss" scoped>
.toast-content {
  position: fixed;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(5, 5, 5, 0.816);
  transition: 1s;
}
</style>
