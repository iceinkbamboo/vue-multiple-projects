import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "B",
    component: () => import(/* webpackChunkName: "about" */ "../views/b.vue"),
    meta: { title: "projectB" }
  }
];

const router = new VueRouter({
  routes
});

export default router;
