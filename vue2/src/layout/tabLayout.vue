<template>
    <div  class="work_order_tab">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="工单信息" name="workOrder" >
                <el-radio-group v-model="isCollapse" class="work_order_radio_group" size="small" @change="changeInfoType">
                    <el-radio-button :label="false">工单信息</el-radio-button>
                    <el-radio-button :label="true">{{actionType}}</el-radio-button>
                </el-radio-group>

            </el-tab-pane>
            <el-tab-pane label="餐厅信息" name="storeInfo">餐厅信息</el-tab-pane>
            <el-tab-pane label="我发起的工单" name="myOrder"></el-tab-pane>
        </el-tabs>
        <template>
            <router-view
            :formId="formId"
            :entryId="entryId"
            :formType="formType"

            :processDefinitionKey="processDefinitionKey"
            :processDefinitionId="processDefinitionId"
            :processInstanceId="processInstanceId"
            :presentMode="presentMode"
            :routerName="routerName"
            :readOnly="readOnly"
            :taskName="taskName"
            :taskId="taskId"
            :flowEntryName="flowEntryName"
            :operationList="operationList"
            :variableList="variableList"
            :isRuntime="isRuntime"

            :key="key"
            ></router-view>
        </template>
        <el-dialog
            title="请选择工单类型"
            :visible.sync="addDialogVisible"
            width="30%"
            :before-close="handleClose"
            >
            <el-select v-model="workOrderType" placeholder="请选择工单类型" size="small" style="width: 100%">
                <el-option
                v-for="item in workOrderTypeOptions"
                :key="item.rightCode"
                :label="item.rightName"
                :value="item.rightCode">
                </el-option>
            </el-select>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleClose" size="small">取 消</el-button>
                <el-button type="primary" @click="createWorkOrder" size="small">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    import OnlineForm from '@/views/onlineForm/index';
    // import {viewDict} from "@/api/flow/flowentry";
    import { viewInitialTaskInfo, startOnly } from "@/api/flow/flowOperation";
    import { getOrderType } from '@/api/user';

    export default {
        data() {
            return {
                activeName: 'workOrder',
                isCollapse: false,
                query: null,
                formType: null,
                entryId: null,
                addDialogVisible: false,
                actionType: '创建工单',
                workOrderTypeOptions: [{
                value: 'AI',
                label: 'AI赋能'
                }, {
                value: '质检',
                label: '质检'
                }],
                workOrderType: null,
                // 查询列表formId
                searchWorkOrderFormId: '1367467474173952',
                // 我发起的工单formId
                myWorkOrderFormId: '1367901213376512',
            };
        },
        components: {
            OnlineForm,
        },
        computed: {
            key(){
                return this.$route.path + Math.random();
            }
        },
        watch: {
            $route(to, from) {
               this.tabStatusInit();
            }
        },
        methods: {
            // tab栏状态初始化
            tabStatusInit() {
                if(this.$route && this.$route.query && this.$route.query.formId && this.$route.query.formId === this.searchWorkOrderFormId) {
                    // 如果是查询非列表页面
                    if(this.$route && this.$route.path && this.$route.path === '/handlerTabFlowTask') {
                        this.isCollapse = true
                    }
                    // 如果是查询列表页面
                    if(this.$route && this.$route.path && this.$route.path === '/tabOnlineForm') {
                        this.isCollapse = false
                        // 切回工单查询的时候，按钮要显示 创建工单
                        this.actionType = '创建工单'
                    }
                // 如果是我发起的工单页面
                } else if(this.$route && this.$route.query && this.$route.query.formId && this.$route.query.formId === this.myWorkOrderFormId) {
                    this.activeName = 'myOrder'
                // 如果是非查询页面
                } else if(this.$route && this.$route.path && this.$route.path === '/handlerTabFlowTask') {
                    this.isCollapse = true
                    if(this.$route && this.$route.query && this.$route.query.taskName) {
                        if(this.$route.query.taskName === '启动流程') {
                            this.actionType = '创建工单'
                        }
                    } else {
                        if(this.$route.query.readOnly === true) {
                            this.actionType = '工单详情'
                        } else {
                            this.actionType = '工单办理'
                        }
                    }
                }
            },
            // 切换顶层tab栏
            handleClick(tab, event) {
                switch(this.activeName ) {
                    // 工单查询页面
                    case 'workOrder':
                        this.$router.push('/tabOnlineForm?formId=' + this.searchWorkOrderFormId + '&formType=1');
                        this.formId = this.searchWorkOrderFormId;
                        this.formType = '1';
                        // 切回工单查询的时候，按钮要显示 创建工单
                        this.actionType = '创建工单'
                    break;
                    // 我发起的工单页面
                    case 'myOrder':
                        this.$router.push('/tabOnlineForm?formId=' + this.myWorkOrderFormId + '&formType=1');
                        this.formId = this.myWorkOrderFormId;
                        this.formType = '1';
                    break;
                }
            },
            changeInfoType(value) {
                this.addDialogVisible = value;
                if(!value) {
                    this.$router.push('/tabOnlineForm?formId=' + this.searchWorkOrderFormId +  '&formType=1');
                    this.formId = this.searchWorkOrderFormId;
                    this.formType = '1';
                    this.actionType = '创建工单'
                }
            },
            handleClose(done) {
                this.isCollapse = false;
                this.changeInfoType(false);
            },
            createWorkOrder() {
                let  processDefinitionKey = this.workOrderType
                let params = {
                    processDefinitionKey: processDefinitionKey
                }
                viewInitialTaskInfo(params).then(res => {
                    if (res.data.data && res.data.data.taskType === this.SysFlowTaskType.USER_TASK && res.data.data.assignedMe || true) {
                    this.$router.push({
                        path: 'handlerTabFlowTask',
                        query: {
                            processDefinitionKey: processDefinitionKey,
                            formId: res.data.data.formId,
                            routerName: 'handlerTabFlowTask',
                            readOnly: res.data.data.readOnly,
                            taskName: '启动流程',
                            flowEntryName: this.processDefinitionName,
                            operationList: (res.data.data.operationList || []).filter(item => item.type !== this.SysFlowTaskOperationType.CO_SIGN) &&
                            JSON.stringify((res.data.data.operationList || []).filter(item => item.type !== this.SysFlowTaskOperationType.CO_SIGN)),
                            variableList: res.data.data.variableList && JSON.stringify(res.data.data.variableList),
                            presentMode: res.data.data.presentMode,
                        }
                    });

                    const query = res.data.data;

                    this.processDefinitionKey = processDefinitionKey;
                    // this.processDefinitionId = query.processDefinitionId;
                    // this.processInstanceId = query.processInstanceId;
                    // this.formId = query.formId;
                    this.presentMode = query.presentMode;
                    this.routerName = 'handlerTabFlowTask';
                    this.readOnly = query.readOnly;
                    this.taskName = '启动流程';
                    // this.taskId = query.taskId;
                    // this.flowEntryName = query.flowEntryName;
                    this.operationList =(query.operationList || []).filter(item => item.type !== this.SysFlowTaskOperationType.CO_SIGN);
                    this.variableList = query.variableList;
                    this.isRuntime = query.isRuntime;
                    this.isCollapse = true;
                    this.addDialogVisible = false;
                    } else {
                    startOnly({
                        processDefinitionKey: this.processDefinitionKey
                    }).then(res => {
                        this.$message.success('启动成功！');
                    }).catch(e => {});
                    }
                }).catch(e => {});
            },
            // 获取工单类型
            getWorkOrderType() {
                const roleIdList = window.sessionStorage.getItem('SKILL_GROUP') ? JSON.parse(window.sessionStorage.getItem('SKILL_GROUP')) : [];
                getOrderType(
                {
                    roleIdList, 
                    roleType: 'L1',
                    systemId: 'WORKORDER',
                }).then((res) => {
                    if(res && res.data && res.data.code === 200) {
                        this.workOrderTypeOptions = res.data.data
                    }
                })
            }
        },
        created() {
            const query = this.$route.query;
            this.formId = query.formId;
            this.entryId = query.entryId;
            this.formType = query.formType;

            this.processDefinitionKey = query.processDefinitionKey;
            this.processDefinitionId = query.processDefinitionId;
            this.processInstanceId = query.processInstanceId;
            this.presentMode = query.presentMode;
            this.routerName = query.routerName;
            this.readOnly = query.readOnly;
            this.taskName = query.taskName;
            this.taskId = query.taskId;
            this.flowEntryName = query.flowEntryName;
            this.operationList = query.operationList ? JSON.parse(query.operationList) : [];
            this.variableList = query.variableList ? JSON.parse(query.variableList) : [];
            this.processDefinitionKey = query.processDefinitionKey;
            this.isRuntime = query.isRuntime;

            // if(window.location && window.location.pathname === '/handlerTabFlowTask') {
            //     this.isCollapse = true
            // } else {
            //     this.isCollapse = false
            // }
            this.tabStatusInit();
            this.getWorkOrderType();
        }
    };
</script>

<style>
    .work_order_tab {
        padding: 10px 20px;
        background-color: #fff;
        min-height: 100vh;
    }
    .work_order_radio_group {
        margin: 0 20px 20px;
    }

</style>
