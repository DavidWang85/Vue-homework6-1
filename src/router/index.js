import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  // 前台
  {
    path: "/", // 網址路徑
    component: () => import("../views/FrontView.vue"), // 檔案對應位置
    //巢狀路由
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
      //產品列表
      {
        path: "products", // 網址路徑，第二層不用加/
        component: () => import("../views/ProductsView.vue"), // 檔案對應位置
      },
      //單一產品
      {
        path: "product/:id", // 網址路徑，使用動態id去做傳遞
        component: () => import("../views/ProductView.vue"), // 檔案對應位置
      },
      //購物車
      {
        path: "cart", // 網址路徑，第二層不用加/
        component: () => import("../views/CartView.vue"), // 檔案對應位置
      },
    ],
  },
  // 登入頁面
  {
    path: "/login", // 網址路徑
    component: () => import("../views/LoginView.vue"), // 檔案對應位置
  },
  // 後台
  {
    path: "/admin", // 網址路徑
    component: () => import("../views/DashboardView.vue"), // 檔案對應位置
    //巢狀路由
    children: [
      //後台產品列表
      {
        path: "products", // 網址路徑，第二層不用加/
        component: () => import("../views/AdminProducts.vue"), // 檔案對應位置
      },
      //後台優惠券
      {
        path: "coupon", // 網址路徑，第二層不用加/
        component: () => import("../views/AdminCoupon.vue"), // 檔案對應位置
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active", // bootstrap樣式
});

export default router;
