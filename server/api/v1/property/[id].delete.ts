export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const id = getQuery(event);

  const token = event.req.headers["authorization"];

  const headers = {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  };

  const response: any = await $fetch(
    `${config.public.BASE_URL}/api/v1/property/${id}`,
    {
      method: "DELETE",
      headers: headers,
    }
  );
  return response;
});
