<!--
 * @Description: 权限配置
 * @Date: 2023-04-21 16:05:32
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-24 15:31:32
 * @FilePath: \vue2\src\views\system\components\AuthorityDialog.vue
-->
<template>
    <el-dialog title="角色权限配置" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <div>
            <el-tree ref="tree" :props="defaultProps" :data="list" node-key="id" show-checkbox highlight-current
                check-strictly @check="handCheck" @check-change="checkChange" :default-checked-keys="checkedKeys" />
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitData">确 定</el-button>
        </span>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialogVisible: false,
            list: [],
            checkedKeys: [],
            defaultProps: {
                label: 'title',
                children: 'children'
            }
        }
    },
    methods: {
        // 提交数据
        submitData() {
            const Halflist = this.$refs.tree.getHalfCheckedKeys()
            const Checkedlist = this.$refs.tree.getCheckedKeys()
            const selectList = [...new Set([...Checkedlist, ...Halflist])]
            console.log('selectList', selectList)
        },
        /**
       * 显示弹窗
       */
        showVisible(list, checkedList) {
            this.list = list
            this.checkedKeys = checkedList
            this.dialogVisible = true
            this.initData()
        },
        initData() {
            let _this = this
            const tree = [];
            _this.list.forEach((listItem) => {
                //子节点添加勾选状态
                tree.push(listItem);
            })
            _this.$nextTick(() => {
                setTimeout(() => {
                    // 父级节点
                    tree && tree.length > 0 && setIndeterminate(tree, 'tree')
                    function setIndeterminate(node, treeName) {
                        node.forEach(item => {
                            let treeNode = _this.$refs[treeName].getNode(item);
                            // 如果子节点有半选 则父节点也 半选
                            if (treeNode.childNodes.length > 0 && treeNode.childNodes.every(ele => ele.checked)) {
                                _this.$nextTick(() => {
                                    if (treeNode.childNodes.map(ele => ele.indeterminate).some(ele => ele)) {
                                        treeNode.indeterminate = true
                                    }
                                })
                            }
                            // 如果子节点未全部选中，则设置父节点为半选状态
                            if (treeNode.childNodes.map(ele => ele.checked).some(ele => !ele)) {
                                treeNode.indeterminate = true
                                // treeNode.checked = false
                            }
                            // 如果子节点全部未选中取消父节点的半选中状态
                            if (treeNode.childNodes.every(ele => !ele.checked)) {
                                // treeNode.checked = false
                                treeNode.indeterminate = false
                            }
                            // 子节点全不选但是当前节点是勾选状态的时候，默认设置变为半选状态
                            if (treeNode.checked && treeNode.childNodes.length > 0 && treeNode.childNodes.every(ele => !ele.checked)) {
                                treeNode.indeterminate = true
                                // treeNode.checked = false
                            }

                            // 子节点递归
                            item.children && item.children.length > 0 && setIndeterminate(item.children, 'tree')
                        });
                    }
                }, 500);
            })
        },
        // 覆盖原有勾选功能，父与子关联，子与父不关联
        handCheck(data, node) {
            this.hanleCheck(data, node, 'tree')
        },
        hanleCheck(data, node, treeName) {
            const _this = this
            // 获取当前节点是否被选中
            const isChecked = _this.$refs[treeName].getNode(data).checked
            // 如果当前节点被选中，则遍历下级子节点并选中，如果当前节点取消选中，则遍历下级节点并取消
            if (isChecked) {
                // 判断该节点是否有下级节点，如果有那么遍历设置下级节点为选中
                data.children && data.children.length > 0 && setChildreChecked(data.children, true)
            } else {
                data.children && data.children.length > 0 && setChildreChecked(data.children, false)
            }
            function setChildreChecked(node, isChecked) {
                node.forEach(item => {
                    item.children && item.children.length > 0 && setChildreChecked(item.children, isChecked)
                    // 修改勾选状态
                    _this.$refs[treeName].setChecked(item.id, isChecked)
                })
            }
        },
        checkChange(data) {
            // 如果是半选状态

            let _this = this;
            // 选中全部子节点，父节点也默认选中，但是子节点再次取消勾选或者全部子节点取消勾选也不会影响父节点勾选状态
            let checkNode = _this.$refs.tree.getNode(data)//获取当前节点
            // 勾选部分子节点，父节点变为半选状态
            if (checkNode.parent && checkNode.parent.childNodes.some(ele => ele.checked)) {
                setParentIndeterminate(checkNode.parent, true)
            }
            // 勾选全部子节点，父节点变为全选状态
            if (checkNode.parent && checkNode.parent.childNodes.every(ele => ele.checked)) {
                checkNode.parent.checked = true
                checkNode.parent.indeterminate = false
            }
            // 如果取消所有第二节点的勾选状态，则第一层父节点也取消勾选
            if (checkNode.level == 2 && checkNode.parent.childNodes.every(ele => !ele.checked)) {
                // checkNode.parent.checked = false
                // checkNode.parent.indeterminate = false
            }
            // 设置父元素选中
            function setParentIndeterminate(node, indeterminate) {
                if (node.parent) {
                    setParentIndeterminate(node.parent, indeterminate)
                }
                node.indeterminate = indeterminate
            }
        },
        handleClose() {
            this.dialogVisible = false
        }
    }
}
</script>

<style></style>