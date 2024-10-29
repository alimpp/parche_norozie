<template>
  <div
    class="app-flex app-flex-column app-justify-center app-align-center"
    :style="{ height: height }"
  >
    <div>
      <IconsEmpty
        width="80px"
        height="80px"
        class="app-justify-center app-w-100"
      />
    </div>
    <div>
      <span class="app-font-size-14 app-font-weight-600">{{
        $t("no items found")
      }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  height: {
    type: String,
    default: "100dvh",
  },
});
</script>
