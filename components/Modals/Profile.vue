<template>
  <AppModal :state="state" @close="emit('close')">
    <template #content>
      <div class="app-w-100 app-flex app-flex-column app-px-3 app-py-8">
        <div class="app-flex app-w-100 app-mb-5" v-if="userStore.user.name">
          <AppAvatar :name="userStore.user.name[0]" />
          <div class="app-flex app-flex-column app-justify-center app-px-2">
            <span class="f-s-16 f-w-600"
              >{{ userStore.user.name }} {{ userStore.user.lastname }}</span
            >
            <span class="f-s-14 f-w-100">{{ userStore.user.phone }}</span>
          </div>
        </div>
        <div
          class="app-flex app-align-center app-mt-3 app-pointer"
          @click="toProfile"
        >
          <UserIcon size="1.5x" class="custom-class"></UserIcon>
          <span class="f-s-12 f-w-600 app-px-2 app-pt-1"
            >اطلاعات حساب کاربری</span
          >
        </div>
        <div class="line"></div>
        <div class="app-flex app-align-center app-pointer" @click="toAddress">
          <AlignLeftIcon size="1.5x" class="custom-class"></AlignLeftIcon>
          <span class="f-s-12 f-w-600 app-px-2 app-pt-1">آدرس ها</span>
        </div>
        <div class="line"></div>
        <div class="app-flex app-align-center app-pointer" @click="toFavorite">
          <HeartIcon size="1.5x" class="custom-class"></HeartIcon>
          <span class="f-s-12 f-w-600 app-px-2 app-pt-1"
            >لیست علاقه مندی ها</span
          >
        </div>
        <div class="line"></div>
        <div class="app-flex app-align-center app-pointer" @click="toTickets">
          <FileTextIcon size="1.5x" class="custom-class"></FileTextIcon>
          <span class="f-s-12 f-w-600 app-px-2 app-pt-1">{{
            $t("all tickets for user")
          }}</span>
        </div>
        <div class="line"></div>
        <div
          class="app-flex app-align-center color-danger app-mb-5 app-pointer"
          @click="logOut"
        >
          <ArrowRightIcon size="1.5x" class="custom-class"></ArrowRightIcon>
          <span class="f-s-12 f-w-600 app-px-2">خروج از حساب کاربری</span>
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script setup>
import { useUserStore } from "@/store/user";
import { useAuthStore } from "@/store/auth";
const emit = defineEmits(["close"]);

const userStore = useUserStore();

const props = defineProps({
  state: {
    type: Boolean,
    default: false,
  },
});

const toProfile = () => {
  navigateTo("/profile");
  emit("close");
};

const toAddress = () => {
  navigateTo("/address");
  emit("close");
};

const toTickets = () => {
  navigateTo("/tickets");
  emit("close");
};

const toFavorite = () => {
  navigateTo("/favorite");
  emit("close");
};

const logOut = () => {
  const authStore = useAuthStore();
  authStore.logOut();
};
</script>

<style scoped>
.line {
  width: 100%;
  height: 1px;
  background: #20202021;
  margin: 10px 0;
}
</style>
