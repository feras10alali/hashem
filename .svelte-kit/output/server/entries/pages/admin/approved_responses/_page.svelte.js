import { s as store_get, d as ensure_array_like, e as escape_html, a as attr, b as attr_class, u as unsubscribe_stores, p as pop, c as push } from "../../../../chunks/index2.js";
import "../../../../chunks/client.js";
import { w as writable } from "../../../../chunks/index3.js";
import { a as alert } from "../../../../chunks/alertStore.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const approved = writable([]);
  $$payload.out += `<button class="text-black px-0 py-0 rounded mr-4 text-3xl">☰</button> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <h1 class="text-3xl font-bold text-center my-8">الردود الموافق عليها</h1> `;
  if (store_get($$store_subs ??= {}, "$approved", approved).length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-center text-gray-500">لا توجد ردود.</p>`;
  } else {
    $$payload.out += "<!--[!-->";
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$approved", approved));
    $$payload.out += `<ul class="space-y-5 max-w-3xl mx-auto px-4"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let response = each_array[$$index];
      $$payload.out += `<li class="bg-white border border-gray-200 rounded-xl shadow p-5"><p class="mb-1"><strong>الاسم:</strong> ${escape_html(response.name)}</p> <p class="mb-1"><strong>رقم الهاتف:</strong> ${escape_html(response.phonenumber)}</p> `;
      if (response.home?.lat && response.home?.lon) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<p><strong>الموقع:</strong> <a${attr("href", `https://www.google.com/maps?q=${response.home.lat},${response.home.lon}`)} target="_blank" class="text-blue-600 underline hover:text-blue-800">${escape_html(response.home.lat.toFixed(6))}, ${escape_html(response.home.lon.toFixed(6))}</a></p>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]--> <div class="mt-4"><button class="bg-black text-white px-4 py-2 rounded-md shadow hover:bg-gray-900 active:bg-gray-800 transition">تم الانتهاء</button></div></li>`;
    }
    $$payload.out += `<!--]--></ul>`;
  }
  $$payload.out += `<!--]--> `;
  if (store_get($$store_subs ??= {}, "$alert", alert).visible) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="fixed bottom-4 right-4 z-50"><div${attr_class(`flex items-center p-4 text-sm rounded-lg shadow ${store_get($$store_subs ??= {}, "$alert", alert).type === "success" ? "text-green-800 bg-green-100" : store_get($$store_subs ??= {}, "$alert", alert).type === "error" ? "text-red-800 bg-red-100" : "text-blue-800 bg-blue-100"}`)} role="alert"><svg class="shrink-0 w-4 h-4 me-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"></path></svg> <div><span class="font-medium">${escape_html(store_get($$store_subs ??= {}, "$alert", alert).type === "success" ? "نجاح!" : "خطأ!")}</span> ${escape_html(store_get($$store_subs ??= {}, "$alert", alert).message)}</div></div></div>`;
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
