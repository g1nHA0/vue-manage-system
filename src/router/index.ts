import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { usePermissStore } from "../store/permiss";
import Home from "../views/home.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/event",
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/tabs",
        name: "tabs",
        meta: {
          title: "tab标签",
          permiss: "3",
        },
        component: () =>
          import(/* webpackChunkName: "tabs" */ "../views/tabs.vue"),
      },
      {
        path: "/user",
        name: "user",
        meta: {
          title: "个人中心",
        },
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user.vue"),
      },
      {
        path: "/event",
        name: "event",
        meta: {
          title: "事件管理",
          permiss: "2",
        },
        component: () =>
          import(/* webpackChunkName: "403" */ "../views/event.vue"),
      },
      {
        path: "/announcement",
        name: "announcement",
        meta: {
          title: "公告管理",
          permiss: "2",
        },
        component: () =>
          import(/* webpackChunkName: "403" */ "../views/announcement.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/login.vue"),
  },
  {
    path: "/403",
    name: "403",
    meta: {
      title: "没有权限",
    },
    component: () => import(/* webpackChunkName: "403" */ "../views/403.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | 方得失物招领后台管理系统`;
  const role = localStorage.getItem("ms_username");
  const permiss = usePermissStore();
  if (!role && to.path !== "/login") {
    next("/login");
  } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
    // 如果没有权限，则进入403
    next("/403");
  } else {
    next();
  }
});

export default router;
