<!--
 * @Description: 文件内容描述
 * @Date: 2023-04-20 10:15:16
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-20 14:57:47
 * @FilePath: \vue2\src\layout\top\top-lang.vue
-->
<template>
  <el-dropdown trigger="click" @command="handleSetLanguage">
    <i class="icon-zhongyingwen"></i>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item :disabled="language === 'zh'" command="zh">中文</el-dropdown-item>
      <el-dropdown-item :disabled="language === 'en'" command="en">English</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import { mapGetters } from "vuex";
import { generateTitle } from '@/router/generator-routers'
export default {
  name: "top-lang",
  data() {
    return {};
  },
  created() { },
  mounted() { },
  computed: {
    ...mapGetters(["language", "tag"])
  },
  props: [],
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.commit("SET_LANGUAGE", lang);
      let tag = this.tag;
      let title = generateTitle(
        tag.label,
        (tag.meta || {}).i18n
      );
      //根据当前的标签也获取label的值动态设置浏览器标题
      // this.$router.$avueRouter.setTitle(title);
    }
  }
};
</script>

<style lang="scss" scoped></style>
