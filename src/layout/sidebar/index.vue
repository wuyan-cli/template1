<!--
 * @Description: 文件内容描述
 * @Date: 2022-09-15 21:02:46
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-21 11:34:11
 * @FilePath: \vue2\src\layout\sidebar\index.vue
-->
<template>
  <div class="avue-sidebar">
    <logo></logo>
    <el-scrollbar style="height:100%">
      <div v-if="validatenull(menuList)" class="avue-sidebar--tip">{{ $t('menuTip') }}</div>
      <el-menu :default-openeds="vaildOpen()" unique-opened :default-active="nowTagValue" mode="vertical"
        :show-timeout="200" :collapse="keyCollapse">
        <sidebar-item :menu="menuList" :screen="screen" first :props="website.menu.props"
          :collapse="keyCollapse"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import logo from '../logo'
import { getStore } from '@/utils/store'
import sidebarItem from './sidebarItem'
import { validatenull } from '@/utils/validate'
import { getValue } from '@/router/generator-routers'
export default {
  name: 'sidebar',
  components: { sidebarItem, logo },
  data() {
    return {
      menuList: [],
    }
  },
  created() {
    this.menuList = getStore({ name: 'menu' }) || []
  },
  computed: {
    ...mapGetters(['website', 'tag', 'keyCollapse', 'screen']),
    nowTagValue: function () {
      return getValue(this.$route)
    },
  },
  mounted() {

  },
  methods: {
    // 展开判断
    vaildOpen() {
      const path = this.nowTagValue
      const pathArray = path.split('/')
      if (pathArray && pathArray.length > 1) {
        return [`/${pathArray[1]}`]
      } else {
        return []
      }
    },
    validatenull(val) {
      return validatenull(val)
    },
  },
}
</script>
<style lang="less" scoped></style>

