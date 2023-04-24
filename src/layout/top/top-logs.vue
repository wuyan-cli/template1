<!--
 * @Description: 文件内容描述
 * @Date: 2023-01-19 17:24:43
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-01-31 15:57:17
 * @FilePath: \workDemonstration\src\layout\top\top-logs.vue
-->
<template>
  <span @click="logsFlag ? '' : handleOpen()">
    <el-badge :value="logsFlag ? '' : logsLen" :max="99">
      <i class="icon-rizhi1"></i>
    </el-badge>

  </span>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'top-logs',
  components: { logs },
  data() {
    return {
      box: false,
    }
  },
  created() { },
  mounted() { },
  computed: {
    ...mapGetters(['logsFlag', 'logsLen']),
  },
  props: [],
  methods: {
    handleOpen() {
      this.box = true
    },
  },
}
</script>

<style lang="less" scoped></style>
