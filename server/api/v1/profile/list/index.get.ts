export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const cookieString = event.node.req.headers.cookie;
  type CookiesObject = { [key: string]: string };
  const cookiesObject: any | CookiesObject = cookieString
    ?.split(";")
    .reduce((acc, cookie) => {
      const [key, value] = cookie.split("=").map((part) => part.trim());
      acc[key] = value;
      return acc;
    }, {} as CookiesObject);

  const headers = {
    Authorization: `Bearer ${cookiesObject.token_admin || ""}`,
    "Content-Type": "application/json",
  };

  const query = {};
  // ?name=${""}&lastname=${""}&id_card_number=${""}&email=${""}&phone=${""}&job=${""}
  const response: any = await $fetch(
    `${
      config.public.BASE_URL
    }/api/v1/profile/list?name=${""}&lastname=${""}&id_card_number=${""}&email=${""}&phone=${""}&job=${""}`,
    {
      method: "GET",
      headers: headers,
    }
  );
  return response;
});
