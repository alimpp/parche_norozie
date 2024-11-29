<template>
  <div ref="scrollToTop" class="app-container">
    <div class="row-content">
      <div
        class="section-right app-flex app-flex-column app-py-4 app-px-5"
        data-aos="fade-left"
      >
        <AppDivider :name="$t('aboutUs')" :hasLine="true" width="65px" />
        <span class="app-mt-3 f-s-16 f-w-600">{{
          $t("about us part one")
        }}</span>

        <span class="f-s-12 f-w-100 app-mt-2"
          >{{ $t("about us part two") }}
          <span class="f-s-12 f-w-100 color-primary">{{
            $t("about us part tree")
          }}</span></span
        >

        <span class="app-mt-3 f-s-12 f-w-500"
          >{{ $t("about us part four") }}
        </span>

        <span class="app-mt-3 f-s-12 f-w-500">{{
          $t("about us part five")
        }}</span>
      </div>
      <div class="section-left" data-aos="fade-right">
        <img
          src="@/assets/images/about-us/2.jpg"
          alt="image"
          class="app-w-100 app-border-radius"
        />
      </div>
    </div>

    <div class="row-content app-mt-5">
      <div
        class="section-right app-flex app-flex-column"
        data-aos="fade-up-left"
      >
        <img
          src="@/assets/images/about-us/1.jpg"
          alt="image"
          class="app-w-100 app-border-radius"
        />
      </div>
      <div
        class="section-left app-flex app-flex-column app-py-4 app-px-5"
        data-aos="fade-up-right"
      >
        <span class="app-mt-3 f-s-16 f-w-100 color-primary">{{
          $t("about us part six")
        }}</span>
        <span class="app-mt-3 f-s-12 f-w-500">{{
          $t("about us part seven")
        }}</span>

        <span class="f-s-14 f-w-100 color-primary app-pt-3">{{
          $t("about us part eight")
        }}</span>

        <span class="f-s-12 f-w-500">{{ $t("about us part nine") }}</span>

        <span class="f-s-14 f-w-600 app-pt-4">{{
          $t("about us part ten")
        }}</span>

        <span class="f-s-14 f-w-600">{{ $t("about us part end") }}</span>

        <AppButton
          :name="$t('contactUs')"
          background="custom-border-primary"
          width="130px"
          class="app-mt-5"
          @click="navigateTo('/contact-us')"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const scrollToTop = ref(null);
onMounted(() => {
  scrollToTop.value.scrollIntoView();
});
</script>
<style scoped>
.row-content {
  width: 100%;
  display: flex;
}

.section-right {
  width: 50%;
}
.section-left {
  width: 50%;
}

@media (max-width: 800px) {
  .row-content {
    flex-direction: column;
  }
  .section-left {
    width: 100%;
  }
  .section-right {
    width: 100%;
  }
}
</style>
