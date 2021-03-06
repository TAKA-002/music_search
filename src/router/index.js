import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Result from "../views/Result.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/result/:keyword",
      name: "Result",
      component: Result,
    },
  ],
});
