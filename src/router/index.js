import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/Index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/user",
        name: "User",
        component:() => import("../views/users/Users.vue")
      },
      {
        path: "/Safe",
        name: "Safe",
        component:()=> import("../views/safe/safe.vue")
      },
      {
        path: "/password",
        name: "Password",
        component:()=> import("../views/safe/password.vue")
      },
      {
        path: "/fund",
        name: "Fund",
        component:()=> import("../views/safe/fund.vue")
      },
      {
        path: "/phone",
        name: "Phone",
        component:()=> import("../views/safe/phone.vue")
      },
      {
        path: "/AddBank",
        name: "AddBank",
        component:()=> import("../views/safe/addBank.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

export default router;
