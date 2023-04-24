/*
 * @Description: 文件内容描述
 * @Date: 2023-04-19 16:17:00
 * @LastEditors: 无言的对话
 * @LastEditTime: 2023-04-21 09:34:31
 * @FilePath: \vue2\src\store\modules\user.js
 */
import { setStore, getStore, clearStore } from '@/utils/store'
import { deepClone } from '@/utils/util'
import { userLogin, menuList, ButtonList } from '@/api/user'
import { isURL, validatenull } from '@/utils/validate'
import webiste from '@/config/website'
import { addRouter, generateTitle } from '@/router/generator-routers'

const user = {
    state: {
        userInfo: getStore({ name: 'userInfo' }) || [],
        permission: getStore({ name: 'permission' }) || {},
        roles: [],
        menu: [],
        menuAll: [],
        token: getStore({ name: 'token' }) || '',
    },
    actions: {
        //根据用户名登录
        LoginByUsername({ commit }, loginData) {
            return new Promise((resolve, reject) => {
                userLogin(
                    loginData
                ).then(res => {
                    const data = res.data.data;
                    commit('SET_TOKEN', data.accessToken);
                    commit('SET_USER_INFO', data);
                    resolve();
                }).catch(error => {
                    reject(error);
                })
            })
        },
        //注销session
        FedLogOut({ commit }) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '');
                clearStore()
                resolve()
            })
        },
        //获取系统菜单
        GetMenu({ commit, dispatch }, parentId) {
            return new Promise((resolve, redirect) => {
                menuList(parentId).then((res) => {
                    const data = res.data.data
                    let menu = deepClone(data);
                    const routers = addRouter(menu)
                    commit('SET_MENU', menu);
                    resolve(menu)
                    // dispatch('GetButtons');
                }).catch((err) => {
                    console.log(err)
                    redirect()
                })
            })
        },
        GetButtons({ commit }) {
            return new Promise((resolve) => {
                ButtonList().then(res => {
                    const data = res.data.data;
                    commit('SET_PERMISSION', data);
                    resolve();
                })
            })
        },
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
            setStore({ name: 'token', content: state.token })
        },
        SET_USER_INFO: (state, userInfo) => {
            state.userInfo = userInfo;
            setStore({ name: 'userInfo', content: state.userInfo })
        },
        SET_MENU: (state, menu) => {
            state.menu = menu
            setStore({ name: 'menu', content: state.menu, type: 'session' })
            if (validatenull(menu)) return;
            //合并动态路由去重
            let menuAll = state.menuAll;
            menuAll = menuAll.concat(menu).reverse();
            let newMenu = [];
            for (let item1 of menuAll) {
                let flag = true;
                for (let item2 of newMenu) {
                    if (item1.name === item2.name || item1.path === item2.path) {
                        flag = false;
                    }
                }
                if (flag) newMenu.push(item1);
            }
            state.menuAll = newMenu;
            setStore({ name: 'menuAll', content: state.menuAll, type: 'session' })
        },

    }

}
export default user