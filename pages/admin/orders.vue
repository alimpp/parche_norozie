<template>    <AppCard class="app-mt-3">
      <template #content>
        <div class="app-flex app-align-center app-px-2 app-py-4">
          <div class="app-w-50 app-flex app-flex-column">
            <span class="app-font-size-16 app-font-weight-600">
              {{ $t("orders") }}
            </span>
            <span class="app-font-size-12 app-font-weight-500 app-color-gray">
              {{ $t("order admin title") }}
            </span>
          </div>
        </div>
      </template>
    </AppCard></template>
<script setup>
definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});
</script>
