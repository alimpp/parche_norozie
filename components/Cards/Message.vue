<template>
  <div
    class="app-flex w-100 app-border-radius"
    :dir="data.itsMe ? 'rtl' : 'ltr'"
  >
    <div>
      <AppAvatar
        :name="data.name[0]"
        width="30px"
        height="30px"
        v-if="!data.itsMe"
      />
    </div>
    <div
      class="message-card app-border-radius app-mx-2 app-flex app-align-center app-px-2"
      :class="{
        'app-bg-white': themeStore.theme == 'light',
        'app-bg-element-dark': themeStore.theme == 'dark',
        'app-bg-secondary-custom': themeStore.theme == 'custom',
      }"
    >
      <span class="app-font-size-12"> {{ data.msg }}</span>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>
