<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex app-align-center app-px-2 app-py-4">
        <div class="app-w-50 app-flex app-flex-column">
          <span class="f-s-16 f-w-600">
            {{ $t("dashboard") }}
          </span>
          <span class="f-s-12 f-w-500 color-gray">
            {{ $t("dashboard admin title") }}
          </span>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
definePageMeta({
  middleware: ["admin-auth"],
  layout: "admin",
});
</script>
