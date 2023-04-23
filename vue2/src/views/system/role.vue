<!--
 * @Description: 文件内容描述
 * @Date: 2023-04-20 14:51:46
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-21 16:46:03
 * @FilePath: \vue2\src\views\system\role.vue
-->
<template>
    <div class="menu-content">
        <div class="btn-list">
            <el-button type="primary" size="mini">新增</el-button>
        </div>
        <el-table size="mini" :data="dataList" border style="width: 100%" row-key="id">
            <el-table-column prop="roleName" label="角色名称">
            </el-table-column>
            <el-table-column prop="roleProperty" label="角色属性">
            </el-table-column>
            <el-table-column prop="category" label="菜单类型">
            </el-table-column>
            <el-table-column prop="updateTime" label="更新时间">
            </el-table-column>
            <el-table-column prop="order" label="排序">
            </el-table-column>
            <el-table-column label="操作" width="140">
                <template slot-scope="scope">
                    <el-button size="mini" type="text" @click="Authority(scope.$index, scope.row)">授权</el-button>
                    <el-button size="mini" type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="text" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <AuthorityDialog ref="Authority"></AuthorityDialog>
    </div>
</template>

<script>
import { roleList, menuGrantTree, treeKeys } from '@/api/user'
import AuthorityDialog from './components/AuthorityDialog.vue'
export default {
    components: {
        AuthorityDialog
    },
    data() {
        return {
            dataList: []
        }
    },
    created() {
        this.getroleList()
    },
    methods: {
        // 授权
        Authority() {
            menuGrantTree().then(async (response) => {
                console.log('response', response)
                const result = await treeKeys()
                console.log('result', result)
                this.$refs.Authority.showVisible()
            })
        },
        // 获取数据
        getroleList() {
            roleList().then((response) => {
                console.log('response22', response)
                this.dataList = response.data.data
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

    .btn-list {
        margin-bottom: 15px;
    }
}
</style> 