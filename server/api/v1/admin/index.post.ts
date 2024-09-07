export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const response: any = await $fetch(`${config.public.BASE_URL}/api/v1/admin`, {
    method: "POST",
    body: body,
  });
  return response;
});
