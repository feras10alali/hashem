import { j as json } from "../../../../chunks/index.js";
import { p as pb } from "../../../../chunks/pocketbase.js";
async function POST({ request }) {
  const { responseId, action } = await request.json();
  if (!responseId || !action) {
    return json({ error: "Missing data" }, { status: 400 });
  }
  try {
    if (action === "approve") {
      const record = await pb.collection("response").getOne(responseId);
      await pb.collection("approved_responses").create({
        name: record.name,
        phonenumber: record.phonenumber,
        home: record.home
      });
      await pb.collection("response").delete(responseId);
      return json({ message: "تمت الموافقة بنجاح" });
    }
    if (action === "deny") {
      await pb.collection("response").delete(responseId);
      return json({ message: "تم الرفض بنجاح" });
    }
    return json({ error: "Invalid action" }, { status: 400 });
  } catch (err) {
    console.error(err);
    return json({ error: "حدث خطأ أثناء تنفيذ العملية" }, { status: 500 });
  }
}
export {
  POST
};
