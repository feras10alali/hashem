import { j as json } from "../../../chunks/index.js";
import { p as pb } from "../../../chunks/pocketbase.js";
async function POST() {
  try {
    pb.authStore.clear();
    return json({ message: "تم تسجيل الخروج بنجاح" });
  } catch (err) {
    console.error("Logout failed:", err);
    return json({ error: "حدث خطأ أثناء تسجيل الخروج" }, { status: 500 });
  }
}
export {
  POST
};
