<template>
  <AppCard>
    <template #content>
      <div class="app-flex app-flex-column app-px-2 app-py-2">
        <div class="app-flex">
          <span class="app-font-size-12 app-font-weight-600"
            >{{ $t("phoneNumber") }} :</span
          >
          <span class="app-font-size-12 app-px-2 app-font-weight-600">
            {{ data.phone }}</span
          >
        </div>
        <div class="app-flex">
          <span class="app-font-size-12 app-font-weight-600"
            >{{ $t("name") }} :</span
          >
          <span class="app-font-size-12 app-px-2 app-font-weight-600">
            {{ data.name }}</span
          >
        </div>
        <div class="app-flex">
          <span class="app-font-size-12 app-font-weight-600"
            >{{ $t("family name") }} :</span
          >
          <span class="app-font-size-12 app-px-2 app-font-weight-600">
            {{ data.lastname }}</span
          >
        </div>
        <div class="app-flex">
          <span class="app-font-size-12 app-font-weight-600"
            >{{ $t("email address") }} :</span
          >
          <span class="app-font-size-12 app-px-2 app-font-weight-600">
            {{ data.email }}</span
          >
        </div>
        <div class="app-flex">
          <span class="app-font-size-12 app-font-weight-600"
            >{{ $t("id card") }} :</span
          >
          <span class="app-font-size-12 app-px-2 app-font-weight-600">
            {{ data.id_card_number }}</span
          >
        </div>
        <div class="app-flex">
          <span class="app-font-size-12 app-font-weight-600"
            >{{ $t("job") }} :</span
          >
          <span class="app-font-size-12 app-px-2 app-font-weight-600">
            {{ data.job }}</span
          >
        </div>
        <div class="app-flex" v-for="(address, index) in data.address">
          <span class="app-font-size-12 app-font-weight-600"
            >{{ $t("address") }}{{ index + 1 }} :</span
          >
          <span class="app-font-size-12 app-px-2 app-font-weight-600">
            {{ address.address }}
          </span>
          <span class="app-font-size-12 app-px-2 app-font-weight-600">
            {{ $t("postal code") }} {{ address.postal_code }}
          </span>
        </div>
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
