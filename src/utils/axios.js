/*
 * @Description: 文件内容描述
 * @Date: 2023-04-19 17:09:50
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-19 17:57:55
 * @FilePath: \vue2\src\utils\axios.js
 */
import axios from 'axios'
import { serialize } from '@/utils/util'
import store from '@/store/';
import router from '@/router/index'
import website from '@/config/website'
import { Message } from 'element-ui'
// 创建axios实例
const service = axios.create({
    timeout: 10000,
    withCredentials: true,
    headers: {
    },
})

//HTTPrequest拦截
service.interceptors.request.use(config => {
    const meta = (config.meta || {});
    const token = `22131`
    if (token) {
        config.headers['token'] = token // 
    }
    //headers中配置serialize为true开启序列化
    if (config.method === 'post' && meta.isSerialize === true) {
        config.data = serialize(config.data);
    }
    return config
}, error => {
    return Promise.reject(error)
});
//HTTPresponse拦截
service.interceptors.response.use(res => {
    const status = res.data.code || 200
    const statusWhiteList = website.statusWhiteList || [];
    const message = res.data.msg || '未知错误';
    //如果在白名单里则自行catch逻辑处理
    if (statusWhiteList.includes(status)) {
        return Promise.reject(res)
    };
    //如果是401则跳转到登录页面
    if (status === 401) {
        store.dispatch('FedLogOut').then(() => router.push({ path: '/login' }))
    };
    // 如果请求为非200否者默认统一处理
    if (status !== 200) {
        Message({
            message: message,
            type: 'error'
        })
        return Promise.reject(new Error(message))
    }
    return res;
}, error => {
    return Promise.reject(new Error(error));
})

export default service;
