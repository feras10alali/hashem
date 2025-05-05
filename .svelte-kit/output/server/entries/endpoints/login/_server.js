import { j as json } from "../../../chunks/index.js";
import { p as pb } from "../../../chunks/pocketbase.js";
async function POST({ request }) {
  try {
    const { email, password } = await request.json();
    if (!email || !password) {
      return json({ error: "يرجى تعبئة جميع الحقول" }, { status: 400 });
    }
    await pb.collection("users").authWithPassword(email, password);
    return json({ message: "تم تسجيل الدخول بنجاح" });
  } catch (err) {
    console.error("Login failed:", err);
    return json({ error: "بيانات تسجيل الدخول غير صحيحة" }, { status: 401 });
  }
}
export {
  POST
};
