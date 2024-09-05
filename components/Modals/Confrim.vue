<template>
  <AppModal width="380px" :state="state" @close="emit('close')">
    <template #content>
      <div
        class="app-w-100 app-flex app-flex-column app-justify-center app-align-center app-py-8"
      >
        <span class="app-font-size-16 app-font-weight-600">{{ title }}</span>
        <span>{{ text }}</span>
        <div class="app-w-100 app-flex app-justify-center app-mt-5 app-mb-5">
          <AppButton
            :name="$t('confrim')"
            background="app-bg-primary"
            @click="emit('confrim')"
            class="app-mx-2"
          />
          <AppButton
            :name="$t('cancel')"
            background="app-bg-danger"
            @click="emit('cancel')"
            class="app-mx-2"
          />
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
const emit = defineEmits(["confrim", "cancel"]);

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
});
</script>
