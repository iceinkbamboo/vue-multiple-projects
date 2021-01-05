import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "lib-flexible/flexible";

Vue.config.productionTip = false;

// 全局前置守卫
router.beforeEach((to, from, next) => {
  let routeName = to.name;
  if (routeName != null) {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
  } else {
    // 跳转到指定页面
    next({ path: "/" });
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
