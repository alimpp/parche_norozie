<template>
  <AppCard class="app-mt-3">
    <template #content>
      <div class="app-flex flex-column">
        <div
          class="app-flex app-flex-column app-w-100 app-px-3"
          style="width: 300px"
        >
          <span class="f-s-14 f-w-600 color-primary app-pt-1"
            >{{ data.name }}
          </span>
          <span class="f-s-12 f-w-100">{{ data.description }} </span>
          <div class="app-flex app-w-100">
            <span class="f-s-12">{{ $t("price") }} : {{ data.price }}</span>
          </div>
          <div class="app-flex">
            <span class="f-s-12"
              >{{ $t("price after discount") }} :
              {{ data.price_after_discount }}</span
            >
          </div>
        </div>
      </div>
    </template>
  </AppCard>
</template>

<script setup>
const props = defineProps({
  data: {
    default: {},
    type: Object,
  },
});
</script>

<style scoped>
.bg-discount {
  background: #9999992c;
}
.discount-style {
  color: #666666;
  position: relative;
}
</style>
