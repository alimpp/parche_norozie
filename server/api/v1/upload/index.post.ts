import { readFile } from "fs/promises";
import path from "path";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);
  const filename = getQuery(event);

  const token = event.req.headers["authorization"];
  const contentLength = event.req.headers["content-length"];
  const contentType = event.req.headers["content-type"];

  const headers = {
    Authorization: `${token}`,
    "Content-Length": contentLength,
    "Content-Type": contentType,
  };

  const response: any = await $fetch(
    `${config.public.BASE_URL}/api/v1/upload/${filename.filename}}`,
    {
      method: "POST",
      body: body,
      headers: headers,
    }
  );
  return response;
});
