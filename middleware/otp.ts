import { useAuthStore } from "~/store/auth";

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore();

  if (!authStore.isAccessToOtpPage) {
    return navigateTo("/auth/login");
  }
});
