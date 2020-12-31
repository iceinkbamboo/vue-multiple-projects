import Vue from "vue";
import VueRouter from "vue-router";
import A from "../views/a.vue";
import B from "../views/b.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "A",
    component: A,
    meta: { title: "projectA" }
  },
  {
    path: "/b",
    name: "B",
    component: B,
    meta: { title: "projectA" }
  }
];

const router = new VueRouter({
  routes
});

export default router;
