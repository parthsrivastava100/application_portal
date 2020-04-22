// Admin pages
const Portal = () => import(/* webpackChunkName: "dashboard" */"@/pages/Portal.vue");
const Login = () => import(/* webpackChunkName: "common" */"@/pages/Login.vue");
const Register = () => import(/* webpackChunkName: "common" */"@/pages/Register.vue");

const routes = [
  {
	path: "/login",
	name: "login",
	component: Login,
  },
  {
	path: "/register",
	name: "register",
	component: Register,
  },
  {
	path: "/portal",
	name: "portal",
	component: Portal,
	meta: {
	  requiresAuth: true
	}
  },
  { 
	path: "*",
	redirect: 'portal',
	meta: {
	  requiresAuth: true
	} 
  },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
