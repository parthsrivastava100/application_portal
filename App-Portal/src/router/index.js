import VueRouter from "vue-router";
import routes from "./routes";
import firebase from "firebase";
import store from "@/store/index";

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkExactActiveClass: "active",
  scrollBehavior: (to) => {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  }
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('portal');
  else {  
	store.commit('load', true)
	next()
  }
});

router.afterEach((to, from, next) => {
  store.commit('load', false)
});

export default router;
