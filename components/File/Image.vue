<template>
  <div class="app-flex app-w-100">
    <input
      @change="tagetFile"
      type="file"
      ref="fileElement"
      style="display: none"
    />
    <img
      v-if="urlImage"
      :src="urlImage"
      alt="image"
      width="500"
      class="app-border-radius"
    />
    <div
      @click="openFile"
      :class="{ 'app-mx-4': urlImage }"
      class="app-pointer app-border app-w-100 app-border-radius app-flex app-flex-column app-justify-center app-align-center app-h-300-px"
    >
      <span class="app-font-size-16 app-font-weight-600">{{
        $t("upload image")
      }}</span>
      <ImageIcon size="1.5x"></ImageIcon>
    </div>
  </div>
</template>

<script setup>
import { useFileStore } from "@/store/file/index";
const props = defineProps({});

const file = ref(null);
const urlImage = ref(null);

const fileElement = ref();

const openFile = () => {
  fileElement.value.click();
};

const tagetFile = (event) => {
  const fileStore = useFileStore();
  file.value = event.target.files[0];
  urlImage.value = URL.createObjectURL(file.value);
  console.log(urlImage.value);
};
</script>
