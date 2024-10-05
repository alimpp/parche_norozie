export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const ulid = getQuery(event);

  const token = event.req.headers["authorization"];

  const headers = {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  };

  const response: any = await $fetch(
    `${config.public.BASE_URL}/api/v1/ticketing/retrieve/${ulid.ulid}`,
    {
      method: "GET",
      headers: headers,
    }
  );
  return response;
});
