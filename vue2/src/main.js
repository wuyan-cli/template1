/*
 * @Description: 文件内容描述
 * @Date: 2023-04-19 16:10:00
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-21 15:11:24
 * @FilePath: \vue2\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import Element from 'element-ui';
import { loadStyle, parseTime } from "./utils/util";
import 'element-ui/lib/theme-chalk/index.css';
import "./styles/common.scss";
import * as urls from "@/config/env";
import { iconfontUrl, iconfontVersion, appMode } from "@/config/env";
import i18n from "./lang"; // Internationalization
import './permission'
require('../mock/index')
Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value),
});
Vue.config.productionTip = false
// 加载相关url地址
Object.keys(urls).forEach((key) => {
  Vue.prototype[key] = urls[key];
});

iconfontVersion.forEach((ele) => {
  loadStyle(iconfontUrl.replace("$key", ele));
});
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
