<template>
  <AppModal
    :state="state"
    @close="emit('close')"
    :title="$t('ticket info')"
    width="90%"
    height="auto"
  >
    <template #content>
      <div class="app-flex app-flex-column app-w-100 app-px-3 app-py-8">
        <span class="app-font-size-12 app-font-weight-600">{{
          $t("ticket subject")
        }}</span>
        <span class="app-font-size-14 app-font-weight-600">{{
          data.subject
        }}</span>
        <span class="app-font-size-12 app-font-weight-600">{{
          $t("explans")
        }}</span>
        <span class="app-font-size-14 app-font-weight-600">{{
          data.title
        }}</span>

        <div
          class="app-flex app-align-center app-mt-5 app-pointer app-color-danger"
        >
          <TrashIcon size="1x"></TrashIcon>
          <span
            class="app-font-size-12 app-font-weight-600 app-px-2 app-pt-1"
            >{{ $t("remove ticket") }}</span
          >
        </div>
        <div class="app-flex app-align-center app-pointer app-color-danger">
          <XIcon size="1x"></XIcon>
          <span
            class="app-font-size-12 app-font-weight-600 app-px-2 app-pt-1"
            >{{ $t("block ticket") }}</span
          >
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
  data: {
    type: Object,
    default: {},
  },
});
</script>
