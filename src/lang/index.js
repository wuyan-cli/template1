/*
 * @Description: 文件内容描述
 * @Date: 2023-01-19 17:29:11
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-01-19 17:31:13
 * @FilePath: \demo\src\lang\index.js
 */
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import enLocale from './en'
import zhLocale from './zh'
import { getStore } from '@/utils/store'
Vue.use(VueI18n)
const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale,
  }
}

const i18n = new VueI18n({
  locale: getStore({ name: 'language' }) || 'zh',
  messages
})

export default i18n