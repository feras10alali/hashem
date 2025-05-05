import { p as pb } from "./pocketbase.js";
const handle = async ({ event, resolve }) => {
  pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");
  event.locals.user = pb.authStore.isValid ? structuredClone(pb.authStore.model) : void 0;
  const response = await resolve(event);
  response.headers.set(
    "set-cookie",
    pb.authStore.exportToCookie({ secure: false })
  );
  return response;
};
export {
  handle
};
