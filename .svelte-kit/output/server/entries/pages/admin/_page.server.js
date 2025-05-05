import { r as redirect } from "../../../chunks/index.js";
import "../../../chunks/pocketbase.js";
async function load({ locals }) {
  if (!locals.user) throw redirect(302, "/login");
  else {
    throw redirect(302, "/admin/responses");
  }
}
export {
  load
};
