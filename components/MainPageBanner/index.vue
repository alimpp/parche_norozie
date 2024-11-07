<template>
  <div class="app-w-100 main-page-banner">
    <div class="content">
      <div class="glass">
        <h1 class="f-s-18 f-w-600" data-aos="fade-up" data-aos-duration="1000">
          {{ $t("kalaye khab norozi") }}
        </h1>
        <h2 class="f-s-14 f-w-500" data-aos="fade-up" data-aos-duration="1500">
          {{ $t("main page banner title") }}
        </h2>
        <h2 class="f-s-12 f-w-500" data-aos="fade-up" data-aos-duration="1800">
          {{ $t("main page banner subtitle") }}
        </h2>
        <AppButton
          data-aos="fade-up"
          data-aos-duration="2000"
          background="bgwhite"
          class="app-mt-4"
          :name="$t('view products')"
          height="33px"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 100%;
  height: 100dvh;
  background-image: url("/public/images/bedroom-1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  animation: 30s animation infinite;
}
.content .glass {
  width: 100%;
  height: 100dvh;
  background: #000000c9;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  color: #fff;
  padding: 0 50px;
}

@media (max-width: 600px) {
  .content .glass {
    padding: 0 15px;
  }
}
</style>
