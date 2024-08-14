export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { public: url } = useRuntimeConfig();

  const response: any = await $fetch(`${url.baseUrl}/api/v1/otp`, {
    method: "POST",
    body: body,
  });
  return response;
});
