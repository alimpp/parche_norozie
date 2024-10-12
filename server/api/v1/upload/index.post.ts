export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  //   const token = event.req.headers["authorization"];

  //   const headers = {
  //     Authorization: `${token}`,
  //     "Content-Lengths": body.size,
  //     "Content-Type": body.type,
  //   };

  //   const response: any = await $fetch(
  //     `${config.public.BASE_URL}/api/v1/upload/${body.name}`,
  //     {
  //       method: "POST",
  //       body: body,
  //       headers: headers,
  //     }
  //   );
  return body;
});
