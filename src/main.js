import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugin/amap';
// 引入全局组件
import '../src/components/back/Index.js'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
