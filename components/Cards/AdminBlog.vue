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
        <div class="app-w-30 app-flex">
          <img
            class="image-style"
            src="https://nicholasrossis.me/wp-content/uploads/2017/04/BLOG01.jpg"
            alt="image"
          />
        </div>
        <div class="app-flex app-flex-column app-px-4 app-py-4">
          <span class="app-font-size-12 app-font-weight-600"
            >{{ $t("title") }} :</span
          >
          <span class="app-font-size-14 app-font-weight-600">{{
            data.Title
          }}</span>
          <span class="app-font-size-12 app-font-weight-600"
            >{{ $t("explans") }} :</span
          >
          <span class="app-font-size-14 app-font-weight-600">{{
            data.Description
          }}</span>
          <span class="app-font-size-12 app-font-weight-600"
            >{{ $t("created at") }} :</span
          >
          <span class="app-font-size-12 app-font-weight-600 app-color-gray">
            {{ data.CreatedAt }}</span
          >
          <div class="app-flex app-mt-4">
            <span class="app-pointer app-color-primary" @click="editBlog">
              <EditIcon size="1x"></EditIcon>
            </span>
            <span
              class="app-color-danger app-pointer app-px-2"
              @click="deleteState = true"
            >
              <TrashIcon size="1x"></TrashIcon>
            </span>
          </div>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
const emit = defineEmits(["deleteBlog", "editBlog"]);

const deleteState = ref(false);

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
</script>

<style scoped>
.image-style {
  width: 100%;
  height: auto;
}
</style>
