import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import icon from "./assets/icon-font/iconFont";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import "@/assets/scss/reset.scss";
import "@/assets/scss/common.scss";
import setAxios from "./setAxios";
import Cookie from "js-cookie";

setAxios();
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$cookie = Cookie;
Vue.use(ElementUI);
Vue.use(mavonEditor);
Vue.component("icon", icon);

router.beforeEach((to, from, next) => {
  store.commit("setToken", Cookie.get("token"));
  if (store.state.token) {
    store.commit("changeIsSignIn", 1);
  }
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next();
    } else {
      next({ path: "/login" });
    }
  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
