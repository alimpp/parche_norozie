<template>
  <div class="app-flex app-w-100">
    <input
      @change="upload"
      type="file"
      ref="fileElement"
      style="display: none"
    />
    <div
      @click="openFile"
      :class="{ 'app-mx-4': urlImage }"
      class="app-pointer app-border app-w-100 app-border-radius app-flex app-flex-column app-justify-center app-align-center app-h-300-px"
    >
      <v-progress-circular
        indeterminate
        color="#7272f5"
        v-if="loading"
      ></v-progress-circular>
      <div
        class="app-flex app-flex-column app-justify-center app-align-center"
        v-else
      >
        <span class="f-s-16 f-w-600">{{ $t("upload image") }}</span>
        <ImageIcon size="1.5x"></ImageIcon>
      </div>
    </div>
  </div>
</template>

<script setup>
import { generateUid } from "@/utils/uid";
import { useFileStore } from "@/store/file/index";

const fileStore = useFileStore();

const props = defineProps({});
const emit = defineEmits(["fileInformation"]);

const file = ref(null);
const fileElement = ref();
const loading = ref(false);

const openFile = () => {
  fileElement.value.click();
};

const upload = async (event) => {
  loading.value = !loading.value;
  const fileName = generateUid(30);
  file.value = event.target.files[0];
  const urlImage = URL.createObjectURL(file.value);
  const type = file.value.type.split("/")[1];
  await fileStore.upload(file.value, `${fileName}.${type}`);
  emit("fileInformation", {
    fileName: `${fileName}.${type}`,
    urlImage,
  });
  loading.value = !loading.value;
};
</script>
