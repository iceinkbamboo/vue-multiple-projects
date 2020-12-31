import Vue from "vue";
import VueRouter from "vue-router";
import A from "../views/a.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "A",
    component: A,
    meta: { title: "projectA" }
  }
];

const router = new VueRouter({
  routes
});

export default router;
