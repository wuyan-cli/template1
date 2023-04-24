/*
 * @Description: 文件内容描述
 * @Date: 2023-04-19 16:10:00
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-20 15:57:47
 * @FilePath: \vue2\src\store\index.js
 */

import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import tags from './modules/tags'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    tags,
    common
  },
  getters,
})
