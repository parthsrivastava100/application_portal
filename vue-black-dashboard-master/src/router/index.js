import Router from "vue-router";
import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
import routes from "./routes";
import firebase from 'firebase';
import Vue from 'vue';
import login from '@/views/login';
import signup from '@/views/signup';
import dashboard from '@/pages/Dashboard';
const Dashboard = () => import(/* webpackChunkName: "dashboard" */"@/pages/Dashboard.vue");
const Profile = () => import(/* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () => import(/* webpackChunkName: "common" */"@/pages/Notifications.vue");
const Icons = () => import(/* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () => import(/* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () => import(/* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () => import(/* webpackChunkName: "common" */ "@/pages/TableList.vue");

Vue.use(Router);
// configure router
const router = new Router({
   routes : [
    {
      path: "/home",
      component: DashboardLayout,
      redirect: "/dashboard",
      meta: {
        requiresAuth:true
      },
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: Dashboard
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "notifications",
          name: "notifications",
          component: Notifications
        },
        {
          path: "icons",
          name: "icons",
          component: Icons
        },
        {
          path: "maps",
          name: "maps",
          component: Maps
        },
        {
          path: "typography",
          name: "typography",
          component: Typography
        },
        {
          path: "table-list",
          name: "table-list",
          component: TableList
        }
      ]
    },
    { path: "*", redirect:'/login' },
    {
      path:'/login',
      name:'login',
      component:login,
      
    },
    {
      path:'/',
      name:'login',
      component:login
    },
    {
      path:'/signup',
      name:'signup',
      component:signup,
     
    },
  ]
  
});
router.beforeEach((to,from,next) => {
const currentUser=firebase.auth().currentUser;
const requiresAuth=to.matched.some(record => record.meta.requiresAuth);
if(requiresAuth && !currentUser  ) next('login');
// else if(!requiresAuth && currentUser) next('dashboard');
else next();
})
export default router;
