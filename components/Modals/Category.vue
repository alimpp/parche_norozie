<template>
  <AppModal
    width="50%"
    :state="state"
    @close="close"
    :title="$t('create category')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-4 app-py-2 container">
        <div class="app-flex app-flex-column app-w-100">
          <AppInput
            height="35px"
            :label="$t('title')"
            v-model="form.title"
          />
        </div>
        <div>
          <AppButton
            class="app-mt-4"
            :name="$t('submit')"
            background="app-bg-primary"
            :loading="loading"
            @click=""
          />
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>

const form = ref({
  parent_id: 0,
  title: "",
});

const loading = ref(false);
</script>

<style scoped>
.container {
  max-height: 90vh;
  overflow-y: scroll;
}
.tags-container {
  max-height: 90vh;
  overflow-y: scroll;
}
</style>
