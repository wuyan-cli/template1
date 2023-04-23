/*
 * @Description: 全局配置文件
 * @Date: 2023-04-19 16:22:49
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-21 14:04:27
 * @FilePath: \vue2\src\config\website.js
 */
/**
 * 全局配置文件
 */
export default {
    title: "",
    indexTitle: 'Admin',
    key: 'en',//配置主键,目前用于存储
    //配置首页不可关闭
    isFirstPage: true,
    statusWhiteList: [],
    fistPage: {
        label: "控制台",
        value: "/wel/index",
        params: {},
        query: {},
        meta: {
        },
        group: [],
        close: true
    },
    //配置菜单的属性
    menu: {
        iconDefault: 'iconfont icon-caidan',
        props: {
            label: 'name',
            path: 'path',
            icon: 'source',
            children: 'children'
        }
    },
}