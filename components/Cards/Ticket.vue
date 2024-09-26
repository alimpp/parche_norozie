<template>
  <AppCard>
    <template #content>
      <div class="app-flex app-flex-column app-px-3 app-py-3">
        <span class="app-font-size-16 app-font-weight-500 app-color-primary">{{
          data.subject
        }}</span>
        <span class="app-font-size-12 app-font-weight-500">{{
          data.CreatedAt.slice(0, 10)
        }}</span>
        <span class="app-font-size-12 app-font-weight-500 app-color-gray">{{
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
