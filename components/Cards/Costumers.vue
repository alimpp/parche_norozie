<template>
  <AppAdminCard>
    <template #content>
      <div class="app-flex app-flex-column app-px-2 app-py-2">
        <div class="app-flex">
          <span class="app-font-size-14">{{ $t("phoneNumber") }} :</span>
          <span class="app-font-size-14 app-px-2"> {{ data.phone }}</span>
        </div>
        <div class="app-flex">
          <span class="app-font-size-14">{{ $t("name") }} :</span>
          <span class="app-font-size-14 app-px-2"> {{ data.name }}</span>
        </div>
        <div class="app-flex">
          <span class="app-font-size-14">{{ $t("family name") }} :</span>
          <span class="app-font-size-14 app-px-2"> {{ data.lastname }}</span>
        </div>
        <div class="app-flex">
          <span class="app-font-size-14">{{ $t("email address") }} :</span>
          <span class="app-font-size-14 app-px-2"> {{ data.email }}</span>
        </div>
        <div class="app-flex">
          <span class="app-font-size-14">{{ $t("id card") }} :</span>
          <span class="app-font-size-14 app-px-2">
            {{ data.id_card_number }}</span
          >
        </div>
        <div class="app-flex">
          <span class="app-font-size-14">{{ $t("job") }} :</span>
          <span class="app-font-size-14 app-px-2"> {{ data.job }}</span>
        </div>
      </div>
    </template>
  </AppAdminCard>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: {},
  },
});
</script>
