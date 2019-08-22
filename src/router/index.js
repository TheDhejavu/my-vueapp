import Vue from "vue";
import Router from "vue-router";
import {Login, Register, Reset} from "../views/Auth";
import Settings from "../views/Settings/Settings.vue";
import Activity from "../views/Activity/Activity.vue";
import MyFeed from "../views/MyFeed/MyFeed.vue";
import Content from "../views/Content/Content.vue";
import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

Vue.use(Router);


const router =  new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      name:"home",
      path: "/",
      component: MyFeed,
      meta:{
        requiresAuth: true
      }
    },
    {
      name: "login",
      path: "/login",
      component: Login
    },
    {
      name: "register",
      path: "/register",
      component: Register
    },
    {
      name: "reset",
      path: "/reset",
      component: Reset
    },
    {
      name: "activity",
      path: "/activity",
      component: Activity,
      meta:{
        requiresAuth: true
      }
    },
    {
      name: "settings",
      path: "/settings",
      component: Settings,
      meta:{
        requiresAuth: true
      }
    },
    {
      name: "content",
      path: "/content/:id",
      component: Content,
      meta:{
        requiresAuth: true
      }
    },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});



router.beforeEach((to , from, next)=>{
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some( record=> record.meta.requiresAuth);

  if(requiresAuth && !currentUser) return next("login")
  else if(!requiresAuth && currentUser) return next("home")
  else next()
});

export default router