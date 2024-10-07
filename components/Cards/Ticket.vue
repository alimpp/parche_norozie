<template>
  <AppCard>
    <template #content>
      <div class="app-flex app-flex-column app-px-3 app-py-3">
        <div class="app-flex">
          <span
            class="app-font-size-16 app-font-weight-500 app-color-primary"
            >{{ data.subject }}</span
          >
          <span
            class="app-font-size-10 app-font-weight-500 app-bg-danger app-flex app-align-center app-border-radius app-mx-2 app-px-2"
            v-if="!data.seen_by_admin || !data.seen_by_user"
            >{{ $t("new message") }}</span
          >
        </div>
        <span class="app-font-size-10 app-font-weight-600 app-color-gray">{{
          data.CreatedAt.slice(0, 10)
        }}</span>
        <span class="app-font-size-12 app-font-weight-600">{{
          data.title
        }}</span>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>
