export default defineNuxtRouteMiddleware((to, from) => {
  const token = localStorage.getItem("token_admin");
  if (!token) {
    return navigateTo("/admin/login");
  }
});
