export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  const response: any = await $fetch(
    `${config.public.BASE_URL}/api/v1/search?name=${query.name}`,
    {
      method: "GET",
    }
  );

  return response;
});
