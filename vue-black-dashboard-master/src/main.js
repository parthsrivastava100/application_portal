/*
 =========================================================
 * Vue Black Dashboard - v1.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/black-dashboard
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from 'vue-router-prefetch'
import App from "./App";
import firebase from 'firebase';
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";
import VueResource from 'vue-resource';
import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
import './registerServiceWorker'
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);
Vue.use(VueResource);

Vue.use(firebase);
const firebaseConfig = {
  apiKey: "AIzaSyBxD1d72OIF4yE-a2IOzkmRA2Uw_Ke_FCc",
  authDomain: "dem0-dd079.firebaseapp.com",
  databaseURL: "https://dem0-dd079.firebaseio.com",
  projectId: "dem0-dd079",
  storageBucket: "dem0-dd079.appspot.com",
  messagingSenderId: "356105117660",
  appId: "1:356105117660:web:935e2c07c4f284c73f7919",
  measurementId: "G-KGVW2VS73H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
