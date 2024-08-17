<template>
  <div class="app-container">
    <AppDivider :name="$t('account')" width="82px" :hasLine="true" />
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user/index";

const userInformation = computed(() => {
  const userStore = useUserStore();
  return userStore.user;
});
</script>
