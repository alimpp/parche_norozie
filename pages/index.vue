<template>
  <div class="app-w-100 app-flex">
    <MainPageBanner />
  </div>
  <div class="information-section app-mt-15">
    <div class="glass">
      <div class="app-flex app-mt-4">
        <CheckCircleIcon size="1.5x" />
        <span class="app-px-2 app-font-size-16">{{ $t("online sell") }}</span>
      </div>
      <div class="app-flex app-mx-3 app-mt-4">
        <CheckCircleIcon size="1.5x" />
        <span class="app-px-2 app-font-size-16">{{
          $t("best performance")
        }}</span>
      </div>
      <div class="app-flex app-mt-4">
        <CheckCircleIcon size="1.5x" />
        <span class="app-px-2 app-font-size-16">{{ $t("sell person") }}</span>
      </div>
      <div class="app-flex app-mx-3 app-mt-4">
        <CheckCircleIcon size="1.5x" />
        <span class="app-px-2 app-font-size-16">{{
          $t("guarantee products")
        }}</span>
      </div>
      <div class="app-flex app-mt-4">
        <CheckCircleIcon size="1.5x" />
        <span class="app-px-2 app-font-size-16">{{
          $t("online support")
        }}</span>
      </div>
    </div>
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

    <div class="about-us-content app-mt-8">
      <div class="about-us-info app-flex app-flex-column">
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
      <div class="image-content">
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
.banner-content {
  display: flex;
  width: 100%;
}

.banner-content .new-products-container {
  width: 60%;
  padding: 0 15px;
}

.banner-content .discount-container {
  width: 40%;
  padding: 0 15px;
}

.information-section {
  background-image: url(@/assets/images/room.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
}

.information-section .glass {
  width: 100%;
  height: 500px;
  background: #000000bb;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

@media (max-width: 900px) {
  .banner-content {
    display: flex;
    flex-direction: column;
  }

  .banner-content .new-products-container {
    width: 100%;
    padding: 0;
  }

  .banner-content .discount-container {
    width: 100%;
    padding: 0;
  }

  .glass {
    flex-direction: column;
  }
}

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
