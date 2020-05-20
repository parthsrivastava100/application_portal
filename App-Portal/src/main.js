import Vue from "vue";
import store from "./store";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch';
import App from "./App";
import router from "./router/index";

import BlackDashboard from "./plugins/blackDashboard";
import VueResource from 'vue-resource';
import firebase from 'firebase';
import i18n from "./i18n"
import './registerServiceWorker'
import Paginate from 'vuejs-paginate';
Vue.component('paginate', Paginate)

Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(VueResource);

let app = '';

var firebaseConfig = {
    apiKey: "AIzaSyAO4kHIGQ3e41EXIl3b0BEpSL4DmjEgotY",
    authDomain: "careerportal-816f6.firebaseapp.com",
    databaseURL: "https://careerportal-816f6.firebaseio.com",
    projectId: "careerportal-816f6",
    storageBucket: "careerportal-816f6.appspot.com",
    messagingSenderId: "63078662989",
    appId: "1:63078662989:web:e15d0fef260d76d20eed04",
    measurementId: "G-X34JYCW142"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.auth().onAuthStateChanged (() => {
  if (!app) {
	app = new Vue({
	  store,
	  router,
	  i18n,
	  render: h => h(App)
	  }).$mount("#app");
  }
});

