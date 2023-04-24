/*
 * @Description: mock 假数据
 * @Date: 2023-04-19 16:45:15
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-24 16:54:07
 * @FilePath: \vue2\mock\index.js
 */
// 首先引入Mock
const Mock = require('mockjs');

// 设置拦截ajax请求的相应时间
Mock.setup({
    timeout: '200-600'
});
const userLogin = Mock.mock('/user/login', 'post', {
    "code": 200,
    "success": true,
    "data":
    {
        "accessToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwicm9sZV9uYW1lcyI6Iui2hee6p-euoeeQhuWRmCIsInVzZXJfaWQiOiIxMTIzNTk4ODIxNzM4Njc1MjAxIiwicm9sZV9pZCI6IjExMjM1OTg4MTY3Mzg2NzUyMDEiLCJ1c2VyX25hbWUiOiLnrqHnkIblkZgiLCJ0b2tlbl90eXBlIjoiYWNjZXNzX3Rva2VuIiwiYWNjb3VudCI6ImFkbWluIiwiY2xpZW50X2lkIjoiZW4iLCJleHAiOjE2ODE5MzgwODIsIm5iZiI6MTY4MTg5NDg4Mn0.Q3SMG1bFX_41hIKwrEs2T3hjwudyYsvga_Ec9HpJv3812Jr4q0XNSSxLk-gSZtDQidPSlmnFTsjVN_Ond4atWQ", "tokenType": "bearer", "refreshToken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInRva2VuX3R5cGUiOiJyZWZyZXNoX3Rva2VuIiwiY2xpZW50X2lkIjoiZW4iLCJleHAiOjE2ODI0OTk2ODIsIm5iZiI6MTY4MTg5NDg4Mn0.dAKb1pGh8ITRoOgCtH1XRtE__P2N6WXqG2dRaylMdzVThh0e0JvijNIBqGppmzAXQaq9GGUNDZ-1wyOCPJTcAQ",
        "userId": "1123598821738675201",
        "avatar": "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
        "userName": "管理员",
        "account": "admin",
    },
    "msg": "操作成功"
});
const MenuList = Mock.mock('/menu/routes', 'get',
    {
        "code": 200,
        "success": true,
        "data": [
            {
                "id": "1372283591507968",
                "parentId": "0",
                "name": "控制台",
                "path": "/wel/index",
                "source": "iconfont icon-shujuzhanshi2",
                "hasChildren": false,

            },
            {
                "id": "1123598815738675203",
                "parentId": "0",
                "name": "系统管理",
                "alias": "menu",
                "path": "/system",
                "source": "iconfont iconicon_setting",
                "children": [
                    {
                        "id": "1123598815738675204",
                        "parentId": "1123598815738675203",
                        "name": "用户管理",
                        "alias": "menu",
                        "path": "/system/user",
                        "source": "iconfont iconicon_principal",
                    },

                    {
                        "id": "1123598815738675308",
                        "parentId": "1123598815738675203",
                        "code": "role",
                        "name": "角色管理",
                        "alias": "menu",
                        "path": "/system/role",
                        "source": "iconfont iconicon_boss",
                    },
                    {
                        "id": "1123598815738675207",
                        "parentId": "1123598815738675203",
                        "code": "menu",
                        "name": "菜单管理",
                        "alias": "menu",
                        "path": "/system/menu",
                        "source": "iconfont iconicon_subordinate",
                    }
                ],
            },
        ],
        "msg": "操作成功"
    });
const MenuAll = Mock.mock('/menu/all', 'get',
    {
        "code": 200,
        "success": true,
        "data": [
            {
                "id": "1372283591507968",
                "parentId": "0",
                "name": "控制台",
                "path": "/wel/index",
                "source": "iconfont icon-shujuzhanshi2",
                "children": []
            },
            {
                "id": "1123598815738675203",
                "parentId": "0",
                "name": "系统管理2",
                "alias": "menu",
                "path": "/system",
                "source": "iconfont iconicon_setting",
                "children": [
                    {
                        "id": "1123598815738675204",
                        "parentId": "1123598815738675203",
                        "name": "用户管理",
                        "alias": "menu",
                        "path": "/system/user",
                        "source": "iconfont iconicon_principal",
                    },

                    {
                        "id": "1123598815738675308",
                        "parentId": "1123598815738675203",
                        "code": "role",
                        "name": "角色管理",
                        "alias": "menu",
                        "path": "/system/role",
                        "source": "iconfont iconicon_boss",
                    },
                    {
                        "id": "1123598815738675207",
                        "parentId": "1123598815738675203",
                        "code": "menu",
                        "name": "菜单管理",
                        "alias": "menu",
                        "path": "/system/menu",
                        "source": "iconfont iconicon_subordinate",
                    }
                ],
            },
        ],
        "msg": "操作成功"
    });
