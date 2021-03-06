import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard";
import Login from "@/views/Login"
Vue.use(VueRouter);

const routes = [
  {path: '/dashboard', component: Dashboard},
  {path: '/login', component: Login}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
