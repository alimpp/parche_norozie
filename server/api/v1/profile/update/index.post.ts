export default defineEventHandler(async (event) => {
  const { public: url } = useRuntimeConfig();
  const body = await readBody(event);

  const cookieString = event.node.req.headers.cookie;
  type CookiesObject = { [key: string]: string };
  const cookiesObject: any | CookiesObject = cookieString
    ?.split(";")
    .reduce((acc, cookie) => {
      const [key, value] = cookie.split("=").map((part) => part.trim());
      acc[key] = value;
      return acc;
    }, {} as CookiesObject);

  const response: any = await $fetch(`${url.baseUrl}/api/v1/profile/update`, {
    method: "POST",
    body: body,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${cookiesObject.token || ""}`,
    },
  });
  return response;
});
