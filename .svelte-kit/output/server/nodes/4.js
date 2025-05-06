import * as server from '../entries/pages/admin/add_admin/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/add_admin/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/add_admin/+page.server.js";
export const imports = ["_app/immutable/nodes/4.AdCA9FzV.js","_app/immutable/chunks/B0zkCgEv.js","_app/immutable/chunks/BW8aTVaI.js","_app/immutable/chunks/DFa-lXe0.js","_app/immutable/chunks/CgQJbJ8q.js","_app/immutable/chunks/B6Pj8jan.js","_app/immutable/chunks/Bd_8zUmT.js","_app/immutable/chunks/B-HKzecM.js","_app/immutable/chunks/GjyCz3r7.js","_app/immutable/chunks/C_hClTAz.js","_app/immutable/chunks/BcrJJAe6.js","_app/immutable/chunks/D-BB90hW.js","_app/immutable/chunks/D4BJqEd1.js","_app/immutable/chunks/UChfqfEG.js"];
export const stylesheets = [];
export const fonts = [];
