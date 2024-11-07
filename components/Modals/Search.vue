<!-- <template>
  <div>
    <AppModal
      width="400px"
      :state="state"
      @close="emit('close')"
      :title="$t('search')"
    >
      <template #content>
        <div class="app-flex app-w-100 app-px-2 app-py-4">
          <div class="app-w-100">
            <AppInput
              height="35px"
              :label="$t('title')"
              class=""
              v-model="filter"
              @keyup.enter="search"
            />
            <AppButton
              width="100%"
              class="app-mt-4"
              :name="$t('search')"
              background="bg-primary-100"
              fontSize="f-s-12"
              @click="search"
            />
          </div>
        </div>
      </template>
    </AppModal>
  </div>
</template> -->

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
        <span class="f-s-14 f-w-600">{{ $t("search") }}</span>
        <span class="f-s-10 f-w-500">{{ $t("searching item") }}</span>
        <div class="icon-content color-primary app-mt-2">
          <SearchIcon siz="1.5x"></SearchIcon>
        </div>
      </div>
      <div class="app-flex app-w-100 app-px-2 app-py-4">
        <div class="app-w-100">
          <AppInput
            height="35px"
            :label="$t('key character typing')"
            class=""
            v-model="filter"
            @keyup.enter="search"
          />
          <div class="app-flex">
            <AppButton
              width=""
              class="app-mt-4"
              :name="$t('search')"
              background="bg-primary-100"
              fontSize="f-s-12"
              @click="search"
            />
            <AppButton
              width=""
              class="app-mt-4 app-mx-2"
              :name="$t('cancel')"
              background="bg-danger-500"
              fontSize="f-s-14"
              @click="emit('close')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

const emit = defineEmits(["close", "search"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
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
  height: 300px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: end;
}

.circle {
  width: 100%;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  z-index: 20;
  bottom: 55%;
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
