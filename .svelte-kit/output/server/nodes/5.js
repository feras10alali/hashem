import * as server from '../entries/pages/admin/approved_responses/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/admin/approved_responses/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/admin/approved_responses/+page.server.js";
export const imports = ["_app/immutable/nodes/5.Bhkw3P5B.js","_app/immutable/chunks/B0zkCgEv.js","_app/immutable/chunks/BW8aTVaI.js","_app/immutable/chunks/DFa-lXe0.js","_app/immutable/chunks/CgQJbJ8q.js","_app/immutable/chunks/B6Pj8jan.js","_app/immutable/chunks/Bd_8zUmT.js","_app/immutable/chunks/jAFcj_6Y.js","_app/immutable/chunks/BEXdwwCD.js","_app/immutable/chunks/D4BJqEd1.js","_app/immutable/chunks/B-HKzecM.js","_app/immutable/chunks/GjyCz3r7.js","_app/immutable/chunks/BcrJJAe6.js","_app/immutable/chunks/D-BB90hW.js"];
export const stylesheets = [];
export const fonts = [];
