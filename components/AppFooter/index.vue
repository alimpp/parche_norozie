<template>
  <div class="app-flex app-w-100 footer-container">
    <div
      class="app-flex app-flex-column app-w-33 app-align-start app-mx-4 folow-us-container"
    >
      <span class="app-font-size-16 app-font-weight-600 app-color-gray">{{
        $t("contactUs")
      }}</span>
      <div class="icon_container app-align-start">
        <div class="app-mt-2 app-flex app-pointer app-mt-5">
          <IconsInstagram />
          <span class="app-font-size-14 app-color-gray app-px-2">{{
            $t("we instagram")
          }}</span>
        </div>

        <div class="app-mt-2 app-flex app-pointer app-mt-5">
          <IconsWhatsUp />
          <span class="app-font-size-14 app-color-gray app-px-2">{{
            $t("we whats up")
          }}</span>
        </div>
        <div class="app-mt-2 app-flex app-pointer app-mt-5">
          <IconsTelegram />
          <span class="app-font-size-14 app-color-gray app-px-2">{{
            $t("we telegram")
          }}</span>
        </div>
      </div>
    </div>

    <div
      class="app-flex app-flex-column app-w-33 app-align-start mx-2 contact-us-container app-mt-8"
    >
      <span
        class="app-font-size-14 app-font-weight-400 app-color-gray mt-2 mx-2"
        >شماره تماس: 09373709687</span
      >
      <span
        class="app-font-size-14 app-font-weight-400 app-color-gray mt-2 mx-2"
        >ایمیل: parche.norozi@gmail.com</span
      >
      <span
        class="app-font-size-14 app-font-weight-400 app-color-gray mt-2 mx-2"
        >آدرس برای مراجعه حضوری: تهران اسلامشهر خیابان امام حسین (باغ فیض)
        ابتدای کوچه 27 پارچه سرای و کالای خواب نوروزی</span
      >
    </div>
    <div
      class="app-flex app-flex-column app-w-33 app-align-start mx-2 premissions_container"
    >
      <span class="app-font-size-16 app-font-weight-600 app-color-gray mx-2">{{
        $t("permissions")
      }}</span>
      <div class="app-w-33">
        <img src="/assets/images/about-us/enamad-logo.png" class="app-w-100" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  overflow: hidden;
  border-top: 1px solid #ffffff56;
  padding: 30px 30px;
  border-radius: 30px 30px 0 0;
}

img {
  width: 150px;
}

@media (max-width: 800px) {
  .footer-container {
    display: flex;
    flex-direction: column;
    padding: 25px 10px;
  }
  .folow-us-container {
    width: 100%;
  }
  .contact-us-container {
    width: 100%;
  }
  .premissions_container {
    width: 100%;
  }
}
</style>
