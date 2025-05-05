import { a as attr, s as store_get, b as attr_class, e as escape_html, u as unsubscribe_stores, p as pop, c as push } from "../../../../chunks/index2.js";
import "../../../../chunks/client.js";
import { w as writable } from "../../../../chunks/index3.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let username = "";
  let password = "";
  let passwordConfirm = "";
  const alert = writable(null);
  $$payload.out += `<button class="text-black bg-gray-100 px-2 py-1 rounded mr-4 mb-0 text-3xl">☰</button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="flex justify-center items-center w-full min-h-screen pt-4 bg-gray-100"><div class="w-full max-w-2xl bg-white mt-[0%] p-6 rounded-xl shadow-md"><h1 class="text-xl text-center font-semibold mb-6">اضافة مسؤول</h1> <div class="space-y-4"><div class="relative"><input${attr("value", username)} id="username" type="text" placeholder=" " class="peer w-full px-2.5 pt-5 pb-2.5 text-sm text-black bg-white border-b-2 border-gray-300 focus:outline-none focus:border-black"> <label for="username" class="absolute right-2 text-sm text-gray-500 transform scale-75 -translate-y-4 top-2 origin-[0] peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4 transition-all">اسم المستخدم</label></div> <div class="grid grid-cols-2 gap-4"><div class="relative"><input${attr("value", password)} id="password" type="password" placeholder=" " class="peer w-full px-2.5 pt-5 pb-2.5 text-sm text-black bg-white border-b-2 border-gray-300 focus:outline-none focus:border-black"> <label for="password" class="absolute right-2 text-sm text-gray-500 transform scale-75 -translate-y-4 top-2 origin-[0] peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4 transition-all">كلمة المرور</label></div> <div class="relative"><input${attr("value", passwordConfirm)} id="passwordConfirm" type="password" placeholder=" " class="peer w-full px-2.5 pt-5 pb-2.5 text-sm text-black bg-white border-b-2 border-gray-300 focus:outline-none focus:border-black"> <label for="passwordConfirm" class="absolute right-2 text-sm text-gray-500 transform scale-75 -translate-y-4 top-2 origin-[0] peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-4 transition-all">تأكيد كلمة المرور</label></div></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <button class="w-full mt-6 bg-black text-white h-12 rounded-lg hover:bg-gray-900 active:bg-gray-800 transition-all">اضافة مسؤول</button></div></div></div> `;
  if (store_get($$store_subs ??= {}, "$alert", alert)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="fixed bottom-4 right-3 z-50"><div${attr_class(`flex items-center p-4 text-sm rounded-lg shadow-lg ${store_get($$store_subs ??= {}, "$alert", alert).type === "success" ? "text-green-800 bg-green-100" : store_get($$store_subs ??= {}, "$alert", alert).type === "error" ? "text-red-800 bg-red-100" : "text-blue-800 bg-blue-100"}`)} role="alert"><svg class="shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path></svg> <span class="sr-only">Info</span> <div><span class="font-medium">${escape_html(store_get($$store_subs ??= {}, "$alert", alert).type === "success" ? "" : "خطأ!")}</span> ${escape_html(store_get($$store_subs ??= {}, "$alert", alert).message)}</div></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
