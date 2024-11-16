<template>
  <div class="content" v-if="state">
    <div
      class="modal-content app-border-radius fade_animations"
      :class="{
        bgwhite: themeStore.theme == 'light',
        'bg-element-dark': themeStore.theme == 'dark',
        'bg-secondary-custom': themeStore.theme == 'custom',
      }"
    >
      <div class="circle app-py-5">
        <span class="f-s-14 f-w-600 color-primary">{{ title }}</span>
        <span class="f-s-12 f-w-600">{{ text }}</span>
        <div class="icon-content color-primary app-mt-2">
          <slot></slot>
        </div>
      </div>
      <div
        class="app-flex app-w-100 app-align-center app-justify-center app-px-2 app-py-4"
      >
        <AppButton
          :name="$t('confrim')"
          background="bg-primary-100"
          @click="emit('confrim')"
        />
        <AppButton
          :name="$t('cancel')"
          background="bg-danger-transparent"
          color="color-danger"
          fontSize="f-s-14"
          fontWight="f-w-500"
          @click="emit('cancel')"
          class="mx-2"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

const emit = defineEmits(["confrim", "cancel"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
});

const filter = ref("");

const search = () => {
  emit("close");
  emit("search", filter.value);
  filter.value = "";
};
</script>

<style lang="scss" scoped>
.content {
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

.modal-content {
  width: 380px;
  height: 220px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: end;
}

.circle {
  width: 100%;
  height: 280px;
  border-radius: 50%;
  position: absolute;
  z-index: 20;
  bottom: 30%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background: #7272f512;
}

.icon-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  border-radius: 50%;
  background: #fff;
}
</style>
