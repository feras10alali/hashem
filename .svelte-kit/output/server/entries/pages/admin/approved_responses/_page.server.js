import { r as redirect } from "../../../../chunks/index.js";
import { p as pb } from "../../../../chunks/pocketbase.js";
async function load({ locals }) {
  if (!locals.user) throw redirect(302, "/login");
  const approved = await pb.collection("approved_responses").getFullList();
  return {
    approved: approved.map((r) => ({
      id: r.id,
      name: r.name,
      phonenumber: r.phonenumber,
      home: r.home
    }))
  };
}
export {
  load
};
