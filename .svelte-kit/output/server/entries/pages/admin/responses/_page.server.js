import { r as redirect } from "../../../../chunks/index.js";
import { p as pb } from "../../../../chunks/pocketbase.js";
async function load({ locals }) {
  if (!locals.user) throw redirect(302, "/login");
  const responses = await pb.collection("response").getFullList();
  return {
    responses: responses.map((r) => ({
      id: r.id,
      name: r.name,
      phonenumber: r.phonenumber,
      status: r.status,
      home: r.home
    }))
  };
}
export {
  load
};
