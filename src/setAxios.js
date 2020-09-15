import axios from "axios";
import store from "./store/index";
axios.defaults.baseURL = "http://192.168.6.100:3000";
// axios.defaults.baseURL = "http://localhost:3000";

export default function setAxios() {
  // 请求拦截
  axios.interceptors.request.use(config => {
    if (store.state.token) {
      config.headers["Authorization"] = `Bearer ${store.state.token}`;
    } else {
      console.log("ajsidjfois");
    }
    return config;
  });
}
