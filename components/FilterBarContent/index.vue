<template>
  <div class="app-flex app-align-center filter-bar-content">
    <FilterIcon size="1x" />
    <span class="f-s-14 f-w-600 app-px-2">{{ $t("filter by") }}</span>
  </div>
  <div
    class="app-flex app-align-center app-w-100 app-mt-3 cursor-pointer"
    v-for="item in category"
    :key="item"
  >
    <CheckCircleIcon size="1x" v-if="item.active" />
    <PlusIcon size="1x" v-else />
    <span class="f-s-14 app-px-2">{{ item.name }}</span>
  </div>
  <div class="app-flex app-align-center app-mt-2">
    <FilterIcon size="1x" />
    <span class="f-s-14 f-w-600 app-px-2"
      >{{ $t("filter by") }} {{ $t("price") }}</span
    >
  </div>
  <AppInput :label="$t('from')" placeholder="3,000,000" />
  <AppInput :label="$t('to')" placeholder="10,000,000" />
  <AppButton
    :name="$t('submit')"
    background="bg-primary-100"
    class="app-mt-4"
  />
</template>

<script setup>
const category = computed(() => {
  return [
    { name: "همه", id: 1, active: true },
    { name: "کالای خواب", id: 1, active: true },
    { name: "تشک", id: 1, active: false },
    { name: "ملحفه", id: 1, active: true },
    { name: "بالشت", id: 1, active: false },
    { name: "رو تختی", id: 1, active: true },
    { name: "حوله", id: 1, active: false },
    { name: "تخت", id: 1, active: true },
    { name: "پارچه", id: 1, active: false },
  ];
});
</script>
