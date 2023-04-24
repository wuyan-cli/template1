/*
 * @Description: 文件内容描述
 * @Date: 2023-04-19 16:57:21
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-24 16:56:15
 * @FilePath: \vue2\src\api\user.js
 */
import request from '@/utils/axios';
// 登录
export const userLogin = (data) => request({
    url: '/user/login',
    method: 'post',
    data: data
})
// 菜单
export const menuList = () => request({
    url: '/menu/routes',
    method: 'get'
});
// 角色列表
export const roleList = () => request({
    url: '/role/list',
    method: 'get'
});

// 角色列表
export const menuGrantTree = () => request({
    url: '/menu/grant-tree',
    method: 'get'
});
// 对应详情
export const treeKeys = (params) => request({
    url: '/menu/role-tree-keys',
    method: 'get'
});

// 用户列表
export const userList = (params) => request({
    url: '/user/list',
    method: 'get'
});


// 所有菜单
export const menuAll = () => request({
    url: '/menu/all',
    method: 'get'
});
// 按钮
export const ButtonList = () => request({
    url: '/menu/Buttons',
    method: 'get'
});

