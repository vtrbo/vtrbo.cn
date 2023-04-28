export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","resume.md"]),
	mimeTypes: {".png":"image/png",".md":"text/markdown"},
	_: {
		client: {"start":"_app/immutable/entry/start.004e55e4.js","app":"_app/immutable/entry/app.2433e166.js","imports":["_app/immutable/entry/start.004e55e4.js","_app/immutable/chunks/index.445350a1.js","_app/immutable/chunks/singletons.0635725d.js","_app/immutable/chunks/index.484be7c6.js","_app/immutable/entry/app.2433e166.js","_app/immutable/chunks/index.445350a1.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/articles",
				pattern: /^\/articles\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/articles/[filename]",
				pattern: /^\/articles\/([^/]+?)\/?$/,
				params: [{"name":"filename","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
