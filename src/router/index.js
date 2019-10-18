// import Vue from "vue";
// import routers from "./router";
// import Router from "vue-router";
// import store from "@/store";
// // import { setToken, getToken, canTurnTo } from "@/libs/util";

// import NProgress from "nprogress"; // Progress 进度条
// import "nprogress/nprogress.css"; // Progress 进度条样式
// Vue.use(Router)
// const router = new Router({
//   routers,
//   // mode: 'history'
// })

// const whiteList = ["/login"];
// NProgress.configure({ showSpinner: false });
// router.beforeEach((to, from, next) => {
//   NProgress.start();
//   if( store.state.b.user.token ){
//     // 已登录
//     next();
//   } else {
//     // 未登录
//     if(whiteList.indexOf(to.path) !== -1){
//       next();
//     } else {  //未登录 跳去登录页
//       next("/login");
//       NProgress.done();
//     }
//   }
// })

// router.afterEach(() => {
//   NProgress.done();
// })
import Vue from "vue";
import Router from "vue-router";
import routes from "./router";
import store from "@/store/index";
import iView from "iview";
import { setToken, getToken, canTurnTo } from "@/libs/util";
import config from "@/config";
const { homeName } = config;

Vue.use(Router);
const router = new Router({
  routes
  // mode: "history"
});
const LOGIN_PAGE_NAME = "login";

const turnTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routes)) next();
  // 有权限，可访问
  else next({ replace: true, name: "404" }); // 无权限，重定向到401页面
};

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  const token = getToken();
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    });
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next(); // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: homeName // 跳转到homeName页
    });
  } else {
    if (store.state.b.user.hasGetInfo) {
      turnTo(to, store.state.b.user.access, next);
    } else {
      store
        .dispatch("getUserInfo")
        .then(user => {
          // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：["super_admin"] ["super_admin", "admin"]
          turnTo(to, user.access, next);
        })
        .catch(() => {
          setToken("");
          next({
            name: "login"
          });
        });
    }
  }
});

router.afterEach(() => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});
export default router;
