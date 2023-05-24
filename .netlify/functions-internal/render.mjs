import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","homer.png","homer2.png","homer3.png","homer4.jpeg","homer5.jpg","images/layers-2x.png","images/layers.png","images/marker-icon-2x.png","images/marker-icon.png","images/marker-shadow.png","leaflet.css"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.ab5b0641.js","app":"_app/immutable/entry/app.88dc3dd7.js","imports":["_app/immutable/entry/start.ab5b0641.js","_app/immutable/chunks/index.88ad72ef.js","_app/immutable/chunks/singletons.aca3fcba.js","_app/immutable/chunks/index.063b8fd7.js","_app/immutable/entry/app.88dc3dd7.js","_app/immutable/chunks/index.88ad72ef.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js'),
			() => import('../server/nodes/3.js'),
			() => import('../server/nodes/4.js'),
			() => import('../server/nodes/5.js'),
			() => import('../server/nodes/6.js'),
			() => import('../server/nodes/7.js'),
			() => import('../server/nodes/8.js'),
			() => import('../server/nodes/9.js')
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
				id: "/charts",
				pattern: /^\/charts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/donate",
				pattern: /^\/donate\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/map",
				pattern: /^\/map\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/report",
				pattern: /^\/report\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/signup",
				pattern: /^\/signup\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
