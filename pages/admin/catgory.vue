<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50">
          <AppBeardCrumb :route="$t('dashboard')" :child="$t('category')" />
        </div>
        <div class="app-w-50 app-flex app-justify-end">
          <AppButton
            :name="$t('create category')"
            background="app-bg-primary"
            height="35px"
            width="150px"
            @click="openCategoryModal"
            class="app-mx-4"
          />
        </div>
      </div>
    </template>
  </AppCard>
  <ModalsCategory :state="categoryModalState" @close="categoryModalState = false" />
</template>
<script setup>
definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});

const categoryModalState = ref(false);
const openCategoryModal = () => {
  categoryModalState.value = true;
};
</script>
