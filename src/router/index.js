import Vue from "vue";
import Router from "vue-router";
import {Login, Register, Reset} from "../views/Auth";
import Settings from "../views/Settings/Settings.vue";
import Activity from "../views/Activity/Activity.vue";
import MyFeed from "../views/MyFeed/MyFeed.vue";
import Content from "../views/Content/Content.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: "/",
      component: MyFeed
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
      component: Activity
    },
    {
      name: "settings",
      path: "/settings",
      component: Settings
    },
    {
      name: "content",
      path: "/content/:id",
      component: Content
    },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});
