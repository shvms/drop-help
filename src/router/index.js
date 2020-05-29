import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/:slug",
    name: "Details",
    props: true,
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Details.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
