export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {start:"_app/immutable/entry/start.DbrR-dZ6.js",app:"_app/immutable/entry/app.CGl2ErvD.js",imports:["_app/immutable/entry/start.DbrR-dZ6.js","_app/immutable/chunks/BEXdwwCD.js","_app/immutable/chunks/BW8aTVaI.js","_app/immutable/chunks/D4BJqEd1.js","_app/immutable/entry/app.CGl2ErvD.js","_app/immutable/chunks/DHAG0X1X.js","_app/immutable/chunks/BW8aTVaI.js","_app/immutable/chunks/D-BB90hW.js","_app/immutable/chunks/D4BJqEd1.js","_app/immutable/chunks/CgQJbJ8q.js","_app/immutable/chunks/B6Pj8jan.js","_app/immutable/chunks/B0zkCgEv.js","_app/immutable/chunks/Bd_8zUmT.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/admin",
				pattern: /^\/admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin/add_admin",
				pattern: /^\/admin\/add_admin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: __memo(() => import('./entries/endpoints/admin/add_admin/_server.js'))
			},
			{
				id: "/admin/approved_responses",
				pattern: /^\/admin\/approved_responses\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: __memo(() => import('./entries/endpoints/admin/approved_responses/_server.js'))
			},
			{
				id: "/admin/responses",
				pattern: /^\/admin\/responses\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: __memo(() => import('./entries/endpoints/admin/responses/_server.js'))
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: __memo(() => import('./entries/endpoints/login/_server.js'))
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/logout/_server.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
