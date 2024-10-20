<template>
  <AppCard
    class="app-mx-3 app-mt-3"
    width="300px"
    data-aos="fade-up"
    v-if="themeStore.refresh == false"
  >
    <template #content>
      <div class="app-flex flex-column">
        <div style="width: 300px">
          <img
            class="app-w-100"
            style="height: 220px"
            src="https://nicholasrossis.me/wp-content/uploads/2017/04/BLOG01.jpg"
            alt="image"
            loading="lazy"
          />
        </div>
        <div
          class="app-flex app-flex-column app-w-100 app-px-3 app-pt-1"
          style="width: 300px"
        >
          <span class="app-font-size-14 app-font-weight-600"
            >{{ data.Title }}
          </span>
          <span class="app-font-size-12 app-font-weight-100"
            >{{ data.Description.slice(0, 50) }}...
          </span>
          <span class="app-font-size-12 app-font-weight-600 app-color-gray"
            >{{ $t("autor") }}: نوروزی
          </span>
          <div class="app-flex">
            <span class="app-font-size-14 app-font-weight-100 app-color-gray">
              {{ data.CreatedAt }}
            </span>
          </div>
          <span
            class="app-color-primary app-font-size-14 app-py-2 app-pointer"
            @click="read"
            >{{ $t("read more blog") }}</span
          >
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { useThemeStore } from "@/store/theme/index";

const themeStore = useThemeStore();

const emit = defineEmits(["read"]);

const props = defineProps({
  data: {
    default: {},
    type: Object,
  },
});

const read = () => {
  emit("read", props.data);
};
</script>

<style scoped>
.bg-discount {
  background: #9999992c;
}
.discount-style {
  color: #666666;
  position: relative;
}
</style>
