export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const id = getQuery(event);

  const token = event.req.headers["authorization"];

  const headers = {
    Authorization: `${token}`,
    "Content-Type": "application/json",
  };

  const response: any = await $fetch(
    `${config.public.BASE_URL}/api/v1/blog/update/${id}`,
    {
      method: "PUT",
      body: body,
      headers: headers,
    }
  );
  return response;
});
