<template>
  <AppCard>
    <template #content>
      <ModalsConfrim
        :state="deleteState"
        :title="$t('delete blog')"
        :text="$t('confrim delete blog')"
        @confrim="deleteBlog"
        @cancel="deleteState = false"
        @close="deleteState = false"
      />
      <div class="app-w-100 app-flex">
        <div class="app-flex">
          <img class="image-style" :src="imageUrl" alt="image" />
        </div>
        <div class="app-flex app-flex-column app-px-4 app-py-4">
          <span class="f-s--12 f-w-600">{{ $t("title") }} :</span>
          <span class="f-s--14 f-w-600">{{ data.Title }}</span>
          <span class="f-s--12 f-w-600">{{ $t("explans") }} :</span>
          <span class="f-s--14 f-w-600">{{ data.Description }}</span>
          <span class="f-s--12 f-w-600">{{ $t("created at") }} :</span>
          <span class="f-s--12 f-w-600"> {{ data.CreatedAt }}</span>
          <div class="app-flex app-mt-4">
            <span class="app-pointer app-color-white" @click="editBlog">
              <v-tooltip :text="$t('edit')" location="bottom">
                <template v-slot:activator="{ props }">
                  <AppIconContent color="success" v-bind="props"
                    ><EditIcon size="1x"></EditIcon
                  ></AppIconContent>
                </template>
              </v-tooltip>
            </span>
            <span
              class="app-color-white app-pointer app-px-2"
              @click="deleteState = true"
            >
              <v-tooltip :text="$t('remove')" location="bottom">
                <template v-slot:activator="{ props }">
                  <AppIconContent color="danger" v-bind="props"
                    ><TrashIcon size="1x"></TrashIcon
                  ></AppIconContent>
                </template>
              </v-tooltip>
            </span>
          </div>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
import { useFileStore } from "~/store/file";
const fileStore = useFileStore();

const emit = defineEmits(["deleteBlog", "editBlog"]);

const deleteState = ref(false);
const imageUrl = ref(null);

const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});

const editBlog = () => {
  emit("editBlog", props.data);
};

const deleteBlog = () => {
  deleteState.value = false;
  emit("deleteBlog", props.data);
};

onMounted(async () => {
  imageUrl.value = await fileStore.download(props.data.Image);
});
</script>

<style scoped>
.image-style {
  width: 300px;
  height: auto;
}
</style>
