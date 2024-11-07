<template>
  <div
    :class="{
      'app-bg-white': themeStore.theme == 'light',
      'app-bg-element-dark': themeStore.theme == 'dark',
      'app-bg-secondary-custom': themeStore.theme == 'custom',
    }"
    class="app-flex app-w-100 footer-container"
  >
    <div class="folow-us-container">
      <span
        @click="navigateTo('/contact-us')"
        class="f-s--16 f-w-600 app-pointer"
        >{{ $t("contactUs") }}</span
      >
      <div class="icon_container app-align-start">
        <div class="app-mt-2 app-flex app-pointer app-mt-5">
          <IconsInstagram />
          <span class="f-s--14 app-px-2">{{ $t("we instagram") }}</span>
        </div>

        <div class="app-mt-2 app-flex app-pointer app-mt-5">
          <IconsWhatsUp />
          <span class="f-s--14 app-px-2">{{ $t("we whats up") }}</span>
        </div>
        <div class="app-mt-2 app-flex app-pointer app-mt-5">
          <IconsTelegram />
          <span class="f-s--14 app-px-2">{{ $t("we telegram") }}</span>
        </div>
      </div>
    </div>

    <div class="contact-us-container">
      <span class="f-s--14 f-w-400 mx-2">
        {{ $t("call number") + ":" + " " + $t("phone number") }}
      </span>
      <span class="f-s--14 f-w-400 mt-2 mx-2">{{
        $t("email address") + ":" + " " + email
      }}</span>
    </div>
    <div class="premissions_container">
      <span class="f-s--14 f-w-400 mx-2">
        {{ $t("purchase in person address") + ":" + " " + $t("shop address") }}
      </span>
    </div>
  </div>
</template>
<script setup>
import { useThemeStore } from "@/store/theme/index";
const themeStore = useThemeStore();

const email = ref("parche.norozie@gmail.com");
</script>
<style scoped>
.footer-container {
  overflow: hidden;
  padding: 30px 30px;
}
.folow-us-container {
  width: 30%;
  display: flex;
  flex-direction: column;
}
.contact-us-container {
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.premissions_container {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    padding: 30px 0;
  }
  .premissions_container {
    width: 100%;
  }
}
</style>
