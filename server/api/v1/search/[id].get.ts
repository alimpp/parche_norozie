export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const id = getQuery(event);

  const response: any = await $fetch(
    `${config.public.BASE_URL}/api/v1/search/${id}`,
    {
      method: "GET",
    }
  );

  return response;
});