const ButtonList = Mock.mock('/menu/Buttons', 'get',
    {
        "code": 200,
        "success": true,
        "data": [
            {
                "id": "1123598815738675207",
                "parentId": "1123598815738675203",
                "code": "menu",
                "name": "菜单管理",
                "alias": "menu",
                "path": "/system/menu",
                "source": "iconfont iconicon_subordinate",
                "children": [
                    {
                        "id": "1123598815738675237",
                        "parentId": "1123598815738675207",
                        "code": "menu_add",
                        "name": "新增",
                    },
                    {
                        "id": "1123598815738675238",
                        "parentId": "1123598815738675207",
                        "code": "menu_edit",
                        "name": "修改",
                    },
                    {
                        "id": "1123598815738675239",
                        "parentId": "1123598815738675207",
                        "code": "menu_delete",
                        "name": "删除",

                    },
                    {
                        "id": "1123598815738675240",
                        "parentId": "1123598815738675207",
                        "code": "menu_view",
                        "name": "查看",
                    }
                ],
            },
        ],
        "msg": "操作成功"
    });
const roleList = Mock.mock('/role/list', 'get',
    {
        "code": 200,
        "success": true,
        "data": [
            {
                'id': "1123598816738675201",
                "tenantId": "000000",
                "parentId": "0",
                "roleName": "超级管理员",
                "sort": 1,
                "roleAlias": "administrator",
                "isDeleted": 0,
                "roleProperty": 0,
            }
        ],
        "msg": "操作成功"
    });
const userList = Mock.mock('/user/list', 'get',
    {
        "code": 200,
        "success": true,
        "data": [
            {
                'id': "1123598816738675201",
                "roleName": "超级管理员",
                "userName": "测试人员1",
                "sort": 1,
                "updateTime": '2023-03-24',
            }
        ],
        "msg": "操作成功"
    });

