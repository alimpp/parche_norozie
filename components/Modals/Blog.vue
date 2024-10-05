<template>
  <AppModal
    width="90%"
    :state="state"
    @close="emit('close')"
    :title="$t('create new blog')"
  >
    <template #content>
      <div class="app-flex app-flex-column app-px-2 app-py-2">
        <div class="app-flex app-flex-column app-w-100">
          <AppInput height="35px" :label="$t('title')" />
          <AppInput height="35px" :label="$t('upload img')" class="" />
          <AppInput height="35px" :label="$t('subject')" />
          <AppTextarea :label="$t('text')" />
          <AppButton
            width="150px"
            class="app-mx-2 app-mt-11"
            :name="$t('create')"
            background="app-bg-primary"
            height="35px"
          />
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
const emit = defineEmits(["close"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});
</script>
