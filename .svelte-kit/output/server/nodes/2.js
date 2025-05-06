import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.BZXDrZ_D.js","_app/immutable/chunks/B0zkCgEv.js","_app/immutable/chunks/BW8aTVaI.js","_app/immutable/chunks/DFa-lXe0.js","_app/immutable/chunks/B6Pj8jan.js","_app/immutable/chunks/B-HKzecM.js","_app/immutable/chunks/C_hClTAz.js","_app/immutable/chunks/BcrJJAe6.js","_app/immutable/chunks/DHAG0X1X.js","_app/immutable/chunks/D-BB90hW.js","_app/immutable/chunks/D4BJqEd1.js"];
export const stylesheets = ["_app/immutable/assets/2.4qcyJFdE.css"];
export const fonts = [];
