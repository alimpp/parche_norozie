<template>
  <AppCard width="100%">
    <template #content>
      <div class="app-w-100 app-flex app-flex-column app-px-3">
        <div class="app-flex app-justify-end app-mt-4 app-w-100">
          <div>
            <XIcon size="1x" class="app-pointer"></XIcon>
          </div>
          <div class="app-mx-2">
            <EditIcon size="1x" class="app-pointer"></EditIcon>
          </div>
        </div>
        <span class="app-font-size-16 app-font-weight-600 app-color-primary">{{
          data.name
        }}</span>
        <span class="app-font-size-12 app-font-weight-600">{{
          data.address
        }}</span>
        <span class="app-font-size-14 app-mt-1 app-font-weight-600 app-pb-5">{{
          data.postal_code
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
