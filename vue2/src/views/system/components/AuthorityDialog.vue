<!--
 * @Description: 权限配置
 * @Date: 2023-04-21 16:05:32
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-21 16:17:30
 * @FilePath: \vue2\src\views\system\components\AuthorityDialog.vue
-->
<template>
    <el-dialog title="角色权限配置" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false
        }
    },
    methods: {
        /**
         * 显示弹窗
         */
        showVisible() {
            this.dialogVisible = true
        },
        handleClose() {
            this.dialogVisible = false
        }
    }
}
</script>

<style></style>