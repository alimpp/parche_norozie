<template>
  <MainPageBanner />
  <div class="app-container">
    <AppDivider :name="$t('services')" :hasLine="true" width="55px" />
    <ServicesSection class="app-mt-5" />
  </div>
  <div class="app-container">
    <div class="app-flex app-flex-column app-mt-5">
      <AppDivider
        class="app-mx-3"
        :name="$t('best seller')"
        width="165px"
        :hasLine="true"
      />
      <BestSellerSection class="app-mt-1" />
    </div>

    <div class="app-flex app-flex-column app-mt-5">
      <AppDivider
        class="app-mx-3"
        :name="$t('auction')"
        width="90px"
        :hasLine="true"
      />
      <AuctionSection class="app-mt-1" />
    </div>
  </div>

  <div class="app-container">
    <div class="about-us-content">
      <div class="about-us-info app-flex app-flex-column" data-aos="fade-left">
        <AppDivider
          class="app-mx-3"
          :name="$t('aboutUs')"
          width="60px"
          :hasLine="true"
        />
        <span class="app-font-size-16 app-font-weight-600 app-px-3 app-py-2">{{
          $t("about us norozi store")
        }}</span>
        <span
          class="app-font-size-12 app-font-weight-100 app-px-3 app-py-2 app-color-gray"
          >{{ $t("home page about us text 1") }}</span
        >
        <span
          class="app-font-size-12 app-font-weight-100 app-px-3 app-py-2 app-color-gray"
          >{{ $t("home page about us text 2") }}</span
        >
        <AppButton
          :name="$t('read more')"
          width="150px"
          height="35px"
          background="custom-border-primary"
          class="app-mt-2"
          @click="navigateTo('/about-us')"
        />
      </div>
      <div class="image-content" data-aos="fade-right">
        <img
          src="@/assets/images/about-us/1.jpg"
          alt="image"
          class="app-w-100 app-border-radius"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const cycleTime = ref({
  one: 3000,
  two: 5000,
  tree: 8000,
  four: 4000,
});
</script>

<style scoped>
.about-us-content {
  display: flex;
  width: 100%;
}

.about-us-info {
  width: 60%;
}

.image-content {
  width: 40%;
}

@media (max-width: 650px) {
  .about-us-content {
    flex-direction: column;
  }

  .about-us-info {
    width: 100%;
  }

  .image-content {
    width: 100%;
    margin-top: 30px;
  }
}
</style>
