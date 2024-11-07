<template>
  <AppCard>
    <template #content>
      <div class="app-flex app-flex-column app-px-2 app-py-2">
        <div class="app-flex color-primary">
          <span
            class="f-s-14 app-px-3 app-py-1 f-w-500 bg-primary-transparent app-border-radius app-flex app-align-center"
          >
            <HashIcon size="1.4x"></HashIcon>
            {{ data.phone }}</span
          >
        </div>
        <div class="app-flex">
          <span class="f-s-12 f-w-600">{{ $t("name") }} :</span>
          <span class="f-s-12 app-px-2 f-w-600"> {{ data.name }}</span>
        </div>
        <div class="app-flex">
          <span class="f-s-12 f-w-600">{{ $t("family name") }} :</span>
          <span class="f-s-12 app-px-2 f-w-600"> {{ data.lastname }}</span>
        </div>
        <div class="app-flex">
          <span class="f-s-12 f-w-600">{{ $t("email address") }} :</span>
          <span class="f-s-12 app-px-2 f-w-600"> {{ data.email }}</span>
        </div>
        <div class="app-flex">
          <span class="f-s-12 f-w-600">{{ $t("id card") }} :</span>
          <span class="f-s-12 app-px-2 f-w-600">
            {{ data.id_card_number }}</span
          >
        </div>
        <div class="app-flex">
          <span class="f-s-12 f-w-600">{{ $t("job") }} :</span>
          <span class="f-s-12 app-px-2 f-w-600"> {{ data.job }}</span>
        </div>
        <div class="app-flex" v-for="(address, index) in data.address">
          <span class="f-s-12 f-w-600"
            >{{ $t("address") }}{{ index + 1 }} :</span
          >
          <span class="f-s-12 app-px-2 f-w-600">
            {{ address.address }}
          </span>
          <span class="f-s-12 app-px-2 f-w-600">
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
