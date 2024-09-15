<template>
  <div class="app-container">
    <div class="row-content">
      <div class="section-right app-flex app-flex-column app-py-4 app-px-5">
        <AppDivider :name="$t('aboutUs')" :hasLine="true" width="65px" />
        <span class="app-mt-3 app-font-size-16 app-font-weight-600">{{
          $t("about us part one")
        }}</span>

        <span class="app-font-size-12 app-font-weight-100 app-mt-2"
          >{{ $t("about us part one") }}
          <span
            class="app-font-size-12 app-font-weight-100 app-color-primary"
            >{{ $t("about us part tree") }}</span
          ></span
        >

        <span class="app-mt-3 app-font-size-12 app-font-weight-500">{{
          $t("about us part four")
        }}</span>

        <span class="app-mt-3 app-font-size-12 app-font-weight-500">{{
          $t("about us part five")
        }}</span>
      </div>
      <div class="section-left">
        <img
          src="@/assets/images/about-us/2.jpg"
          alt="image"
          class="app-w-100 app-border-radius"
        />
      </div>
    </div>

    <div class="row-content app-mt-5">
      <div class="section-right app-flex app-flex-column">
        <img
          src="@/assets/images/about-us/1.jpg"
          alt="image"
          class="app-w-100 app-border-radius"
        />
      </div>
      <div class="section-left app-flex app-flex-column app-py-4 app-px-5">
        <span
          class="app-mt-3 app-font-size-16 app-font-weight-100 app-color-primary"
          >{{ $t("about us part six") }}</span
        >
        <span class="app-mt-3 app-font-size-12 app-font-weight-500">{{
          $t("about us part seven")
        }}</span>

        <span
          class="app-font-size-14 app-font-weight-100 app-color-primary app-pt-3"
          >{{ $t("about us part eight") }}</span
        >

        <span class="app-font-size-12 app-font-weight-500">{{
          $t("about us part nine")
        }}</span>

        <span class="app-font-size-14 app-font-weight-600 app-pt-4">{{
          $t("about us part ten")
        }}</span>

        <span class="app-font-size-14 app-font-weight-600">{{
          $t("about us part end")
        }}</span>

        <AppButton
          :name="$t('contactUs')"
          background="custom-border-primary"
          width="130px"
          class="app-mt-5"
        />
      </div>
    </div>
  </div>
  <AppFooter></AppFooter>
</template>

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