const menuGrantTree = Mock.mock('/menu/grant-tree', 'get',
    {
        "code": 200,
        "success": true,
        "data": [
            { "id": "1372266513276928", "parentId": "0", "hasChildren": false, "title": "26号测试表单2", "roleName": "", "key": "1372266513276928", "value": "1372266513276928" }, { "id": "1372283591507968", "parentId": "0", "hasChildren": false, "title": "控制台", "roleName": "", "key": "1372283591507968", "value": "1372283591507968" }, { "id": "1372708197400576", "parentId": "0", "hasChildren": false, "title": "2.6线下表单", "roleName": "", "key": "1372708197400576", "value": "1372708197400576" }, { "id": "1372714621304832", "parentId": "0", "hasChildren": false, "title": "AI列表2", "roleName": "", "key": "1372714621304832", "value": "1372714621304832" }, { "id": "1372926663573504", "parentId": "0", "hasChildren": false, "title": "测试在线表单流程", "roleName": "", "key": "1372926663573504", "value": "1372926663573504" }, { "id": "1374392371249152", "parentId": "0", "hasChildren": false, "title": "新闻管理", "roleName": "", "key": "1374392371249152", "value": "1374392371249152" }, { "id": "1374392582086656", "parentId": "0", "hasChildren": false, "title": "新闻编辑", "roleName": "", "key": "1374392582086656", "value": "1374392582086656" }, { "id": "1375750192160768", "parentId": "0", "children": [{ "id": "1377447301849088", "parentId": "1375750192160768", "hasChildren": false, "title": "新增", "roleName": "", "key": "1377447301849088", "value": "1377447301849088" }], "hasChildren": true, "title": "测试业务表单lc01", "roleName": "", "key": "1375750192160768", "value": "1375750192160768" }, { "id": "1376176380510208", "parentId": "0", "children": [{ "id": "1377234451537920", "parentId": "1376176380510208", "hasChildren": false, "title": "新增", "roleName": "", "key": "1377234451537920", "value": "1377234451537920" }, { "id": "1377234596356096", "parentId": "1376176380510208", "hasChildren": false, "title": "编辑", "roleName": "", "key": "1377234596356096", "value": "1377234596356096" }, { "id": "1377234751406080", "parentId": "1376176380510208", "hasChildren": false, "title": "删除", "roleName": "", "key": "1377234751406080", "value": "1377234751406080" }, { "id": "1377650172461056", "parentId": "1376176380510208", "hasChildren": false, "title": "导出", "roleName": "", "key": "1377650172461056", "value": "1377650172461056" }], "hasChildren": true, "title": "商品品牌管理", "roleName": "", "key": "1376176380510208", "value": "1376176380510208" }, { "id": "1376184164556800", "parentId": "0", "children": [{ "id": "1377302945751040", "parentId": "1376184164556800", "hasChildren": false, "title": "新增", "roleName": "", "key": "1377302945751040", "value": "1377302945751040" }, { "id": "1377303037018112", "parentId": "1376184164556800", "hasChildren": false, "title": "修改", "roleName": "", "key": "1377303037018112", "value": "1377303037018112" }], "hasChildren": true, "title": "商品管理", "roleName": "", "key": "1376184164556800", "value": "1376184164556800" }, { "id": "1377313317289984", "parentId": "0", "children": [{ "id": "1377313620451328", "parentId": "1377313317289984", "hasChildren": false, "title": "新增", "roleName": "", "key": "1377313620451328", "value": "1377313620451328" }, { "id": "1377313671045120", "parentId": "1377313317289984", "hasChildren": false, "title": "查看", "roleName": "", "key": "1377313671045120", "value": "1377313671045120" }, { "id": "1377313730543616", "parentId": "1377313317289984", "hasChildren": false, "title": "编辑", "roleName": "", "key": "1377313730543616", "value": "1377313730543616" }, { "id": "1377313860354048", "parentId": "1377313317289984", "hasChildren": false, "title": "审批", "roleName": "", "key": "1377313860354048", "value": "1377313860354048" }], "hasChildren": true, "title": "线下商品管理", "roleName": "", "key": "1377313317289984", "value": "1377313317289984" }, { "id": "1123598815738675203", "parentId": "0", "children": [{ "id": "1123598815738675204", "parentId": "1123598815738675203", "children": [{ "id": "1123598815738675223", "parentId": "1123598815738675204", "hasChildren": false, "title": "新增", "roleName": "", "key": "1123598815738675223", "value": "1123598815738675223" }, { "id": "1123598815738675224", "parentId": "1123598815738675204", "hasChildren": false, "title": "修改", "roleName": "", "key": "1123598815738675224", "value": "1123598815738675224" }, { "id": "1123598815738675225", "parentId": "1123598815738675204", "hasChildren": false, "title": "删除", "roleName": "", "key": "1123598815738675225", "value": "1123598815738675225" }, { "id": "1123598815738675226", "parentId": "1123598815738675204", "hasChildren": false, "title": "角色配置", "roleName": "", "key": "1123598815738675226", "value": "1123598815738675226" }, { "id": "1123598815738675227", "parentId": "1123598815738675204", "hasChildren": false, "title": "密码重置", "roleName": "", "key": "1123598815738675227", "value": "1123598815738675227" }, { "id": "1123598815738675228", "parentId": "1123598815738675204", "hasChildren": false, "title": "查看", "roleName": "", "key": "1123598815738675228", "value": "1123598815738675228" }], "hasChildren": true, "title": "用户管理", "roleName": "", "key": "1123598815738675204", "value": "1123598815738675204" }, { "id": "1123598815738675205", "parentId": "1123598815738675203", "children": [{ "id": "1123598815738675229", "parentId": "1123598815738675205", "hasChildren": false, "title": "新增", "roleName": "", "key": "1123598815738675229", "value": "1123598815738675229" }, { "id": "1123598815738675230", "parentId": "1123598815738675205", "hasChildren": false, "title": "修改", "roleName": "", "key": "1123598815738675230", "value": "1123598815738675230" }, { "id": "1123598815738675231", "parentId": "1123598815738675205", "hasChildren": false, "title": "删除", "roleName": "", "key": "1123598815738675231", "value": "1123598815738675231" }, { "id": "1123598815738675232", "parentId": "1123598815738675205", "hasChildren": false, "title": "查看", "roleName": "", "key": "1123598815738675232", "value": "1123598815738675232" }], "hasChildren": true, "title": "部门管理", "roleName": "", "key": "1123598815738675205", "value": "1123598815738675205" }, { "id": "1123598815738675207", "parentId": "1123598815738675203", "children": [{ "id": "1123598815738675237", "parentId": "1123598815738675207", "hasChildren": false, "title": "新增", "roleName": "", "key": "1123598815738675237", "value": "1123598815738675237" }, { "id": "1123598815738675238", "parentId": "1123598815738675207", "hasChildren": false, "title": "修改", "roleName": "", "key": "1123598815738675238", "value": "1123598815738675238" }, { "id": "1123598815738675239", "parentId": "1123598815738675207", "hasChildren": false, "title": "删除", "roleName": "", "key": "1123598815738675239", "value": "1123598815738675239" }, { "id": "1123598815738675240", "parentId": "1123598815738675207", "hasChildren": false, "title": "查看", "roleName": "", "key": "1123598815738675240", "value": "1123598815738675240" }], "hasChildren": true, "title": "菜单管理", "roleName": "", "key": "1123598815738675207", "value": "1123598815738675207" }, { "id": "1164733389668962251", "parentId": "1123598815738675203", "children": [{ "id": "1164733389668962252", "parentId": "1164733389668962251", "hasChildren": false, "title": "新增", "roleName": "", "key": "1164733389668962252", "value": "1164733389668962252" }, { "id": "1164733389668962253", "parentId": "1164733389668962251", "hasChildren": false, "title": "修改", "roleName": "", "key": "1164733389668962253", "value": "1164733389668962253" }, { "id": "1164733389668962254", "parentId": "1164733389668962251", "hasChildren": false, "title": "删除", "roleName": "", "key": "1164733389668962254", "value": "1164733389668962254" }, { "id": "1164733389668962255", "parentId": "1164733389668962251", "hasChildren": false, "title": "查看", "roleName": "", "key": "1164733389668962255", "value": "1164733389668962255" }], "hasChildren": true, "title": "岗位管理", "roleName": "", "key": "1164733389668962251", "value": "1164733389668962251" }], "hasChildren": true, "title": "系统管理", "roleName": "", "key": "1123598815738675203", "value": "1123598815738675203" }, { "id": "1123598815738675307", "parentId": "0", "children": [{ "id": "1123598815738675308", "parentId": "1123598815738675307", "children": [{ "id": "1123598815738675241", "parentId": "1123598815738675308", "hasChildren": false, "title": "新增", "roleName": "", "key": "1123598815738675241", "value": "1123598815738675241" }, { "id": "1123598815738675242", "parentId": "1123598815738675308", "hasChildren": false, "title": "修改", "roleName": "", "key": "1123598815738675242", "value": "1123598815738675242" }, { "id": "1123598815738675243", "parentId": "1123598815738675308", "hasChildren": false, "title": "删除", "roleName": "", "key": "1123598815738675243", "value": "1123598815738675243" }, { "id": "1123598815738675244", "parentId": "1123598815738675308", "hasChildren": false, "title": "查看", "roleName": "", "key": "1123598815738675244", "value": "1123598815738675244" }], "hasChildren": true, "title": "角色管理", "roleName": "", "key": "1123598815738675308", "value": "1123598815738675308" }, { "id": "1123598815738675309", "parentId": "1123598815738675307", "children": [{ "id": "1123598815738675310", "parentId": "1123598815738675309", "hasChildren": false, "title": "权限配置", "roleName": "", "key": "1123598815738675310", "value": "1123598815738675310" }], "hasChildren": true, "title": "数据权限", "roleName": "", "key": "1123598815738675309", "value": "1123598815738675309" }], "hasChildren": true, "title": "权限管理", "roleName": "", "key": "1123598815738675307", "value": "1123598815738675307" }, { "id": "1491594173324697601", "parentId": "0", "children": [{ "id": "1491476355803451398", "parentId": "1491594173324697601", "children": [{ "id": "1491476355803451399", "parentId": "1491476355803451398", "hasChildren": false, "title": "新增", "roleName": "", "key": "1491476355803451399", "value": "1491476355803451399" }, { "id": "1491476355803451400", "parentId": "1491476355803451398", "hasChildren": false, "title": "修改", "roleName": "", "key": "1491476355803451400", "value": "1491476355803451400" }, { "id": "1491476355803451401", "parentId": "1491476355803451398", "hasChildren": false, "title": "删除", "roleName": "", "key": "1491476355803451401", "value": "1491476355803451401" }, { "id": "1491476355803451402", "parentId": "1491476355803451398", "hasChildren": false, "title": "查看", "roleName": "", "key": "1491476355803451402", "value": "1491476355803451402" }], "hasChildren": true, "title": "表单字典", "roleName": "", "key": "1491476355803451398", "value": "1491476355803451398" }, { "id": "1491476356596174854", "parentId": "1491594173324697601", "children": [{ "id": "1491476356596174855", "parentId": "1491476356596174854", "hasChildren": false, "title": "新增", "roleName": "", "key": "1491476356596174855", "value": "1491476356596174855" }, { "id": "1491476356596174856", "parentId": "1491476356596174854", "hasChildren": false, "title": "修改", "roleName": "", "key": "1491476356596174856", "value": "1491476356596174856" }, { "id": "1491476356596174857", "parentId": "1491476356596174854", "hasChildren": false, "title": "删除", "roleName": "", "key": "1491476356596174857", "value": "1491476356596174857" }, { "id": "1491476356596174858", "parentId": "1491476356596174854", "hasChildren": false, "title": "查看", "roleName": "", "key": "1491476356596174858", "value": "1491476356596174858" }], "hasChildren": true, "title": "流程表单", "roleName": "", "key": "1491476356596174854", "value": "1491476356596174854" }], "hasChildren": true, "title": "表单管理", "roleName": "", "key": "1491594173324697601", "value": "1491594173324697601" }, { "id": "1548946089238446081", "parentId": "0", "children": [{ "id": "1548970991974727681", "parentId": "1548946089238446081", "children": [{ "id": "1549592159647813635", "parentId": "1548970991974727681", "hasChildren": false, "title": "新增", "roleName": "", "key": "1549592159647813635", "value": "1549592159647813635" }, { "id": "1549592159647813636", "parentId": "1548970991974727681", "hasChildren": false, "title": "修改", "roleName": "", "key": "1549592159647813636", "value": "1549592159647813636" }, { "id": "1549592159647813637", "parentId": "1548970991974727681", "hasChildren": false, "title": "删除", "roleName": "", "key": "1549592159647813637", "value": "1549592159647813637" }, { "id": "1549592159647813638", "parentId": "1548970991974727681", "hasChildren": false, "title": "查看", "roleName": "", "key": "1549592159647813638", "value": "1549592159647813638" }], "hasChildren": true, "title": "流程设计", "roleName": "", "key": "1548970991974727681", "value": "1548970991974727681" }], "hasChildren": true, "title": "流程管理", "roleName": "", "key": "1548946089238446081", "value": "1548946089238446081" }
        ],
        "msg": "操作成功"
    });
const rolekeys = Mock.mock('/menu/role-tree-keys', 'get',
    {
        "code": 200, "success": true, "data": {
            "menu": [
                '1376176380510208', '1377234596356096', '1377234751406080', '1376184164556800', '1377302945751040', '1377303037018112', '1377313317289984', '1123598815738675203', '1123598815738675204', '1123598815738675223', '1123598815738675224', '1123598815738675225', '1123598815738675226', '1123598815738675227', '1123598815738675228', '1123598815738675207', '1123598815738675237', '1123598815738675238', '1123598815738675239', '1123598815738675240', '1123598815738675307', '1123598815738675308', '1123598815738675241', '1123598815738675243', '1123598815738675244', '1123598815738675309', '1123598815738675310', '1491594173324697601', '1491476355803451398', '1491476355803451399', '1491476355803451400', '1491476355803451401', '1491476355803451402', '1491476356596174854', '1491476356596174855', '1491476356596174856', '1491476356596174857', '1491476356596174858'
            ], "dataScope": []
        }, "msg": "操作成功"
    });
export default {
    userLogin,
    MenuList,
    MenuAll,
    ButtonList,
    rolekeys,
    roleList,
    menuGrantTree,
    userList
}