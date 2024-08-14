export default defineEventHandler(async (event) => {
  const { public: url } = useRuntimeConfig();
  const response: any = await $fetch(`${url.baseUrl}/api/v1/profile`, {
    headers: {
      Accept: "application/json",
    },
  });
  return response;
});
