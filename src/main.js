import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugin/amap';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入全局组件
import '../src/components/back/Index.js'

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
