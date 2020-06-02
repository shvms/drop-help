import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    meta: {
      title: "DropHelp",
    },
  },
  {
    path: "/:slug",
    name: "Details",
    props: true,
    component: () =>
      import(/* webpackChunkName: "details" */ "../views/Details.vue"),
    meta: {
      title: (route) => route.params.slug.toUpperCase(),
    },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  document.title =
    typeof to.meta.title === "function" ? to.meta.title(to) : "DropHelp";
  next();
});

export default router;
