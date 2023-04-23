/*
 * @Description: 路由文件
 * @Date: 2023-04-19 16:10:00
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-21 14:01:16
 * @FilePath: \vue2\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/public/login')
  },
]
// 解决vue-router在3.0版本以上重复报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'hash',
  routes
})



export default router
