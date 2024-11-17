export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const response: any = await $fetch(
    `${config.public.BASE_URL}/api/v1/product/get`,
    {
      method: "POST",
      body: body,
    }
  );

  return response;
});
