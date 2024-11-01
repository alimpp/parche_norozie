export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const fileName = getQuery(event);
  const token = event.req.headers["authorization"];

  const headers = {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  };

  const response: any = await $fetch(
    `${config.public.BASE_URL}/api/v1/download/${fileName}`,
    {
      method: "GET",
      headers: headers,
    }
  );
  return response;
});
