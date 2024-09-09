<template>
  <div class="app-flex app-w-100 container app-bg-primary">
    <div
      class="app-flex app-flex-column app-w-33 app-align-center folowUs_container"
    >
      <span
        class="app-font-size-16 app-font-weight-600 app-color-secondary app-mx-2 "
        >{{ $t("folow us") }}</span
      >
    <div class="icon_container app-align-start">
      <div class="app-mt-2">
        <span class="app-font-size-16 app-font-weight-400 app-mx-2 "
          >instagram</span
        >
        <span>
          <InstagramIcon
            size="1.5x"
            class="custom-class app-pointer"
          ></InstagramIcon>
        </span>
      </div>

      <div class="app-mt-2 mr-2">
        <span class="app-font-size-16 app-font-weight-400 app-mx-2"
          >telegram</span
        >
        <span>
          <InstagramIcon
            size="1.5x"
            class="custom-class app-pointer"
          ></InstagramIcon>
        </span>
      </div>
      <div class="app-mt-2">
        <span class="app-font-size-16 app-font-weight-400 app-mx-2"
          >whatsApp</span
        >
        <span>
          <InstagramIcon
            size="1.5x"
            class="custom-class app-pointer"
          ></InstagramIcon>
        </span>
      </div>
    </div>
    </div>
    <div
      class="app-flex app-flex-column app-w-33 app-align-center contactUs_container"
    >
      <span
        class="app-font-size-16 app-font-weight-600 app-color-secondary mx-2"
        >{{ $t("contactUs") }}</span
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
      class="app-flex app-flex-column app-w-33 app-align-center premissions_container {"
    >
      <span
        class="app-font-size-16 app-font-weight-600 app-color-secondary mx-2"
        >{{ $t("permissions") }}</span
      >
      <div class="app-w-33">
        <img src="/assets/images/about-us/enamad-logo.png" class="app-w-100" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>
.container {
  height: 210px;
}
img {
  width: 150px;
}
@media (max-width: 800px) {
  .container {
    display: flex;
    flex-direction: column;
    height: auto;
  }

  .folowUs_container {
    width: 100%;
  }

  .contactUs_container {
    width: 100%;
  }
  .premissions_container {
    width: 100%;
  }
}

</style>
