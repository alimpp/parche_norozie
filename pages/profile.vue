<template>
  <div>
    {{ userInformation }}
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user/index";

const userInformation = computed(() => {
  const userStore = useUserStore();
  return userStore.user;
});
</script>
