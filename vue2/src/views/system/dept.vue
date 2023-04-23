<!--
 * @Description: 文件内容描述
 * @Date: 2023-04-20 14:51:46
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-21 15:33:50
 * @FilePath: \vue2\src\views\system\role.vue
-->
<template>
  <div class="menu-content">
    <el-table size="mini" :data="menuList" border style="width: 100%" row-key="id">
      <el-table-column prop="name" label="菜单名称">
      </el-table-column>
      <el-table-column prop="path" label="地址">
      </el-table-column>
      <el-table-column prop="source" label="菜单图标">
        <template slot-scope="scope">
          <i :class="scope.row.source"></i>
        </template>
      </el-table-column>
      <el-table-column prop="category" label="菜单类型">
      </el-table-column>
      <el-table-column prop="order" label="排序">
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { menuAll } from '@/api/user'
export default {
  data() {
    return {
      menuList: []
    }
  },
  created() {
    this.getMenuAll()
  },
  methods: {
    // 获取所有菜单数据
    getMenuAll() {
      menuAll().then((response) => {
        console.log('response22', response)
        this.menuList = response.data.data
      })
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>

<style lang="less" scoped>
.menu-content {
  padding: 10px;
  background-color: #fff;
}
</style> 