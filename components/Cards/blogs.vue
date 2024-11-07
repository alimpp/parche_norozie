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
            :src="imageUrl"
            alt="image"
            loading="lazy"
          />
        </div>
        <div
          class="app-flex app-flex-column app-w-100 app-px-3"
          style="width: 300px"
        >
          <span class="f-s--14 f-w-600 color-primary app-pt-1"
            >{{ data.Title }}
          </span>
          <span class="f-s--12 f-w-100"
            >{{ data.Description.slice(0, 40) }}...
          </span>
          <div class="app-flex app-w-100">
            <span class="f-s--10"
              >{{ $t("reading time") }} {{ data.ReadingTime }}
              {{ $t("minute") }}</span
            >
          </div>
          <div class="app-flex app-flex-column">
            <span class="f-s--12">{{ $t("autor") }} :</span>
            <span class="f-s--10">علیرضا نوروزی</span>
          </div>
          <div class="app-w-100 app-flex app-justify-end">
            <span
              class="color-primary f-s--12 app-pointer app-py-2"
              @click="read"
              >{{ $t("read more blog") }}</span
            >
          </div>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { useFileStore } from "~/store/file";
import { useThemeStore } from "@/store/theme/index";

const themeStore = useThemeStore();
const fileStore = useFileStore();

const imageUrl = ref(null);

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

onMounted(async () => {
  imageUrl.value = await fileStore.download(props.data.Image);
});
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
