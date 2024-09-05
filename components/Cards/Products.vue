<template>
  <AppCard width="250px">
    <template #content>
      <div class="app-flex app-flex-column">
        <img src="@/assets/images/about-us/IMG_5185.jpg" alt="image" />
        <div class="app-flex app-flex-column app-px-2 app-py-2">
          <span class="app-font-size-16 app-font-weight-600"
            >رو تختی طرح رز</span
          >
          <span class="app-font-size-12 app-font-weight-600 app-color-gray"
            >کالای خواب</span
          >
          <div class="app-flex app-w-100">
            <div class="app-w-50">
              <span class="app-font-size-14 app-font-weight-600">قیمت :</span>
            </div>
            <div class="app-w-50 app-flex app-justify-end">
              <del>
                <span class="app-font-size-14 app-font-weight-600"
                  >2,100,000</span
                >
              </del>
              <!-- <span class="app-font-size-14 app-font-weight-600"
                >2,100,000</span
              > -->
            </div>
          </div>
          <div class="app-flex app-w-100">
            <div class="app-w-50">
              <span class="app-font-size-14 app-font-weight-600"
                >قیمت با تخفیف :</span
              >
            </div>
            <div class="app-w-50 app-flex app-justify-end app-color-primary">
              <span class="app-font-size-14 app-font-weight-600"
                >1,100,000</span
              >
            </div>
          </div>
          <AppButton
            background="app-bg-primary"
            height="37px"
            :name="$t('add to shopping card')"
            class="app-mt-2"
          />
        </div>
      </div> </template
  ></AppCard>
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
img {
  width: 250px;
  height: 200px;
}
</style>
