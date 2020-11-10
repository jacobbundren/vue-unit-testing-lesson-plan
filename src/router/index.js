import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from "@/views/Login";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("../views/Home.vue")
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name !== "login" && !store.state.authenticatedUser) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router
