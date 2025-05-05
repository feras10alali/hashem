import PocketBase from "pocketbase";
import { w as writable } from "./index3.js";
const PUBLIC_POCKETBASE_URL = "https://nuts-plant.pockethost.io";
const pb = new PocketBase(PUBLIC_POCKETBASE_URL);
const user = writable(pb.authStore.model);
pb.authStore.onChange(() => {
  user.set(pb.authStore.model);
});
export {
  pb as p
};
