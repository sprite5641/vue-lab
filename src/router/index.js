import { createWebHistory, createRouter } from "vue-router";

// var Vue = require('vue')
// layouts

import Admin from "../layouts/Admin.vue";
import Auth from "../layouts/Auth.vue";
import store from '../store/index.js';
var jwt = require('jsonwebtoken');
console.log(jwt);

// views for Admin layout

import Dashboard from "../pages/admin/Dashboard.vue";
import Settings from "../pages/admin/Settings.vue";
import Tables from "../pages/admin/Tables.vue";
import Maps from "../pages/admin/Maps.vue";

// views for Auth layout

import Login from "../pages/auth/Login.vue";
import Register from "../pages/auth/Register.vue";

// views without layouts

import Landing from "../pages/Landing.vue";
import Profile from "../pages/Profile.vue";
import Index from "../pages/Index.vue";
// import VueCookies from 'vue-cookies'
// routes

const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin,
    children: [
      {
        path: "/admin/dashboard",
        name: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/settings",
        name: "/admin/settings",
        component: Settings,
      },
      {
        path: "/admin/tables",
        name: "/admin/tables",
        component: Tables,
      },
      {
        path: "/admin/maps",
        name: "/admin/maps",
        component: Maps,
      },
    ],
  },
  {
    path: "/auth",
    name: "/auth",
    redirect: "/auth/login",
    component: Auth,
    children: [
      {
        path: "/auth/login",
        name: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        name: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/landing",
    name: "/landing",
    component: Landing,
  },
  {
    path: "/profile",
    name: "/profile",
    component: Profile,
  },
  {
    path: "/",
    name: "/",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {

  const isAuthenticated = store.state.auth.token

  if (isAuthenticated) {
    const expireDate = jwt.decode(isAuthenticated).exp * 1000;
    const dateNow = new Date().getTime();
    const expire = expireDate - dateNow;

    if (expire <= 0) {
      store.dispatch('logout', null);
    }
  }

  if (to.name !== '/auth/login' && !isAuthenticated) next({ path: '/auth/login' })
  else next()
});

export default router;