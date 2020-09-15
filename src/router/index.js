import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/** 
  路由配置
  meta: requireAuth => 是否需要登录权限
*/
const routes = [
  {
    path: "/",
    component: () => import("@/components/Layout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/Home.vue")
      },
      {
        path: "/detail/:id",
        component: () => import("@/views/Detail.vue")
      },
      {
        path: "/personal",
        component: () => import("@/views/Personal.vue"),
        meta: {
          requireAuth: true // 这个值判断是否需要权限
        }
      },
      {
        path: "/artical",
        name: "article",
        component: () => import("@/views/Artical.vue"),
        meta: {
          requireAuth: true
        }
      },
      {
        path: "/artical/edit", // 新增
        name: "editArticle",
        component: () => import("@/views/ArticleEdit.vue"),
        meta: {
          requireAuth: true
        }
      },
      {
        path: "/artical/edit/:id", // 编辑
        name: "updateArticle",
        component: () => import("@/views/ArticleEdit.vue"),
        meta: {
          requireAuth: true
        }
      }
    ]
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
