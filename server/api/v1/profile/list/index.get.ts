export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  const token = event.req.headers["authorization"];

  const headers = {
    Authorization: `Bearer ${token?.slice(7) || ""}`,
    "Content-Type": "application/json",
  };

  const response: any = await $fetch(
    `${config.public.BASE_URL}/api/v1/profile/list?name=${query.name}&lastname=${query.lastname}&id_card_number=${query.id_card_number}&email=${query.email}&phone=${query.phone}`,
    {
      method: "GET",
      headers: headers,
    }
  );

  return response;
});
