import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import config from "@/config";
import store from "./store/index"; // 引入"./store"不能找到index.js
import BaiduMap from "vue-baidu-map";
import echarts from "echarts"; //引入echarts
import Iview from "iview";
import "iview/dist/styles/iview.css";

// 富文本编辑器
import VueQuillEditor from "vue-quill-editor";
// require styles 引入样式
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
// 富文本编辑器
Vue.use(VueQuillEditor);

import "default-passive-events"; //解决谷歌警告

// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== "production") require("@/mock");
Vue.prototype.$echarts = echarts; // 将echarts挂载到vue的原型上
Vue.prototype.$config = config;
// Vue.prototype.$libs = libs; // libs
Vue.use(BaiduMap, {
  ak: "7SBjnrOqvMg3zyqXLFZYPfo2AA0jfZDk" //这个地方是官方提供的ak密钥
});
Vue.use(Iview);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
