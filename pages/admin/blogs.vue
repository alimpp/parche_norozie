<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-flex-column app-px-2 app-py-2">
        <AppBeardCrumb :route="$t('dashboard')" :child="$t('blogs')" />
        <AppButton
          class="app-mt-11 app-mb-4"
          :name="$t('create new blog')"
          background="app-bg-primary"
          height="35px"
          width="150px"
          @click="openBlogModal"
        />
        <ModalsBlog :state="blogModalState" @close="blogModalState = false" />
      </div>
    </template>
  </AppCard>
</template>
<script setup>
definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});

const blogModalState = ref(false);
const openBlogModal = () => {
  blogModalState.value = true;
};
</script>

<style scoped></style>
